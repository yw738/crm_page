var W=Object.defineProperty;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var C=(s,u,t)=>u in s?W(s,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[u]=t,b=(s,u)=>{for(var t in u||(u={}))N.call(u,t)&&C(s,t,u[t]);if(_)for(var t of _(u))O.call(u,t)&&C(s,t,u[t]);return s};import{_ as V,d as X,ad as $,q as G,r as i,L as J,X as K,ak as Q,M as Y,o as Z,af as ee,$ as p,E,a0 as F,a as ae,b as te,f as le,x as r,h as c}from"./index.052afee0.js";import{T as ue}from"./TransferUser.6bd2da35.js";import{M as ne}from"./Move2Sea.b211088a.js";import{A as oe}from"./AddTask.93499407.js";import{F as se}from"./FollowTask.dc6c96ed.js";import{A as ie}from"./add.b4a773fe.js";import{U as re}from"./index.72de21bc.js";import"./index.4950eb20.js";const ce={class:"content_box"},pe=X({__name:"index",emits:["openApp"],setup(s,{emit:u}){$("calsType","crm:client:recycle");const{user:t}=G(),d=i(null);let S=e=>{var l;(l=d==null?void 0:d.value)==null||l.init()};const n=J({searchData:{keyWords:null,clientSource:null,clientDistinguish:null,oldBelongUserId:null,intoThePoolStartDate:null,intoThePoolEndDate:null,isTopSort:!0},selectList:[],requestData:{companyId:t.userInfo.companyId},searchForm:[{type:"input",prop:"keyWords",width:"180px",placeholder:"\u641C\u7D22\u5173\u952E\u5B57",change:()=>{}},{type:"select",prop:"clientSource",placeholder:"\u6765\u6E90",width:"180px",options:K,change:()=>{}},{type:"select",prop:"clientDistinguish",placeholder:"\u5BA2\u6237\u7C7B\u578B",width:"180px",options:Q,change:()=>{}},{type:"select",prop:"oldBelongUserId",placeholder:"\u524D\u5F52\u5C5E\u4EBA",width:"180px",options:[],change:()=>{}},{type:"daterange",prop:"intoThePoolStartDate",prop2:"intoThePoolEndDate",placeholder:"\u5165\u6C60\u65F6\u95F4",change:()=>{}}],searchHandle:[{label:"\u67E5\u8BE2",type:"primary",icon:"Search",handle:()=>H()},{label:"\u91CD\u7F6E",handle:()=>M()}],tableHandles:[{label:"\u5BFC\u5165",icon:"Upload",isShow:()=>t.userLevel==2,handle:e=>S()},{label:"\u5BFC\u51FA",icon:"Download",isShow:()=>t.userLevel==2,handle:()=>P()},{label:"\u9886\u53D6\u8D44\u6E90",handle:()=>q()},{label:"\u5206\u914D\u8D44\u6E90",isShow:()=>t.userLevel==2,handle:()=>R()}],tableCols:[{label:"\u64CD\u4F5C",type:"Button",width:"340px",btnList:[{type:"primary",label:"\u7F16\u8F91",icon:"Edit",size:"small",isShow:()=>t.userLevel==2,handle:(e,l)=>j(e)},{type:"primary",label:"\u7F6E\u9876",size:"small",icon:"SortUp",handle:(e,l)=>U(e)},{type:"danger",label:"\u5220\u9664",icon:"Delete",size:"small",isShow:()=>t.userLevel==2,handle:(e,l)=>z(e)}]}],tableData:[],appTableData:[],pagination:{pageSize:10,pageIndex:1,total:0},treeData:[],allList:[]}),{searchData:B,searchForm:v,searchHandle:de,tableHandles:A,tableCols:x,pagination:k,tableData:he}=Y(n),h=i(),m=i(null),f=i(null),w=i(null),T=i(null),L=i(null);Z(()=>{ee("crm:client:recycle").then(e=>{n.tableCols=[...e,...n.tableCols]}),p.queryEmployee().then(e=>{var l;n.searchForm[3].options=(l=e.data)==null?void 0:l.map(a=>({label:a.name,value:a.id,departmentId:a.departmentId}))})});let I=e=>{n.selectList=e.selection},P=()=>{window.fileDown("garbage",b({},n.searchData))},R=()=>{var e;(e=f==null?void 0:f.value)==null||e.init(n.selectList,"laji")},U=(e,l)=>{E.confirm("\u8BE5\u64CD\u4F5C\u5C06\u7F6E\u9876\u3002","\u786E\u5B9A\u7F6E\u9876\u5417\uFF1F").then(()=>{var a;(a=p)==null||a.top(e.clientId).then(g=>{F.success("\u7F6E\u9876\u6210\u529F"),o()})}).catch(()=>{})};const H=()=>{n.pagination.pageIndex=1,o()},M=()=>{Object.assign(n.searchData,{keyWords:null,clientSource:null,clientDistinguish:null,oldBelongUserId:null,intoThePoolStartDate:null,intoThePoolEndDate:null})};let q=()=>{let e=n.selectList.map(a=>a.clientId).join(","),l=n.selectList;if(!e){F.error("\u9886\u53D6\u5BA2\u6237\u81F3\u5C11\u9700\u9009\u62E91\u6761\u6570\u636E\uFF1B");return}E.confirm("\u662F\u5426\u786E\u8BA4\u9886\u53D6\u6240\u9009\u62E9\u7684\u5BA2\u6237\uFF1F\u9886\u53D6\u540E*\u5929\u540E\u672A\u8DDF\u8FDB/\u6210\u4EA4\uFF0C\u5BA2\u6237\u5C06\u81EA\u52A8\u653E\u56DE\u516C\u6D77","\u786E\u8BA4\u63D0\u793A").then(async()=>{var g;let a=[];for(let D=0;D<l.length;D++){const y=l[D];a.push({clientId:y.clientId,distinuish:y.clientDistinguish})}(g=p)==null||g.recyclePick(a).then(D=>{F.success("\u64CD\u4F5C\u6210\u529F"),o()})}).catch(()=>{})},z=(e,l)=>{E.confirm("\u8BE5\u6570\u636E\u5C06\u6C38\u4E45\u88AB\u5220\u9664\uFF0C\u5E76\u4E14\u65E0\u6CD5\u6062\u590D\u3002\u786E\u5B9A\u5220\u9664\u5417\uFF1F","\u63D0\u793A").then(()=>{var a;(a=p)==null||a.recycleDel(e.clientId).then(g=>{F.success("\u5220\u9664\u6210\u529F"),o()})}).catch(()=>{})},j=(e,l)=>{var a;(a=m==null?void 0:m.value)==null||a.init("edit",e)};const o=()=>{var e;(e=h==null?void 0:h.value)==null||e.getList()};return(e,l)=>{const a=ae("PageLayout");return te(),le("div",ce,[r(a,{ref_key:"pageLayout",ref:h,isSelection:!0,isIndex:!1,isShowPageBtn:!1,tableBtnIsTopRight:!1,searchForm:c(v),searchData:c(B),tableHandles:c(A),tableCols:c(x),pagination:c(k),api:c(p).getList3,onSelectChage:c(I)},null,8,["searchForm","searchData","tableHandles","tableCols","pagination","api","onSelectChage"]),r(ue,{ref_key:"transferUserRef",ref:f,onSuccess:o},null,512),r(ne,{ref_key:"move2SeaRef",ref:w,onSuccess:o},null,512),r(oe,{ref_key:"addTaskRef",ref:T,onSuccess:o},null,512),r(se,{ref_key:"followTaskRef",ref:L,onSuccess:o},null,512),r(ie,{ref_key:"addRef",ref:m,onSuccess:o},null,512),r(re,{ref_key:"uploadFileRef",ref:d,typeName:"garbage",onSuccess:o},null,512)])}}});var be=V(pe,[["__scopeId","data-v-f3a040e8"]]);export{be as default};
