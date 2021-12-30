<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex-grow">
      <div class="">
       <router-view :args="args" />
      </div>
    </div>
    <Footer />
  </div>
  <FlashComp :flash="flash.msg" />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { Args,Flash } from './libs/interface';

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

import FlashComp from './components/Flash.vue';
import FlashMsg from './libs/flashMsg';

import { useRoot } from './store/root';

export default defineComponent({
  Name: "App",
  components: {
    Navbar,Footer,FlashComp
  },
  methods: {
    setTheme(id:number):void {
      // this.theme = Global.SetTheme(id,this.theme);
    },
    flashMsg(m: Flash): void {
      this.flash.msg = m;
    },
    updateArgs():void {
      this.args = {update: 0, flashMsg: this.flashMsg};
    }
  },
  data: () => ({
    store: useRoot(),
    flash: new FlashMsg('fm'),
    view: "Home" as string,
    args: {update: -1} as Args
  }),
  created() {
    this.updateArgs();
    // setTimeout( () => this.flash.msg = {type: 0, info: 'hello world test 1'}, 100);
    // setTimeout( () => this.flash.msg = {type: 1, info: 'hello world test 2'}, 2000);
    // setTimeout( () => this.flash.msg = {type: 2, info: 'hello world test 3'}, 10000);
  },
  watch: {
    '$route.name' () {
      this.view = String(this.$route.name);
    }
  }
});

</script>


<style>
.bdr-b {
  border-bottom: 1px solid var(--color-border);
}

.bdr-r {
  border-right: 1px solid var(--color-border);
}

.container-fluid {
  width: 86%;
  margin-left: auto;
  margin-right: auto;
}

.a {
  text-decoration: underline;
  color: var(--color-ascent);
}

.a:hover {
  cursor: pointer;
  color: var(--color-ascenth);
}

.svg-a:hover {
    cursor: pointer;
    fill: var(--color-ascent);
}

@media (max-width: 768px){
  .container-fluid {
    width: 90%;
    padding-right: 5px;
    padding-left: 5px;
    margin: 0 auto;
  }
}

@media (max-width: 480px){
  .container-fluid {
    width: 95%;
    padding-right: 0px;
    padding-left: 0px;
    margin: 0 auto;
  }

}

@media (max-width: 400px){
  .container-fluid {
    width: 98%;
    padding-right: 0px;
    padding-left: 0px;
    margin: 0 auto;
  }

}

</style>
