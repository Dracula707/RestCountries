<template>
      <!-- Modal1 -->
    <div class="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto">
      <div class="relative sm:w-3/4 md:w-2/4 lg:w-2/4 mx-2 sm:mx-auto my-10 opacity-100">
        <div class="relative bg-void-bg01 shadow-lg z-20" >
          <header class="flex items-center justify-between p-2">
            <h2 class="text-void-hd02 font-semibold">Project delete</h2>
            <div class="focus:outline-none p-2">
              <svg @click="onClose()" class="fill-current svg-a" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </div>
          </header>
          <main class="p-2 my-3 text-void-hd01 ">
            
            
       
          <div class="w-full ">
            <input  v-model="inputs.area" type="text" placeholder="Enter area" class="appearance-none border-none w-full py-1 px-3 text-void-hd01 bg-void-fg04  focus:outline-none focus:shadow-outline">
            <!-- <input  v-model="inputs.region" type="text" placeholder="Enter region" class="appearance-none border-none w-full py-1 px-3 text-void-hd01 bg-void-fg04 focus:outline-none focus:shadow-outline"> -->
            <select class="input px-4 py-2">
              <option selected value="all">All</option>
              <option v-for="(region,index) in store.regionsGet" :key="index" :value="region">{{ region }}</option>
            </select>
          </div>
>
     

          </main>
          <footer class="flex justify-center p-2">
            <div class="text-right pb-4">
              <button @click="onSubmit" class="btn btn-danger">
                Confirm
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import { useRoot } from '@/store/root';
import { defineComponent,PropType } from 'vue';

export default defineComponent({
  props: {
    args:{type: Object as PropType<{type: number}>, required:true }
  },
  Name: "Write",
  emits: ['submit', 'close'],
  data: () => ({
    store: useRoot(),
    inputs: {
      area: '',
      order: ''
    }
  }),
  methods: {
    onOrder(): void {

    },
    onSubmit():void {
        this.$emit('submit');
    },
    onClose():void {
        this.$emit('close');
    }

  }
});

</script>