Vue.component("app-checkbox",{template:"#app-checkbox-template",data:()=>({checked:!1}),mounted(){EventBus.$on("checkboxToggle",(()=>{this.toggle()}))},methods:{toggle(){this.checked=!this.checked,this.$emit("input",this.checked)}}});