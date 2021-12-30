<template>
<div class="container-fluid" v-if="store.state != 1" >
  <div class="header-title mb-4">
    <h1>{{ store.title }}</h1>
  </div>
  <div v-if="store.state === 0" class="mt-8">
      <div class="box-basic text-center">
        <p>Getting countries from server please wait („• ᴗ •„)</p>
      </div>
  </div>
  <div v-else-if="store.state === -1" class="mt-8">
      <div class="box-basic text-center">
        <p>Couldn't get countries from server try again later. (ಥ﹏ಥ)</p>
      </div>
  </div>
</div>

<div v-else class="container-fluid mt-8">

  <div class="header-title mb-4">
    <h1>{{ store.title }}</h1>
  </div>

  <div class="flex flex-col md:flex-row justify-between items-center">
    <div class="flex-grow">
      <p>Filter: <span class="text-void-hd04">Area,Region</span></p>
      <form class="w-full md:w-3/6 grid grid-cols-3 gap-2" @submit.prevent="onFilter">
        <input v-model="inputs.area" type="number" min="0" placeholder="Enter min area" class="appearance-none border-none w-full py-1 px-3 text-void-hd01 bg-void-fg04  focus:outline-none focus:shadow-outline">
        <select required v-model="inputs.region" class="input px-4 py-2">
          <option selected value="all">All</option>
          <option v-for="(region,index) in store.regionsGet" :key="index" :value="region">{{ region }}</option>
        </select>
        <button type="submit" class="btn btn-primary">filter</button>
      </form>
    </div>

    <div class="w-full md:w-32 flex justify-start  mt-4 md:mt-0">
      <div class="w-full">
        <p>Order</p>
        <select v-model="inputs.order" @change="onOrder" class="w-full input px-4 py-3">
          <option value="0">ascending</option>
          <option value="1">descending</option>
        </select>
      </div>
    </div>
  </div>


  <div v-for="(country, index) in store.countriesGet" :key="index" class="box-basic shadow-md my-4">
    <p class="text-lg font-semibold">Name: {{ country.name }}</p>
    <p>Region: {{ country.region }}</p>
    <p class="text-void-hd04">Area: {{ country.area }}</p>
  </div>

  <Pagination :pages="store.pagesGet" @submit="onPage" />
</div>
<ModalWelcome v-if="modal === 0" @close="modal = -1" @submit="modal = -1" />
</template>


<script lang="ts">
import { defineComponent,PropType } from 'vue';
import { Args } from '../libs/interface';

import { useRoot } from '../store/root';
import Pagination from '@/components/pagination.vue';
import ModalWelcome from '@/modals/Welcome.vue';

export default defineComponent({
  Name: "Home",
  components: { Pagination, ModalWelcome},
  props: {
    args: { type: Object as PropType<Args>, required: true }
  },
  methods: {
    onPage(page: number) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      this.store.pageSwitch(page);
    },
    onOrder() {
      this.store.sort(this.inputs.order);
    },
    onFilter() {
      const area = this.inputs.area === '' ? 0 : parseInt(this.inputs.area);
      this.store.filterCountries(area, this.inputs.region);
    }
  },
  data: () => ({
    inputs: { area: "", region: "all", order: "0" },
    modal: -1,
    store: useRoot(),

  }),
  async created() {
    this.store.initCountries();
    this.store.themeInit();
    const w = localStorage.getItem('welcome');
    if(w === null) {
      localStorage.setItem('welcome', 'true');
      this.modal = 0;
    }
  }
});

</script>

