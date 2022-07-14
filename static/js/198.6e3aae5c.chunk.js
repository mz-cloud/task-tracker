"use strict";(self.webpackChunktask_tracker=self.webpackChunktask_tracker||[]).push([[198],{6198:function(t,n,e){e.r(n),e.d(n,{default:function(){return at}});var r,i,a,o,l,s,d,u,c,x,m,p,g=e(8683),h=e(8152),f=e(1223),j=e(744),k=e(7504),v=e(4541),Z=e(7868),b=e(179),C=e(4941),z=e(5258),w=e(5587),S=e(7355),D=e(3906),y=e(2883),I=e(5109),O=e(5599),T=e(2791),W=e(9434),A=e(8606),R=e(168),X=e(9812),_=e(4627),F=e(513),H=e(8702),J=e(4933),K=e(2505),L=e(9833),M=e(8892),P=(0,M.default)(X.T)(r||(r=(0,R.Z)(["\n\tpadding: 0px 20px;\n"]))),U=(0,M.default)(_.Z)(i||(i=(0,R.Z)(["\n\tpadding-top: 0px;\n\tpadding-bottom: 10px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n"]))),q=M.default.svg(a||(a=(0,R.Z)(["\n\tcursor: pointer;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\t:hover {\n\t\ttransition: stroke 0.1s linear;\n\t\tstroke: ",";\n\t}\n"])),(function(t){var n=t.theme;return(0,L.normalizeColor)("neutral-2",n)})),B=(0,M.default)(F.x)(o||(o=(0,R.Z)([""]))),E=(0,M.default)(H.P)(l||(l=(0,R.Z)(["\n\tmargin-left: 8px;\n"]))),G=(0,M.default)(F.x)(s||(s=(0,R.Z)(["\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n\tmargin-left: 0px;\n\tmargin-right: 0px;\n"]))),N=(0,M.default)(J.n)(d||(d=(0,R.Z)(["\n\tcursor: pointer;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tmargin-left: 5px;\n\t:hover {\n\t\ttransition: stroke 0.1s linear;\n\t\tstroke: ",";\n\t}\n"])),(function(t){var n=t.theme;return(0,L.normalizeColor)("status-critical",n)})),Q=(0,M.default)(f.x)(u||(u=(0,R.Z)(["\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tmargin-left: auto;\n\tpadding: 0px;\n"]))),V=M.default.h4(c||(c=(0,R.Z)(["\n\tmargin: 5px 0px;\n"]))),Y=(0,M.default)(f.x)(x||(x=(0,R.Z)(["\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tpadding-left: 20px;\n\tpadding-right: 10px;\n"]))),$=(0,M.default)(f.x)(m||(m=(0,R.Z)(["\n\t",":not(:last-child) {\n\t\tmargin-bottom: 5px;\n\t}\n"])),Y),tt=(0,M.default)(K.U)(p||(p=(0,R.Z)(["\n\tcursor: pointer;\n\tmargin-right: 5px;\n\t:hover {\n\t\ttransition: stroke 0.1s linear;\n\t\tstroke: ",";\n\t}\n"])),(function(t){var n=t.theme;return(0,L.normalizeColor)("status-critical",n)})),nt=e(184),et=function(t){var n=(0,W.I0)(),e=(0,T.useState)(!1),r=(0,h.Z)(e,2),i=r[0],a=r[1],o=t.task,l=o.title.length>25?"".concat(o.title.substring(0,25),"..."):o.title;return(0,nt.jsxs)(Y,{background:"light-4",fill:"horizontal",children:[(0,nt.jsxs)(f.x,{fill:"horizontal",direction:"row",children:[(0,nt.jsx)(V,{children:l}),(0,nt.jsxs)(Q,{direction:"row",children:[(0,nt.jsx)(q,{as:i?I.C:O.M,size:"small",onClick:function(){return a(!i)}}),(0,nt.jsx)(N,{size:"medium",onClick:function(){n((0,A.F6)(t.id))}})]})]}),(0,nt.jsxs)(j.z,{open:i,children:[(0,nt.jsxs)(B,{children:[new Date(o.date).toLocaleDateString(),o.reminder&&(0,nt.jsx)(E,{size:"small"})]}),(0,nt.jsx)(G,{children:o.description})]})]})},rt=function(){var t=(0,W.v9)((function(t){return t.tasks})),n=(0,W.I0)();return(0,nt.jsxs)("div",{children:[(0,nt.jsxs)(k.O,{children:[(0,nt.jsx)(v.X,{level:3,children:"Current Tasks"}),(0,nt.jsx)(tt,{onClick:function(){return n((0,A.HS)())}})]}),(0,nt.jsx)(Z.e,{children:(0,nt.jsx)($,{children:t.map((function(t,n){return(0,nt.jsx)(et,{id:n,task:t},n)}))})})]})},it=function(){var t=(0,W.I0)(),n=(0,T.useState)({title:"",description:"",date:new Date(Date.now()).toISOString(),reminder:!1}),e=(0,h.Z)(n,2),r=e[0],i=e[1],a=function(){return i({title:"",description:"",date:new Date(Date.now()).toISOString(),reminder:!1})};return(0,nt.jsxs)("div",{children:[(0,nt.jsx)(k.O,{children:(0,nt.jsx)(v.X,{level:3,children:"Add Tasks"})}),(0,nt.jsxs)(Z.e,{children:[(0,nt.jsx)(b.W,{label:"Title",name:"title",children:(0,nt.jsx)(C.o,{name:"title",value:r.title,onChange:function(t){var n=t.target;return i((0,g.Z)((0,g.Z)({},r),{},{title:n.value}))}})}),(0,nt.jsx)(b.W,{label:"Description",name:"description",children:(0,nt.jsx)(z.K,{placeholder:"type here",value:r.description,resize:"vertical",onChange:function(t){var n=t.target;return i((0,g.Z)((0,g.Z)({},r),{},{description:n.value}))},fill:!0})}),(0,nt.jsx)(b.W,{label:"Date",children:(0,nt.jsx)(w.W,{format:"mm/dd/yyyy",value:r.date,onChange:function(t){var n=t.value;return i((0,g.Z)((0,g.Z)({},r),{},{date:n}))}})}),(0,nt.jsx)(S.J,{label:"Remind me?",checked:r.reminder,onChange:function(t){return i((0,g.Z)((0,g.Z)({},r),{},{reminder:t.target.checked}))}}),(0,nt.jsxs)(f.x,{direction:"row",gap:"medium",margin:{top:"20px"},children:[(0,nt.jsx)(D.z,{label:"Submit",primary:!0,onClick:function(){return console.log("submit"),t((0,A.gI)(r)),void a()}}),(0,nt.jsx)(D.z,{label:"Reset",onClick:function(){return a()}})]})]})]})},at=function(){return(0,nt.jsx)(P,{kind:"full",children:(0,nt.jsxs)(y.r,{rows:["100%","100%"],columns:["1fr","1fr"],gap:"medium",areas:[{name:"nav",start:[0,0],end:[0,0]},{name:"main",start:[1,0],end:[1,0]}],fill:"horizontal",children:[(0,nt.jsx)(U,{gridArea:"nav",background:"light-2",children:(0,nt.jsx)(rt,{})}),(0,nt.jsx)(U,{gridArea:"main",background:"light-2",children:(0,nt.jsx)(it,{})})]})})}}}]);
//# sourceMappingURL=198.6e3aae5c.chunk.js.map