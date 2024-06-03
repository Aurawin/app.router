import { createStore } from 'vuex'
import { regs } from "@/assets/wifi-reg.json"

export default createStore({
  namespaced: true,
  state: {
    counter: 100,
    Config:{
      Regulatory:{
        Region: 'US',
        Country: "United States",
        Data: regs
      }
    }
  },
  getters: {
    getConfigRegulatoryCountry: state => {
      return state.Config.Regulatory.Data[state.Config.Regulatory.Region]
    }
  },
  mutations: {
    mutConfigRegulatoryData: function(state,payload){
        state.Config.Regulatory.Region=payload.Code
        state.Config.Regulatory.Country=payload.Region
    }
  },
  actions: {
    setConfigRegulatoryData: function(context,payload){
      return context.commit("mutConfigRegulatoryData",payload)
  }
  },
  modules: {
  }
})
