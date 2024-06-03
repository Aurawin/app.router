<template>
    <h2>Begin Setup</h2>
      <DialogBox ref="dlgSetup" @closed="modalClosed" visible="0" btn_ok="1" btn_cancel="1" btn_apply="1" @showed="modalShowed" @canceled="modalCanceled" @applied="modalApplied" @okayed="modalOkayed">
      <template v-slot:default>
        <p class="modal-message">{{ langModel.Dictionary.Setup.Step1.PromptForRegion.Value() }}</p>
        <div ref="divRegs" tabIndex="0" class="wifi-regs">
            <div tabIndex="0" v-for="reg in $store.state.Config.Regulatory.Data" :key="reg.ID" :ID="reg.ID" ns="store.state.config.regulatory.data" class="wifi-reg" @keydown="doRegItemKeyDown" @click="doRegItemclick($event,reg,$store)">
                <div :key="reg.ID" class="wifi-reg-region">{{ reg.Region }}</div>
                <div :key="reg.ID" class="wifi-reg-code">{{ reg.Code }}</div>
            </div>
        </div>
        <div>
            <p class="modal-message"><b>Region</b>: {{ $store.state.Config.Regulatory.Country }} ({{ $store.state.Config.Regulatory.Region }})</p>
        </div>
      </template>
    </DialogBox>
    <div class="buttons">
        <button @click="doShowModal">Show Modal</button>
        <button @click="doHideModal">Hide Modal</button>
    </div>
</template>
<script>
import { ref} from 'vue'
import  DialogBox from "../../components/DialogBox.vue"
import { langModel } from '@/components/lang';
export default {
    name: 'BeginSetup',  
    setup(props) {
        const dlgSetup = ref(null)
        const divRegs = ref(null)
        const doShowModal = () => {
            dlgSetup.value.showModal()
        }
        const doHideModal=()=>{
            dlgSetup.value.closeModal()
        }
        const doRegItemclick=(e,regItem,store)=>{
            //e.preventDefault()
            let divItem=e.target;
            if (divItem.getAttribute("ns")==null)
              divItem=divItem.parentElement;
            store.dispatch('setConfigRegulatoryData', regItem)
            for (let divReg of divRegs.value.children){
                divReg.classList.remove("wifi-reg-selected")
            }
            divItem.classList.add("wifi-reg-selected")
            divItem.focus()
        }
        const doRegItemKeyDown=(e)=>{
            let divItem=e.target;
            if (divItem.getAttribute("ns")==null)
              divItem=divItem.parentElement;
            switch (e.keyCode) {
                case 40:
                    e.preventDefault();
                    if ((e.target) && (e.target.nextElementSibling)) divItem.nextElementSibling.focus()
                break;
                case 38:
                    e.preventDefault();
                    if ((e.target) && (e.target.previousElementSibling)) divItem.previousElementSibling.focus()
                break;
            }
        }
        return {props,langModel,dlgSetup,divRegs,doShowModal,doHideModal,doRegItemKeyDown,doRegItemclick}
    },
    expose: ['modalClosed','modalOkayed','modalCanceled','modalShowed','modalApplied'],
    components: {DialogBox},
    methods:{
        modalClosed(){
            console.log('modalClosed')
        },
        modalOkayed(){
            console.log('modalOkayed')
        },
        modalCanceled(){
            console.log('modalCanceled')
        },
        modalShowed(){
            console.log('modalShowed')
        },
        modalApplied(){
            console.log('modalApplied')
        }
    }
}
</script>
<style>
div.wifi-regs{
    overflow-y:scroll;
    height: 200px;
    padding-top: 1px;
}
div.wifi-reg:nth-child(even) {
    background-color:rgba(255,255,255,.05);
}
div.wifi-reg:nth-child(odd) {
    background-color:rgba(255,255,255,.1);
}
div.wifi-reg{
    outline: 1px solid rgba(0,0,0,0);
    border: 1px solid rgba(0,0,0,0);
    display:flex;
    height: 20px;
    line-height:20px;
    padding: 10px 2px 10px 2px;
    user-select:auto;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 3px;
    margin-right: 3px;
    flex-wrap: wrap;
    justify-content: flex-end;
    nav-index: auto;
}
div.wifi-reg-selected{
    outline: 1px solid rgba(255,255,255,.4) !important;
    background-color: rgba(0,0,255,.3) !important;
    border: 1px solid rgba(0,0,0,1) !important;
}
div.wifi-reg:focus{
    outline: 1px solid rgba(255,255,255,.4);
    background-color: rgba(0,0,255,.3);
    border: 1px solid rgba(0,0,0,1);
}
div.wifi-reg:hover {
    outline: 1px solid rgba(255,255,255,.4);
    background-color: rgba(0,0,255,.4);
    border: 1px solid rgba(0,0,0,1);
    box-shadow: 0 0 5px rgb(134, 134, 120) ;
}

div.wifi-reg-id{
    width:20px;
    margin-left: 3px;
    margin-right: 3px;
    display:none;
}
div.wifi-reg-code{
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    display:flex;
    justify-content: flex-end;
}
div.wifi-reg-region{
    margin-left: 5px;
    margin-right: 5px;
    display:flex;
    flex-basis: max-content;
    flex-grow:1;
}
</style>