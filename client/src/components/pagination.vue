<template>
<!-- <div>
  <p>{{ pages }}</p>
</div> -->
<section v-if="pages[1] > 0" class="my-12">
  <div class="flex flex-row flex-nowrap justify-center items-center" aria-label="Pagination">
    <div @click="onBtn('prev')" class="flex w-10 h-10 mr-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01" href="#" title="Previous Page">
        <span class="sr-only">Previous Page</span>
        <svg class="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
        </svg>
    </div>
    <div class="flex" v-if="pages[1] > 5">
      <div v-for="(i, index) in paginationPages" :key="index" class="flex">
        <button type="button" v-if="i === pages[0]" class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
            {{i}}
        </button>
        <div v-else-if="i === -1" class="w-10 h-10 flex justify-center items-end">
          <p>....</p>
        </div>        
        <button type="button" @click="onPage(i)"  v-else class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            {{i}}
        </button>
      </div>
    </div>
    <div class="flex" v-else>
      <div v-for="(i, index) in pages[1]" :key="index" class="flex">
        <button type="button" v-if="i === pages[0]" class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
            {{i}}
        </button>
        <button type="button" @click="onPage(i)"  v-else class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            {{i}}
        </button>
      </div>
    </div>

    <div @click="onBtn('next')" class="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01" href="#" title="Next Page">
      <span class="sr-only">Next Page</span>
      <svg class="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
          <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
      </svg>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';

interface Props {
  id: number,
  day: string,
  text: string
}

export default defineComponent({
  Name: "Pagination",
  emits: ['submit'],
  props: {
    pages:{type: Array as PropType<Array<number>>, required:true }
  },
  data: () => ({
    paginationPages: [] as Array<number>
  }),
  methods: {
    onBtn(type: string) {
      let page = 0;
      if(type === 'next') {
        page = this.pages[0] + 1;
        if(page > this.pages[1]) page = this.pages[1];
      } else {
        page = this.pages[0] - 1;
        if(page < 0) page = 1;
      }
      this.$emit('submit', page);
    },
    onPage(type: number) {
      this.$emit('submit', type);
    },
    update() {
      // if less then 5 pages
      if(this.pages[1] < 5) return;
        
      //if page first or second, if page last or second to last else other pages
      if(this.pages[0] === 1 || this.pages[0] === 2) {
        this.paginationPages = [1,2,3,4,5,-1,this.pages[1]];

      } else if(this.pages[0] === this.pages[1] || this.pages[0] === (this.pages[1] - 1)) {
        this.paginationPages = [1,-1,(this.pages[1] - 3),(this.pages[1] - 2),(this.pages[1] - 1),this.pages[1]];
      } else {
        this.paginationPages = [1, -1, (this.pages[0] - 1), this.pages[0], (this.pages[0] + 1), -1,this.pages[1]]
      }
    }
  }, 
  watch: {
    $props: {
      handler() {
        this.update();
      },
      deep: true,
      immediate: true,
    },
  }
});

</script>