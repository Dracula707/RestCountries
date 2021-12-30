<template>
<div class="flex flex-wrap z-10 w-full"> <!-- fixed -->
  <div class="w-full">
    <nav  class="header-color header relative flex flex-wrap items-center justify-between px-2 bg-opacity-100">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-auto px-4 static block justify-start">
          <div>
            <button type="button" @click="onHome" class="flex">
              <p class=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-void-hd">
                {{root.title}}
              </p>
            </button>
          </div>
        </div>

        <div class="flex flex-grow items-center md:hidden">
          <ul class="flex flex-row list-none ml-auto">
            <li class="nav-item">
              <div class="dropdown-main inline-block relative">
                <h5 class="px-3 py-3 flex items-center font-bold leading-snug text-void-hd01 hover:opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                  </svg>
                </h5>
                <div class="dropdown-content absolute hidden right-0 mt-0 py-2 w-48 bg-void-bg01 shadow-xl z-20">
                  <router-link to="/" class="block px-4 py-2 text-sm capitalize text-void-hd hover:bg-void-ascent hover:text-white">
                    Homepage
                  </router-link>
                  <router-link to="/about" class="block px-4 py-2 text-sm capitalize text-void-hd hover:bg-void-ascent hover:text-white">
                    About
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex-grow items-center hidden md:flex">
          <ul class="flex flex-row list-none ml-auto"> 
            <li class="nav-item">
              <button type="button" @click="onHome" class="cursor-pointer px-3 py-3 flex items-center text-void-hd leading-snug hover:opacity-75">
                Homepage
              </button>
            </li>                                         
            <li class="nav-item">
              <router-link to="/about" class="cursor-pointer px-3 py-3 flex items-center text-void-hd leading-snug hover:opacity-75">
                About
              </router-link> 
            </li>                              
          </ul>
        </div>

      </div>
    </nav>
  </div>
</div>
<!-- <div style="min-height: 6vh;"></div> -->
</template>

,<script lang="ts">
import { defineComponent } from 'vue';
import { useRoot } from '../store/root';

export default defineComponent({
  name: "Navbar",
  props: {view: String},
  methods: {
    onHome() {
      this.$router.push({name: 'Index'});
    }
  },
  data: () => ({
    pos: 0,
    root: useRoot(),
  }),
  created() {

  }
});
</script>


<style>
.header {
  padding: 4px 0px;
  max-height: 6vh;
}

.header-color {
  background-color: var(--color-fg01);
  color: var(--color-hd01);
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.37);
}
.dropdown-main:hover > .dropdown-content {
	display: block;
}

</style>