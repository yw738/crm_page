var ae=Object.defineProperty,ue=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var S=(e,r,m)=>r in e?ae(e,r,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[r]=m,L=(e,r)=>{for(var m in r||(r={}))se.call(r,m)&&S(e,m,r[m]);if(R)for(var m of R(r))oe.call(r,m)&&S(e,m,r[m]);return e},j=(e,r)=>ue(e,te(r));import{a8 as E,a9 as k,aa as Y,ab as de,_ as ie,d as ne,q as re,r as me,V as P,L as pe,M as Fe,a as D,h as u,b as c,c as f,e as i,m as ce,x as n,f as I,g,ac as x,F as A,y as _,U as be,G as h,$ as De,a0 as C}from"./index.052afee0.js";const N={add:e=>k("/crm-core/task/add-ordinary-task",e),update:e=>k("/crm-core/task/update-ordinary-task",e),del:e=>Y(`/crm-core/task/${e}`,{}),addFollow:e=>k("/crm-core/task/add-follow-task",e),updateFollow:e=>k("/crm-core/task/update-follow-task",e),uploadFile:e=>k("/crm-core/task/upload-task-file",e),delFile:e=>Y(`/crm-core/task/file/${e}`,{}),cancelTask:e=>de(`/crm-core/task/cancel-task/${e}`,{}),failedComplete:e=>k("/crm-core/task/failed-to-complete",e),deal:e=>k("/crm-core/task/deal-task",e),getDetail:e=>E(`/crm-core/task/task-details/${e}`,{}),getList:e=>E("/crm-core/task/task-info",e),getMyForList:e=>E("/crm-core/task/task-info-beResponsibleFor",e),getMyJoinList:e=>E("/crm-core/task/task-info-join",e),getUnderList:e=>E("/crm-core/task/task-info-underling-beResponsibleFor",e),associatedData:e=>E("/crm-core/task/associated-object-data",e)},Be={client:e=>E("/crm-core/details/query-client-dynamic",e),order:e=>E("/crm-core/details/query-order-dynamic",e),task:e=>E("/crm-core/details/query-task-dynamic",e)},Ie=[{value:"FOLLOW_UP_TASKS",label:"\u8DDF\u8FDB\u4EFB\u52A1"},{value:"COMMON_TASK",label:"\u666E\u901A\u4EFB\u52A1"}],ge=[{value:"HAS_NOT_STARTED",label:"\u672A\u5F00\u59CB"},{value:"PROCESSING",label:"\u8FDB\u884C\u4E2D"},{value:"TIMED_OUT",label:"\u5DF2\u8D85\u65F6"},{value:"COMPLETED",label:"\u5DF2\u5B8C\u6210"},{value:"UNFINISHED",label:"\u672A\u5B8C\u6210"},{value:"CANCELLED",label:"\u5DF2\u53D6\u6D88"}],Ae=[{value:0,label:"\u91CD\u8981"},{value:1,label:"\u7D27\u6025"},{value:2,label:"\u666E\u901A"},{value:3,label:"\u91CD\u8981\u4E14\u7D27\u6025"}],H=[{value:"REMINDER_ON_TIME",label:"\u51C6\u65F6\u63D0\u9192"},{value:"FIVE_MINUTE",label:"\u63D0\u524D5\u5206\u949F"},{value:"FIFTEEN_MINUTE",label:"\u63D0\u524D15\u5206\u949F"},{value:"THIRTY_MINUTE",label:"\u63D0\u524D30\u5206\u949F"},{value:"ONE_HOUR",label:"\u63D0\u524D1\u5C0F\u65F6"},{value:"TWO_HOUR",label:"\u63D0\u524D2\u5C0F\u65F6"},{value:"ONE_DAY",label:"\u63D0\u524D1\u5929"}],Ce=[{value:0,label:"\u7EA2\u8272",color:"#FB6260"},{value:1,label:"\u84DD\u8272",color:"#58A3F7"},{value:2,label:"\u7D2B\u8272",color:"#8167F5"},{value:3,label:"\u9ED1\u8272",color:"#464C5B"},{value:4,label:"\u6A58\u9EC4\u8272",color:"#FFA94C"},{value:5,label:"\u6D45\u84DD",color:"#52C1F5"},{value:6,label:"\u6DE1\u9EC4\u8272",color:"#FEC03D"}],Ne=[{value:"MY",label:"1"},{value:"MY_COOPERATION",label:"2"},{value:"PARTICIPATE",label:"3"},{value:"SUBORDINATE_COLLABORATION",label:"4"}],Oe=[{value:"SYSTEM_INFORMATION",label:"\u7CFB\u7EDF\u6D88\u606F"},{value:"EMAIL_NOTIFICATION",label:"\u90AE\u4EF6\u901A\u77E5"},{value:"SMS_NOTIFICATION",label:"\u77ED\u4FE1\u901A\u77E5"}];const fe={class:"dialog-footer",style:{"text-align":"center"}},Ee=h("\u4FDD\u5B58"),ke=h("\u53D6\u6D88"),Te=ne({__name:"AddTask",props:{type:{type:String,default:"detail"}},emits:["success"],setup(e,{expose:r,emit:m}){const v=e,{user:q}=re(),O=me(P),t=pe({title:"",visible:!1,TimeOption(s){return s.getTime()<Date.now()-864e5},formData:{taskId:"",clientId:"",taskTitle:"",startTime:"",endTime:"",taskDesciption:"",joinPeopleIds:[],taskUpReminder:"",followUpTypes:[],relatedBusiness:"",businessId:""},rules:{taskTitle:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u6807\u9898",trigger:"blur"}],clientId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA2\u6237",trigger:"blur"}],startTime:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4",trigger:"blur"}],endTime:[{required:!0,message:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",trigger:"blur"}],joinPeopleIds:[{required:!0,message:"\u8BF7\u9009\u62E9\u53C2\u4E0E\u4EBA\u5458",trigger:"blur"}]},employeeList:[],employeeList2:[],openType:"",clientIdList:[]}),{title:$,visible:y,formData:o,rules:J,employeeList:ve,employeeList2:G,TimeOption:V,clientIdList:K}=Fe(t);let W=async(s,a={})=>{De.queryEmployee().then(p=>{var F;let d=(F=p.data)==null?void 0:F.map(b=>({label:b.name,value:b.id}));t.employeeList2=d,t.employeeList=d}),v.type=="detail"&&a&&Object.assign(t.formData,{relatedBusiness:a.relatedBusiness,relatedBusinessName:a.relatedBusinessName,businessId:a.businessId,businessName:a.businessName}),s=="edit"?(t.title="\u7F16\u8F91\u4EFB\u52A1",await N.getDetail(a.taskId).then(p=>{let{taskDetailsVO:d,taskFileVOS:F=[]}=p.data;Object.assign(t.formData,j(L({},d),{joinPeopleIds:d.joinPeopleIds?d.joinPeopleIds.split(","):[]}))})):(t.title="\u65B0\u5EFA\u4EFB\u52A1",t.formData.taskUpReminder=H[0].value,Object.assign(t.formData,{joinPeopleIds:[q.userInfo.id]})),t.openType=s,t.visible=!0};function z(s){var d;t.clientIdList=[];let p=(d=(x.filter(F=>F.value==s)||[])[0])==null?void 0:d.valueT;N.associatedData({relatedBusiness:p}).then(F=>{t.clientIdList=F.data})}const U=(s=1)=>{var a,p,d,F;if(((a=t.formData)==null?void 0:a.startTime)&&((p=t.formData)==null?void 0:p.endTime)){let b=new Date((d=t.formData)==null?void 0:d.startTime).getTime(),T=new Date((F=t.formData)==null?void 0:F.endTime).getTime();b>T&&(s==1?(C.error("\u5F00\u59CB\u65F6\u95F4\u4E0D\u5F97\u5927\u4E8E\u7ED3\u675F\u65F6\u95F4\u65E5\u671F\uFF01"),t.formData.startTime=""):(C.error("\u7ED3\u675F\u65F6\u95F4\u4E0D\u5F97\u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4\u65E5\u671F\uFF01"),t.formData.endTime=""))}};function Q(){let s=JSON.parse(JSON.stringify(t.formData));s.joinPeopleIds=s.joinPeopleIds.join(","),s.followUpTypes=["SYSTEM_INFORMATION"],delete s.relatedBusinessName,delete s.businessName,N.add(s).then(()=>{C.success("\u65B0\u589E\u6210\u529F\uFF01"),B(),m("success")})}function X(){let s=JSON.parse(JSON.stringify(t.formData));s.joinPeopleIds=s.joinPeopleIds.join(","),s.followUpTypes=["SYSTEM_INFORMATION"],delete s.relatedBusinessName,delete s.businessName,N.update(s).then(()=>{C.success("\u7F16\u8F91\u6210\u529F\uFF01"),B(),m("success")})}function Z(){O.value.validate(s=>{s&&(t.openType=="edit"?X():Q())})}function B(){O.value.resetFields(),t.visible=!1,t.title="",Object.assign(t.formData,{taskId:"",clientId:"",taskTitle:"",startTime:"",endTime:"",taskDesciption:"",joinPeopleIds:[],taskUpReminder:"",followUpTypes:[],relatedBusiness:"",businessId:""})}return r({init:W}),(s,a)=>{const p=D("el-input"),d=D("el-form-item"),F=D("el-date-picker"),b=D("el-option"),T=D("el-select"),M=D("el-col"),ee=D("el-row"),w=D("el-button"),le=D("el-dialog");return u(y)?(c(),f(le,{key:0,title:u($),modelValue:u(y),"onUpdate:modelValue":a[12]||(a[12]=l=>be(y)?y.value=l:null),width:"700px",onClose:B,"close-on-click-modal":!1,"append-to-body":""},{footer:i(()=>[ce("div",fe,[n(w,{type:"primary",onClick:Z},{default:i(()=>[Ee]),_:1}),n(w,{onClick:B},{default:i(()=>[ke]),_:1})])]),default:i(()=>[n(u(P),{ref_key:"dataFormRef",ref:O,model:u(o),rules:u(J),"label-width":"130px"},{default:i(()=>[n(d,{label:"\u4EFB\u52A1\u6807\u9898:",prop:"taskTitle"},{default:i(()=>[n(p,{modelValue:u(o).taskTitle,"onUpdate:modelValue":a[0]||(a[0]=l=>u(o).taskTitle=l),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),n(d,{label:"\u5F00\u59CB\u65F6\u95F4:",prop:"startTime"},{default:i(()=>[n(F,{modelValue:u(o).startTime,"onUpdate:modelValue":a[1]||(a[1]=l=>u(o).startTime=l),style:{width:"100%"},type:"datetime","disabled-date":u(V),format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BF7\u9009\u62E9",onChange:a[2]||(a[2]=l=>U(1))},null,8,["modelValue","disabled-date"])]),_:1}),n(d,{label:"\u7ED3\u675F\u65F6\u95F4:",prop:"endTime"},{default:i(()=>[n(F,{modelValue:u(o).endTime,"onUpdate:modelValue":a[3]||(a[3]=l=>u(o).endTime=l),style:{width:"100%"},"disabled-date":u(V),type:"datetime",format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BF7\u9009\u62E9",onChange:a[4]||(a[4]=l=>U(2))},null,8,["modelValue","disabled-date"])]),_:1}),n(d,{label:"\u5173\u8054\u5BF9\u8C61:"},{default:i(()=>[n(ee,{gutter:20,style:{width:"100%"}},{default:i(()=>[n(M,{span:12},{default:i(()=>[v.type=="add"?(c(),f(T,{key:0,modelValue:u(o).relatedBusiness,"onUpdate:modelValue":a[5]||(a[5]=l=>u(o).relatedBusiness=l),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5BF9\u8C61\u7C7B\u578B",onChange:z},{default:i(()=>[(c(!0),I(A,null,g(u(x),l=>(c(),f(b,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):_("",!0),v.type=="detail"?(c(),f(p,{key:1,disabled:!0,modelValue:u(o).relatedBusinessName,"onUpdate:modelValue":a[6]||(a[6]=l=>u(o).relatedBusinessName=l)},null,8,["modelValue"])):_("",!0)]),_:1}),n(M,{span:12},{default:i(()=>[v.type=="add"?(c(),f(T,{key:0,modelValue:u(o).businessId,"onUpdate:modelValue":a[7]||(a[7]=l=>u(o).businessId=l),style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0"},{default:i(()=>[(c(!0),I(A,null,g(u(K),l=>(c(),f(b,{key:l.businessId,label:l.objectDataName,value:l.businessId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):_("",!0),v.type=="detail"?(c(),f(p,{key:1,disabled:!0,modelValue:u(o).businessName,"onUpdate:modelValue":a[8]||(a[8]=l=>u(o).businessName=l)},null,8,["modelValue"])):_("",!0)]),_:1})]),_:1})]),_:1}),n(d,{label:"\u4EFB\u52A1\u63CF\u8FF0:"},{default:i(()=>[n(p,{modelValue:u(o).taskDesciption,"onUpdate:modelValue":a[9]||(a[9]=l=>u(o).taskDesciption=l),type:"textarea",rows:6,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u4FE1\u606F",autosize:{minRows:4,maxRows:4}},null,8,["modelValue"])]),_:1}),n(d,{label:"\u53C2\u4E0E\u4EBA\u5458:"},{default:i(()=>[n(T,{modelValue:u(o).joinPeopleIds,"onUpdate:modelValue":a[10]||(a[10]=l=>u(o).joinPeopleIds=l),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9",multiple:""},{default:i(()=>[(c(!0),I(A,null,g(u(G),l=>(c(),f(b,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(d,{label:"\u4EFB\u52A1\u63D0\u9192:"},{default:i(()=>[n(T,{modelValue:u(o).taskUpReminder,"onUpdate:modelValue":a[11]||(a[11]=l=>u(o).taskUpReminder=l),style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9"},{default:i(()=>[(c(!0),I(A,null,g(u(H),l=>(c(),f(b,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])):_("",!0)}}});var Ve=ie(Te,[["__scopeId","data-v-baeaf9ac"]]);export{Ve as A,H as a,N as b,Ie as c,ge as d,Ae as e,Oe as f,Be as g,Ne as q,Ce as t};
