import { defineStore } from 'pinia';
import { Country,ApiRet,Filter } from '../libs/interface';
import { dynamicSort } from '../libs/helper'; 
import Api from '../libs/api';

export const useRoot = defineStore({
  id: 'root',
  state: () => ({
    state: 0, // -1 error, 0 not loaded, 1 loaded
    config: {title: 'Rest Countries', version: '0.1', mode: 'dev'},
    countries: [] as  Array<Country>, //page
    countriesList: [] as  Array<Country>, //current filter
    countriesMain: [] as Array<Country>, // got from api
    regions: [] as Array<string>,
    filter: {area: 0, region: "", order: "0"} as Filter,
    pages: [0,0,10] as Array<number>, //current page, max page, per page countries;
    themeDark: false
  }),
  getters: {
    countriesGet(): any {
      return this.countries;
    },
    pagesGet(): any {
      return this.pages;
    },
    regionsGet(): any {
      return this.regions;
    },  
    title(): String {
      return this.config.title;
    },
    stateGet(): number {
      return this.state;
    },
    themeGet(): boolean {
      return this.themeDark;
    }
  },
  actions: {
    themeInit() {
      const theme = localStorage.getItem('theme');
      if(theme === null) {
        localStorage.setItem('theme', JSON.stringify(this.themeDark));
        this.themeSwitch(this.themeDark);
      } else {
        this.themeDark = JSON.parse(theme);
        this.themeSwitch(this.themeDark);
      }
    },
    async initCountries(): Promise<void> {
      if(this.state === 0) {
        const ret: ApiRet = await Api.SendBasic('https://restcountries.com/v2/all?fields=name,region,area');
        
        if(ret.statusCode === 200 && ret.data != undefined) {
          this.countriesMain = ret.data;
          this.countriesList = ret.data;

          for(let i = 0; i < this.countriesMain.length; i++) {
            if (!this.regions.includes(this.countriesMain[i]['region'])) {
              this.regions.push(this.countriesMain[i]['region']);
            }
          }

          this.sort(this.filter.order);
          this.pages[0] = 1;
          this.pages[1] = (Math.round((this.countriesList.length / this.pages[2]) - 1));
          this.pageSwitch(this.pages[0]);

          this.state = 1;
          return;
        }
        this.state = -1;
      }
    },
    filterCountries(area: number, region: string) {
      // filter region first 
      this.filter.area = area;
      this.filter.region = region;

      if(region === 'all') {
        this.countriesList = this.countriesMain;
        this.sort(this.filter.order);
      } else {
        this.countriesList = this.countriesMain.filter(country => country.region === region);
      }

      // then area    
      if(area != 0) {
        this.countriesList = this.countriesList.filter(country => country.area > area);
      }

      this.pages[0] = 1;
      this.pages[1] = (Math.round((this.countriesList.length / this.pages[2]) - 1));
      this.pageSwitch(this.pages[0]);

    },
    sort(type: string) {
      this.filter.order = type;
      if (type === '0') this.countriesList.sort(dynamicSort('name'));
      else this.countriesList.sort(dynamicSort('-name'));
      this.pageSwitch(this.pages[0]);
    },
    pageSwitch(page: number) {
      if(page <= 0) page = 1;
      if(page > this.pages[1]) page = this.pages[1];

      this.countries = [];
      const realPage = page - 1;
      for(let i = (realPage * this.pages[2]); i < this.countriesList.length; i++) {
        this.countries.push(this.countriesList[i]);
        if (i === ((realPage * this.pages[2]) + this.pages[2])) break;
      }

      this.pages[0] = page;
    },
    themeSwitch(theme: boolean) {
      this.themeDark = theme;
      if(this.themeDark) document.body.classList.add('theme-light');
      else document.body.classList.remove('theme-light');
      localStorage.setItem('theme', JSON.stringify(this.themeDark));
    }

  }

  
});
