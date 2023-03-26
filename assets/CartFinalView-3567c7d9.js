import{s as c}from"./useSweetAlertStore-e020aee8.js";import{_,m as h,o as a,c as l,b as t,e as i,t as s,F as p,i as u,j as d}from"./index-647ca239.js";const{VITE_APP_URL:b,VITE_APP_PATH:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w8/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{order:{}}},methods:{getOrderData(){const{id:r}=this.$route.params;this.$http.get(`${b}/v2/api/${m}/order/${r}`).then(n=>{this.order=n.data.order}).catch(n=>{this.swalError(n)})},...h(c,["swalError","swalToastTopEnd"])},mounted(){this.getOrderData(),document.title="鮮堡漢堡 文化店 | 完成點餐"}},x={class:"w-100 position-relative z-2"},g=t("section",{class:"common-hero container"},[t("div",{class:"position-relative m-5"},[t("div",{class:"progress bg-third",style:{height:"2px"}},[t("div",{class:"progress-bar bg-danger",role:"progressbar","aria-label":"Progress",style:{width:"66.66%"},"aria-valuenow":"66.66","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-0 translate-middle pt-6 fs-7 fw-bold"}," 選擇餐點 "),t("button",{type:"button",class:"position-absolute top-0 start-33 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-33 translate-middle pt-6 fs-7 fw-bold"}," 訂購資料 "),t("button",{type:"button",class:"position-absolute top-0 start-66 translate-middle btn btn-sm btn-danger rounded-pill text-white",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-66 translate-middle pt-6 fs-7 fw-bold"}," 餐點準備中 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-third rounded-pill",style:{width:"1rem",height:"1rem"}}),t("p",{class:"position-absolute top-0 start-100 translate-middle pt-6 fs-7 text-secondary text-nowrap"}," 完成取餐 ")])],-1),f={key:0,class:"container"},y=t("h2",{class:"ls-2 text-sm-start text-center"}," 您的訂單已送出，正在製作中！ ",-1),P={class:"fs-4 ls-15"},v=t("br",null,null,-1),E=t("a",{class:"text-black text-decoration-none",href:"tel:+886222590910"},"02-22590910",-1),T=t("br",null,null,-1),V=t("br",null,null,-1),A={class:"list-unstyled fs-5"},D={class:"mb-2"},k={class:"mb-2"},B={class:"mb-2"},H={class:"mb-2"},I=t("li",{class:"mb-2"},"訂購商品清單：",-1),L={class:"container pb-6"},O={class:"table align-middle w-100 border-secondary"},R=t("thead",null,[t("tr",{class:"w-100"},[t("th",null,"品名"),t("th",{class:"text-nowrap text-center"},"單價"),t("th",{class:"text-nowrap text-center"},"數量"),t("th",{class:"text-nowrap text-center"},"小計")])],-1),Y={class:"w-100"},F={class:"text-center"},M={class:"text-center"},N={class:"text-center"},S={class:"mb-2"},U=t("td",{colspan:"3",class:"text-end border-0"},"總計",-1),C={class:"text-end border-0"},j={colspan:"4",class:"border-0"};function q(r,n,z,G,e,J){return a(),l("main",x,[g,e.order.user?(a(),l("section",f,[y,t("p",P,[i(" 感謝您的選購，我們將立即為您準備餐點。"),v,i(" 有任何問題請直接來電"),E,T,i(" 同時告知您的訂單編號 "+s(e.order.id.substr(-4,4))+" 與訂購人大名。",1),V]),t("ul",A,[t("li",D,"桌號：#"+s(e.order.user.address),1),t("li",k," 訂單日期："+s(r.$moment(new Date(e.order.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1),t("li",B,"訂單編號："+s(e.order.id.substr(-4,4)),1),t("li",H,"訂購人："+s(e.order.user.name),1),I]),t("div",L,[t("table",O,[R,t("tbody",Y,[e.order.products?(a(!0),l(p,{key:0},u(e.order.products,o=>(a(),l("tr",{key:o.id},[t("td",null,s(r.prroduct)+" "+s(o.product.title),1),t("td",F,s(o.product.price),1),t("td",M,s(o.qty),1),t("td",N,s(o.total),1)]))),128)):d("",!0)]),t("tfoot",null,[t("tr",S,[U,t("td",C,s(e.order.total),1)]),t("tr",null,[t("td",j,"訂單備註："+s(e.order.message),1)])])])])])):d("",!0)])}const W=_(w,[["render",q]]);export{W as default};
