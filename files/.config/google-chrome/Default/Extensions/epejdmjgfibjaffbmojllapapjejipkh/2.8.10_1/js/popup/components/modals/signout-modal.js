const SignoutModal=new Vue({el:"#signout-modal-container",data:()=>({modalTitle:"",visible:!1,texts:{SIGN_OUT:SIGN_OUT,SIGN_OUT_TITLE:SIGN_OUT_TITLE,SIGN_OUT_DES_1:SIGN_OUT_DES_1,SIGN_OUT_DES_2:SIGN_OUT_DES_2}}),mounted(){},methods:{toggle(){this.visible=!this.visible},confirm(){onLogoutClick(),this.toggle()}},watch:{async visible(isVisible){await storageLocalApi.setItem(IS_MODAL_OPENED,!!isVisible)}}});