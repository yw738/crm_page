var H=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(d,r,p)=>r in d?H(d,r,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[r]=p,V=(d,r)=>{for(var p in r||(r={}))Q.call(r,p)&&k(d,p,r[p]);if(x)for(var p of x(r))W.call(r,p)&&k(d,p,r[p]);return d},w=(d,r)=>K(d,P(r));import{_ as X,d as Z,q as ee,r as te,V as U,L as le,M as ae,a as b,h as t,b as f,c as _,e as i,m as h,x as o,f as y,t as ue,g as I,F as S,a2 as se,a3 as oe,U as ne,y as ie,p as de,l as re,G as R,$ as ce,a4 as E,a0 as C}from"./index.052afee0.js";const pe=d=>(de("data-v-8bf33022"),d=d(),re(),d),me={key:0},fe={class:"flexStart"},be=pe(()=>h("div",{class:"marginL10"},"\u5143",-1)),ge={class:"dialog-footer",style:{"text-align":"center"}},_e=R("\u63D0\u4EA4"),Fe=R("\u53D6\u6D88"),ve=Z({__name:"add",emits:["success"],setup(d,{expose:r,emit:p}){const{user:N}=ee(),B=te(U),a=le({title:"",visible:!1,formData:{businessId:"",businessTitle:"",clientId:"",contactUserId:"",salesAmount:0,dateSign:"",salesStage:"",clinchRate:"",businessSource:"",obtainDate:"",belongUserId:"",businessRemark:"",clientName:""},isFollow:!1,rules:{contactUserId:[{required:!0,message:"\u8BF7\u9009\u62E9\u8054\u7CFB\u4EBA",trigger:"blur"}],businessTitle:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u673A\u6807\u9898",trigger:"blur"}],clientId:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}],salesAmount:[{required:!0,message:"\u8BF7\u8F93\u5165\u9500\u552E\u91D1\u989D",trigger:"blur"}],dateSign:[{required:!0,message:"\u8BF7\u9009\u62E9\u7B7E\u5355\u65E5\u671F",trigger:"blur"}],salesStage:[{required:!0,message:"\u8BF7\u9009\u62E9\u9500\u552E\u9636\u6BB5",trigger:"blur"}],clinchRate:[{required:!0,message:"\u8BF7\u9009\u62E9\u6210\u4EA4\u51E0\u7387",trigger:"blur"}]},options2:[],options:[],employeeList:[],openType:""}),{title:T,visible:F,formData:s,rules:q,options2:O,options:ye,employeeList:Ee,openType:Y}=ae(a);let L=async(m="add",l={})=>{a.visible=!0,ce.queryEmployee().then(c=>{var u;a.employeeList=(u=c.data)==null?void 0:u.map(n=>({label:n.name,value:n.id}))}),Object.assign(a.formData,{belongUserId:N.userId}),await E.contactInfo().then(c=>{var u;a.options2=(u=c.data)==null?void 0:u.map(n=>V({label:n.clientName,value:n.clientId},n))}).catch(c=>console.log(c)),m=="edit"?(a.title="\u4FEE\u6539\u5546\u673A",await E.getDetail(l.businessId).then(c=>{var n;a.options=((n=a.options2.filter(g=>g.value==c.data.clientId)[0])==null?void 0:n.relatedContactBOS)||[];let u=c.data;Object.assign(a.formData,w(V({},u),{dateSign:u.dateSign.split(" ")[0]}))})):a.title="\u6DFB\u52A0\u5546\u673A",m=="add2"&&(a.formData.clientId=l.clientId,a.formData.clientName=l.clientName,D(l.clientId)),a.openType=m};function D(m){var c,u;let l=((c=a.options2.filter(n=>n.value==m)[0])==null?void 0:c.relatedContactBOS)||[];a.options=l,a.formData.contactUserId=((u=l[0])==null?void 0:u.contactUserId)||""}function M(){let m=JSON.parse(JSON.stringify(a.formData));E.add(m).then(()=>{C.success("\u65B0\u589E\u6210\u529F\uFF01"),v(),p("success")})}function j(){let m=JSON.parse(JSON.stringify(a.formData));E.update(m).then(()=>{C.success("\u7F16\u8F91\u6210\u529F\uFF01"),v(),p("success")})}function J(){a.formData,B.value.validate(m=>{m&&(a.openType=="edit"?j():M())})}function v(){B.value.resetFields(),a.visible=!1,a.title="",Object.assign(a.formData,{businessId:"",businessTitle:"",clientId:"",contactUserId:"",salesAmount:"",dateSign:"",salesStage:"",clinchRate:"",businessSource:"",obtainDate:"",belongUserId:"",businessRemark:""})}return r({init:L}),(m,l)=>{const c=b("el-input"),u=b("el-form-item"),n=b("el-option"),g=b("el-select"),z=b("el-input-number"),G=b("el-date-picker"),A=b("el-button"),$=b("el-dialog");return t(F)?(f(),_($,{key:0,title:t(T),modelValue:t(F),"onUpdate:modelValue":l[7]||(l[7]=e=>ne(F)?F.value=e:null),width:"600px",onClose:v,"close-on-click-modal":!1,"append-to-body":""},{footer:i(()=>[h("div",ge,[o(A,{type:"primary",onClick:J},{default:i(()=>[_e]),_:1}),o(A,{onClick:v},{default:i(()=>[Fe]),_:1})])]),default:i(()=>[o(t(U),{ref_key:"dataFormRef",ref:B,model:t(s),rules:t(q),"label-width":"130px"},{default:i(()=>[o(u,{label:"\u5546\u673A\u6807\u9898:",prop:"businessTitle"},{default:i(()=>[o(c,{modelValue:t(s).businessTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>t(s).businessTitle=e),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5173\u8054\u5BA2\u6237:",prop:"clientId"},{default:i(()=>[t(Y)=="add2"?(f(),y("span",me,ue(t(s).clientName),1)):(f(),_(g,{key:1,modelValue:t(s).clientId,"onUpdate:modelValue":l[1]||(l[1]=e=>t(s).clientId=e),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9",onChange:D},{default:i(()=>[(f(!0),y(S,null,I(t(O),e=>(f(),_(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]))]),_:1}),o(u,{label:"\u9884\u8BA1\u9500\u552E\u91D1\u989D:",prop:"salesAmount"},{default:i(()=>[h("div",fe,[h("div",null,[o(z,{modelValue:t(s).salesAmount,"onUpdate:modelValue":l[2]||(l[2]=e=>t(s).salesAmount=e),min:1,step:1,"step-strictly":!0,max:1e17,style:{width:"200px"},"controls-position":"right"},null,8,["modelValue"])]),be])]),_:1}),o(u,{label:"\u9884\u8BA1\u7B7E\u5355\u65E5\u671F:",prop:"dateSign"},{default:i(()=>[o(G,{modelValue:t(s).dateSign,"onUpdate:modelValue":l[3]||(l[3]=e=>t(s).dateSign=e),style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",type:"date",placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6210\u4EA4\u673A\u7387:",prop:"clinchRate"},{default:i(()=>[o(g,{modelValue:t(s).clinchRate,"onUpdate:modelValue":l[4]||(l[4]=e=>t(s).clinchRate=e),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9"},{default:i(()=>[(f(!0),y(S,null,I(t(se),e=>(f(),_(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u5546\u673A\u6765\u6E90:"},{default:i(()=>[o(g,{modelValue:t(s).businessSource,"onUpdate:modelValue":l[5]||(l[5]=e=>t(s).businessSource=e),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9"},{default:i(()=>[(f(!0),y(S,null,I(t(oe),e=>(f(),_(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u5907\u6CE8\u4FE1\u606F:"},{default:i(()=>[o(c,{modelValue:t(s).businessRemark,"onUpdate:modelValue":l[6]||(l[6]=e=>t(s).businessRemark=e),type:"textarea",rows:6,maxlength:"300","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",autosize:{minRows:4,maxRows:4}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])):ie("",!0)}}});var Ve=X(ve,[["__scopeId","data-v-8bf33022"]]);export{Ve as A};
