export const langLocales={
        US:"US",
        DE:"DE",
        JP:"JP"
    }
export const langModel={
    Locale:langLocales.US,
    Dictionary:{
        Setup:{
            Step1:{
                PromptForRegion:{
                    US:"Please select your regulatory region.",
                    DE:"Bitte wählen Sie Ihre Regulierungsregion aus.",
                    JP:"規制地域を選択してください。",
                    Value : function(){ return this[langModel.Locale]}    
                }
            }
        },
        Image:{
            Alt:{
                Logo:{
                    US:"Logo",
                    DE:"Logo",
                    JP:"ロゴ",
                    Value : function(){ return this[langModel.Locale]}                   
                }

            }
        },
        Hint:{
            AcquireYourFullName:{
                US:"Please enter your full name.",
                DE:"Bitte geben sie ihren namen an.",
                JP:"フルネームを入力してください.",
                Value : function(){ return this[langModel.Locale]}
            }
        },
        DialogBox:{
            Button:{
                Apply:{
                    US: "Apply",
                    DE: "Anwenden",
                    JP: "適用する",
                    Value: function(){ return this[langModel.Locale]}                        
                },
                OK:{
                    US: "OK",
                    DE: "OK",
                    JP: "わかりました",
                    Value: function(){ return this[langModel.Locale]}                        
                },
                Cancel:{
                    US: "Cancel",
                    DE: "Stornieren",
                    JP: "キャンセル",
                    Value: function(){ return this[langModel.Locale]}                        
                }

            }
        }
    
    },
    setLangToDE : function() {this.Locale=langLocales.DE},
    setLangToJP : function() {this.Locale=langLocales.JP},
    setLangToUS : function() {this.Locale=langLocales.US},
}
export default { langModel, langLocales}