<template>
  <router-view/>
</template>
<script>
import Vuex from 'vuex'
import { ref } from 'vue' 
import { langModel } from './components/lang'

export default {
  name: 'App',
  setup(props){
      langModel.setLangToUS() 
      return{props, langModel }
  },
  components:{},
  methods:{}
}
</script>
<style>
#app {
 display:flex;
 width: 100%;
 margin: 0px 0px 0px 0px;
 position: static;
}
body{
  background-image:url("./assets/bckgnd.png");
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:12px;
  top:0px;
  left:0px;
  width: 100%;
  margin: 0px 0px 0px 0px;
  display:flex;
  position:static;
}

</style>
