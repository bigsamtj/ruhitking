import{
  t as e
}
from"./rolldown-runtime.OA-FSkXT.mjs";
import{
  A as t,O as n,P as r,c as i,g as a,j as o,o as s,w as c,y as l
}
from"./react.ChuBhxDh.mjs";
import{
  C as u,a as d,r as f,t as p
}
from"./motion.VrmvfAGV.mjs";
import{
  A as m,F as h,J as g,Nt as _,P as v,Pt as y,R as b,pt as x,s as S,tt as C,wt as w
}
from"./framer.C3oT3yOV.mjs";
import{
  i as T,n as E,r as D,t as O
}
from"./xYEC_wF3E.CyigU6-7.mjs";
function k(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var A,j,M,N,P,F,I,L,R,z,B,V=e((()=>{
  s(),C(),p(),c(),T(),A=[`erI3tUeoy`,`hDK5a9MFe`,`yNZY9d7E6`,`JIxpvZ_Qt`],j=`framer-p7RdD`,M={
    erI3tUeoy:`framer-v-1thyy3b`,hDK5a9MFe:`framer-v-1ht9o7o`,JIxpvZ_Qt:`framer-v-mkfrc4`,yNZY9d7E6:`framer-v-13gapy2`
  },N={
    bounce:.2,delay:0,duration:.3,type:`spring`
  },P=({
    value:e,children:n
  })=>{
    let r=t(d),a=e??r.transition,s=o(()=>({
      ...r,transition:a
    }),[JSON.stringify(a)]);
    return i(d.Provider,{
      value:s,children:n
    })
  },F={
    "View Article":`yNZY9d7E6`,"View Project":`hDK5a9MFe`,Default:`erI3tUeoy`,Grow:`JIxpvZ_Qt`
  },I=u.create(r),L=({
    height:e,id:t,width:n,...r
  })=>({
    ...r,variant:F[r.variant]??r.variant??`erI3tUeoy`
  }),R=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),z=y(a(function(e,t){
    let a=n(null),o=t??a,s=l(),{
      activeLocale:c,setLocale:d
    }
    =w();
    x();
    let{
      style:p,className:h,layoutId:g,variant:v,...y
    }
    =L(e),{
      baseVariant:S,classNames:C,clearLoadingGesture:T,gestureHandlers:E,gestureVariant:D,isLoading:F,setGestureState:z,setVariant:B,variants:V
    }
    =_({
      cycleOrder:A,defaultVariant:`erI3tUeoy`,ref:o,variant:v,variantClassNames:M
    }),H=R(e,V),U=b(j,O),W=()=>!![`hDK5a9MFe`,`yNZY9d7E6`].includes(S);
    return i(f,{
      id:g??s,children:i(I,{
        animate:V,initial:!1,children:i(P,{
          value:N,children:i(u.div,{
            ...y,...E,className:b(U,`framer-1thyy3b`,h,C),"data-framer-name":`Default`,layoutDependency:H,layoutId:`erI3tUeoy`,ref:o,style:{
              backdropFilter:`blur(5px)`,backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,borderBottomLeftRadius:24,borderBottomRightRadius:24,borderTopLeftRadius:24,borderTopRightRadius:24,WebkitBackdropFilter:`blur(5px)`,...p
            },...k({
              hDK5a9MFe:{
                "data-framer-name":`View Project`
              },JIxpvZ_Qt:{
                "data-framer-name":`Grow`
              },yNZY9d7E6:{
                "data-framer-name":`View Article`
              }
            },S,D),children:W()&&i(m,{
              __fromCanvasComponent:!0,children:i(r,{
                children:i(u.p,{
                  className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,dir:`auto`,children:`View Project`
                })
              }),className:`framer-1a1izkn`,fonts:[`Inter`],layoutDependency:H,layoutId:`FVlEuTNA5`,style:{
                "--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
              },verticalAlignment:`top`,withExternalLayout:!0,...k({
                yNZY9d7E6:{
                  children:i(r,{
                    children:i(u.p,{
                      className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,children:`View Article`
                    })
                  })
                }
              },S,D)
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-p7RdD.framer-1hb1wkg, .framer-p7RdD .framer-1hb1wkg { display: block; }`,`.framer-p7RdD.framer-1thyy3b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 16px; justify-content: center; mix-blend-mode: exclusion; overflow: hidden; padding: 0px; position: relative; width: 16px; will-change: var(--framer-will-change-override, transform); }`,`.framer-p7RdD .framer-1a1izkn { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,`.framer-p7RdD.framer-v-1ht9o7o.framer-1thyy3b, .framer-p7RdD.framer-v-13gapy2.framer-1thyy3b { height: min-content; mix-blend-mode: unset; padding: 8px 12px 8px 12px; width: min-content; }`,`.framer-p7RdD.framer-v-mkfrc4.framer-1thyy3b { height: 20px; width: 20px; }`,...E],`framer-p7RdD`),B=z,z.displayName=`Cursor`,z.defaultProps={
    height:16,width:16
  },h(z,{
    variant:{
      options:[`erI3tUeoy`,`hDK5a9MFe`,`yNZY9d7E6`,`JIxpvZ_Qt`],optionTitles:[`Default`,`View Project`,`View Article`,`Grow`],title:`Variant`,type:S.Enum
    }
  }),v(z,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`
    }]
  },...g(D)],{
    supportsExplicitInterCodegen:!0
  })
}));
export{
  V as n,B as t
};
//# sourceMappingURL=TMY2tIZqI.BGBDbtbD.mjs.map
