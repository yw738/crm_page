var X=Object.defineProperty,O=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var z=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,I=(e,t)=>{for(var o in t||(t={}))G.call(t,o)&&z(e,o,t[o]);if(U)for(var o of U(t))K.call(t,o)&&z(e,o,t[o]);return e},R=(e,t)=>O(e,Y(t));import{_ as $,a as _,az as P,b,f as T,m as c,c as E,e as D,x as p,H as k,t as N,I as Q,j as Z,G as H,p as ee,l as te,d as F,q as M,v as ae,r as S,V as oe,L as A,M as L,h as u,U as q,y as le,aA as w,s as j,u as W,A as ie,aJ as se,o as ne}from"./index.052afee0.js";import{A as J}from"./add.2ec2bbc4.js";const re={props:{fileurl:{trpe:String}},data(){return{audioStatus:"play",audioStart:"0:00",duration:"0:00",audioVolume:1,audioHuds:!1}},directives:{dragto:{inserted:function(e,t,o){e.addEventListener("click",l=>{let r=document.getElementById("progressBarBg").clientWidth,d=o.context.$refs.audioRef,i=l.offsetX/r,f=i*100;document.getElementById("progressBar").style.width=f+"%",d.currentTime=d.duration*i,d.play(),t.value()},!1)}},adjuster:{inserted:function(e,t,o){e.addEventListener("click",l=>{let r=document.getElementById("volumeBarBg").clientHeight,d=o.context.$refs.audioRef,i=l.offsetY/r,f=i*100;document.getElementById("volumeBar").style.height=f+"%",d.volume=i,t.value(f/100)},!1)}}},computed:{audioIcon(){return this.audioHuds?this.audioVolume<.01?"checked icon-jingyin":"checked icon-shengyin":"icon-shengyin"}},mounted(){this.fetch()},methods:{fetch(){let e=this;var t=this.$refs.audioRef;t.loop=!1,t.addEventListener("ended",function(){e.audioStatus="play",document.getElementById("progressBar").style.width="0%"},!1),t!=null&&(t.oncanplay=function(){e.duration=e.transTime(t.duration)},t.volume=.5)},playAudio(){let e=this.$refs.audioRef;e.paused?(e.play(),this.audioStatus="pause"):(e.pause(),this.audioStatus="play")},updateProgress(e){var t=e.target.currentTime/e.target.duration;document.getElementById("progressBar")?(document.getElementById("progressBar").style.width=t*100+"%",e.target.currentTime===e.target.duration&&(this.audioStatus="pause")):this.audioStatus="pause",this.audioStart=this.transTime(this.$refs.audioRef.currentTime)},transTime(e){var t=parseInt(e),o=parseInt(t/60),l=t%60+"",r=":";return o===0?o="00":o<10&&(o="0"+o),l.length===1&&(l="0"+l),o+r+l},setAudioIcon(){this.audioStatus="pause"},handleShowMuteIcon(e){this.audioVolume=e},setPlayRate(e=1){this.$refs.audioRef.playbackRate=e}}},V=e=>(ee("data-v-164a9f92"),e=e(),te(),e),de=["src"],ue=H(" \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u97F3\u9891\u64AD\u653E "),ce={class:"audio-right"},pe=V(()=>c("div",null,null,-1)),me={class:"progress-bar-bg",id:"progressBarBg"},ge=V(()=>c("div",{class:"progress-bar",id:"progressBar"},null,-1)),fe=[ge],he={class:"audio-time",style:{"min-height":"10px"}},_e={class:"audio-length-current",id:"audioCurTime"},ve=H("/ "),be={class:"audio-length-total"},ye={class:"volume"},xe={class:"volume-bar-bg",id:"volumeBarBg"},Ce=V(()=>c("div",{class:"volume-bar",id:"volumeBar"},null,-1)),Be=[Ce];function Te(e,t,o,l,r,d){const i=_("VideoPlay"),f=_("el-icon"),y=_("VideoPause"),x=P("dragto"),C=P("adjuster");return b(),T("div",null,[c("audio",{onTimeupdate:t[0]||(t[0]=(...B)=>d.updateProgress&&d.updateProgress(...B)),controls:"",ref:"audioRef",style:{display:"none"}},[c("source",{src:o.fileurl,type:"audio/mpeg"},null,8,de),ue],544),c("div",ce,[pe,r.audioStatus!=="pause"?(b(),E(f,{key:0,class:"iconClass dialogAudioPlay",onClick:d.playAudio},{default:D(()=>[p(i)]),_:1},8,["onClick"])):(b(),E(f,{key:1,class:"iconClass dialogAudioPlay",onClick:d.playAudio},{default:D(()=>[p(y)]),_:1},8,["onClick"])),k((b(),T("div",me,fe)),[[x,d.setAudioIcon]]),c("div",he,[c("span",_e,N(r.audioStart),1),ve,c("span",be,N(r.duration),1)]),c("div",ye,[k(c("div",{onClick:t[1]||(t[1]=Z(()=>!1,["stop"])),class:"volume-progress"},[k((b(),T("div",xe,Be)),[[C,d.handleShowMuteIcon]])],512),[[Q,r.audioHuds]])])])])}var Se=$(re,[["render",Te],["__scopeId","data-v-164a9f92"]]);const De=F({__name:"callLogDetail",emits:["success"],setup(e,{expose:t,emit:o}){const{user:l}=M();ae(()=>l==null?void 0:l.appType),S(oe);const r=S(null),d=A({title:"",visible:!1,formData:{uuid:"",qualityStatus:"",remark:""},searchData:{},searchHandle:[],searchForm:[{label:"\u9879\u76EE\u540D\u79F0",type:"select",prop:"projectId",width:"180px",placeholder:"",options:[],change:()=>{}}],rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6280\u80FD\u7EC4\u540D\u79F0",trigger:"blur"}]},openType:"",playbackRate:"x1.0",audioUrl:""}),{visible:i,playbackRate:f,audioUrl:y}=L(d);let x=async(h={})=>{await w.getCallUrl({callRecordId:h.callRecordId}).then(s=>{d.audioUrl=s.data}),d.visible=!0},C=(h="1")=>{let s=parseFloat(h==null?void 0:h.replace("x",""));r.value.setPlayRate(s)};function B(){d.visible=!1}return t({init:x}),(h,s)=>{const a=_("el-radio-button"),n=_("el-radio-group"),g=_("el-dialog");return u(i)?(b(),E(g,{key:0,title:"\u64AD\u653E",modelValue:u(i),"onUpdate:modelValue":s[1]||(s[1]=m=>q(i)?i.value=m:null),width:"900px",onClose:B,"close-on-click-modal":!1,"append-to-body":""},{default:D(()=>[p(n,{modelValue:u(f),"onUpdate:modelValue":s[0]||(s[0]=m=>q(f)?f.value=m:null),class:"marginB10",size:"small",onChange:u(C)},{default:D(()=>[p(a,{label:"x0.5"}),p(a,{label:"x1.0"}),p(a,{label:"x1.5"}),p(a,{label:"x2.0"}),p(a,{label:"x2.5"}),p(a,{label:"x3.0"})]),_:1},8,["modelValue","onChange"]),p(Se,{ref_key:"audioRef",ref:r,class:"audio-box marginB20",fileurl:u(y)},null,8,["fileurl"])]),_:1},8,["modelValue"])):le("",!0)}}});var we=$(De,[["__scopeId","data-v-64f0245e"]]);const Ie={class:"flexBetween",style:{"margin-bottom":"20px"}},Re=c("div",null,"\u901A\u8BDD\u8BB0\u5F55",-1),ke={class:"flexStart"},Ee={class:"flexStart"},Ne=F({__name:"callLog",emits:["success"],setup(e,{emit:t}){j();const o=W(),l=A({searchData:{startTime:"",endTime:""},checked1:!1,tableCols:[{label:"\u8DDF\u8FDB\u4EBA",prop:"username"},{label:"\u547C\u53EB\u65F6\u95F4",prop:"callTime"},{label:"\u547C\u53EB\u7C7B\u578B",prop:"callType"},{label:"\u547C\u53EB\u5BF9\u8C61",prop:"clientName"},{label:"\u547C\u53EB\u53F7\u7801",prop:"callee"},{label:"\u901A\u8BDD\u65F6\u957F",prop:"answerTime"},{label:"\u64CD\u4F5C",type:"Button",width:"180px",btnList:[{label:"\u64AD\u653E",size:"small",icon:"Edit",plain:!0,type:"primary",isShow:(a,n)=>a.existRecording,handle:(a,n)=>h(a)},{label:"\u5BFC\u51FA",size:"small",icon:"Edit",plain:!0,type:"primary",handle:(a,n)=>B(a)}]}],tableData:[],pagination:{pageSize:10,pageIndex:1,total:0}}),r=S(null),d=S(null),{searchData:i,checked1:f,tableData:y,tableCols:x}=L(l);let C=(a,n)=>{},B=a=>{w.callDownload({callRecordId:a.callRecordId}).then(n=>{let g=n.data;window.open(g)})};ie(()=>{s()});let h=(a={})=>{d.value.init(a)};const s=async()=>{var n;let a=null;try{let g=JSON.parse(JSON.stringify(l.searchData));o.query.clientId&&(g.clientId=o.query.clientId),g.current=l.pagination.pageIndex,g.size=l.pagination.pageSize,a=await w.callLog(g),l.tableData=((n=a.data.records)==null?void 0:n.map(m=>R(I({},m),{callTime:m.callTime?dateFormat(m.callTime,!0,!1):"",callType:findLabel(se,m.callType)})))||[],l.pagination.total=a.data.total||0}catch{l.tableData=[]}};return(a,n)=>{const g=_("DateRangeCom"),m=_("TableTemp");return b(),T("div",null,[c("div",Ie,[Re,c("div",ke,[c("div",Ee,[p(g,{starTime:u(i).startTime,"onUpdate:starTime":n[0]||(n[0]=v=>u(i).startTime=v),endTime:u(i).endTime,"onUpdate:endTime":n[1]||(n[1]=v=>u(i).endTime=v),width:"220px",style:{"margin-right":"10px"},onChange:s},null,8,["starTime","endTime"])])])]),p(m,{comheight:360,isBorder:!0,isSelection:!0,isIndex:!1,isPagination:!1,loading:!1,isHandle:!0,tableData:u(y),tableCols:u(x),onSelectChage:u(C),onRefresh:s,headerStyle:{background:"rgb(245 245 245)",color:"#666666",fontSize:"14px",fontWeight:700,height:"49px"}},null,8,["tableData","tableCols","onSelectChage","headerStyle"]),p(J,{ref_key:"LXRAddRef",ref:r},null,512),p(we,{ref_key:"CallLogDetailRef",ref:d},null,512)])}}});const Fe={class:"flexBetween",style:{"margin-bottom":"20px"}},Ae=c("div",null,"\u77ED\u4FE1\u8BB0\u5F55",-1),Le={class:"flexStart"},Ve={class:"flexStart"},qe=F({__name:"smsLog",emits:["success"],setup(e,{expose:t,emit:o}){j();const l=W();M();const r=A({searchData:{sendTimeStart:"",sendTimeEnd:"",searchWord:""},checked1:!1,tableCols:[{label:"\u53D1\u9001\u4EBA\u5458",prop:"creatorName"},{label:"\u53D1\u9001\u65F6\u95F4",prop:"sendTime"},{label:"\u63A5\u6536\u5BF9\u8C61",prop:"concatUserName"},{label:"\u63A5\u6536\u53F7\u7801",prop:"phoneNumber"},{label:"\u77ED\u4FE1\u5185\u5BB9",prop:"content"},{label:"\u72B6\u6001",prop:"status",itemStyle:s=>s.status=="SUCCESS"?"color: #66cc66":"color: #ff3300",formatter:s=>s.status=="SUCCESS"?"\u6210\u529F":"\u5931\u8D25",msgFormatter:s=>" "}],tableData:[],pagination:{pageSize:10,pageIndex:1,total:0}}),d=S(null),{searchData:i,pagination:f,tableData:y,tableCols:x}=L(r);let C=async(s={})=>{},B=(s,a)=>{};ne(()=>{h()}),t({init:C});const h=async()=>{var a;let s=null;try{let n=JSON.parse(JSON.stringify(r.searchData));l.query.clientId?n.clientId=l.query.clientId:l.query.contactUserId&&(n.concatUserId=l.query.contactUserId);let g={current:r.pagination.pageIndex,size:r.pagination.pageSize};n.page=g,n.queryType="MY",s=await w.smsDetail(n),r.tableData=((a=s.data.records)==null?void 0:a.map(m=>R(I({},m),{sendTime:m.sendTime?dateFormat(m.sendTime,!0,!1):""})))||[],r.pagination.total=s.data.total||0}catch{r.tableData=[]}};return(s,a)=>{const n=_("DateRangeCom"),g=_("el-input"),m=_("TableTemp");return b(),T("div",null,[c("div",Fe,[Ae,c("div",Le,[c("div",Ve,[p(n,{starTime:u(i).sendTimeStart,"onUpdate:starTime":a[0]||(a[0]=v=>u(i).sendTimeStart=v),endTime:u(i).sendTimeEnd,"onUpdate:endTime":a[1]||(a[1]=v=>u(i).sendTimeEnd=v),width:"220px",style:{"margin-right":"10px"},onChange:h},null,8,["starTime","endTime"]),p(g,{style:{"margin-right":"10px",width:"200px"},modelValue:u(i).searchWord,"onUpdate:modelValue":a[2]||(a[2]=v=>u(i).searchWord=v),placeholder:"\u8BF7\u8F93\u5165",onBlur:h},null,8,["modelValue"])])])]),p(m,{comheight:360,isBorder:!0,isSelection:!1,isIndex:!1,isPagination:!0,loading:!1,isHandle:!0,tableData:u(y),tableCols:u(x),onSelectChage:u(B),pagination:u(f),onRefresh:h,headerStyle:{background:"rgb(245 245 245)",color:"#666666",fontSize:"14px",fontWeight:700,height:"49px"}},null,8,["tableData","tableCols","onSelectChage","pagination","headerStyle"]),p(J,{ref_key:"LXRAddRef",ref:d},null,512)])}}});export{Ne as _,qe as a};
