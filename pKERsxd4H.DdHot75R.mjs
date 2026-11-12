import{
  t as e
}
from"./rolldown-runtime.OA-FSkXT.mjs";
import{
  c as t,g as n,o as r,w as i
}
from"./react.ChuBhxDh.mjs";
import{
  C as a
}
from"./motion.VrmvfAGV.mjs";
import{
  F as o,Pt as s,R as c,jt as l,s as u,tt as d,z as f
}
from"./framer.C3oT3yOV.mjs";
var p,m,h,g=e((()=>{
  d(),f.loadFonts([`GF;Roboto-regular`,`GF;Roboto-700`,`GF;Roboto-700italic`,`GF;Roboto-italic`]),p=[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammWggvWl0Qn.woff2`,weight:`700`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`italic`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLmbXiAr0klQnx24.woff2`,weight:`700`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`italic`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHQiAr0klQnx24.woff2`,weight:`400`
    }]
  }],m=[`.framer-LP5Vt .framer-styles-preset-3j1c0u:not(.rich-text-wrapper), .framer-LP5Vt .framer-styles-preset-3j1c0u.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, #b8b8b8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1199px) and (min-width: 810px) { .framer-LP5Vt .framer-styles-preset-3j1c0u:not(.rich-text-wrapper), .framer-LP5Vt .framer-styles-preset-3j1c0u.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, #b8b8b8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-LP5Vt .framer-styles-preset-3j1c0u:not(.rich-text-wrapper), .framer-LP5Vt .framer-styles-preset-3j1c0u.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-italic: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, #b8b8b8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],h=`framer-LP5Vt`
})),_,v,y,b,x,S,C,w,T=e((()=>{
  r(),d(),i(),_=`var(--framer-icon-mask)`,v=n(function(e,n){
    return t(`svg`,{
      ...e,ref:n,children:e.children
    })
  }),y=a.create(v),b=n((e,n)=>{
    let{
      animated:r,layoutId:i,children:a,...o
    }
    =e;
    return r?t(y,{
      ...o,layoutId:i,ref:n,children:a
    }):t(`svg`,{
      ...o,ref:n,children:a
    })
  }),x=`<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="11.25px" id="q_nKPtBGJ" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="MpPyBdaZ4" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="vndv5ExCK" transform="translate(12.75 14.25)" width="8.25px"/><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill="transparent" height="11.25px" id="vm9iwQat7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill="transparent" height="8.25px" id="ZJXViX94I" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill="transparent" height="5.25px" id="sATOM9inG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 14.25)" width="8.25px"/></svg>`,S=({
    alpha:e,color:t,height:n,id:r,width:i,width1:a,...o
  })=>({
    ...o,ezTt3ayMo:t??o.ezTt3ayMo??`rgb(0, 0, 0)`,lschgej4H:a??o.lschgej4H??1.5,qxTvv_EBh:e??o.qxTvv_EBh
  }),C=s(n(function(e,n){
    let{
      style:r,className:i,layoutId:a,variant:o,ezTt3ayMo:s,lschgej4H:u,qxTvv_EBh:d,...f
    }
    =S(e),p=l(`3151112179`,x);
    return t(b,{
      ...f,className:c(`framer-c2uAX`,i),layoutId:a,ref:n,role:`presentation`,style:{
        "--1m6trwb":d,"--21h8s6":s,"--pgex8v":u,...r
      },viewBox:`0 0 24 24`,children:t(`use`,{
        href:p
      })
    })
  }),[`.framer-c2uAX { -webkit-mask: ${_}; aspect-ratio: 1; display: block; mask: ${_}; width: 24px; }`],`framer-c2uAX`),C.displayName=`Shapes`,w=C,o(C,{
    ezTt3ayMo:{
      defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Color`,type:u.Color
    },lschgej4H:{
      defaultValue:1.5,displayStepper:!0,hidden:!1,max:6,min:0,step:.5,title:`Width`,type:u.Number
    },qxTvv_EBh:{
      defaultValue:0,displayStepper:!0,hidden:!1,max:1,min:0,step:.1,title:`Alpha`,type:u.Number
    }
  })
}));
export{
  p as a,m as i,w as n,g as o,h as r,T as t
};
//# sourceMappingURL=pKERsxd4H.DdHot75R.mjs.map
