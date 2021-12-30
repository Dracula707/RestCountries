<template>
  <div class="container-fluid mt-12">

    <section class="mb-24">
      <div class="header-title my-2">
        <h1>About</h1>
      </div>

      <section class="mt-4">
        <div class="box-basic text-center">
          <p>Nothing to see here. (ಥ﹏ಥ)</p>
        </div>
    
      </section>
    </section>
 
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';


import { Args } from '../libs/interface';

export default defineComponent({
  Name: "About",
  props: {
    args:{type: Object as PropType<Args>, required:true }
  },
  methods: {

  },
  data: () => ({

  }),
  created() {

  },
  mounted() {

  }
});

</script>