<template>
    <img class="logo" :alt="langModel.Dictionary.Image.Alt.Logo.Value() " />
    <div tabIndex="0" class="sw-content" ref="divModal">
    <slot name="default"></slot>
    </div>
    
</template>
<script>
import {ref, onMounted} from 'vue' 
import {langModel} from '@/components/lang'

export default {
  name: 'SetupWizard',
  components: {},
  expose: ['showModal','closeModal','visible'],
  props: ['visible','btn_ok','btn_apply','btn_cancel'],
  setup (props) {
    console.log('setup')
    let visible = ref(props.visible)
    let btn_ok = ref(props.btn_ok)
    let btn_cancel = ref(props.btn_cancel)
    let btn_apply = ref(props.btn_apply)

    return {
      props,langModel,btn_ok,btn_cancel,btn_apply,visible
    }
    
  },
  updated(){
    if (this.visible==='1') {
      this.$refs.divModal.focus()
    }
  },
  methods:{
    showModal(){
      this.visible='1'
      this.$emit('showed')
    },
    clickBackdrop(){
      console.log('clickBackdrop')
      this.closeModal()
    },

    closeModal(){
      console.log('closeModal')
      if (this.visible!='0'){
        this.visible='0'
        this.$emit('closed')
      }
    },
    modalBtnClickOK(){
      console.log('modalBtnClickOK')
      this.$emit('okayed')
      this.closeModal()
    },
    modalBtnClickApply(){
      console.log('modalBtnClickApply')
      this.$emit('applied')
    },
    modalBtnClickCancel(){
      console.log('modalBtnClickCancel')
      this.$emit('canceled')
      this.closeModal()
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:12px;
}

 .sw-content{
    user-select: none;
    margin: 100px auto;
    width:400px;
    padding: 20px;
    background: rgb(77, 77, 77);
    border-radius:10px;
    border-style:solid;
    border-color:rgb(134, 134, 120);
    border-width:1px;
    color:rgb(238,238,228);
 }

</style>