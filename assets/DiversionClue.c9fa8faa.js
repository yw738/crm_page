import{_ as R,d as z,q as A,r as T,V as b,L as q,M as L,a as r,h as l,b as _,c as C,e as s,m as O,x as n,f as S,g as j,F as J,U as M,y as G,G as x,a0 as g,$,a1 as y}from"./index.052afee0.js";const H={class:"dialog-footer",style:{"text-align":"center"}},K=x("\u786E\u5B9A"),P=x("\u53D6\u6D88"),Q=z({__name:"DiversionClue",emits:["success"],setup(W,{expose:D,emit:v}){A();const f=T(b),e=q({visible:!1,formData:{clueIds:"",belongUserId:"",remarks:"",departmentId:""},rules:{belongUserId:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}]},options:[],openType:null,title:""}),{visible:p,formData:c,rules:h,options:E,title:I}=L(e);let k=async(t=[],a="fenpei")=>{if(!(t!=null&&t.length)){g.error("\u5206\u914D\u7EBF\u7D22\u81F3\u5C11\u9700\u9009\u62E91\u6761\u6570\u636E");return}a=="fenpei"?e.title="\u5206\u914D\u7EBF\u7D22":a=="zhuanyi"&&(e.title="\u8F6C\u79FB\u7EBF\u7D22"),e.openType=a,await $.queryEmployee().then(u=>{var i;e.options=(i=u.data)==null?void 0:i.map(d=>({label:d.name,value:d.id,departmentId:d.departmentId}))}),e.formData.clueIds=t,e.visible=!0};function V(){let t=JSON.parse(JSON.stringify(e.formData));e.openType=="fenpei"?y.assignLeads(t).then(()=>{g.success("\u64CD\u4F5C\u6210\u529F\uFF01"),m(),v("success")}):e.openType=="zhuanyi"&&y.divertClue(t).then(()=>{g.success("\u64CD\u4F5C\u6210\u529F\uFF01"),m(),v("success")})}function B(){f.value.validate(t=>{t&&V()})}function w(t){var u;let a=((u=e.options)==null?void 0:u.find(i=>i.value==t))||{};e.formData.departmentId=a.departmentId}function m(){f.value.resetFields(),e.visible=!1,Object.assign(e.formData,{clueIds:[],belongUserId:"",remarks:"",departmentId:""})}return D({init:k}),(t,a)=>{const u=r("el-option"),i=r("el-select"),d=r("el-form-item"),U=r("el-input"),F=r("el-button"),N=r("el-dialog");return l(p)?(_(),C(N,{key:0,title:l(I),modelValue:l(p),"onUpdate:modelValue":a[2]||(a[2]=o=>M(p)?p.value=o:null),width:"500px",onClose:m,"close-on-click-modal":!1,"append-to-body":""},{footer:s(()=>[O("div",H,[n(F,{type:"primary",onClick:B},{default:s(()=>[K]),_:1}),n(F,{onClick:m},{default:s(()=>[P]),_:1})])]),default:s(()=>[n(l(b),{ref_key:"dataFormRef",ref:f,model:l(c),rules:l(h),"label-width":"100px"},{default:s(()=>[n(d,{label:"\u63A5\u6536\u5BF9\u8C61:",prop:"belongUserId"},{default:s(()=>[n(i,{modelValue:l(c).belongUserId,"onUpdate:modelValue":a[0]||(a[0]=o=>l(c).belongUserId=o),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9",onChange:w},{default:s(()=>[(_(!0),S(J,null,j(l(E),o=>(_(),C(u,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(d,{label:"\u5907\u6CE8\u4FE1\u606F:"},{default:s(()=>[n(U,{modelValue:l(c).remarks,"onUpdate:modelValue":a[1]||(a[1]=o=>l(c).remarks=o),type:"textarea",rows:6,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",autosize:{minRows:4,maxRows:4}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])):G("",!0)}}});var Y=R(Q,[["__scopeId","data-v-0ad7ca82"]]);export{Y as D};
