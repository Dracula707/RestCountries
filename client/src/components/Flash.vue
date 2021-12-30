<template>
  <div class="flash-main w-full fixed left-0 z-10" :class="[flash.type != -1 ? 'top-48px' : '']">
    <div class="w-full flex justify-center" v-if="flash.type != -1">
      <div v-if="flash['type'] === 0" class="flash bg-void-sts">
        <p>{{ flash['info'] }}</p>
      </div>
      <div v-else-if="flash['type'] === 1" class="flash bg-void-ste">
        <p>{{ flash['info'] }}</p>
      </div>

      <div v-else-if="flash['type'] === 2" class="flash bg-void-stw">
        <p>{{ flash['info'] }}</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
// libs flashMsg.ts for controller
import { defineComponent,PropType } from 'vue';
import { Flash } from '@/libs/interface';

export default defineComponent({
  Name: "Flash",
  props: {
    flash:{type: Object as PropType<Flash>, required:true }
  }
});

</script>


<style scoped>
.flash-main {
  transition: top 0.9s ease 0s;
  top: -32px;
}
.flash {
  width: 80%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* .top-48px {
  top: 0px;
} */

@keyframes down {
  0%   {top: -32px;}
  50%  {top: 32px;}
  75%  {top: 32px;}
  100% {top: -32px;}
}

.top-48px {
  animation-name: down;
  animation-duration: 3s;
}
</style>