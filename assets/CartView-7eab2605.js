import{c as m}from"./useCartStore-03f5531b.js";import{s as C}from"./useSweetAlertStore-d7e4920d.js";import{a as V,m as u,_ as $,r as c,o as r,c as i,b as t,F as x,i as E,e as b,t as d,j as f,d as l,w as v,n as y,k as A,l as D}from"./index-f71c5a61.js";const P={data(){return{loadingItem:"",finalTotal:""}},computed:{...V(m,["carts"])},methods:{...u(m,["getCartData","deleteOneCart","swalClearAllCart"]),...u(C,["swalError","swalToastTopEnd"])},mounted(){this.getCartData()}},I={class:"table align-middle w-100 border-secondary p-1"},S=t("thead",null,[t("tr",{class:"w-100"},[t("th",null,"品名"),t("th",{class:"text-nowrap text-center"},"單價"),t("th",{class:"text-nowrap text-center"},"數量"),t("th",{class:"text-nowrap text-center"},"小計"),t("th")])],-1),U={class:"w-100"},O={key:0,class:"text-success"},B={class:"text-center"},F={class:"text-center"},L={class:"text-center"},N=["onClick","disabled"],R={key:0,class:"fas fa-spinner fa-pulse"},j={class:"border-transparent"},q=t("td",{colspan:"4",class:"text-end border-0"},"總計",-1),z={class:"text-end border-0"},H={class:"d-flex justify-content-between mb-4"};function M(a,e,p,k,o,w){const _=c("router-link");return r(),i(x,null,[t("table",I,[S,t("tbody",U,[a.carts?(r(!0),i(x,{key:0},E(a.carts,s=>(r(),i("tr",{key:s.id},[t("td",null,[b(d(s.product.title)+" ",1),s.coupon?(r(),i("div",O,"已套用優惠券")):f("",!0)]),t("td",B,d(s.product.price),1),t("td",F,d(s.qty),1),t("td",L,d(s.total),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:h=>a.deleteOneCart(s.id),disabled:s.id===o.loadingItem},[o.loadingItem===s.id?(r(),i("i",R)):f("",!0),b(" x ")],8,N)])]))),128)):f("",!0)]),t("tfoot",j,[t("tr",null,[q,t("td",z,d(o.finalTotal),1)])])]),t("div",H,[t("button",{class:"btn btn-danger",type:"button",onClick:e[0]||(e[0]=(...s)=>a.swalClearAllCart&&a.swalClearAllCart(...s))}," 清空商品 "),l(_,{class:"btn btn-secondary",type:"button",to:"/products"},{default:v(()=>[b("想點更多")]),_:1})])],64)}const G=$(P,[["render",M]]),{VITE_APP_URL:J,VITE_APP_PATH:K}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w8/",MODE:"production",DEV:!1,PROD:!0},Q={data(){return{products:[],productID:"",finalTotal:"",form:{user:{name:"",tel:"",address:"",email:"no-email"},message:"",orderStatus:""},visible:!1}},methods:{createOrder(){const a=this.form;this.$http.post(`${J}/v2/api/${K}/order`,{data:a}).then(e=>{const{orderId:p}=e.data;this.$swal(e.data.message),this.$refs.form.resetForm(),this.$router.push(`/cartfinal/${p}`)}).catch(e=>{this.swalError(e)})},...u(m,["getCartData","cartDataExist"]),...u(C,["swalError","swalToastTopEnd"])},computed:{...V(m,["carts"])},components:{FrontCart:G},mounted(){this.getCartData(),this.cartDataExist(),this.visible=!0,document.title="鮮堡漢堡 文化店 | 購物車"}},W={class:"w-100 position-relative z-2"},X={class:"common-hero container"},Y=t("div",{class:"position-relative m-5"},[t("div",{class:"progress bg-third",style:{height:"2px"}},[t("div",{class:"progress-bar bg-danger",role:"progressbar","aria-label":"Progress",style:{width:"33.33%"},"aria-valuenow":"33.33","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-0 translate-middle pt-6 fs-7 fw-bold"}," 選擇餐點 "),t("button",{type:"button",class:"position-absolute top-0 start-33 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-33 translate-middle pt-6 fs-7 fw-bold"}," 訂購資料 "),t("button",{type:"button",class:"position-absolute top-0 start-66 translate-middle btn btn-sm btn-third rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-66 translate-middle pt-6 fs-7 text-secondary"}," 餐點準備中 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-third rounded-pill",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-100 translate-middle pt-6 fs-7 text-secondary text-nowrap"}," 完成取餐 ")],-1),Z={class:"row row-cols-1 row-cols-lg-2 p-1 pb-6"},tt={class:"col"},et={class:"col"},st={class:"row justify-content-center bg-third rounded rounded-4 rounded-lg-6 p-4 p-md-7"},ot=t("h2",null,"請輸入訂購資料",-1),at={class:"mb-3"},lt=t("label",{for:"desk",class:"form-label"},"桌次",-1),nt=t("option",{selected:"",value:"take-out"},"外帶",-1),rt=t("option",{value:"1"},"1",-1),it=t("option",{value:"2"},"2",-1),dt=t("option",{value:"3"},"3",-1),ct=t("option",{value:"5"},"5",-1),mt=t("option",{value:"6"},"6",-1),ut=t("option",{value:"7"},"7",-1),pt=t("option",{value:"8"},"8",-1),_t=t("option",{value:"9"},"9",-1),ht={class:"mb-3"},bt=t("label",{for:"name",class:"form-label"},"訂購人姓名",-1),ft={class:"mb-3"},vt=t("label",{for:"tel",class:"form-label"},"聯絡電話",-1),wt={class:"mb-3"},gt=t("label",{for:"message",class:"form-label"},"備註留言",-1),xt=t("div",{class:"text-center w-100"},[t("button",{type:"submit",class:"btn btn-danger w-100"},"送出訂單")],-1);function yt(a,e,p,k,o,w){const _=c("front-cart"),s=c("v-field"),h=c("error-message"),T=c("v-form");return r(),i("main",W,[t("section",X,[Y,t("div",Z,[t("div",tt,[l(_)]),t("div",et,[t("div",st,[ot,l(T,{ref:"form",onSubmit:w.createOrder},{default:v(({errors:g})=>[t("div",at,[lt,l(s,{name:"desk",as:"select",class:"form-select",modelValue:o.form.user.address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.form.user.address=n)},{default:v(()=>[nt,rt,it,dt,ct,mt,ut,pt,_t]),_:1},8,["modelValue"])]),t("div",ht,[bt,l(s,{id:"name",name:"姓名",type:"text",class:y(["form-control",{"is-invalid":g.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=n=>o.form.user.name=n)},null,8,["class","modelValue"]),l(h,{name:"姓名",class:"invalid-feedback"})]),t("div",ft,[vt,l(s,{id:"tel",name:"電話",type:"text",class:y(["form-control",{"is-invalid":g.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:o.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=n=>o.form.user.tel=n)},null,8,["class","modelValue"]),l(h,{name:"電話",class:"invalid-feedback"})]),t("div",wt,[gt,A(t("textarea",{id:"message",class:"form-control",placeholder:"如果有任何餐點製作需求，您可在此留言，我們將盡量配合。",cols:"30",rows:"10","onUpdate:modelValue":e[3]||(e[3]=n=>o.form.message=n)},null,512),[[D,o.form.message]])]),xt]),_:1},8,["onSubmit"])])])])])])}const kt=$(Q,[["render",yt]]);export{kt as default};
