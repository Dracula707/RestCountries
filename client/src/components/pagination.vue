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
      <!-- if we have more then 4 pages -->
      <div v-if="pages[1] > 5">
        <!-- if current page is first -->
        <div class="flex" v-if="pages[0] === 1">
          <a class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
            1
          </a>
          <a @click="onPage(2)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              2
          </a>
          <a @click="onPage(3)"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
             3
          </a>         
          <a @click="onPage(4)"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
             4
          </a>             
          <div class="w-10 h-10 flex justify-center items-end">
            <p>....</p>
          </div>
          <a @click="onPage(pages[1])"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] }}
          </a>          
        </div>
        <!-- if current page is last -->
        <div v-else-if="pages[0] === pages[1]" class="flex" >
          <a  @click="onPage(1)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            1
          </a>
          <div class="w-10 h-10 flex justify-center items-end">
            <p>....</p>
          </div> 
          <a @click="onPage((pages[1] - 3))" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            {{ pages[1] - 3  }}
          </a>    
          <a @click="onPage((pages[1] - 2))" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            {{ pages[1] - 2 }}
          </a>
          <a @click="onPage(pages[1] - 1)"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
            {{ pages[1] - 1 }}
          </a>          
          <a  class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
            {{ pages[1] }}
          </a>              
        </div>
          <!-- if page is current  -->
        <div v-else >
          <div class="flex" v-if="pages[0] === 2">
            <a @click="onPage(1)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              1
            </a>
            <a  class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
              2
            </a>
            <a @click="onPage(3)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              3
            </a>
            <a @click="onPage(4)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              4
            </a>                        
            <div class="w-10 h-10 flex justify-center items-end">
              <p>....</p>
            </div>  
            <a  @click="onPage(pages[1])" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] }}
            </a>            
          </div>

          <div class="flex" v-else-if="pages[0] === (pages[1] - 1)">
            <a @click="onPage(1)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              1
            </a>
            <div class="w-10 h-10 flex justify-center items-end">
              <p>....</p>
            </div>              
            <a  @click="onPage(pages[1] - 3)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] - 3 }}
            </a>
            <a @click="onPage(pages[1] - 2)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] - 2 }}
            </a>
            <a  class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
              {{ pages[1] - 1 }}
            </a>                        
            <a  @click="onPage(pages[1])" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] }}
            </a>           
          </div>

          <div class="flex" v-else>
            <a  @click="onPage(0)" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              1
            </a> 
            <div class="w-10 h-10 flex justify-center items-end">
              <p>....</p>
            </div>                    
            <a @click="onPage(pages[0] - 1)"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[0] - 1 }}
            </a>         
            <a class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
              {{ pages[0] }}
            </a>
            <a @click="onPage(pages[0] + 1)"  class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[0] + 1 }}
            </a> 
            <div class="w-10 h-10 flex justify-center items-end">
              <p>....</p>
            </div>  
            <a  @click="onPage(pages[1])" class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{ pages[1] }}
            </a> 
          </div>

                          
        </div>

      </div>
      <!-- less then 5 pages -->
      <div class="flex" v-else>
        <div v-for="(i, index) in pages[1]" :key="index" class="flex">
          <a v-if="i === pages[0]" class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-ascent hover:bg-void-ascenth text-void-hd01 pointer-events-none">
              {{i}}
          </a>
          <a @click="onPage(i)"  v-else class="cursor-pointer flex w-10 h-10 mx-1 justify-center items-center rounded-full border-none bg-void-fg03 hover:bg-void-fg04 text-void-hd01">
              {{i}}
          </a>
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
    text: ""
  }),
  methods: {
    onBtn(type: string) {},
    onPage(type: number) {
      this.$emit('submit', type);
    },
    onSubmit():void {
        this.$emit('submit', this.text);
    }
  },
  created() {
  
  }
});

</script>