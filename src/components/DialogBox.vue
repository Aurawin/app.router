<template>
    <div v-if="visible!='0'" class="modal-backdrop" ref="divBackdrop" @click.self="clickBackdrop" >
        <div tabIndex="0" class="modal-content" ref="divModal">
          <slot name="default"></slot>
          <hr class="modal-btns">
          <ul class="modal-btns">
            <li tabIndex="0" v-if="btn_apply!='0'" class="modal-li modal-btn modal-btnApply" @click.prevent="modalBtnClickApply">{{ langModel.Dictionary.DialogBox.Button.Apply.Value() }}</li>
            <li tabIndex="0" v-if="btn_ok!='0'" class="modal-li modal-btn modal-btnOK" @click.prevent="modalBtnClickOK">{{ langModel.Dictionary.DialogBox.Button.OK.Value() }}</li>
            <li tabIndex="0" v-if="btn_cancel!='0'" class="modal-li modal-btn modal-btnCancel" @click.prevent="modalBtnClickCancel">{{ langModel.Dictionary.DialogBox.Button.Cancel.Value() }}</li>
          </ul> 
        </div>
    </div>
</template>
<script>
import {ref, onMounted} from 'vue' 
import {langModel} from '@/components/lang'

export default {
  name: 'DialogBox',
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
H1.modal-slot-title{
  text-align: center;
}
 .modal-content{
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
 .modal-backdrop{
   cursor:default;
   top: 0;
   left: 0;
   position: fixed;
   width: 100%;
   height: 100%;
   background:rgba(255,255,255,.2); 
 }

 p.modal-message{
  text-align: left;
 }
 ul.modal-btns{
  list-style-type: none;
  border-radius:10px;
  padding: 2px;
  align-items:center;
  margin:0px;
  text-align: center;
  display:flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  }
 li.modal-slot-li{
  list-style-type: none;
  border-radius:10px;
  background: rgba(255,255,255,.2);
  margin:4px;
  padding: 8px;
  display: inline;
 }
 li.modal-slot-li:hover{
  border-radius:10px;
  background: rgba(255,255,255,.4);
 }
 a.modal-slot-li:hover{
  border-radius:10px;
  color: rgba(0,0,0,.8);
 }
 li.modal-btnCancel{
  background: rgba(151, 16, 16, 0.7);
 }

 li.modal-btn{
  float: right;
  font-size:12px;
  cursor:pointer;
  border: 1px solid rgba(255,255,255,.4);
  margin-left: 3px;
  margin-right: 3px;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 1px rgb(134, 134, 120) ;
  text-shadow: 
    0px 0px 1px rgba(0, 0, 0,1),
    0px 1px 1px rgba(0, 0, 0,.8),
    1px 0px 1px rgba(0, 0, 0,.8),
    1px 1px 1px rgba(0, 0, 0,.8),
    -1px 1px 1px rgba(0, 0, 0,.8),
    -1px -1px 1px rgba(0, 0, 0,.8);

 } 
 li.modal-btn:hover{
  box-shadow: 0 0 5px rgb(134, 134, 120) ;
 }
 li.modal-btnApply{
  background: rgba(2, 21, 104, 0.726);
 }
 li.modal-btnOK{
  background: rgba(17, 114, 3, 0.7);
 }
 li.modal-btnOK:hover{
  background: rgba(17, 114, 3, 1);
 }

 hr.modal-btns{
  border: 1px solid rgba(134, 134, 120,.7);
  box-shadow: 0 0 2px rgba(57, 57, .1);
  margin-top: 20px;
  margin-bottom:20px;
 }
</style>