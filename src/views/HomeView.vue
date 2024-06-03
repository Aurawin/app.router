<template>
  <div class="home">
    <img class="logo" :alt="langModel.Dictionary.Image.Alt.Logo.Value() " />
    <BeginSetup />

  </div>
</template>

<script>
import { ref } from 'vue'
import {langModel} from '@/components/lang'
import BeginSetup from '@/views/dialogs/BeginSetup.vue'

export default {
  name: 'HomeView',
  setup(){
    const BeginSetup = ref(null)
    const doShowModal = () => {
      BeginSetup.value.showModal()
    }
    return {
      BeginSetup,
      langModel,
      doShowModal
    }
  },
  components: {
    BeginSetup
  },
  methods:{
    doShowBeginSetup(){

    }
  }
}
</script>
<style>
img.logo{
  display: flex;
  position: static;
  width: 80px;
  height: 80px;
  content:url('@/assets/WiFi-Logo.2.png')
}
div.home{
  display: flex;
  position: fixed;
  margin: 0px 0px 0px 0px;
  width: 100%;
}
</style>