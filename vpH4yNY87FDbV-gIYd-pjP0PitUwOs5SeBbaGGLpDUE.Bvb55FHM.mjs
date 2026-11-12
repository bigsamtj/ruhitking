import{
  t as e
}
from"./rolldown-runtime.OA-FSkXT.mjs";
import{
  A as t,F as n,L as r,N as i,O as a,P as o,a as s,c,g as l,i as u,j as d,l as f,o as p,s as m,w as h,y as g,z as _
}
from"./react.ChuBhxDh.mjs";
import{
  C as v,H as y,X as b,a as x,n as S,r as C,t as w
}
from"./motion.VrmvfAGV.mjs";
import{
  A as T,At as ee,B as E,D,Dt as O,F as k,It as A,J as j,K as M,Lt as N,M as P,N as te,Nt as F,O as I,Ot as ne,P as L,Pt as R,R as z,T as B,Tt as re,Vt as ie,Y as ae,_ as oe,a as V,b as se,ct as ce,ft as le,g as ue,gt as de,h as H,i as fe,j as pe,jt as me,k as he,kt as U,n as ge,o as W,p as _e,pt as G,q as ve,s as K,tt as q,w as ye,wt as J,xt as be,yt as xe,z as Se,zt as Ce
}
from"./framer.C3oT3yOV.mjs";
import{
  i as we,n as Te,r as Ee,t as De
}
from"./aAdohScXF.DsE4I7Gj.mjs";
import{
  a as Oe,i as ke,n as Ae,o as je,r as Me,t as Ne
}
from"./afSIbvMDj.Bjy2yVoa.mjs";
import{
  i as Pe,n as Fe,r as Ie,t as Le
}
from"./nZIMpa9h8.CjAiQ-_N.mjs";
import{
  i as Re,n as ze,r as Be,t as Ve
}
from"./xYEC_wF3E.CyigU6-7.mjs";
import{
  i as He,r as Ue
}
from"./rKNwAsolT.DfLzMDmp.mjs";
import{
  a as We,i as Ge,n as Ke,o as qe,r as Y,t as Je
}
from"./pKERsxd4H.DdHot75R.mjs";
import{
  i as Ye,n as Xe,r as Ze,t as Qe
}
from"./wmceTUSWM.CoxcrCtm.mjs";
import{
  n as $e,t as et
}
from"./SiziyDfFp.DvzjF12g.mjs";
import{
  n as tt,t as nt
}
from"./Phosphor.BMduwC4o.mjs";
import{
  n as rt,t as it
}
from"./TMY2tIZqI.BGBDbtbD.mjs";
import{
  n as at,t as ot
}
from"./H4mg7DsTZ.BVTb5gqK.mjs";
import{
  a as st,c as ct,d as lt,f as ut,h as dt,i as ft,l as pt,m as mt,n as ht,o as gt,p as _t,r as vt,s as yt,t as bt,u as xt
}
from"./S05E3gKH6.BWPuesTl.mjs";
import{
  a as St,c as Ct,i as wt,n as Tt,o as Et,r as Dt,s as Ot,t as kt
}
from"./cboPoGvvZ.BkHT3BOn.mjs";
import{
  a as At,c as jt,i as Mt,l as Nt,n as Pt,o as Ft,r as It,s as Lt,t as Rt,u as zt
}
from"./rUZIxkN3p.FMKyygPn.mjs";
import{
  n as Bt,t as Vt
}
from"./WdNkl0JPc.DkbOx-uz.mjs";
import{
  n as Ht,t as Ut
}
from"./YhjCwsFY5.BtmOAPCE.mjs";
import{
  i as Wt,r as Gt
}
from"./lyp4ejQRr.C_52sVhX.mjs";
import{
  n as Kt,r as qt
}
from"./augiA20Il.BU7z8NyW.mjs";
function Jt(e){
  let{
    distance:t,direction:n,smoothing:r,enabled:o
  }
  =e,s=D.current()===D.canvas,l=$t(),u={
    damping:100,stiffness:Yt(r,0,100,2e3,50)
  },d=t*(n===`away`?-1:1),f=y(0),p=y(0),m=y(0),h=y(0),g=b(m,u),v=b(h,u),x=a(null),S=a(null),C=a(null),w=a(null),T=a(r!==0),ee=a(null),E=a(null),O=a(null);
  return i(()=>{
    let e=f.onChange(e=>m.set(o?e:0)),t=p.onChange(e=>h.set(o?e:0));
    return()=>{
      e(),t()
    }
  },[o,f,p,m,h]),i(()=>{
    m.set(o?f.get():0),h.set(o?p.get():0)
  },[o]),i(()=>{
    T.current=r!==0
  },[r]),i(()=>{
    let e,t=()=>{
      if(s||(e=requestAnimationFrame(t),!S.current||!w.current))return;
      let n=(T.current?g.get():m.get()).toFixed(3),r=(T.current?v.get():h.get()).toFixed(3),i=_.getComputedStyle(S.current),a=Xt(S.current,i,n,r,ee.current,E.current,O.current);
      C.current=a,w.current.textContent=`
				[data-parallaxfloating="${l}"] { transform: ${a} !important }
			`,ee.current=n,E.current=r,O.current=S.current.style.transform
    };
    if(x.current){
      let e=x.current.parentElement;
      if(e){
        let t=e.parentElement;
        t&&(S.current=t,t.setAttribute(`data-parallaxfloating`,l))
      }
    }
    return t(),()=>{
      e&&cancelAnimationFrame(e)
    }
  },[]),i(()=>{
    let e=e=>{
      let t=e.clientX,n=e.clientY,r=_.innerWidth/2,i=_.innerHeight/2,a=(t-r)/r*d,o=(n-i)/i*d;
      f.set(a),p.set(o)
    };
    return _.addEventListener(`mousemove`,e),()=>_.removeEventListener(`mousemove`,e)
  },[d,r,o]),c(`div`,{
    ref:x,style:{
      ...e.style
    },children:c(`style`,{
      ref:w
    })
  })
}
function Yt(e,t,n,r,i){
  return t===n?r:r+(e-t)/(n-t)*(i-r)
}
function Xt(e,t,n,r,i,a,o){
  n||=0,r||=0,i||=0,a||=0;
  let s=t.transform,c=e.style.transform,l=`translate(${n-i}px, ${r-a}px)`,u=l;
  return c&&c!==`none`&&(u=o&&o!==`none`?`${l} ${Zt(o)} ${c}`:`${l} ${c}`),s&&s!==`none`?`${u} ${s}`:u
}
function Zt(e){
  return(e.match(/\w+\([^)]+\)/g)||[]).reverse().map(e=>{
    let[t,n]=e.match(/(\w+)\(([^)]+)\)/).slice(1),r=n.split(`,`).map(e=>e.trim()),i=e=>{
      let[t,n,r,i]=e.match(/^(-?)(\d*\.?\d+)(\D*)$/);
      return`${n?``:`-`}${r}${i}`
    };
    switch(t.toLowerCase()){
      case`translate`:case`translate3d`:case`translatex`:case`translatey`:case`translatez`:return`${t}(${r.map(i).join(`, `)})`;
      case`scale`:case`scale3d`:return`${t}(${r.map(e=>1/parseFloat(e)).join(`, `)})`;
      case`scalex`:case`scaley`:case`scalez`:return`${t}(${1/parseFloat(r[0])})`;
      case`rotate`:case`rotatex`:case`rotatey`:case`rotatez`:return`${t}(${i(r[0])})`;
      case`rotate3d`:let n=r.map(parseFloat);
      return`${t}(${n[0]}, ${n[1]}, ${n[2]}, ${i(r[3])})`;
      case`skew`:case`skewx`:case`skewy`:return`${t}(${r.map(i).join(`, `)})`;
      case`matrix`:case`matrix3d`:return console.warn(`Inverting ${t} is not supported. Returning original.`),e;
      default:return console.warn(`Unknown transform function: ${t}. Returning original.`),e
    }
  }).join(` `)
}
var Qt,$t,en=e((()=>{
  r(),p(),q(),h(),w(),Jt.displayName=`Parallax Floating`,k(Jt,{
    enabled:{
      type:K.Boolean,defaultValue:!0
    },direction:{
      type:K.Enum,defaultValue:`away`,options:[`toward`,`away`],optionTitles:[`Toward`,`Away`],displaySegmentedControl:!0
    },distance:{
      type:K.Number,title:`Speed`,defaultValue:25,min:0,step:1,hidden:e=>!e.enabled
    },smoothing:{
      type:K.Number,defaultValue:50,min:0,max:100,step:1,description:`More components at [Framer University](https://frameruni.link/cc).`
    }
  }),Qt=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,$t=()=>d(()=>{
    let e=``;
    for(let t=0;t<13;t++)e+=Qt.charAt(Math.floor(Math.random()*52));
    return e
  },[])
})),tn,nn,rn,an,on,sn,cn,ln,un=e((()=>{
  p(),q(),h(),tn=`var(--framer-icon-mask)`,nn=l(function(e,t){
    return c(`svg`,{
      ...e,ref:t,children:e.children
    })
  }),rn=v.create(nn),an=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(rn,{
      ...a,layoutId:r,ref:t,children:i
    }):c(`svg`,{
      ...a,ref:t,children:i
    })
  }),on=`<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 4.5 L 0 0 L 9 0 L 9 4.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="4.5px" id="UH3gtddfs" transform="translate(7.5 6)" width="9px"/><path d="M 0 4.5 L 0 0 L 9 0 L 9 4.5 Z" fill="transparent" height="4.5px" id="ezpdn6FmW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 6)" width="9px"/><path d="M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 14.25 0 C 14.664 0 15 0.336 15 0.75 L 15 17.25 C 15 17.664 14.664 18 14.25 18 L 0.75 18 C 0.336 18 0 17.664 0 17.25 Z" fill="transparent" height="18px" id="ra7lMyovB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3.001)" width="15px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="tIfCq6FWX" transform="translate(7.125 12.75)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="JSqi_hmMp" transform="translate(10.875 12.75)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="r_hU6mkGO" transform="translate(14.625 12.75)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="mkULrqsrQ" transform="translate(7.125 16.5)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="rF2BTL6cD" transform="translate(10.875 16.5)" width="2.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="YcfvgfhLg" transform="translate(14.625 16.5)" width="2.25px"/></svg>`,sn=({
    alpha:e,color:t,height:n,id:r,width:i,width1:a,...o
  })=>({
    ...o,ezTt3ayMo:t??o.ezTt3ayMo??`rgb(0, 0, 0)`,lschgej4H:a??o.lschgej4H??1.5,qxTvv_EBh:e??o.qxTvv_EBh
  }),cn=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,ezTt3ayMo:o,lschgej4H:s,qxTvv_EBh:l,...u
    }
    =sn(e),d=me(`2813070399`,on);
    return c(an,{
      ...u,className:z(`framer-cTK3q`,r),layoutId:i,ref:t,role:`presentation`,style:{
        "--1m6trwb":l,"--21h8s6":o,"--pgex8v":s,...n
      },viewBox:`0 0 24 24`,children:c(`use`,{
        href:d
      })
    })
  }),[`.framer-cTK3q { -webkit-mask: ${tn}; aspect-ratio: 1; display: block; mask: ${tn}; width: 24px; }`],`framer-cTK3q`),cn.displayName=`Calculator`,ln=cn,k(cn,{
    ezTt3ayMo:{
      defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Color`,type:K.Color
    },lschgej4H:{
      defaultValue:1.5,displayStepper:!0,hidden:!1,max:6,min:0,step:.5,title:`Width`,type:K.Number
    },qxTvv_EBh:{
      defaultValue:0,displayStepper:!0,hidden:!1,max:1,min:0,step:.1,title:`Alpha`,type:K.Number
    }
  })
}));
function dn(e,t,n){
  return Math.max(e,Math.min(t,n))
}
var fn,pn,mn,hn,gn,_n,vn=e((()=>{
  r(),fn=class{
    advance(e){
      if(!this.isRunning)return;
      let t=!1;
      if(this.lerp)this.value=function(e,t,n,r){
        return function(e,t,n){
          return(1-n)*e+n*t
        }(e,t,1-Math.exp(-n*r))
      }(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);
      else{
        this.currentTime+=e;
        let n=dn(0,this.currentTime/this.duration,1);
        t=n>=1;
        let r=t?1:this.easing(n);
        this.value=this.from+(this.to-this.from)*r
      }
      t&&this.stop(),this.onUpdate?.(this.value,t)
    }
    stop(){
      this.isRunning=!1
    }
    fromTo(e,t,{
      lerp:n=.1,duration:r=1,easing:i=(e=>e),onStart:a,onUpdate:o
    }){
      this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o
    }
  },pn=class{
    constructor({
      wrapper:e,content:t,autoResize:n=!0,debounce:r=250
    }
    ={}){
      this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(e,t){
        let n;
        return function(){
          let r=arguments,i=this;
          clearTimeout(n),n=setTimeout((function(){
            e.apply(i,r)
          }),t)
        }
      }(this.resize,r),this.wrapper===_?_.addEventListener(`resize`,this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()
    }
    destroy(){
      this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),_.removeEventListener(`resize`,this.debouncedResize,!1)
    }
    resize=()=>{
      this.onWrapperResize(),this.onContentResize()
    };
    onWrapperResize=()=>{
      this.wrapper===_?(this.width=_.innerWidth,this.height=_.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)
    };
    onContentResize=()=>{
      this.wrapper===_?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)
    };
    get limit(){
      return{
        x:this.scrollWidth-this.width,y:this.scrollHeight-this.height
      }
    }
  },mn=class{
    constructor(){
      this.events={}
    }
    emit(e,...t){
      let n=this.events[e]||[];
      for(let e=0,r=n.length;e<r;e++)n[e](...t)
    }
    on(e,t){
      return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{
        this.events[e]=this.events[e]?.filter((e=>t!==e))
      }
    }
    off(e,t){
      this.events[e]=this.events[e]?.filter((e=>t!==e))
    }
    destroy(){
      this.events={}
    }
  },hn=100/6,gn=class{
    constructor(e,{
      wheelMultiplier:t=1,touchMultiplier:n=1
    }){
      this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={
        x:null,y:null
      },this.emitter=new mn,_.addEventListener(`resize`,this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,{
        passive:!1
      }),this.element.addEventListener(`touchstart`,this.onTouchStart,{
        passive:!1
      }),this.element.addEventListener(`touchmove`,this.onTouchMove,{
        passive:!1
      }),this.element.addEventListener(`touchend`,this.onTouchEnd,{
        passive:!1
      })
    }
    on(e,t){
      return this.emitter.on(e,t)
    }
    destroy(){
      this.emitter.destroy(),_.removeEventListener(`resize`,this.onWindowResize,!1),this.element.removeEventListener(`wheel`,this.onWheel,{
        passive:!1
      }),this.element.removeEventListener(`touchstart`,this.onTouchStart,{
        passive:!1
      }),this.element.removeEventListener(`touchmove`,this.onTouchMove,{
        passive:!1
      }),this.element.removeEventListener(`touchend`,this.onTouchEnd,{
        passive:!1
      })
    }
    onTouchStart=e=>{
      let{
        clientX:t,clientY:n
      }
      =e.targetTouches?e.targetTouches[0]:e;
      this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={
        x:0,y:0
      },this.emitter.emit(`scroll`,{
        deltaX:0,deltaY:0,event:e
      })
    };
    onTouchMove=e=>{
      let{
        clientX:t,clientY:n
      }
      =e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,i=-(n-this.touchStart.y)*this.touchMultiplier;
      this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={
        x:r,y:i
      },this.emitter.emit(`scroll`,{
        deltaX:r,deltaY:i,event:e
      })
    };
    onTouchEnd=e=>{
      this.emitter.emit(`scroll`,{
        deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e
      })
    };
    onWheel=e=>{
      let{
        deltaX:t,deltaY:n,deltaMode:r
      }
      =e;
      t*=r===1?hn:r===2?this.windowWidth:1,n*=r===1?hn:r===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit(`scroll`,{
        deltaX:t,deltaY:n,event:e
      })
    };
    onWindowResize=()=>{
      this.windowWidth=_.innerWidth,this.windowHeight=_.innerHeight
    }
  },_n=class{
    constructor({
      wrapper:e=_,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:r=n,smoothWheel:i=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:s=35,duration:c,easing:l=(e=>Math.min(1,1.001-2**(-10*e))),lerp:u=!c&&.1,infinite:d=!1,orientation:f=`vertical`,gestureOrientation:p=`vertical`,touchMultiplier:m=1,wheelMultiplier:h=1,autoResize:g=!0,prevent:v=!1,__experimental__naiveDimensions:y=!1
    }
    ={}){
      this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({
        deltaX:e,deltaY:t,event:n
      })=>{
        if(n.ctrlKey)return;
        let r=n.type.includes(`touch`),i=n.type.includes(`wheel`);
        if(this.isTouching=n.type===`touchstart`||n.type===`touchmove`,this.options.syncTouch&&r&&n.type===`touchstart`&&!this.isStopped&&!this.isLocked)return void this.reset();
        let a=e===0&&t===0,o=this.options.gestureOrientation===`vertical`&&t===0||this.options.gestureOrientation===`horizontal`&&e===0;
        if(a||o)return;
        let s=n.composedPath();
        s=s.slice(0,s.indexOf(this.rootElement));
        let c=this.options.prevent;
        if(s.find((e=>(typeof c==`function`?c?.(e):c)||e.hasAttribute?.call(e,`data-lenis-prevent`)||r&&e.hasAttribute?.call(e,`data-lenis-prevent-touch`)||i&&e.hasAttribute?.call(e,`data-lenis-prevent-wheel`)||e.classList?.contains(`lenis`)&&!e.classList?.contains(`lenis-stopped`))))return;
        if(this.isStopped||this.isLocked)return void n.preventDefault();
        if(!(this.options.syncTouch&&r||this.options.smoothWheel&&i))return this.isScrolling=`native`,void this.animate.stop();
        n.preventDefault();
        let l=t;
        this.options.gestureOrientation===`both`?l=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation===`horizontal`&&(l=e);
        let u=r&&this.options.syncTouch,d=r&&n.type===`touchend`&&Math.abs(l)>5;
        d&&(l=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+l,Object.assign({
          programmatic:!1
        },u?{
          lerp:d?this.options.syncTouchLerp:1
        }:{
          lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing
        }))
      },this.onNativeScroll=()=>{
        if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;
        else if(!1===this.isScrolling||this.isScrolling===`native`){
          let e=this.animatedScroll;
          this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isScrolling=`native`,this.emit(),this.velocity!==0&&(this.__resetVelocityTimeout=setTimeout((()=>{
            this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()
          }),400))
        }
      },_.lenisVersion=`1.1.2`,e!==document.documentElement&&e!==document.body||(e=_),this.options={
        wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:r,smoothWheel:i,syncTouch:a,syncTouchLerp:o,touchInertiaMultiplier:s,duration:c,easing:l,lerp:u,infinite:d,gestureOrientation:p,orientation:f,touchMultiplier:m,wheelMultiplier:h,autoResize:g,prevent:v,__experimental__naiveDimensions:y
      },this.animate=new fn,this.emitter=new mn,this.dimensions=new pn({
        wrapper:e,content:t,autoResize:g
      }),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll,!1),this.virtualScroll=new gn(r,{
        touchMultiplier:m,wheelMultiplier:h
      }),this.virtualScroll.on(`scroll`,this.onVirtualScroll)
    }
    destroy(){
      this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()
    }
    on(e,t){
      return this.emitter.on(e,t)
    }
    off(e,t){
      return this.emitter.off(e,t)
    }
    setScroll(e){
      this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e
    }
    resize(){
      this.dimensions.resize()
    }
    emit({
      userData:e={}
    }
    ={}){
      this.userData=e,this.emitter.emit(`scroll`,this),this.userData={}
    }
    reset(){
      this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()
    }
    start(){
      this.isStopped&&(this.isStopped=!1,this.reset())
    }
    stop(){
      this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())
    }
    raf(e){
      let t=e-(this.time||e);
      this.time=e,this.animate.advance(.001*t)
    }
    scrollTo(e,{
      offset:t=0,immediate:n=!1,lock:r=!1,duration:i=this.options.duration,easing:a=this.options.easing,lerp:o=!i&&this.options.lerp,onStart:s,onComplete:c,force:l=!1,programmatic:u=!0,userData:d={}
    }
    ={}){
      if(!this.isStopped&&!this.isLocked||l){
        if([`top`,`left`,`start`].includes(e))e=0;
        else if([`bottom`,`right`,`end`].includes(e))e=this.limit;
        else{
          let n;
          if(typeof e==`string`?n=document.querySelector(e):e!=null&&e.nodeType&&(n=e),n){
            if(this.options.wrapper!==_){
              let e=this.options.wrapper.getBoundingClientRect();
              t-=this.isHorizontal?e.left:e.top
            }
            let r=n.getBoundingClientRect();
            e=(this.isHorizontal?r.left:r.top)+this.animatedScroll
          }
        }
        if(typeof e==`number`){
          if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=dn(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(c==null||c(this));
          e!==this.targetScroll&&(u||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{
            duration:i,easing:a,lerp:o,onStart:()=>{
              r&&(this.isLocked=!0),this.isScrolling=`smooth`,s?.(this)
            },onUpdate:(e,t)=>{
              this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),u&&(this.targetScroll=e),t||this.emit({
                userData:d
              }),t&&(this.reset(),this.emit({
                userData:d
              }),c?.(this),this.__preventNextNativeScrollEvent=!0)
            }
          }))
        }
      }
    }
    get rootElement(){
      return this.options.wrapper===_?document.documentElement:this.options.wrapper
    }
    get limit(){
      return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]
    }
    get isHorizontal(){
      return this.options.orientation===`horizontal`
    }
    get actualScroll(){
      return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop
    }
    get scroll(){
      return this.options.infinite?function(e,t){
        return(e%t+t)%t
      }(this.animatedScroll,this.limit):this.animatedScroll
    }
    get progress(){
      return this.limit===0?1:this.scroll/this.limit
    }
    get isScrolling(){
      return this.__isScrolling
    }
    set isScrolling(e){
      this.__isScrolling!==e&&(this.__isScrolling=e,this.updateClassName())
    }
    get isStopped(){
      return this.__isStopped
    }
    set isStopped(e){
      this.__isStopped!==e&&(this.__isStopped=e,this.updateClassName())
    }
    get isLocked(){
      return this.__isLocked
    }
    set isLocked(e){
      this.__isLocked!==e&&(this.__isLocked=e,this.updateClassName())
    }
    get isSmooth(){
      return this.isScrolling===`smooth`
    }
    get className(){
      let e=`lenis`;
      return this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e
    }
    updateClassName(){
      this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName(){
      this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,``).trim()
    }
  }
}));
function yn(e){
  let{
    intensity:t
  }
  =e,n=a(null);
  return i(()=>{
    if(n.current)try{
      n.current.scrollTo(0,{
        immediate:!0
      })
    }catch(e){
      console.error(`Error scrolling to top:`,e)
    }
  },[n]),i(()=>{
    let e=()=>{
      try{
        let e=document.querySelector(`[data-frameruni-stop-scroll]`),t=document.documentElement,r=t&&t.style&&t.style.overflow===`hidden`;
        n.current&&(e||r?n.current.stop():n.current.start())
      }catch(e){
        console.error(`Error in checkForStopScroll:`,e)
      }
    };
    e();
    let t,r;
    try{
      t=new MutationObserver(e),r=new MutationObserver(e),document&&document.documentElement&&(t.observe(document.documentElement,{
        childList:!0,subtree:!0,attributes:!0,attributeFilter:[`data-frameruni-stop-scroll`]
      }),r.observe(document.documentElement,{
        attributes:!0,attributeFilter:[`style`]
      }))
    }catch(e){
      console.error(`Error setting up observers:`,e)
    }
    return()=>{
      try{
        t&&t.disconnect(),r&&r.disconnect()
      }catch(e){
        console.error(`Error disconnecting observers:`,e)
      }
    }
  },[]),i(()=>{
    try{
      if(!document)return;
      let e=document.getElementsByTagName(`*`);
      for(let t=0;t<e.length;t++){
        let n=e[t];
        if(n)try{
          let e=_.getComputedStyle(n);
          e&&e.getPropertyValue(`overflow`)===`auto`&&n.setAttribute(`data-lenis-prevent`,`true`)
        }catch(e){
          console.error(`Error getting computed style:`,e)
        }
      }
    }catch(e){
      console.error(`Error in overflow detection:`,e)
    }
  },[]),i(()=>{
    try{
      if(typeof _n!=`function`){
        console.error(`Lenis is not available`);
        return
      }
      n.current=new _n({
        duration:(t||10)/10
      });
      let e=t=>{
        if(n.current)try{
          n.current.raf(t),requestAnimationFrame(e)
        }catch(e){
          console.error(`Error in animation frame:`,e)
        }
      },r=requestAnimationFrame(e);
      return()=>{
        if(cancelAnimationFrame(r),n.current)try{
          n.current.destroy(),n.current=null
        }catch(e){
          console.error(`Error destroying Lenis:`,e)
        }
      }
    }catch(e){
      return console.error(`Error initializing Lenis:`,e),()=>{}
    }
  },[t]),i(()=>{
    try{
      if(!document||!n.current)return;
      let e=Array.from(document.querySelectorAll(`a[href]`)||[]).filter(e=>{
        if(!e)return!1;
        let t=e;
        if(!t.href)return!1;
        let n=t.href.startsWith(_.location.origin)||t.href.startsWith(`./`)||t.href.startsWith(`/`),r=t.href.includes(`#`);
        return n&&r
      }).map(e=>{
        try{
          let t=e,n=t.href.includes(`#`)?`#${t.href.split(`#`).pop()}`:``,r=n?decodeURIComponent(n):``,i=0;
          try{
            if(r){
              let e=document.querySelector(r);
              if(e){
                let t=_.getComputedStyle(e).scrollMarginTop;
                i=t&&parseInt(t)||0
              }
            }
          }catch(e){
            console.error(`Error finding target element:`,e)
          }
          return{
            href:n,scrollMargin:i,anchorElement:t
          }
        }catch(e){
          return console.error(`Error processing anchor:`,e),null
        }
      }).filter(Boolean),t=(e,t,r)=>{
        try{
          e&&e.preventDefault&&e.preventDefault(),n.current&&t&&n.current.scrollTo(t,{
            offset:-(r||0)
          })
        }catch(e){
          console.error(`Error in anchor click handler:`,e)
        }
      },r=e.map(({
        href:e,scrollMargin:n
      })=>r=>t(r,e,n));
      return e.forEach(({
        anchorElement:e
      },t)=>{
        e&&r[t]&&e.addEventListener(`click`,r[t])
      }),()=>{
        e.forEach(({
          anchorElement:e
        },t)=>{
          e&&r[t]&&e.removeEventListener(`click`,r[t])
        })
      }
    }catch(e){
      return console.error(`Error setting up anchor links:`,e),()=>{}
    }
  },[n]),c(`div`,{
    style:e.style
  })
}
var bn,xn,Sn=e((()=>{
  r(),p(),q(),vn(),h(),bn=R(yn,[`html.lenis { height: auto; }`,`.lenis.lenis-smooth { scroll-behavior: auto !important; }`,`.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,`.lenis.lenis-stopped { overflow: hidden; }`,`.lenis.lenis-scrolling iframe { pointer-events: none; }`],``),xn=bn,bn.displayName=`Smooth Scroll`,k(bn,{
    intensity:{
      title:`Intensity`,type:K.Number,defaultValue:10,min:0,description:`More components at [Framer University](https://frameruni.link/cc).`
    }
  })
}));
function Cn(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In=e((()=>{
  p(),q(),w(),h(),wn=[`zyqkpAiKT`,`LBG5uRyG7`],Tn=`framer-49GGu`,En={
    LBG5uRyG7:`framer-v-tw7mq6`,zyqkpAiKT:`framer-v-1cdg809`
  },Dn={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },On={
    bounce:.4,delay:0,duration:.6,type:`spring`
  },kn=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },An={
    Closed:`zyqkpAiKT`,Open:`LBG5uRyG7`
  },jn=v.create(o),Mn=({
    click:e,fill:t,height:n,id:r,width:i,...a
  })=>({
    ...a,G35FFUSYT:e??a.G35FFUSYT,UicWLgXHX:t??a.UicWLgXHX??`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`,variant:An[a.variant]??a.variant??`zyqkpAiKT`
  }),Nn=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Pn=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:o,setLocale:s
    }
    =J();
    G();
    let{
      style:l,className:u,layoutId:d,variant:p,G35FFUSYT:m,UicWLgXHX:h,..._
    }
    =Mn(e),{
      baseVariant:y,classNames:b,clearLoadingGesture:x,gestureHandlers:S,gestureVariant:w,isLoading:T,setGestureState:ee,setVariant:E,variants:D
    }
    =F({
      cycleOrder:wn,defaultVariant:`zyqkpAiKT`,ref:r,variant:p,variantClassNames:En
    }),O=Nn(e,D),{
      activeVariantCallback:k,delay:A
    }
    =le(y),j=k(async(...e)=>{
      if(ee({
        isPressed:!1
      }),m&&await m(...e)===!1)return!1
    }),M=z(Tn);
    return c(C,{
      id:d??i,children:c(jn,{
        animate:D,initial:!1,children:c(kn,{
          value:Dn,...Cn({
            LBG5uRyG7:{
              value:On
            }
          },y,w),children:f(v.button,{
            ..._,...S,"aria-label":`Close`,className:z(M,`framer-1cdg809`,u,b),"data-framer-name":`Closed`,"data-highlight":!0,"data-reset":`button`,layoutDependency:O,layoutId:`zyqkpAiKT`,onTap:j,ref:r,style:{
              ...l
            },...Cn({
              LBG5uRyG7:{
                "aria-label":`Open`,"data-framer-name":`Open`
              }
            },y,w),children:[c(v.div,{
              className:`framer-rbawyn`,"data-framer-name":`Line 2`,layoutDependency:O,layoutId:`WffA6nqgK`,style:{
                backgroundColor:`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,rotate:270
              },variants:{
                LBG5uRyG7:{
                  backgroundColor:h
                }
              }
            }),c(v.div,{
              className:`framer-u1khbe`,"data-framer-name":`Line 1`,layoutDependency:O,layoutId:`hhD6Geg22`,style:{
                backgroundColor:`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,rotate:90
              },variants:{
                LBG5uRyG7:{
                  backgroundColor:h,rotate:0
                }
              }
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-49GGu.framer-1iokbyj, .framer-49GGu .framer-1iokbyj { display: block; }`,`.framer-49GGu.framer-1cdg809 { cursor: pointer; height: 28px; overflow: hidden; position: relative; width: 28px; }`,`.framer-49GGu .framer-rbawyn, .framer-49GGu .framer-u1khbe { flex: none; height: 10px; left: calc(50.00000000000002% - 2px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 2px; }`,`.framer-49GGu.framer-v-tw7mq6.framer-1cdg809 { overflow: visible; }`],`framer-49GGu`),Fn=Pn,Pn.displayName=`Plus Icon`,Pn.defaultProps={
    height:28,width:28
  },k(Pn,{
    variant:{
      options:[`zyqkpAiKT`,`LBG5uRyG7`],optionTitles:[`Closed`,`Open`],title:`Variant`,type:K.Enum
    },G35FFUSYT:{
      title:`Click`,type:K.EventHandler
    },UicWLgXHX:{
      defaultValue:`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250)) /* {"name":"Gray 5"} */`,title:`Fill`,type:K.Color
    }
  }),L(Pn,[{
    explicitInter:!0,fonts:[]
  }],{
    supportsExplicitInterCodegen:!0
  })
}));
function Ln(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n=e((()=>{
  p(),q(),w(),h(),qe(),In(),He(),Rn=M(Ue),zn=M(Fn),Bn={
    cJZx9_mDy:{
      hover:!0
    }
  },Vn=[`cJZx9_mDy`,`LOJU7B9ti`],Hn=`framer-reKLr`,Un={
    cJZx9_mDy:`framer-v-6zwjuv`,LOJU7B9ti:`framer-v-15chioe`
  },Wn={
    bounce:.2,delay:0,duration:.5,type:`spring`
  },Gn=(...e)=>{
    for(let t of e)if(t&&typeof t==`string`)return t
  },Kn=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },qn={
    "Main CTA":`cJZx9_mDy`,Mobile:`LOJU7B9ti`
  },Jn=v.create(o),Yn=({
    buttonText:e,height:t,id:n,link:r,width:i,...a
  })=>({
    ...a,F5kijZeBS:e??a.F5kijZeBS??`Book a call with me`,N1vCdSJNj:r??a.N1vCdSJNj,variant:qn[a.variant]??a.variant??`cJZx9_mDy`
  }),Xn=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Zn=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J(),u=G(),{
      style:d,className:p,layoutId:m,variant:h,N1vCdSJNj:_,F5kijZeBS:y,...b
    }
    =Yn(e),{
      baseVariant:x,classNames:S,clearLoadingGesture:w,gestureHandlers:ee,gestureVariant:E,isLoading:D,setGestureState:O,setVariant:k,variants:A
    }
    =F({
      cycleOrder:Vn,defaultVariant:`cJZx9_mDy`,enabledGestures:Bn,ref:r,variant:h,variantClassNames:Un
    }),j=Xn(e,A),M=z(Hn,Y),N=()=>E===`cJZx9_mDy-hover`;
    return c(C,{
      id:m??i,children:c(Jn,{
        animate:A,initial:!1,children:c(Kn,{
          value:Wn,children:c(se,{
            href:_,motionChild:!0,nodeId:`cJZx9_mDy`,openInNewTab:!1,scopeId:`ADQPaX3Fi`,smoothScroll:!0,children:f(v.a,{
              ...b,...ee,"aria-label":`Button`,className:`${z(M,`framer-6zwjuv`,p,S)} framer-1bly9cx`,"data-framer-name":`Main CTA`,layoutDependency:j,layoutId:`cJZx9_mDy`,ref:r,style:{
                backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,borderBottomLeftRadius:24,borderBottomRightRadius:24,borderTopLeftRadius:24,borderTopRightRadius:24,boxShadow:`0px 0.48174984141951427px 0.8671497145551256px -1.1666666666666665px rgba(234, 0, 68, 0.68), 0px 1.8308266425947657px 3.295487956670578px -2.333333333333333px rgba(234, 0, 68, 0.61), 0px 8px 14.399999999999999px -3.5px rgba(234, 0, 68, 0.3), inset 0.3184767494094558px 0.43790553043800173px 0.3248814086107982px -1.1875px rgba(255, 255, 255, 0.91), inset 0.9658024572418071px 1.3279783787074848px 0.9852250229579px -2.375px rgba(255, 255, 255, 0.84), inset 2.5530614085937846px 3.5104594368164537px 2.6044042091984205px -3.5625px rgba(255, 255, 255, 0.66), inset 8px 11px 8.160882305241268px -4.75px rgba(255, 255, 255, 0.05)`,...d
              },...Ln({
                "cJZx9_mDy-hover":{
                  "data-framer-name":void 0
                },LOJU7B9ti:{
                  "data-framer-name":`Mobile`
                }
              },x,E),children:[f(v.div,{
                className:`framer-1ja6xnx`,"data-framer-name":`Me + You`,layoutDependency:j,layoutId:`UUqlAWUoz`,children:[N()&&c(V,{
                  ...Ln({
                    "cJZx9_mDy-hover":{
                      height:32,width:`32px`,y:(u?.y||0)+(8+((u?.height||48)-16-32)/2)+0
                    }
                  },x,E),children:c(P,{
                    className:`framer-sohi8j-container`,layoutDependency:j,layoutId:`k8PSaIebJ-container`,nodeId:`k8PSaIebJ`,rendersWithMotion:!0,scopeId:`ADQPaX3Fi`,children:c(Ue,{
                      height:`100%`,id:`k8PSaIebJ`,layoutId:`k8PSaIebJ`,style:{
                        height:`100%`,width:`100%`
                      },width:`100%`
                    })
                  })
                }),N()&&c(V,{
                  ...Ln({
                    "cJZx9_mDy-hover":{
                      height:16,width:`16px`,y:(u?.y||0)+(8+((u?.height||48)-16-32)/2)+8
                    }
                  },x,E),children:c(P,{
                    className:`framer-6f6kfp-container`,layoutDependency:j,layoutId:`OyNL3RCJ4-container`,nodeId:`OyNL3RCJ4`,rendersWithMotion:!0,scopeId:`ADQPaX3Fi`,style:{
                      filter:`invert(1)`,WebkitFilter:`invert(1)`
                    },children:c(Fn,{
                      height:`100%`,id:`OyNL3RCJ4`,layoutId:`OyNL3RCJ4`,style:{
                        height:`100%`,width:`100%`
                      },UicWLgXHX:`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`,variant:Gn(`LBG5uRyG7`),width:`100%`
                    })
                  })
                }),N()&&c(v.div,{
                  className:`framer-1s2ik12`,"data-framer-name":`You Circle`,layoutDependency:j,layoutId:`yn8R_UvTQ`,style:{
                    backgroundColor:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`,borderBottomLeftRadius:1142.86,borderBottomRightRadius:1142.86,borderTopLeftRadius:1142.86,borderTopRightRadius:1142.86,filter:`none`,WebkitFilter:`none`
                  },variants:{
                    "cJZx9_mDy-hover":{
                      borderBottomLeftRadius:1e3,borderBottomRightRadius:1e3,borderTopLeftRadius:1e3,borderTopRightRadius:1e3,filter:`blur(0px)`,WebkitFilter:`blur(0px)`
                    }
                  },children:c(T,{
                    __fromCanvasComponent:!0,children:c(o,{
                      children:c(v.p,{
                        dir:`auto`,style:{
                          "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`112%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(0, 0, 0)))`
                        },children:`You`
                      })
                    }),className:`framer-1gquvlj`,fonts:[`GF;Roboto-regular`],layoutDependency:j,layoutId:`ilzlfDffK`,style:{
                      "--extracted-r6o4lv":`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(0, 0, 0))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                    },verticalAlignment:`top`,withExternalLayout:!0
                  })
                })]
              }),c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    className:`framer-styles-preset-3j1c0u`,"data-styles-preset":`fdldKf5t1`,dir:`auto`,style:{
                      "--framer-text-color":`var(--extracted-r6o4lv, var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255)))`
                    },children:`Book a call with me`
                  })
                }),className:`framer-rjcjhg`,fonts:[`Inter`],layoutDependency:j,layoutId:`DyOxfb68z`,style:{
                  "--extracted-r6o4lv":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,filter:`blur(0px)`,WebkitFilter:`blur(0px)`
                },text:y,verticalAlignment:`top`,withExternalLayout:!0
              })]
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-reKLr.framer-1bly9cx, .framer-reKLr .framer-1bly9cx { display: block; }`,`.framer-reKLr.framer-6zwjuv { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,`.framer-reKLr .framer-1ja6xnx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4.57px; height: min-content; justify-content: center; min-height: 28px; min-width: 1px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-reKLr .framer-sohi8j-container { flex: none; height: 32px; position: relative; width: 32px; z-index: 2; }`,`.framer-reKLr .framer-6f6kfp-container { flex: none; height: 16px; left: 0px; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 16px; z-index: 1; }`,`.framer-reKLr .framer-1s2ik12 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 57.14px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 32px; z-index: 1; }`,`.framer-reKLr .framer-1gquvlj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-reKLr .framer-rjcjhg { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; }`,`.framer-reKLr.framer-v-15chioe.framer-6zwjuv { cursor: unset; }`,`.framer-reKLr.framer-v-6zwjuv.hover .framer-1ja6xnx { min-height: unset; min-width: unset; }`,`.framer-reKLr.framer-v-6zwjuv.hover .framer-6f6kfp-container { left: unset; position: relative; top: unset; }`,`.framer-reKLr.framer-v-6zwjuv.hover .framer-1s2ik12 { bottom: unset; height: 32px; left: unset; position: relative; top: unset; }`,...Ge],`framer-reKLr`),Qn=Zn,Zn.displayName=`Call Button`,Zn.defaultProps={
    height:44,width:173
  },k(Zn,{
    variant:{
      options:[`cJZx9_mDy`,`LOJU7B9ti`],optionTitles:[`Main CTA`,`Mobile`],title:`Variant`,type:K.Enum
    },N1vCdSJNj:{
      description:``,title:`Link`,type:K.Link
    },F5kijZeBS:{
      defaultValue:`Book a call with me`,displayTextArea:!1,title:`Button Text`,type:K.String
    },onF5kijZeBSChange:{
      changes:`F5kijZeBS`,type:K.ChangeHandler
    }
  }),L(Zn,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
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
  },...Rn,...zn,...j(We)],{
    supportsExplicitInterCodegen:!0
  }),Zn.loader={
    load:(e,t)=>(t.locale,Promise.allSettled([E(Ue,{},t),E(Fn,{},t)]))
  }
})),er,tr,nr,rr=e((()=>{
  q(),Se.loadFonts([`GF;Roboto-regular`,`Inter-Bold`,`Inter-BoldItalic`,`Inter-Italic`]),er=[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,weight:`400`
    }]
  }],tr=[`.framer-13EyV .framer-styles-preset-kfg4sj:not(.rich-text-wrapper), .framer-13EyV .framer-styles-preset-kfg4sj.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1199px) and (min-width: 992px) { .framer-13EyV .framer-styles-preset-kfg4sj:not(.rich-text-wrapper), .framer-13EyV .framer-styles-preset-kfg4sj.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 991px) and (min-width: 768px) { .framer-13EyV .framer-styles-preset-kfg4sj:not(.rich-text-wrapper), .framer-13EyV .framer-styles-preset-kfg4sj.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 767px) and (min-width: 0px) { .framer-13EyV .framer-styles-preset-kfg4sj:not(.rich-text-wrapper), .framer-13EyV .framer-styles-preset-kfg4sj.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 160em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],nr=`framer-13EyV`
})),ir,ar,or,sr=e((()=>{
  q(),Se.loadFonts([`GF;Roboto-regular`,`Inter-Bold`,`Inter-BoldItalic`,`Inter-Italic`]),ir=[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,weight:`700`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,weight:`400`
    },{
      cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,weight:`400`
    }]
  }],ar=[`.framer-Yo8OF .framer-styles-preset-1c2yfzg:not(.rich-text-wrapper), .framer-Yo8OF .framer-styles-preset-1c2yfzg.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1199px) and (min-width: 992px) { .framer-Yo8OF .framer-styles-preset-1c2yfzg:not(.rich-text-wrapper), .framer-Yo8OF .framer-styles-preset-1c2yfzg.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 991px) and (min-width: 768px) { .framer-Yo8OF .framer-styles-preset-1c2yfzg:not(.rich-text-wrapper), .framer-Yo8OF .framer-styles-preset-1c2yfzg.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 767px) and (min-width: 0px) { .framer-Yo8OF .framer-styles-preset-1c2yfzg:not(.rich-text-wrapper), .framer-Yo8OF .framer-styles-preset-1c2yfzg.rich-text-wrapper p { --framer-font-family: "Roboto", "Roboto Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 112%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],or=`framer-Yo8OF`
}));
function cr(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr=e((()=>{
  p(),q(),w(),h(),tt(),mt(),wt(),Ct(),rr(),zt(),ut(),Re(),sr(),ct(),lr=M(nt),ur={
    Q6s2KXSCm:{
      hover:!0
    }
  },dr=[`Q6s2KXSCm`,`hxl3kFduo`],fr=`framer-VEQGw`,pr={
    hxl3kFduo:`framer-v-2ev1cw`,Q6s2KXSCm:`framer-v-glyuwv`
  },mr={
    delay:0,duration:.5,ease:[.44,0,.56,1],type:`tween`
  },hr=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{
    src:e
  }:void 0,gr=e=>Array.isArray(e)?e.length>0:e!=null&&e!==``,_r=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },vr={
    "Testimonial Card":`Q6s2KXSCm`,"Variant 2":`hxl3kFduo`
  },yr=v.create(o),br=({
    avatar:e,avatarVisible:t,height:n,id:r,name1:i,quote:a,role:s,starsVisible:l,width:u,...d
  })=>({
    ...d,HEEE23pzd:e??d.HEEE23pzd??{
      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/JCtMLJYmxiDeinol8i8gPiwOio.jpg?width=76&height=76`
    },iLSSd0G_p:s??d.iLSSd0G_p??`Customer Manager at SupportEase`,oAP3LPOjN:a??d.oAP3LPOjN??f(o,{
      children:[c(v.p,{
        dir:`auto`,children:`Hey`
      }),c(v.p,{
        dir:`auto`,children:`Hey`
      })]
    }),rTOF5483x:l??d.rTOF5483x,uCIug9WJ5:t??d.uCIug9WJ5??!0,uVJXGOkcn:i??d.uVJXGOkcn??`Mark Martinez`,variant:vr[d.variant]??d.variant??`Q6s2KXSCm`
  }),xr=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Sr=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J(),u=G(),{
      style:d,className:p,layoutId:m,variant:h,oAP3LPOjN:_,HEEE23pzd:y,uVJXGOkcn:b,iLSSd0G_p:x,uCIug9WJ5:S,rTOF5483x:w,...ee
    }
    =br(e),{
      baseVariant:E,classNames:D,clearLoadingGesture:O,gestureHandlers:k,gestureVariant:A,isLoading:j,setGestureState:M,setVariant:N,variants:te
    }
    =F({
      cycleOrder:dr,defaultVariant:`Q6s2KXSCm`,enabledGestures:ur,ref:r,variant:h,variantClassNames:pr
    }),I=xr(e,te),ne=z(fr,St,Lt,kt,st,pt,nr,Ve,or),L=gr(x);
    return c(C,{
      id:m??i,children:c(yr,{
        animate:te,initial:!1,children:c(_r,{
          value:mr,children:c(v.div,{
            ...ee,...k,className:z(ne,`framer-glyuwv`,p,D),"data-border":!0,"data-framer-name":`Testimonial Card`,layoutDependency:I,layoutId:`Q6s2KXSCm`,ref:r,style:{
              "--border-bottom-width":`1px`,"--border-color":`rgba(84, 84, 84, 0.5)`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:`0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03)`,...d
            },variants:{
              "Q6s2KXSCm-hover":{
                backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
              }
            },...cr({
              "Q6s2KXSCm-hover":{
                "data-framer-name":void 0
              },hxl3kFduo:{
                "data-framer-name":`Variant 2`
              }
            },E,A),children:f(v.div,{
              className:`framer-1i06hgf`,"data-framer-name":`Container`,layoutDependency:I,layoutId:`hclwMQulK`,children:[f(v.div,{
                className:`framer-1mlu58z`,"data-framer-name":`Quote`,layoutDependency:I,layoutId:`UW6eq2X8z`,children:[c(pe,{
                  className:`framer-15g6tjo`,"data-framer-name":`Quote Symbol`,layout:`position`,layoutDependency:I,layoutId:`npsoScejb`,opacity:1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 21"><path d="M 6.753 10 L 6.753 4.188 L 8.577 0 L 11.181 0 L 10.27 4.188 L 12 4.188 L 12 10 Z M 0 10 L 0 4.188 L 1.823 0 L 4.446 0 L 3.516 4.188 L 5.247 4.188 L 5.247 10 Z" fill="var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250)) /* {&quot;name&quot;:&quot;Gray 5&quot;} */"></path></svg>`,svgContentId:9602244525,withExternalLayout:!0
                }),c(fe,{
                  presets:{
                    "module:0sWquksFr1YDkaIgrl9Z/VgWe6mCMJOseqaLiMnaC/Vimeo.js:default":dt.fBK8KGgLM,"module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube":dt.ToiwT9ohE,"module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":dt.dhYriWl2c
                  },children:c(T,{
                    __fromCanvasComponent:!0,children:_,className:`framer-10mqgxp`,"data-framer-name":`Quote`,fonts:[`Inter`],layoutDependency:I,layoutId:`Cb2iHqoXb`,style:{
                      "--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                    },stylesPresetsClassNames:{
                      blockquote:`framer-styles-preset-1hz9sz8`,h5:`framer-styles-preset-u4yk8u`,h6:`framer-styles-preset-yl6emr`,img:`framer-styles-preset-7lwmgv`,p:`framer-styles-preset-xtga9w`,table:`framer-styles-preset-p3d9bn`
                    },verticalAlignment:`top`,withExternalLayout:!0,...cr({
                      "Q6s2KXSCm-hover":{
                        stylesPresetsClassNames:{
                          blockquote:`framer-styles-preset-1hz9sz8`,h5:`framer-styles-preset-u4yk8u`,h6:`framer-styles-preset-yl6emr`,img:`framer-styles-preset-7lwmgv`,p:`framer-styles-preset-kfg4sj`,table:`framer-styles-preset-p3d9bn`
                        }
                      }
                    },E,A)
                  })
                })]
              }),f(v.div,{
                className:`framer-194e1k2`,"data-framer-name":`Details / Rating`,layoutDependency:I,layoutId:`YH_vmClUn`,children:[w!==!1&&f(v.div,{
                  className:`framer-182270u`,"data-framer-name":`Rating`,layoutDependency:I,layoutId:`lpC6qU5Y1`,children:[c(V,{
                    children:c(P,{
                      className:`framer-1r73bjm-container`,"data-framer-name":`Star`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:I,layoutId:`blHZwtDsj-container`,name:`Star`,nodeId:`blHZwtDsj`,rendersWithMotion:!0,scopeId:`b5_f4Rs4a`,children:c(nt,{
                        color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`Star`,id:`blHZwtDsj`,layoutId:`blHZwtDsj`,mirrored:!1,name:`Star`,selectByList:!0,style:{
                          height:`100%`,width:`100%`
                        },weight:`fill`,width:`100%`,...cr({
                          "Q6s2KXSCm-hover":{
                            color:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                          }
                        },E,A)
                      })
                    })
                  }),c(V,{
                    children:c(P,{
                      className:`framer-1d6see9-container`,"data-framer-name":`Star`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:I,layoutId:`t4ZBLI7Eu-container`,name:`Star`,nodeId:`t4ZBLI7Eu`,rendersWithMotion:!0,scopeId:`b5_f4Rs4a`,children:c(nt,{
                        color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`Star`,id:`t4ZBLI7Eu`,layoutId:`t4ZBLI7Eu`,mirrored:!1,name:`Star`,selectByList:!0,style:{
                          height:`100%`,width:`100%`
                        },weight:`fill`,width:`100%`,...cr({
                          "Q6s2KXSCm-hover":{
                            color:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                          }
                        },E,A)
                      })
                    })
                  }),c(V,{
                    children:c(P,{
                      className:`framer-tt7up2-container`,"data-framer-name":`Star`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:I,layoutId:`V2LJ9hMIq-container`,name:`Star`,nodeId:`V2LJ9hMIq`,rendersWithMotion:!0,scopeId:`b5_f4Rs4a`,children:c(nt,{
                        color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`Star`,id:`V2LJ9hMIq`,layoutId:`V2LJ9hMIq`,mirrored:!1,name:`Star`,selectByList:!0,style:{
                          height:`100%`,width:`100%`
                        },weight:`fill`,width:`100%`,...cr({
                          "Q6s2KXSCm-hover":{
                            color:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                          }
                        },E,A)
                      })
                    })
                  }),c(V,{
                    children:c(P,{
                      className:`framer-1tl6g1d-container`,"data-framer-name":`Star`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:I,layoutId:`v4Tv1L7vK-container`,name:`Star`,nodeId:`v4Tv1L7vK`,rendersWithMotion:!0,scopeId:`b5_f4Rs4a`,children:c(nt,{
                        color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`Star`,id:`v4Tv1L7vK`,layoutId:`v4Tv1L7vK`,mirrored:!1,name:`Star`,selectByList:!0,style:{
                          height:`100%`,width:`100%`
                        },weight:`fill`,width:`100%`,...cr({
                          "Q6s2KXSCm-hover":{
                            color:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                          }
                        },E,A)
                      })
                    })
                  }),c(V,{
                    children:c(P,{
                      className:`framer-rxbqki-container`,"data-framer-name":`Star`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:I,layoutId:`f6f7ht7s_-container`,name:`Star`,nodeId:`f6f7ht7s_`,rendersWithMotion:!0,scopeId:`b5_f4Rs4a`,children:c(nt,{
                        color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`Star`,id:`f6f7ht7s_`,layoutId:`f6f7ht7s_`,mirrored:!1,name:`Star`,selectByList:!0,style:{
                          height:`100%`,width:`100%`
                        },weight:`fill`,width:`100%`,...cr({
                          "Q6s2KXSCm-hover":{
                            color:`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                          }
                        },E,A)
                      })
                    })
                  })]
                }),f(v.div,{
                  className:`framer-191zago`,"data-framer-name":`Details`,layoutDependency:I,layoutId:`KdGPZCmfN`,children:[S!==!1&&c(H,{
                    background:{
                      alt:``,fit:`fill`,intrinsicHeight:2700,intrinsicWidth:2160,loading:ae((u?.y||0)+25+(((u?.height||345)-50-(Math.max(0,((u?.height||345)-50-0)/1)*1+0))/2+0+0)+0+(217+(Math.max(0,((u?.height||345)-50-0)/1)*1-0-415.4)/1*1)+0+15+65.2),pixelHeight:2700,pixelWidth:2160,sizes:`38px`,...hr(y)
                    },className:`framer-1xkmb34`,"data-framer-name":`Avatar`,layoutDependency:I,layoutId:`iCuM3axhg`,style:{
                      borderBottomLeftRadius:`100%`,borderBottomRightRadius:`100%`,borderTopLeftRadius:`100%`,borderTopRightRadius:`100%`
                    },...cr({
                      "Q6s2KXSCm-hover":{
                        background:{
                          alt:``,fit:`fill`,intrinsicHeight:2700,intrinsicWidth:2160,loading:ae((u?.y||0)+25+0+0+(217+(Math.max(0,((u?.height||345)-50-0)/1)*1-0-409.8)/1*1)+0+15+62.4),pixelHeight:2700,pixelWidth:2160,sizes:`38px`,...hr(y)
                        }
                      }
                    },E,A)
                  }),f(v.div,{
                    className:`framer-14ov9iu`,"data-framer-name":`Name & Role`,layoutDependency:I,layoutId:`puizwoebS`,children:[c(T,{
                      __fromCanvasComponent:!0,children:c(o,{
                        children:c(v.p,{
                          dir:`auto`,style:{
                            "--font-selector":`R0Y7Um9ib3RvLTUwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-weight":`500`,"--framer-line-height":`112%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                          },children:`Mark Martinez`
                        })
                      }),className:`framer-1odysmb`,fonts:[`GF;Roboto-500`],layoutDependency:I,layoutId:`G3_6LJlIT`,style:{
                        "--extracted-r6o4lv":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                      },text:b,verticalAlignment:`top`,withExternalLayout:!0
                    }),L!==!1&&c(T,{
                      __fromCanvasComponent:!0,children:c(o,{
                        children:c(v.p,{
                          className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,dir:`auto`,style:{
                            "--framer-text-color":`var(--extracted-r6o4lv, var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184)))`
                          },children:`Customer Manager at SupportEase`
                        })
                      }),className:`framer-jneg7s`,fonts:[`Inter`],layoutDependency:I,layoutId:`n1z3k1ZPS`,style:{
                        "--extracted-r6o4lv":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                      },text:x,variants:{
                        "Q6s2KXSCm-hover":{
                          "--extracted-r6o4lv":`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
                        }
                      },verticalAlignment:`top`,withExternalLayout:!0,...cr({
                        "Q6s2KXSCm-hover":{
                          children:c(o,{
                            children:c(v.p,{
                              className:`framer-styles-preset-1c2yfzg`,"data-styles-preset":`Zelpfd9Dq`,dir:`auto`,style:{
                                "--framer-text-color":`var(--extracted-r6o4lv, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))`
                              },children:`Customer Manager at SupportEase`
                            })
                          })
                        }
                      },E,A)
                    })]
                  })]
                })]
              })]
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-VEQGw.framer-1qerudu, .framer-VEQGw .framer-1qerudu { display: block; }`,`.framer-VEQGw.framer-glyuwv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 345px; justify-content: center; overflow: hidden; padding: 25px 0px 25px 0px; position: relative; width: 315px; will-change: var(--framer-will-change-override, transform); }`,`.framer-VEQGw .framer-1i06hgf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,`.framer-VEQGw .framer-1mlu58z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-VEQGw .framer-15g6tjo { flex: none; height: 21px; position: relative; width: 25px; }`,`.framer-VEQGw .framer-10mqgxp, .framer-VEQGw .framer-1odysmb, .framer-VEQGw .framer-jneg7s { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-VEQGw .framer-194e1k2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-VEQGw .framer-182270u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-VEQGw .framer-1r73bjm-container, .framer-VEQGw .framer-1d6see9-container, .framer-VEQGw .framer-tt7up2-container, .framer-VEQGw .framer-1tl6g1d-container, .framer-VEQGw .framer-rxbqki-container { flex: none; height: 12px; position: relative; width: 12px; }`,`.framer-VEQGw .framer-191zago { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-VEQGw .framer-1xkmb34 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: hidden; position: relative; width: 38px; will-change: var(--framer-will-change-override, transform); }`,`.framer-VEQGw .framer-14ov9iu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-VEQGw.framer-v-2ev1cw.framer-glyuwv { cursor: unset; }`,`.framer-VEQGw.framer-v-glyuwv.hover.framer-glyuwv { justify-content: flex-start; }`,...Et,...jt,...Tt,...gt,...xt,...tr,...ze,...ar,`.framer-VEQGw[data-border="true"]::after, .framer-VEQGw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-VEQGw`),Cr=Sr,Sr.displayName=`Testimonial Card`,Sr.defaultProps={
    height:345,width:315
  },k(Sr,{
    variant:{
      options:[`Q6s2KXSCm`,`hxl3kFduo`],optionTitles:[`Testimonial Card`,`Variant 2`],title:`Variant`,type:K.Enum
    },oAP3LPOjN:{
      defaultValue:`<p dir="auto">Hey</p><p dir="auto">Hey</p>`,title:`Quote`,type:K.RichText
    },HEEE23pzd:{
      __defaultAssetReference:`data:framer/asset-reference,JCtMLJYmxiDeinol8i8gPiwOio.jpg?originalFilename=avatar10.jpg&preferredSize=auto`,title:`Avatar`,type:K.ResponsiveImage
    },uVJXGOkcn:{
      defaultValue:`Mark Martinez`,title:`Name`,type:K.String
    },onuVJXGOkcnChange:{
      changes:`uVJXGOkcn`,type:K.ChangeHandler
    },iLSSd0G_p:{
      defaultValue:`Customer Manager at SupportEase`,title:`Role`,type:K.String
    },oniLSSd0G_pChange:{
      changes:`iLSSd0G_p`,type:K.ChangeHandler
    },uCIug9WJ5:{
      defaultValue:!0,title:`Avatar Visible`,type:K.Boolean
    },onuCIug9WJ5Change:{
      changes:`uCIug9WJ5`,type:K.ChangeHandler
    },rTOF5483x:{
      optional:!0,title:`Stars Visible`,type:K.Boolean
    },onrTOF5483xChange:{
      changes:`rTOF5483x`,type:K.ChangeHandler
    }
  }),L(Sr,[{
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
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmWggvWl0Qn.woff2`,weight:`500`
    }]
  },...lr,...j(Ot),...j(Nt),...j(Dt),...j(yt),...j(lt),...j(er),...j(Be),...j(ir),..._t.fBK8KGgLM?ve(_t.fBK8KGgLM):[],..._t.dhYriWl2c?ve(_t.dhYriWl2c):[],..._t.ToiwT9ohE?ve(_t.ToiwT9ohE):[]],{
    supportsExplicitInterCodegen:!0
  })
})),Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr=e((()=>{
  p(),q(),w(),h(),Tr=`framer-uEP0H`,Er={
    mWXUroCXi:`framer-v-1v7iyva`
  },Dr={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },Or=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },kr=v.create(o),Ar=({
    company:e,date:t,height:n,id:r,title:i,width:a,...o
  })=>({
    ...o,MtwQdXmPu:t??o.MtwQdXmPu??`2020-2022`,Q9Y3Wh1N0:i??o.Q9Y3Wh1N0??`Staff Product Designer`,u951OiT8B:e??o.u951OiT8B??`ZigZag`
  }),jr=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Mr=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J();
    G();
    let{
      style:u,className:d,layoutId:p,variant:m,u951OiT8B:h,MtwQdXmPu:_,Q9Y3Wh1N0:y,...b
    }
    =Ar(e),{
      baseVariant:x,classNames:S,clearLoadingGesture:w,gestureHandlers:ee,gestureVariant:E,isLoading:D,setGestureState:O,setVariant:k,variants:A
    }
    =F({
      defaultVariant:`mWXUroCXi`,ref:r,variant:m,variantClassNames:Er
    }),j=jr(e,A),M=z(Tr);
    return c(C,{
      id:p??i,children:c(kr,{
        animate:A,initial:!1,children:c(Or,{
          value:Dr,children:c(v.div,{
            ...b,...ee,className:z(M,`framer-1v7iyva`,d,S),"data-border":!0,"data-framer-name":`History`,layoutDependency:j,layoutId:`mWXUroCXi`,ref:r,style:{
              "--border-bottom-width":`1px`,"--border-color":`rgba(84, 84, 84, 0.5)`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`rgb(31, 31, 31)`,borderBottomLeftRadius:16,borderBottomRightRadius:16,borderTopLeftRadius:16,borderTopRightRadius:16,boxShadow:`0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03)`,...u
            },children:f(v.div,{
              className:`framer-ctsyc2`,"data-framer-name":`Container`,layoutDependency:j,layoutId:`DnmWMRMtH`,children:[f(v.div,{
                className:`framer-a9yo0v`,"data-framer-name":`Company & Dates`,layoutDependency:j,layoutId:`NkmUCy2GZ`,children:[c(T,{
                  __fromCanvasComponent:!0,children:c(o,{
                    children:c(v.p,{
                      dir:`auto`,style:{
                        "--font-selector":`R0Y7Um9ib3RvLTYwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`20px`,"--framer-font-weight":`600`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`150%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                      },children:`ZigZag`
                    })
                  }),className:`framer-1wjplei`,fonts:[`GF;Roboto-600`],layoutDependency:j,layoutId:`Fmi5iEI9i`,style:{
                    "--extracted-r6o4lv":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                  },text:h,verticalAlignment:`top`,withExternalLayout:!0
                }),c(T,{
                  __fromCanvasComponent:!0,children:c(o,{
                    children:c(v.p,{
                      dir:`auto`,style:{
                        "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`112%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184)))`
                      },children:`Staff Product Designer`
                    })
                  }),className:`framer-uvrv9v`,fonts:[`GF;Roboto-regular`],layoutDependency:j,layoutId:`pwvhmRABd`,style:{
                    "--extracted-r6o4lv":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                  },text:y,verticalAlignment:`top`,withExternalLayout:!0
                })]
              }),c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    dir:`auto`,style:{
                      "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`14px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`112%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184)))`
                    },children:`2020-2022`
                  })
                }),className:`framer-6bebwn`,fonts:[`GF;Roboto-regular`],layoutDependency:j,layoutId:`xFlTvv3NA`,style:{
                  "--extracted-r6o4lv":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                },text:_,verticalAlignment:`top`,withExternalLayout:!0
              })]
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-uEP0H.framer-fkch29, .framer-uEP0H .framer-fkch29 { display: block; }`,`.framer-uEP0H.framer-1v7iyva { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 18px; position: relative; width: 300px; }`,`.framer-uEP0H .framer-ctsyc2 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-uEP0H .framer-a9yo0v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 51px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-uEP0H .framer-1wjplei { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,`.framer-uEP0H .framer-uvrv9v, .framer-uEP0H .framer-6bebwn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-uEP0H[data-border="true"]::after, .framer-uEP0H [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-uEP0H`),Nr=Mr,Mr.displayName=`Work Card`,Mr.defaultProps={
    height:87,width:300
  },k(Mr,{
    u951OiT8B:{
      defaultValue:`ZigZag`,displayTextArea:!1,title:`Company`,type:K.String
    },onu951OiT8BChange:{
      changes:`u951OiT8B`,type:K.ChangeHandler
    },MtwQdXmPu:{
      defaultValue:`2020-2022`,displayTextArea:!1,title:`Date`,type:K.String
    },onMtwQdXmPuChange:{
      changes:`MtwQdXmPu`,type:K.ChangeHandler
    },Q9Y3Wh1N0:{
      defaultValue:`Staff Product Designer`,displayTextArea:!1,title:`Title`,type:K.String
    },onQ9Y3Wh1N0Change:{
      changes:`Q9Y3Wh1N0`,type:K.ChangeHandler
    }
  }),L(Mr,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYaammWggvWl0Qn.woff2`,weight:`600`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    }]
  }],{
    supportsExplicitInterCodegen:!0
  })
}));
function Fr(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr=e((()=>{
  p(),q(),w(),h(),tt(),Re(),Pr(),Ir=M(Nr),Lr=M(nt),Rr=[`wrjEuEMq5`,`HWoct9CQh`],zr=`framer-0yjaX`,Br={
    HWoct9CQh:`framer-v-ah5at9`,wrjEuEMq5:`framer-v-4ul5sv`
  },Vr={
    bounce:.2,delay:0,duration:.6,type:`spring`
  },Hr=(e,t)=>`translateX(-50%) ${t}`,Ur=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },Wr={
    Closed:`wrjEuEMq5`,Open:`HWoct9CQh`
  },Gr=v.create(o),Kr=(e,t)=>{
    let[r,i]=n(e),[a,o]=n(e);
    return t?[e,t]:(e!==a&&(i(e),o(e)),[r,i])
  },qr=({
    company1:e,company2:t,date1:n,date2:r,height:i,id:a,title1:o,title2:s,width:c,...l
  })=>({
    ...l,C3wqzi1gH:s??l.C3wqzi1gH??`Staff Product Designer`,cWbhifCIf:t??l.cWbhifCIf??`Quantum`,qGp7vI2z6:e??l.qGp7vI2z6??`Nexus Technology`,rrXhSebWp:n??l.rrXhSebWp??`2012-2024`,rxHhshyDG:r??l.rxHhshyDG??`2020-2022`,variant:Wr[l.variant]??l.variant??`wrjEuEMq5`,wrlTXIfKr:o??l.wrlTXIfKr??`Full-Stack Designer`
  }),Jr=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Yr=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J(),u=G(),{
      style:d,className:p,layoutId:m,variant:h,qGp7vI2z6:_,onqGp7vI2z6Change:y,wrlTXIfKr:b,onwrlTXIfKrChange:x,rrXhSebWp:S,onrrXhSebWpChange:w,cWbhifCIf:ee,oncWbhifCIfChange:E,C3wqzi1gH:D,onC3wqzi1gHChange:O,rxHhshyDG:k,onrxHhshyDGChange:A,...j
    }
    =qr(e),[M,N]=Kr(_,y),[te,I]=Kr(b,x),[ne,L]=Kr(S,w),[R,B]=Kr(ee,E),[re,ie]=Kr(D,O),[ae,oe]=Kr(k,A),{
      baseVariant:se,classNames:ce,clearLoadingGesture:ue,gestureHandlers:de,gestureVariant:H,isLoading:fe,setGestureState:pe,setVariant:me,variants:he
    }
    =F({
      cycleOrder:Rr,defaultVariant:`wrjEuEMq5`,ref:r,variant:h,variantClassNames:Br
    }),U=Jr(e,he),{
      activeVariantCallback:ge,delay:W
    }
    =le(se),_e=ge(async(...e)=>{
      pe({
        isPressed:!1
      }),me(`HWoct9CQh`)
    }),ve=ge(async(...e)=>{
      pe({
        isPressed:!1
      }),me(`wrjEuEMq5`)
    }),K=z(zr,Ve);
    return c(C,{
      id:m??i,children:c(Gr,{
        animate:he,initial:!1,children:c(Ur,{
          value:Vr,children:f(v.div,{
            ...j,...de,className:z(K,`framer-4ul5sv`,p,ce),"data-framer-name":`Closed`,"data-highlight":!0,layoutDependency:U,layoutId:`wrjEuEMq5`,onTap:_e,ref:r,style:{
              ...d
            },...Fr({
              HWoct9CQh:{
                "data-framer-name":`Open`,onTap:ve
              }
            },se,H),children:[f(v.div,{
              className:`framer-1n76p3r`,"data-framer-name":`Work History`,layoutDependency:U,layoutId:`R7CU6kHnG`,children:[c(V,{
                height:87,width:u?.width||`100vw`,y:(u?.y||0)+0+(((u?.height||155)-0-155)/2+0+0)+0+0,...Fr({
                  HWoct9CQh:{
                    y:(u?.y||0)+0+(((u?.height||254)-0-254)/2+0+0)+0+0
                  }
                },se,H),children:c(P,{
                  className:`framer-tda8zr-container`,"data-framer-name":`Work History 1`,layoutDependency:U,layoutId:`PDCgrqfau-container`,name:`Work History 1`,nodeId:`PDCgrqfau`,rendersWithMotion:!0,scopeId:`Bx6rBCZSm`,children:c(Nr,{
                    height:`100%`,id:`PDCgrqfau`,layoutId:`PDCgrqfau`,MtwQdXmPu:ne,name:`Work History 1`,onMtwQdXmPuChange:L,onQ9Y3Wh1N0Change:I,onu951OiT8BChange:N,Q9Y3Wh1N0:te,style:{
                      width:`100%`
                    },u951OiT8B:M,width:`100%`
                  })
                })
              }),c(V,{
                height:87,width:u?.width||`100vw`,y:(u?.y||0)+0+(((u?.height||155)-0-155)/2+0+0)+8,...Fr({
                  HWoct9CQh:{
                    y:(u?.y||0)+0+(((u?.height||254)-0-254)/2+0+0)+0+99
                  }
                },se,H),children:c(P,{
                  className:`framer-tsyghy-container`,"data-framer-name":`Work History 2`,layoutDependency:U,layoutId:`lu7wGB5vs-container`,name:`Work History 2`,nodeId:`lu7wGB5vs`,rendersWithMotion:!0,scopeId:`Bx6rBCZSm`,style:{
                    scale:.95
                  },transformTemplate:Hr,variants:{
                    HWoct9CQh:{
                      scale:1
                    }
                  },...Fr({
                    HWoct9CQh:{
                      transformTemplate:void 0
                    }
                  },se,H),children:c(Nr,{
                    height:`100%`,id:`lu7wGB5vs`,layoutId:`lu7wGB5vs`,MtwQdXmPu:ae,name:`Work History 2`,onMtwQdXmPuChange:oe,onQ9Y3Wh1N0Change:ie,onu951OiT8BChange:B,Q9Y3Wh1N0:re,style:{
                      width:`100%`
                    },u951OiT8B:R,width:`100%`
                  })
                })
              })]
            }),f(v.div,{
              className:`framer-1rzo9gk`,"data-border":!0,"data-framer-name":`Show More / Hide`,layoutDependency:U,layoutId:`WYoxjJiNA`,style:{
                "--border-bottom-width":`1px`,"--border-color":`var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, rgb(43, 43, 43))`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, rgb(43, 43, 43))`,borderBottomLeftRadius:24,borderBottomRightRadius:24,borderTopLeftRadius:24,borderTopRightRadius:24,boxShadow:`0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`
              },children:[c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,dir:`auto`,children:`Show all`
                  })
                }),className:`framer-sbqftt`,fonts:[`Inter`],layoutDependency:U,layoutId:`nKVeM35DL`,style:{
                  "--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,"--framer-paragraph-spacing":`0px`
                },verticalAlignment:`top`,withExternalLayout:!0,...Fr({
                  HWoct9CQh:{
                    children:c(o,{
                      children:c(v.p,{
                        className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,children:`Hide`
                      })
                    })
                  }
                },se,H)
              }),c(V,{
                children:c(P,{
                  className:`framer-w9rdve-container`,"data-framer-name":`Caret`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:U,layoutId:`H5PmzrrKe-container`,name:`Caret`,nodeId:`H5PmzrrKe`,rendersWithMotion:!0,scopeId:`Bx6rBCZSm`,style:{
                    rotate:0
                  },variants:{
                    HWoct9CQh:{
                      rotate:180
                    }
                  },children:c(nt,{
                    color:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,height:`100%`,iconSearch:`House`,iconSelection:`CaretCircleDown`,id:`H5PmzrrKe`,layoutId:`H5PmzrrKe`,mirrored:!1,name:`Caret`,selectByList:!0,style:{
                      height:`100%`,width:`100%`
                    },weight:`fill`,width:`100%`
                  })
                })
              })]
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-0yjaX.framer-1fnwc6k, .framer-0yjaX .framer-1fnwc6k { display: block; }`,`.framer-0yjaX.framer-4ul5sv { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 478px; }`,`.framer-0yjaX .framer-1n76p3r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-0yjaX .framer-tda8zr-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,`.framer-0yjaX .framer-tsyghy-container { flex: none; height: auto; left: 50%; position: absolute; top: 8px; width: 100%; z-index: 2; }`,`.framer-0yjaX .framer-1rzo9gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 36px; justify-content: center; overflow: visible; padding: 12px 12px 12px 16px; position: relative; width: min-content; }`,`.framer-0yjaX .framer-sbqftt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-0yjaX .framer-w9rdve-container { flex: none; height: 12px; position: relative; width: 12px; }`,`.framer-0yjaX.framer-v-ah5at9 .framer-tsyghy-container { left: unset; position: relative; top: unset; }`,`.framer-0yjaX.framer-v-ah5at9 .framer-1rzo9gk { width: 88px; }`,...ze,`.framer-0yjaX[data-border="true"]::after, .framer-0yjaX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-0yjaX`),Xr=Yr,Yr.displayName=`Work History`,Yr.defaultProps={
    height:155,width:478
  },k(Yr,{
    variant:{
      options:[`wrjEuEMq5`,`HWoct9CQh`],optionTitles:[`Closed`,`Open`],title:`Variant`,type:K.Enum
    },qGp7vI2z6:{
      defaultValue:`Nexus Technology`,displayTextArea:!1,title:`Company 1`,type:K.String
    },onqGp7vI2z6Change:{
      changes:`qGp7vI2z6`,type:K.ChangeHandler
    },wrlTXIfKr:{
      defaultValue:`Full-Stack Designer`,displayTextArea:!1,title:`Title 1`,type:K.String
    },onwrlTXIfKrChange:{
      changes:`wrlTXIfKr`,type:K.ChangeHandler
    },rrXhSebWp:{
      defaultValue:`2012-2024`,displayTextArea:!1,title:`Date 1`,type:K.String
    },onrrXhSebWpChange:{
      changes:`rrXhSebWp`,type:K.ChangeHandler
    },cWbhifCIf:{
      defaultValue:`Quantum`,displayTextArea:!1,title:`Company 2`,type:K.String
    },oncWbhifCIfChange:{
      changes:`cWbhifCIf`,type:K.ChangeHandler
    },C3wqzi1gH:{
      defaultValue:`Staff Product Designer`,displayTextArea:!1,title:`Title 2`,type:K.String
    },onC3wqzi1gHChange:{
      changes:`C3wqzi1gH`,type:K.ChangeHandler
    },rxHhshyDG:{
      defaultValue:`2020-2022`,displayTextArea:!1,title:`Date 2`,type:K.String
    },onrxHhshyDGChange:{
      changes:`rxHhshyDG`,type:K.ChangeHandler
    }
  }),L(Yr,[{
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
  },...Ir,...Lr,...j(Be)],{
    supportsExplicitInterCodegen:!0
  }),Yr.loader={
    load:(e,t)=>(t.locale,Promise.allSettled([E(Nr,{},t)]))
  }
}));
function Qr(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var $r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui=e((()=>{
  p(),q(),w(),h(),$r=[`Gdgzxunm5`,`c4YG4x5uD`],ei=`framer-Rn6Gw`,ti={
    c4YG4x5uD:`framer-v-1we1rcu`,Gdgzxunm5:`framer-v-1j1rq06`
  },ni={
    delay:0,duration:.6,ease:[.68,0,.56,1],type:`tween`
  },ri=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },ii={
    "Variant 1":`Gdgzxunm5`,"Variant 2":`c4YG4x5uD`
  },ai=v.create(o),oi=({
    height:e,id:t,subSkill:n,visible2:r,width:i,...a
  })=>({
    ...a,iZZybccAc:r??a.iZZybccAc??!0,variant:ii[a.variant]??a.variant??`Gdgzxunm5`,zOZsYC9D4:n??a.zOZsYC9D4??`Sub Skill`
  }),si=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),ci=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J();
    G();
    let{
      style:u,className:d,layoutId:f,variant:p,zOZsYC9D4:m,iZZybccAc:h,..._
    }
    =oi(e),{
      baseVariant:y,classNames:b,clearLoadingGesture:x,gestureHandlers:S,gestureVariant:w,isLoading:ee,setGestureState:E,setVariant:D,variants:O
    }
    =F({
      cycleOrder:$r,defaultVariant:`Gdgzxunm5`,ref:r,variant:p,variantClassNames:ti
    }),k=si(e,O),A=z(ei);
    return c(C,{
      id:f??i,children:c(ai,{
        animate:O,initial:!1,children:h!==!1&&c(ri,{
          value:ni,children:c(v.div,{
            ..._,...S,className:z(A,`framer-1j1rq06`,d,b),"data-border":!0,"data-framer-name":`Variant 1`,layoutDependency:k,layoutId:`Gdgzxunm5`,ref:r,style:{
              "--border-bottom-width":`1px`,"--border-color":`var(--token-994646e0-68ea-49d7-897a-104048558f6f, rgb(84, 84, 84))`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100,...u
            },variants:{
              c4YG4x5uD:{
                "--border-bottom-width":`0.5px`,"--border-color":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--border-left-width":`0.5px`,"--border-right-width":`0.5px`,"--border-top-width":`0.5px`,backgroundColor:`rgba(0, 0, 0, 0)`
              }
            },...Qr({
              c4YG4x5uD:{
                "data-framer-name":`Variant 2`
              }
            },y,w),children:c(T,{
              __fromCanvasComponent:!0,children:c(o,{
                children:c(v.p,{
                  dir:`auto`,style:{
                    "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-line-height":`1.4em`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))`
                  },children:`Sub Skill`
                })
              }),className:`framer-sss9qa`,fonts:[`GF;Roboto-regular`],layoutDependency:k,layoutId:`P7dZiT0vk`,style:{
                "--extracted-r6o4lv":`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
              },text:m,verticalAlignment:`top`,withExternalLayout:!0
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-Rn6Gw.framer-1dkg7w2, .framer-Rn6Gw .framer-1dkg7w2 { display: block; }`,`.framer-Rn6Gw.framer-1j1rq06 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,`.framer-Rn6Gw .framer-sss9qa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-Rn6Gw[data-border="true"]::after, .framer-Rn6Gw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-Rn6Gw`),li=ci,ci.displayName=`Skill Labels`,ci.defaultProps={
    height:38,width:93
  },k(ci,{
    variant:{
      options:[`Gdgzxunm5`,`c4YG4x5uD`],optionTitles:[`Variant 1`,`Variant 2`],title:`Variant`,type:K.Enum
    },zOZsYC9D4:{
      defaultValue:`Sub Skill`,displayTextArea:!1,placeholder:`Sub Skill`,title:`Sub Skill`,type:K.String
    },onzOZsYC9D4Change:{
      changes:`zOZsYC9D4`,type:K.ChangeHandler
    },iZZybccAc:{
      defaultValue:!0,title:`Visible 2`,type:K.Boolean
    },oniZZybccAcChange:{
      changes:`iZZybccAc`,type:K.ChangeHandler
    }
  }),L(ci,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    }]
  }],{
    supportsExplicitInterCodegen:!0
  })
}));
function di(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var fi,pi,mi,hi,gi,X,_i,vi,yi,Z,bi,xi,Si,Ci,wi=e((()=>{
  p(),q(),w(),h(),Je(),je(),zt(),ui(),fi=M(li),pi=[`ldk8tsURS`,`IVZvitqPF`],mi=`framer-V1Z7I`,hi={
    IVZvitqPF:`framer-v-hyvrvt`,ldk8tsURS:`framer-v-1fuooo2`
  },gi={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },X=(...e)=>{
    for(let t of e)if(t&&typeof t==`string`)return t
  },_i=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },vi={
    "Variant 1":`ldk8tsURS`,"Variant 2":`IVZvitqPF`
  },yi=v.create(o),Z=(e,t)=>{
    let[r,i]=n(e),[a,o]=n(e);
    return t?[e,t]:(e!==a&&(i(e),o(e)),[r,i])
  },bi=({
    description:e,height:t,icon:n,id:r,mainSkill:i,shadow:a,skill1:o,skill2:s,skill3:c,skill4:l,skill5:u,skill6:d,skill7:f,v1:p,v2:m,v3:h,v4:g,v5:_,v6:v,v7:y,width:b,...x
  })=>({
    ...x,AKGKaR72_:o??x.AKGKaR72_,bVRtZiN42:g??x.bVRtZiN42??!0,E_I7SgBAJ:h??x.E_I7SgBAJ??!0,EqeyGApHf:p??x.EqeyGApHf??!0,hA0GNMM83:_??x.hA0GNMM83??!0,HcAJlTKAx:f??x.HcAJlTKAx,iPq5htUek:s??x.iPq5htUek,lw1xoxeVM:d??x.lw1xoxeVM,MgyxuhhrT:n??x.MgyxuhhrT??Ke,pThcaAyHy:i??x.pThcaAyHy??`System`,RseUJq3x6:l??x.RseUJq3x6,sHKmSVB8M:e??x.sHKmSVB8M??`Designing interfaces that reduce friction and guide behavior.`,T8xVc_SIr:m??x.T8xVc_SIr??!0,um9Aucp6E:c??x.um9Aucp6E,variant:vi[x.variant]??x.variant??`ldk8tsURS`,vvRsdYpCi:y??x.vvRsdYpCi??!0,wpLlPeKH3:v??x.wpLlPeKH3??!0,xjulmHYPB:a??x.xjulmHYPB??`0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03)`,yIm5rJWzO:u??x.yIm5rJWzO
  }),xi=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Si=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J();
    G();
    let{
      style:u,className:d,layoutId:p,variant:m,MgyxuhhrT:h,pThcaAyHy:_,sHKmSVB8M:y,AKGKaR72_:b,onAKGKaR72_Change:x,iPq5htUek:S,oniPq5htUekChange:w,um9Aucp6E:ee,onum9Aucp6EChange:E,RseUJq3x6:D,onRseUJq3x6Change:O,yIm5rJWzO:k,onyIm5rJWzOChange:A,lw1xoxeVM:j,onlw1xoxeVMChange:M,HcAJlTKAx:N,onHcAJlTKAxChange:te,EqeyGApHf:I,onEqeyGApHfChange:ne,T8xVc_SIr:L,onT8xVc_SIrChange:R,E_I7SgBAJ:B,onE_I7SgBAJChange:re,bVRtZiN42:ie,onbVRtZiN42Change:ae,hA0GNMM83:se,onhA0GNMM83Change:ce,wpLlPeKH3:le,onwpLlPeKH3Change:ue,vvRsdYpCi:de,onvvRsdYpCiChange:H,xjulmHYPB:fe,...pe
    }
    =bi(e),[me,he]=Z(b,x),[U,ge]=Z(S,w),[W,_e]=Z(ee,E),[ve,K]=Z(D,O),[q,ye]=Z(k,A),[be,xe]=Z(j,M),[Se,Ce]=Z(N,te),[we,Te]=Z(I,ne),[Ee,De]=Z(L,R),[Oe,ke]=Z(B,re),[Ae,je]=Z(ie,ae),[Ne,Pe]=Z(se,ce),[Fe,Ie]=Z(le,ue),[Le,Re]=Z(de,H),{
      baseVariant:ze,classNames:Be,clearLoadingGesture:Ve,gestureHandlers:He,gestureVariant:Ue,isLoading:We,setGestureState:Ge,setVariant:Ke,variants:qe
    }
    =F({
      cycleOrder:pi,defaultVariant:`ldk8tsURS`,ref:r,variant:m,variantClassNames:hi
    }),Y=xi(e,qe),Je=z(mi,Me,Lt);
    return c(C,{
      id:p??i,children:c(yi,{
        animate:qe,initial:!1,children:c(_i,{
          value:gi,children:f(v.div,{
            ...pe,...He,className:z(Je,`framer-1fuooo2`,d,Be),"data-border":!0,"data-framer-name":`Variant 1`,layoutDependency:Y,layoutId:`ldk8tsURS`,ref:r,style:{
              "--border-bottom-width":`2px`,"--border-color":`var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, rgb(43, 43, 43))`,"--border-left-width":`2px`,"--border-right-width":`2px`,"--border-style":`solid`,"--border-top-width":`2px`,"--q1rt9c":fe,backgroundColor:`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,borderBottomLeftRadius:24,borderBottomRightRadius:24,borderTopLeftRadius:24,borderTopRightRadius:24,boxShadow:`var(--q1rt9c)`,...u
            },variants:{
              IVZvitqPF:{
                "--border-color":`rgba(130, 130, 130, 0.5)`,backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
              }
            },...di({
              IVZvitqPF:{
                "data-framer-name":`Variant 2`
              }
            },ze,Ue),children:[f(v.div,{
              className:`framer-1ft3y0w`,layoutDependency:Y,layoutId:`IxBnpyXrW`,children:[f(v.div,{
                className:`framer-1x03t3b`,layoutDependency:Y,layoutId:`njG1frzSC`,children:[c(oe,{
                  animated:!0,className:`framer-xofrg3`,Component:h,layoutDependency:Y,layoutId:`GGq0bkaSL`,style:{
                    "--1m6trwb":0,"--21h8s6":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,"--pgex8v":1.5
                  },variants:{
                    IVZvitqPF:{
                      "--21h8s6":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                    }
                  }
                }),c(T,{
                  __fromCanvasComponent:!0,children:c(o,{
                    children:c(v.h2,{
                      className:`framer-styles-preset-13dj660`,"data-styles-preset":`eXomDaVSf`,dir:`auto`,children:`System`
                    })
                  }),className:`framer-1n4qvy3`,"data-framer-name":`Services I can help you with.`,fonts:[`Inter`],layoutDependency:Y,layoutId:`lJxNDejsk`,style:{
                    "--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                  },text:_,verticalAlignment:`center`,withExternalLayout:!0
                })]
              }),c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                      "--framer-text-color":`var(--extracted-r6o4lv, var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184)))`
                    },children:`Designing interfaces that reduce friction and guide behavior.`
                  })
                }),className:`framer-wueh9l`,fonts:[`Inter`],layoutDependency:Y,layoutId:`RgYmXMKOu`,style:{
                  "--extracted-r6o4lv":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                },text:y,variants:{
                  IVZvitqPF:{
                    "--extracted-r6o4lv":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                  }
                },verticalAlignment:`top`,withExternalLayout:!0,...di({
                  IVZvitqPF:{
                    children:c(o,{
                      children:c(v.p,{
                        className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                          "--framer-text-color":`var(--extracted-r6o4lv, var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255)))`
                        },children:`Designing interfaces that reduce friction and guide behavior.`
                      })
                    })
                  }
                },ze,Ue)
              })]
            }),f(v.div,{
              className:`framer-menzqj`,layoutDependency:Y,layoutId:`dieggNLxt`,children:[c(V,{
                height:38,children:c(P,{
                  className:`framer-1laq97l-container`,layoutDependency:Y,layoutId:`gSeDg5n_5-container`,nodeId:`gSeDg5n_5`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`gSeDg5n_5`,iZZybccAc:we,layoutId:`gSeDg5n_5`,oniZZybccAcChange:Te,onzOZsYC9D4Change:he,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:me,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-p4137c-container`,layoutDependency:Y,layoutId:`gvnHFQjBQ-container`,nodeId:`gvnHFQjBQ`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`gvnHFQjBQ`,iZZybccAc:Ee,layoutId:`gvnHFQjBQ`,oniZZybccAcChange:De,onzOZsYC9D4Change:ge,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:U,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-phkrzo-container`,layoutDependency:Y,layoutId:`sZbEz9aqU-container`,nodeId:`sZbEz9aqU`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`sZbEz9aqU`,iZZybccAc:Oe,layoutId:`sZbEz9aqU`,oniZZybccAcChange:ke,onzOZsYC9D4Change:_e,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:W,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-raa43y-container`,layoutDependency:Y,layoutId:`btHA698VF-container`,nodeId:`btHA698VF`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`btHA698VF`,iZZybccAc:Ae,layoutId:`btHA698VF`,oniZZybccAcChange:je,onzOZsYC9D4Change:K,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:ve,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-dkwd4x-container`,layoutDependency:Y,layoutId:`KLlJDJ7nl-container`,nodeId:`KLlJDJ7nl`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`KLlJDJ7nl`,iZZybccAc:Ne,layoutId:`KLlJDJ7nl`,oniZZybccAcChange:Pe,onzOZsYC9D4Change:ye,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:q,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-15xjc2s-container`,layoutDependency:Y,layoutId:`zltP9DaVO-container`,nodeId:`zltP9DaVO`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`zltP9DaVO`,iZZybccAc:Fe,layoutId:`zltP9DaVO`,oniZZybccAcChange:Ie,onzOZsYC9D4Change:xe,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:be,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              }),c(V,{
                height:38,children:c(P,{
                  className:`framer-9avj28-container`,layoutDependency:Y,layoutId:`FMdO8NcWm-container`,nodeId:`FMdO8NcWm`,rendersWithMotion:!0,scopeId:`cuLtZMb6F`,children:c(li,{
                    height:`100%`,id:`FMdO8NcWm`,iZZybccAc:Le,layoutId:`FMdO8NcWm`,oniZZybccAcChange:Re,onzOZsYC9D4Change:Ce,variant:X(`Gdgzxunm5`),width:`100%`,zOZsYC9D4:Se,...di({
                      IVZvitqPF:{
                        variant:X(`c4YG4x5uD`)
                      }
                    },ze,Ue)
                  })
                })
              })]
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-V1Z7I.framer-x90vrj, .framer-V1Z7I .framer-x90vrj { display: block; }`,`.framer-V1Z7I.framer-1fuooo2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 297px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 435px; will-change: var(--framer-will-change-override, transform); }`,`.framer-V1Z7I .framer-1ft3y0w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-V1Z7I .framer-1x03t3b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 46px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-V1Z7I .framer-xofrg3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,`.framer-V1Z7I .framer-1n4qvy3 { flex: 1 0 0px; height: 100%; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-V1Z7I .framer-wueh9l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-V1Z7I .framer-menzqj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-V1Z7I .framer-1laq97l-container, .framer-V1Z7I .framer-p4137c-container, .framer-V1Z7I .framer-phkrzo-container, .framer-V1Z7I .framer-raa43y-container, .framer-V1Z7I .framer-dkwd4x-container, .framer-V1Z7I .framer-15xjc2s-container, .framer-V1Z7I .framer-9avj28-container { flex: none; height: auto; position: relative; width: auto; }`,...ke,...jt,`.framer-V1Z7I[data-border="true"]::after, .framer-V1Z7I [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-V1Z7I`),Ci=Si,Si.displayName=`Skill Card`,Si.defaultProps={
    height:297,width:435
  },k(Si,{
    variant:{
      options:[`ldk8tsURS`,`IVZvitqPF`],optionTitles:[`Variant 1`,`Variant 2`],title:`Variant`,type:K.Enum
    },MgyxuhhrT:{
      defaultValue:{
        identifier:`module:SUBEdtCFaOJwrjN2Inhk/bznEUerLEqVVXGfsDOYE/pKERsxd4H.js:default`,moduleId:`SUBEdtCFaOJwrjN2Inhk`
      },setModuleId:`omX0gWFPqDwhaiWwf6ab`,title:`Icon`,type:K.VectorSetItem
    },pThcaAyHy:{
      defaultValue:`System`,displayTextArea:!1,title:`Main Skill`,type:K.String
    },onpThcaAyHyChange:{
      changes:`pThcaAyHy`,type:K.ChangeHandler
    },sHKmSVB8M:{
      defaultValue:`Designing interfaces that reduce friction and guide behavior.`,displayTextArea:!0,title:`Description`,type:K.String
    },onsHKmSVB8MChange:{
      changes:`sHKmSVB8M`,type:K.ChangeHandler
    },AKGKaR72_:{
      displayTextArea:!1,optional:!0,placeholder:`Sub Skill`,title:`Skill 1`,type:K.String
    },onAKGKaR72_Change:{
      changes:`AKGKaR72_`,type:K.ChangeHandler
    },iPq5htUek:{
      displayTextArea:!1,optional:!0,placeholder:`Sub Skill`,title:`Skill 2`,type:K.String
    },oniPq5htUekChange:{
      changes:`iPq5htUek`,type:K.ChangeHandler
    },um9Aucp6E:{
      displayTextArea:!1,optional:!0,placeholder:``,title:`Skill 3`,type:K.String
    },onum9Aucp6EChange:{
      changes:`um9Aucp6E`,type:K.ChangeHandler
    },RseUJq3x6:{
      displayTextArea:!1,optional:!0,placeholder:`Sub Skill`,title:`Skill 4`,type:K.String
    },onRseUJq3x6Change:{
      changes:`RseUJq3x6`,type:K.ChangeHandler
    },yIm5rJWzO:{
      displayTextArea:!1,optional:!0,placeholder:`Sub Skill`,title:`Skill 5`,type:K.String
    },onyIm5rJWzOChange:{
      changes:`yIm5rJWzO`,type:K.ChangeHandler
    },lw1xoxeVM:{
      displayTextArea:!0,optional:!0,placeholder:`Sub Skill`,title:`Skill 6`,type:K.String
    },onlw1xoxeVMChange:{
      changes:`lw1xoxeVM`,type:K.ChangeHandler
    },HcAJlTKAx:{
      optional:!0,title:`Skill 7`,type:K.String
    },onHcAJlTKAxChange:{
      changes:`HcAJlTKAx`,type:K.ChangeHandler
    },EqeyGApHf:{
      defaultValue:!0,title:`v1`,type:K.Boolean
    },onEqeyGApHfChange:{
      changes:`EqeyGApHf`,type:K.ChangeHandler
    },T8xVc_SIr:{
      defaultValue:!0,title:`v2`,type:K.Boolean
    },onT8xVc_SIrChange:{
      changes:`T8xVc_SIr`,type:K.ChangeHandler
    },E_I7SgBAJ:{
      defaultValue:!0,title:`v3`,type:K.Boolean
    },onE_I7SgBAJChange:{
      changes:`E_I7SgBAJ`,type:K.ChangeHandler
    },bVRtZiN42:{
      defaultValue:!0,title:`v4`,type:K.Boolean
    },onbVRtZiN42Change:{
      changes:`bVRtZiN42`,type:K.ChangeHandler
    },hA0GNMM83:{
      defaultValue:!0,title:`v5`,type:K.Boolean
    },onhA0GNMM83Change:{
      changes:`hA0GNMM83`,type:K.ChangeHandler
    },wpLlPeKH3:{
      defaultValue:!0,title:`v6`,type:K.Boolean
    },onwpLlPeKH3Change:{
      changes:`wpLlPeKH3`,type:K.ChangeHandler
    },vvRsdYpCi:{
      defaultValue:!0,title:`v7`,type:K.Boolean
    },onvvRsdYpCiChange:{
      changes:`vvRsdYpCi`,type:K.ChangeHandler
    },xjulmHYPB:{
      defaultValue:[{
        blur:4,color:`rgba(0, 0, 0, 0.1)`,diffusion:.25,focus:.5,inset:!1,spread:0,type:`realistic`,x:0,y:15
      }],title:`Shadow`,type:K.BoxShadow
    }
  }),L(Si,[{
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
  },...fi,...j(Oe),...j(Nt)],{
    supportsExplicitInterCodegen:!0
  }),Si.loader={
    load:(e,t)=>(t.locale,Promise.allSettled([E(li,{},t)]))
  }
}));
function Ti(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii=e((()=>{
  p(),q(),w(),h(),Ei={
    rVwUqmmY9:{
      pressed:!0
    }
  },Di=`framer-tVf6M`,Oi={
    rVwUqmmY9:`framer-v-1ooyuy5`
  },ki={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },Ai=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },ji=v.create(o),Mi=({
    height:e,id:t,width:n,...r
  })=>({
    ...r
  }),Ni=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Pi=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J(),u=G(),{
      style:d,className:p,layoutId:m,variant:h,..._
    }
    =Mi(e),{
      baseVariant:y,classNames:b,clearLoadingGesture:x,gestureHandlers:S,gestureVariant:w,isLoading:ee,setGestureState:E,setVariant:D,variants:O
    }
    =F({
      defaultVariant:`rVwUqmmY9`,enabledGestures:Ei,ref:r,variant:h,variantClassNames:Oi
    }),k=Ni(e,O),A=z(Di),j=()=>w!==`rVwUqmmY9-pressed`,M=()=>w===`rVwUqmmY9-pressed`;
    return c(C,{
      id:m??i,children:c(ji,{
        animate:O,initial:!1,children:c(Ai,{
          value:ki,children:f(v.div,{
            ..._,...S,className:z(A,`framer-1ooyuy5`,p,b),"data-framer-name":`Variant 1`,layoutDependency:k,layoutId:`rVwUqmmY9`,ref:r,style:{
              ...d
            },...Ti({
              "rVwUqmmY9-pressed":{
                "data-framer-name":void 0
              }
            },y,w),children:[j()&&c(H,{
              background:{
                alt:``,fit:`fill`,intrinsicHeight:632.8,intrinsicWidth:493.6,loading:ae((u?.y||0)+(0+((u?.height||83)-0-67)/2)),pixelHeight:791,pixelWidth:617,sizes:`52px`,src:`https://framerusercontent.com/images/CvnH9FMzWFAgijCdM4hnv4Zrdg.png?width=617&height=791`,srcSet:`https://framerusercontent.com/images/CvnH9FMzWFAgijCdM4hnv4Zrdg.png?width=617&height=791 617w`
              },className:`framer-d2oxw6`,"data-framer-name":`Drag-icon`,layoutDependency:k,layoutId:`JuJsnIQOP`,style:{
                rotate:-22
              }
            }),M()&&c(H,{
              background:{
                alt:``,fit:`fill`,intrinsicHeight:632.8,intrinsicWidth:493.6,pixelHeight:791,pixelWidth:617,src:`https://framerusercontent.com/images/xR9msGVS81PwKdf7RzvybPJbuEI.png?width=617&height=791`,srcSet:`https://framerusercontent.com/images/xR9msGVS81PwKdf7RzvybPJbuEI.png?width=617&height=791 617w`
              },className:`framer-1z6e26`,"data-framer-name":`Drop-icon`,layoutDependency:k,layoutId:`hB0ExoO3H`,style:{
                rotate:-34
              },...Ti({
                "rVwUqmmY9-pressed":{
                  background:{
                    alt:``,fit:`fill`,intrinsicHeight:632.8,intrinsicWidth:493.6,loading:ae((u?.y||0)+(0+((u?.height||83)-0-67)/2)),pixelHeight:791,pixelWidth:617,sizes:`52px`,src:`https://framerusercontent.com/images/xR9msGVS81PwKdf7RzvybPJbuEI.png?width=617&height=791`,srcSet:`https://framerusercontent.com/images/xR9msGVS81PwKdf7RzvybPJbuEI.png?width=617&height=791 617w`
                  }
                }
              },y,w)
            }),j()&&c(T,{
              __fromCanvasComponent:!0,children:c(o,{
                children:c(v.p,{
                  dir:`auto`,style:{
                    "--font-selector":`R0Y7Um9ib3RvLTcwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-open-type-features":`'calt' off, 'ss03' on`,"--framer-font-size":`28px`,"--framer-font-weight":`700`,"--framer-line-height":`140%`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                  },children:`Drag me`
                })
              }),className:`framer-1gnjw1q`,fonts:[`GF;Roboto-700`],layoutDependency:k,layoutId:`qVjYj6l2s`,style:{
                "--extracted-r6o4lv":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
              },verticalAlignment:`bottom`,withExternalLayout:!0
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-tVf6M.framer-zhyk91, .framer-tVf6M .framer-zhyk91 { display: block; }`,`.framer-tVf6M.framer-1ooyuy5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: 83px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 182px; }`,`.framer-tVf6M .framer-d2oxw6, .framer-tVf6M .framer-1z6e26 { aspect-ratio: 0.7800252844500632 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 67px); overflow: visible; position: relative; width: 52px; }`,`.framer-tVf6M .framer-1gnjw1q { flex: none; height: 63px; position: relative; white-space: pre; width: auto; }`,`.framer-tVf6M.framer-v-1ooyuy5.pressed.framer-1ooyuy5 { width: 85px; }`],`framer-tVf6M`),Fi=Pi,Pi.displayName=`Drag Cursor`,Pi.defaultProps={
    height:83,width:182
  },L(Pi,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Roboto`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammWggvWl0Qn.woff2`,weight:`700`
    }]
  }],{
    supportsExplicitInterCodegen:!0
  })
})),Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi=e((()=>{
  p(),q(),w(),h(),Li=`framer-OC1CT`,Ri={
    wbh2tnLAE:`framer-v-1gob8wf`
  },zi=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{
    src:e
  }:void 0,Bi={
    bounce:0,delay:0,duration:.6,type:`spring`
  },Vi=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },Hi=v.create(o),Ui=({
    height:e,id:t,image:n,width:r,...i
  })=>({
    ...i,De9UXQuLp:n??i.De9UXQuLp??{
      pixelHeight:1500,pixelWidth:1500,src:`https://framerusercontent.com/images/gbo5XqZu6VmwtK21dJSIq88FCy8.jpg?width=1500&height=1500`,srcSet:`https://framerusercontent.com/images/gbo5XqZu6VmwtK21dJSIq88FCy8.jpg?scale-down-to=512&width=1500&height=1500 512w,https://framerusercontent.com/images/gbo5XqZu6VmwtK21dJSIq88FCy8.jpg?scale-down-to=1024&width=1500&height=1500 1024w,https://framerusercontent.com/images/gbo5XqZu6VmwtK21dJSIq88FCy8.jpg?width=1500&height=1500 1500w`
    }
  }),Wi=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Gi=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:o,setLocale:s
    }
    =J(),l=G(),{
      style:u,className:d,layoutId:f,variant:p,De9UXQuLp:m,...h
    }
    =Ui(e),{
      baseVariant:_,classNames:v,clearLoadingGesture:y,gestureHandlers:b,gestureVariant:x,isLoading:S,setGestureState:w,setVariant:T,variants:ee
    }
    =F({
      defaultVariant:`wbh2tnLAE`,ref:r,variant:p,variantClassNames:Ri
    }),E=Wi(e,ee),D=z(Li);
    return c(C,{
      id:f??i,children:c(Hi,{
        animate:ee,initial:!1,children:c(Vi,{
          value:Bi,children:c(H,{
            ...h,...b,background:{
              alt:`Headshot of *Designer Name*`,fit:`fill`,loading:ae(l?.y||0),pixelHeight:1500,pixelWidth:1500,sizes:l?.width||`100vw`,...zi(m),positionX:`center`,positionY:`center`
            },className:z(D,`framer-1gob8wf`,d,v),"data-framer-name":`default`,layoutDependency:E,layoutId:`wbh2tnLAE`,ref:r,style:{
              borderBottomLeftRadius:1e3,borderBottomRightRadius:1e3,borderTopLeftRadius:1e3,borderTopRightRadius:1e3,...u
            }
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-OC1CT.framer-lxsivx, .framer-OC1CT .framer-lxsivx { display: block; }`,`.framer-OC1CT.framer-1gob8wf { height: 32px; overflow: visible; position: relative; width: 32px; }`],`framer-OC1CT`),Ki=Gi,Gi.displayName=`Profile Picture`,Gi.defaultProps={
    height:32,width:32
  },k(Gi,{
    De9UXQuLp:{
      __defaultAssetReference:`data:framer/asset-reference,gbo5XqZu6VmwtK21dJSIq88FCy8.jpg?originalFilename=Square+IMG+small.jpg&width=1500&height=1500`,description:``,title:`Image`,type:K.ResponsiveImage
    }
  }),L(Gi,[{
    explicitInter:!0,fonts:[]
  }],{
    supportsExplicitInterCodegen:!0
  })
})),Ji,Yi,Xi,Zi,Qi,$i=e((()=>{
  p(),q(),h(),Ji=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.571 11.513 L 0 11.513 C 0.001 12.899 0.553 14.227 1.534 15.206 C 2.516 16.184 3.846 16.732 5.232 16.728 L 7.362 16.728 L 7.362 18.785 C 7.362 21.664 9.696 23.999 12.575 24 L 12.575 12.518 C 12.575 11.963 12.125 11.513 11.57 11.513 Z M 17.294 5.757 L 5.736 5.757 C 5.737 8.637 8.071 10.971 10.951 10.971 L 13.08 10.971 L 13.08 13.029 C 13.082 15.908 15.416 18.241 18.295 18.243 L 18.295 6.758 C 18.295 6.205 17.847 5.757 17.294 5.757 Z M 23.013 0 L 11.455 0 C 11.455 2.88 13.79 5.215 16.67 5.215 L 18.799 5.215 L 18.799 7.272 C 18.801 10.145 21.127 12.475 24 12.483 L 24 1.005 C 24.002 0.456 23.562 0.008 23.013 0 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="23.999999534606935px" id="IoqUt8NSb" width="24.000008488071508px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,Yi=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),Xi=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),Zi=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =Xi(e);
    return c(Yi,{
      ...s,className:z(`framer-gqxem`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-gqxem { -webkit-mask: ${Ji}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${Ji}; width: 24px; }`],`framer-gqxem`),Zi.displayName=`Jira`,Qi=Zi,k(Zi,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
}));
function ea(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma=e((()=>{
  p(),q(),w(),h(),Re(),$i(),ta={
    jUUWzATNm:{
      pressed:!0
    },pfYwMgBao:{
      hover:!0
    }
  },na=[`pfYwMgBao`,`jUUWzATNm`],ra=`framer-4jnvi`,ia={
    jUUWzATNm:`framer-v-2q9j0n`,pfYwMgBao:`framer-v-1d3vdwe`
  },aa={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },oa=(e,t)=>`translateX(-50%) ${t}`,sa=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },ca={
    "Tech Stack Logo":`pfYwMgBao`,"Variant 2":`jUUWzATNm`
  },la=v.create(o),ua=({
    height:e,hoverColor:t,id:n,logo:r,logoColor:i,tooltipText:a,width:o,...s
  })=>({
    ...s,K7ek3TKmV:t??s.K7ek3TKmV??`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,lSX_zlJoh:a??s.lSX_zlJoh??`Figma`,nxpovt3KQ:i??s.nxpovt3KQ??`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:r??s.QL4h8C77w??Qi,variant:ca[s.variant]??s.variant??`pfYwMgBao`
  }),da=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),fa=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J();
    G();
    let{
      style:u,className:d,layoutId:p,variant:m,lSX_zlJoh:h,QL4h8C77w:_,nxpovt3KQ:y,K7ek3TKmV:b,...x
    }
    =ua(e),{
      baseVariant:S,classNames:w,clearLoadingGesture:ee,gestureHandlers:E,gestureVariant:D,isLoading:O,setGestureState:k,setVariant:A,variants:j
    }
    =F({
      cycleOrder:na,defaultVariant:`pfYwMgBao`,enabledGestures:ta,ref:r,variant:m,variantClassNames:ia
    }),M=da(e,j),N=z(ra,Ve);
    return c(C,{
      id:p??i,children:c(la,{
        animate:j,initial:!1,children:c(sa,{
          value:aa,children:f(v.div,{
            ...x,...E,className:z(N,`framer-1d3vdwe`,d,w),"data-framer-name":`Tech Stack Logo`,layoutDependency:M,layoutId:`pfYwMgBao`,ref:r,style:{
              ...u
            },...ea({
              "jUUWzATNm-pressed":{
                "data-framer-name":void 0
              },"pfYwMgBao-hover":{
                "data-framer-name":void 0
              },jUUWzATNm:{
                "data-framer-name":`Variant 2`
              }
            },S,D),children:[c(v.div,{
              className:`framer-v93lqn`,"data-border":!0,"data-framer-name":`Tool Logo`,layoutDependency:M,layoutId:`t8fOh9AxU`,style:{
                "--border-bottom-width":`1.07px`,"--border-color":`rgba(84, 84, 84, 0.5)`,"--border-left-width":`1.07px`,"--border-right-width":`1.07px`,"--border-style":`solid`,"--border-top-width":`1.07px`,backgroundColor:`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,borderBottomLeftRadius:13,borderBottomRightRadius:13,borderTopLeftRadius:13,borderTopRightRadius:13,boxShadow:`0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03)`
              },variants:{
                jUUWzATNm:{
                  "--border-bottom-width":`0.86px`,"--border-left-width":`0.86px`,"--border-right-width":`0.86px`,"--border-top-width":`0.86px`,borderBottomLeftRadius:10.54,borderBottomRightRadius:10.54,borderTopLeftRadius:10.54,borderTopRightRadius:10.54
                }
              },children:c(oe,{
                animated:!0,className:`framer-4x0nzq`,Component:_,"data-framer-name":`Jira`,layoutDependency:M,layoutId:`rpo0HjlnP`,style:{
                  "--12auh5f":y
                },variants:{
                  "jUUWzATNm-pressed":{
                    "--12auh5f":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
                  },"pfYwMgBao-hover":{
                    "--12auh5f":b
                  }
                }
              })
            }),c(v.div,{
              className:`framer-1xvo7ne`,"data-framer-name":`Tooltip`,layoutDependency:M,layoutId:`TqSk8psow`,style:{
                backgroundColor:`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(0, 0, 0))`,borderBottomLeftRadius:1e3,borderBottomRightRadius:1e3,borderTopLeftRadius:1e3,borderTopRightRadius:1e3,opacity:0
              },transformTemplate:oa,variants:{
                "jUUWzATNm-pressed":{
                  backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,borderBottomLeftRadius:649.66,borderBottomRightRadius:649.66,borderTopLeftRadius:649.66,borderTopRightRadius:649.66,opacity:1
                },"pfYwMgBao-hover":{
                  backgroundColor:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,opacity:1
                },jUUWzATNm:{
                  borderBottomLeftRadius:826.53,borderBottomRightRadius:826.53,borderTopLeftRadius:826.53,borderTopRightRadius:826.53
                }
              },...ea({
                "jUUWzATNm-pressed":{
                  transformTemplate:void 0
                },jUUWzATNm:{
                  transformTemplate:void 0
                }
              },S,D),children:c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,dir:`auto`,style:{
                      "--framer-text-color":`var(--extracted-r6o4lv, var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22)))`
                    },children:`Figma`
                  })
                }),className:`framer-9jnlh4`,fonts:[`Inter`],layoutDependency:M,layoutId:`YIU185PLw`,style:{
                  "--extracted-r6o4lv":`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                },text:h,variants:{
                  "jUUWzATNm-pressed":{
                    "--extracted-r6o4lv":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                  },"pfYwMgBao-hover":{
                    "--extracted-r6o4lv":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                  }
                },verticalAlignment:`top`,withExternalLayout:!0,...ea({
                  "jUUWzATNm-pressed":{
                    children:c(o,{
                      children:c(v.p,{
                        dir:`auto`,style:{
                          "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`8px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`112%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250)))`
                        },children:`Figma`
                      })
                    }),fonts:[`GF;Roboto-regular`]
                  },"pfYwMgBao-hover":{
                    children:c(o,{
                      children:c(v.p,{
                        className:`framer-styles-preset-455vy9`,"data-styles-preset":`xYEC_wF3E`,dir:`auto`,style:{
                          "--framer-text-color":`var(--extracted-r6o4lv, var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250)))`
                        },children:`Figma`
                      })
                    })
                  }
                },S,D)
              })
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-4jnvi.framer-14pk0ym, .framer-4jnvi .framer-14pk0ym { display: block; }`,`.framer-4jnvi.framer-1d3vdwe { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-4jnvi .framer-v93lqn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 17.14px; position: relative; width: 60px; z-index: 2; }`,`.framer-4jnvi .framer-4x0nzq { flex: none; height: var(--framer-aspect-ratio-supported, 26px); position: relative; width: 26px; }`,`.framer-4jnvi .framer-1xvo7ne { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 4px 8px 4px 8px; pointer-events: none; position: absolute; top: -32px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-4jnvi .framer-9jnlh4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-4jnvi.framer-v-2q9j0n.framer-1d3vdwe { height: 48px; width: 48px; }`,`.framer-4jnvi.framer-v-2q9j0n .framer-v93lqn { padding: 13.88px; width: min-content; }`,`.framer-4jnvi.framer-v-2q9j0n .framer-4x0nzq { height: var(--framer-aspect-ratio-supported, 20px); width: 21px; }`,`.framer-4jnvi.framer-v-2q9j0n .framer-1xvo7ne { gap: 26.45px; height: 17px; left: calc(52.50000000000002% - 41px / 2); padding: 3.31px 6.61px 3.31px 6.61px; top: -22px; width: 41px; }`,`.framer-4jnvi.framer-v-1d3vdwe.hover .framer-9jnlh4 { -webkit-user-select: none; user-select: none; }`,`.framer-4jnvi.framer-v-2q9j0n.pressed .framer-1xvo7ne { gap: 20.79px; height: 14px; left: calc(50.00000000000002% - 32px / 2); padding: 2.6px 5.2px 2.6px 5.2px; top: -19px; width: 32px; }`,...ze,`.framer-4jnvi[data-border="true"]::after, .framer-4jnvi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-4jnvi`),pa=fa,fa.displayName=`Tech Stack Logo`,fa.defaultProps={
    height:60,width:60
  },k(fa,{
    variant:{
      options:[`pfYwMgBao`,`jUUWzATNm`],optionTitles:[`Tech Stack Logo`,`Variant 2`],title:`Variant`,type:K.Enum
    },lSX_zlJoh:{
      defaultValue:`Figma`,description:``,displayTextArea:!0,placeholder:``,title:`Tooltip Text`,type:K.String
    },onlSX_zlJohChange:{
      changes:`lSX_zlJoh`,type:K.ChangeHandler
    },QL4h8C77w:{
      defaultValue:{
        identifier:`local-module:vector/FTchGdtjO:default`,moduleId:`lNH0tDOBde37KdhXfvGY`
      },description:`You can add your own icons by uploading svgs to this vector set located in the assets panel under vectors > project > toolstack icons`,setModuleId:`foi8KRYmiUbaVeWDl4ta`,title:`Logo`,type:K.VectorSetItem
    },nxpovt3KQ:{
      defaultValue:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222)) /* {"name":"Gray 30"} */`,title:`Logo color`,type:K.Color
    },K7ek3TKmV:{
      defaultValue:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)) /* {"name":"Brand Color"} */`,title:`Hover Color`,type:K.Color
    }
  }),L(fa,[{
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
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    }]
  },...j(Be)],{
    supportsExplicitInterCodegen:!0
  })
}));
function ha(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa=e((()=>{
  p(),q(),w(),h(),mt(),we(),wt(),Ct(),Pe(),ut(),ct(),In(),ga=M(Fn),_a=[`mgkPLXnxl`,`JGbZnEgiv`],va=`framer-NhwjA`,ya={
    JGbZnEgiv:`framer-v-ifd430`,mgkPLXnxl:`framer-v-1k8ix1f`
  },ba={
    bounce:0,delay:0,duration:.4,type:`spring`
  },xa=(e,t)=>`translateY(-50%) ${t}`,Sa=(...e)=>{
    for(let t of e)if(t&&typeof t==`string`)return t
  },Ca=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },wa={
    Close:`JGbZnEgiv`,Open:`mgkPLXnxl`
  },Ta=v.create(o),Ea=({
    answer:e,height:t,id:n,question:r,questionNumber:i,width:a,...s
  })=>({
    ...s,OVmUC8M7N:e??s.OVmUC8M7N??c(o,{
      children:c(v.p,{
        children:`Answer`
      })
    }),qQefXa5XK:r??s.qQefXa5XK??`Question`,r6VA76aYh:i??s.r6VA76aYh??`01`,variant:wa[s.variant]??s.variant??`mgkPLXnxl`
  }),Da=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Oa=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J(),u=G(),{
      style:d,className:p,layoutId:m,variant:h,r6VA76aYh:_,qQefXa5XK:y,OVmUC8M7N:b,...x
    }
    =Ea(e),{
      baseVariant:S,classNames:w,clearLoadingGesture:ee,gestureHandlers:E,gestureVariant:D,isLoading:O,setGestureState:k,setVariant:A,variants:j
    }
    =F({
      cycleOrder:_a,defaultVariant:`mgkPLXnxl`,ref:r,variant:h,variantClassNames:ya
    }),M=Da(e,j),{
      activeVariantCallback:N,delay:te
    }
    =le(S),I=N(async(...e)=>{
      k({
        isPressed:!1
      }),A(`JGbZnEgiv`)
    }),ne=N(async(...e)=>{
      k({
        isPressed:!1
      }),A(`mgkPLXnxl`)
    }),L=z(va,St,Le,De,kt,st,pt);
    return c(C,{
      id:m??i,children:c(Ta,{
        animate:j,initial:!1,children:c(Ca,{
          value:ba,children:f(v.div,{
            ...x,...E,className:z(L,`framer-1k8ix1f`,p,w),"data-border":!0,"data-framer-name":`Open`,"data-highlight":!0,layoutDependency:M,layoutId:`mgkPLXnxl`,onTap:I,ref:r,style:{
              "--border-bottom-width":`1px`,"--border-color":`rgba(84, 84, 84, 0.5)`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`rgb(31, 31, 31)`,borderBottomLeftRadius:16,borderBottomRightRadius:16,borderTopLeftRadius:16,borderTopRightRadius:16,...d
            },...ha({
              JGbZnEgiv:{
                "data-framer-name":`Close`,onTap:ne
              }
            },S,D),children:[f(v.div,{
              className:`framer-1twej7o`,"data-border":!0,"data-framer-name":`Question`,layoutDependency:M,layoutId:`q4EyngMxU`,style:{
                "--border-bottom-width":`1px`,"--border-color":`rgba(84, 84, 84, 0.5)`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`
              },variants:{
                JGbZnEgiv:{
                  "--border-color":`rgba(240, 240, 240, 0)`
                }
              },children:[c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    dir:`auto`,style:{
                      "--font-selector":`RlM7U3dpdHplci1tZWRpdW0=`,"--framer-font-family":`"Switzer", "Switzer Placeholder", sans-serif`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`150%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-994646e0-68ea-49d7-897a-104048558f6f, rgb(84, 84, 84)))`
                    },children:`01`
                  })
                }),className:`framer-cor8c1`,"data-framer-name":`Number`,fonts:[`FS;Switzer-medium`],layoutDependency:M,layoutId:`yzHcRo3f_`,style:{
                  "--extracted-r6o4lv":`var(--token-994646e0-68ea-49d7-897a-104048558f6f, rgb(84, 84, 84))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,opacity:0
                },text:_,transformTemplate:xa,variants:{
                  JGbZnEgiv:{
                    "--extracted-r6o4lv":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,opacity:1
                  }
                },verticalAlignment:`top`,withExternalLayout:!0,...ha({
                  JGbZnEgiv:{
                    children:c(o,{
                      children:c(v.p,{
                        dir:`auto`,style:{
                          "--font-selector":`R0Y7Um9ib3RvLTUwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`150%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                        },children:`01`
                      })
                    }),fonts:[`GF;Roboto-500`],transformTemplate:void 0
                  }
                },S,D)
              }),c(T,{
                __fromCanvasComponent:!0,children:c(o,{
                  children:c(v.p,{
                    dir:`auto`,style:{
                      "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-line-height":`150%`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222)))`
                    },children:c(v.strong,{
                      children:`Question`
                    })
                  })
                }),className:`framer-31udku`,"data-framer-name":`Question`,fonts:[`GF;Roboto-regular`,`GF;Roboto-700`],layoutDependency:M,layoutId:`u7ovuN9Pk`,style:{
                  "--extracted-r6o4lv":`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                },text:y,verticalAlignment:`top`,withExternalLayout:!0
              }),c(V,{
                height:28,width:`28px`,y:(u?.y||0)+0+0+58,children:c(P,{
                  className:`framer-fthsni-container`,layoutDependency:M,layoutId:`XuzIOGuiR-container`,nodeId:`XuzIOGuiR`,rendersWithMotion:!0,scopeId:`XD69tCqxC`,children:c(Fn,{
                    height:`100%`,id:`XuzIOGuiR`,layoutId:`XuzIOGuiR`,style:{
                      height:`100%`,width:`100%`
                    },UicWLgXHX:`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`,variant:Sa(`zyqkpAiKT`),width:`100%`,...ha({
                      JGbZnEgiv:{
                        variant:Sa(`LBG5uRyG7`)
                      }
                    },S,D)
                  })
                })
              })]
            }),c(v.div,{
              className:`framer-dpf78u`,"data-framer-name":`Answer`,layoutDependency:M,layoutId:`sd7dh5ecr`,style:{
                opacity:1
              },variants:{
                JGbZnEgiv:{
                  opacity:0
                }
              },children:c(fe,{
                presets:{
                  "module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube":dt.ToiwT9ohE,"module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":dt.dhYriWl2c
                },children:c(T,{
                  __fromCanvasComponent:!0,children:b,className:`framer-r3ce72`,"data-framer-name":`Answer`,fonts:[`Inter`],layoutDependency:M,layoutId:`rgxhdSYrg`,style:{
                    "--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
                  },stylesPresetsClassNames:{
                    a:`framer-styles-preset-1pmp3vy`,blockquote:`framer-styles-preset-1hz9sz8`,h6:`framer-styles-preset-yl6emr`,img:`framer-styles-preset-7lwmgv`,p:`framer-styles-preset-4e019n`,table:`framer-styles-preset-p3d9bn`
                  },verticalAlignment:`top`,withExternalLayout:!0
                })
              })
            })]
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-NhwjA.framer-qz4wjx, .framer-NhwjA .framer-qz4wjx { display: block; }`,`.framer-NhwjA.framer-1k8ix1f { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 390px; will-change: var(--framer-will-change-override, transform); }`,`.framer-NhwjA .framer-1twej7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; width: 100%; }`,`.framer-NhwjA .framer-cor8c1 { -webkit-user-select: none; flex: none; height: auto; left: -16px; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,`.framer-NhwjA .framer-31udku { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-NhwjA .framer-fthsni-container { flex: none; height: 28px; position: relative; width: 28px; }`,`.framer-NhwjA .framer-dpf78u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; }`,`.framer-NhwjA .framer-r3ce72 { -webkit-user-select: none; flex: 1 0 0px; height: auto; max-width: 640px; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-NhwjA.framer-v-ifd430 .framer-cor8c1 { left: unset; position: relative; top: unset; }`,`.framer-NhwjA.framer-v-ifd430 .framer-dpf78u { bottom: -100px; left: 0px; position: absolute; z-index: 1; }`,...Et,...Fe,...Te,...Tt,...gt,...xt,`.framer-NhwjA[data-border="true"]::after, .framer-NhwjA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-NhwjA`),ka=Oa,Oa.displayName=`FAQ Item`,Oa.defaultProps={
    height:110,width:390
  },k(Oa,{
    variant:{
      options:[`mgkPLXnxl`,`JGbZnEgiv`],optionTitles:[`Open`,`Close`],title:`Variant`,type:K.Enum
    },r6VA76aYh:{
      defaultValue:`01`,displayTextArea:!1,title:`Question Number`,type:K.String
    },onr6VA76aYhChange:{
      changes:`r6VA76aYh`,type:K.ChangeHandler
    },qQefXa5XK:{
      defaultValue:`Question`,displayTextArea:!1,title:`Question`,type:K.String
    },onqQefXa5XKChange:{
      changes:`qQefXa5XK`,type:K.ChangeHandler
    },OVmUC8M7N:{
      defaultValue:`<p>Answer</p>`,title:`Answer`,type:K.RichText
    }
  }),L(Oa,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Switzer`,source:`fontshare`,style:`normal`,uiFamilyName:`Switzer`,url:`https://framerusercontent.com/third-party-assets/fontshare/wf/OYB4CXKJQXKTNSLJMTDQOIVUL2V5EL7S/WYO2P7DQVV5RNXGMCUO2HL4RJP4VFUAS/6XPIMU23OJVRY676OG5YVJMWEHWICATX.woff2`,weight:`500`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmWggvWl0Qn.woff2`,weight:`500`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammWggvWl0Qn.woff2`,weight:`700`
    },{
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
  },...ga,...j(Ot),...j(Ie),...j(Ee),...j(Dt),...j(yt),...j(lt),..._t.dhYriWl2c?ve(_t.dhYriWl2c):[],..._t.ToiwT9ohE?ve(_t.ToiwT9ohE):[]],{
    supportsExplicitInterCodegen:!0
  }),Oa.loader={
    load:(e,t)=>(t.locale,Promise.allSettled([E(Fn,{},t)]))
  }
}));
function ja(e,...t){
  let n={};
  return t?.forEach(t=>t&&Object.assign(n,e[t])),n
}
var Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa=e((()=>{
  p(),q(),w(),h(),Ma=Ce(A(T)),Na=[`Gjxb5Z69j`,`CRMiPgOuX`,`CbAmNUL0O`],Pa=`framer-yW2Gg`,Fa={
    CbAmNUL0O:`framer-v-1d0rha2`,CRMiPgOuX:`framer-v-1psog6f`,Gjxb5Z69j:`framer-v-1d271z2`
  },Ia={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },La={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      delay:.8,duration:.7,ease:[.44,0,.56,1],type:`tween`
    },x:0,y:0
  },Ra={
    opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
  },za={
    effect:{
      filter:`blur(5px)`,opacity:.001,rotate:0,scale:1,skewX:0,skewY:0,x:0,y:10
    },repeat:!1,startDelay:0,threshold:.5,tokenization:`word`,transition:{
      delay:.1,duration:.8,ease:[.4,0,.2,1],type:`tween`
    },trigger:`onInView`,type:`appear`
  },Ba=({
    value:e,children:n
  })=>{
    let r=t(x),i=e??r.transition,a=d(()=>({
      ...r,transition:i
    }),[JSON.stringify(i)]);
    return c(x.Provider,{
      value:a,children:n
    })
  },Va={
    "Variant 1":`Gjxb5Z69j`,"Variant 2":`CRMiPgOuX`,"Variant 3":`CbAmNUL0O`
  },Ha=v.create(o),Ua=({
    height:e,id:t,width:n,...r
  })=>({
    ...r,variant:Va[r.variant]??r.variant??`Gjxb5Z69j`
  }),Wa=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Ga=R(l(function(e,t){
    let n=a(null),r=t??n,i=g(),{
      activeLocale:s,setLocale:l
    }
    =J();
    G();
    let{
      style:u,className:d,layoutId:p,variant:m,...h
    }
    =Ua(e),{
      baseVariant:_,classNames:y,clearLoadingGesture:b,gestureHandlers:x,gestureVariant:S,isLoading:w,setGestureState:T,setVariant:ee,variants:E
    }
    =F({
      cycleOrder:Na,defaultVariant:`Gjxb5Z69j`,ref:r,variant:m,variantClassNames:Fa
    }),D=Wa(e,E),O=z(Pa);
    return c(C,{
      id:p??i,children:c(Ha,{
        animate:E,initial:!1,children:c(Ba,{
          value:Ia,children:c(v.div,{
            ...h,...x,className:z(O,`framer-1d271z2`,d,y),"data-framer-name":`Variant 1`,layoutDependency:D,layoutId:`Gjxb5Z69j`,ref:r,style:{
              ...u
            },...ja({
              CbAmNUL0O:{
                "data-framer-name":`Variant 3`
              },CRMiPgOuX:{
                "data-framer-name":`Variant 2`
              }
            },_,S),children:c(Ma,{
              __fromCanvasComponent:!0,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,animate:La,children:c(o,{
                children:f(v.h1,{
                  dir:`auto`,style:{
                    "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1ib2xk`,"--framer-font-family":`"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,"--framer-font-size":`178px`,"--framer-font-weight":`700`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`145.586px`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-gdpscs, var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)))`
                  },children:[c(v.span,{
                    style:{
                      "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,"--framer-font-size":`239px`,"--framer-font-weight":`600`,"--framer-letter-spacing":`-0.04em`,"--framer-text-color":`var(--extracted-1sp2osd, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                    },children:`THINK`
                  }),c(v.span,{
                    style:{
                      "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,"--framer-font-size":`283px`,"--framer-font-weight":`600`,"--framer-text-color":`var(--extracted-f12k5c, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                    },children:c(v.br,{})
                  }),c(v.span,{
                    style:{
                      "--framer-font-size":`190px`
                    },children:`CREATIVELY`
                  })]
                })
              }),className:`framer-1udlhxk`,"data-framer-appear-id":`1udlhxk`,"data-framer-name":`Design that delivers results.`,effect:za,fonts:[`FS;Space Grotesk-bold`,`FS;Space Grotesk-semibold`],initial:Ra,layoutDependency:D,layoutId:`xsZR8J6Vo`,optimized:!0,style:{
                "--extracted-1sp2osd":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--extracted-f12k5c":`var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247))`,"--extracted-gdpscs":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`
              },variants:{
                CRMiPgOuX:{
                  "--extracted-1sp2osd":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                }
              },verticalAlignment:`center`,withExternalLayout:!0,...ja({
                CbAmNUL0O:{
                  children:c(o,{
                    children:f(v.h1,{
                      dir:`auto`,style:{
                        "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1ib2xk`,"--framer-font-family":`"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,"--framer-font-size":`63px`,"--framer-font-weight":`700`,"--framer-letter-spacing":`-0.04em`,"--framer-line-height":`55.586px`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-gdpscs, var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)))`
                      },children:[c(v.span,{
                        style:{
                          "--framer-font-size":`105px`,"--framer-text-color":`var(--extracted-1sp2osd, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                        },children:`THINK`
                      }),c(v.span,{
                        style:{
                          "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,"--framer-font-size":`283px`,"--framer-font-weight":`600`,"--framer-text-color":`var(--extracted-f12k5c, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                        },children:c(v.br,{})
                      }),c(v.span,{
                        style:{
                          "--framer-font-size":`68px`
                        },children:`CREATIVELY`
                      })]
                    })
                  })
                },CRMiPgOuX:{
                  children:c(o,{
                    children:f(v.h1,{
                      dir:`auto`,style:{
                        "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1ib2xk`,"--framer-font-family":`"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,"--framer-font-size":`126px`,"--framer-font-weight":`700`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`104.586px`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-gdpscs, var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)))`
                      },children:[c(v.span,{
                        style:{
                          "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,"--framer-font-size":`166px`,"--framer-font-weight":`600`,"--framer-letter-spacing":`-0.04em`,"--framer-text-color":`var(--extracted-1sp2osd, var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250)))`
                        },children:`THINK`
                      }),c(v.span,{
                        style:{
                          "--font-selector":`RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,"--framer-font-size":`283px`,"--framer-font-weight":`600`,"--framer-text-color":`var(--extracted-f12k5c, var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)))`
                        },children:c(v.br,{})
                      }),c(v.span,{
                        style:{
                          "--framer-font-size":`133px`
                        },children:`CREATIVELY`
                      })]
                    })
                  }),verticalAlignment:`top`
                }
              },_,S)
            })
          })
        })
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-yW2Gg.framer-y6o4vh, .framer-yW2Gg .framer-y6o4vh { display: block; }`,`.framer-yW2Gg.framer-1d271z2 { height: 366px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1039px; }`,`.framer-yW2Gg .framer-1udlhxk { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }`,`.framer-yW2Gg.framer-v-1psog6f.framer-1d271z2 { height: 292px; }`,`.framer-yW2Gg.framer-v-1d0rha2.framer-1d271z2 { height: 292px; width: 477px; }`,`.framer-yW2Gg.framer-v-1d0rha2 .framer-1udlhxk { bottom: unset; height: 193px; top: calc(49.657534246575366% - 193px / 2); }`],`framer-yW2Gg`),Ka=Ga,Ga.displayName=`Think Creatively`,Ga.defaultProps={
    height:366,width:1039
  },k(Ga,{
    variant:{
      options:[`Gjxb5Z69j`,`CRMiPgOuX`,`CbAmNUL0O`],optionTitles:[`Variant 1`,`Variant 2`,`Variant 3`],title:`Variant`,type:K.Enum
    }
  }),L(Ga,[{
    explicitInter:!0,fonts:[{
      cssFamilyName:`Space Grotesk`,source:`fontshare`,style:`normal`,uiFamilyName:`Space Grotesk`,url:`https://framerusercontent.com/third-party-assets/fontshare/wf/GFEQC7SZ2XMFHB2INR6RE24JKHO5JNTS/R2HDHPNP7PMXFG5AIIV7PF3KFELSLGKJ/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,weight:`700`
    },{
      cssFamilyName:`Space Grotesk`,source:`fontshare`,style:`normal`,uiFamilyName:`Space Grotesk`,url:`https://framerusercontent.com/third-party-assets/fontshare/wf/FOIKAJFLDFRPJ452NHBMMHCNDL4FUUBB/5AC3Y6FTG5H7IECKNZVIR7XI64O5YW5S/OB3CIWMGQGGYEGXRXPOVBXWAH4INE6T4.woff2`,weight:`600`
    }]
  }],{
    supportsExplicitInterCodegen:!0
  })
})),Ja,Ya,Xa,Za,Qa,$a=e((()=>{
  p(),q(),h(),Ja=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.53 10.43 C 10.43 10.12 10.34 9.82 10.24 9.51 C 10.14 9.2 10.05 8.91 9.97 8.62 C 9.89 8.34 9.82 8.08 9.75 7.84 L 9.73 7.84 C 9.64 8.27 9.53 8.7 9.39 9.13 C 9.24 9.61 9.09 10.11 8.93 10.61 C 8.79 11.12 8.64 11.59 8.49 12.01 L 11.03 12.01 C 10.97 11.799 10.89 11.55 10.8 11.289 C 10.71 11.02 10.62 10.73 10.53 10.43 Z M 19.75 0 L 4.25 0 C 1.9 0 0 1.9 0 4.25 L 0 19.15 C 0 21.5 1.9 23.4 4.25 23.4 L 19.75 23.4 C 22.1 23.4 24 21.5 24 19.15 L 24 4.25 C 24 1.9 22.1 0 19.75 0 Z M 14.7 16.53 L 12.609 16.53 C 12.54 16.54 12.47 16.49 12.45 16.42 L 11.63 14.04 L 7.91 14.04 L 7.15 16.39 C 7.13 16.48 7.05 16.54 6.96 16.531 L 5.08 16.531 C 4.97 16.531 4.94 16.47 4.97 16.351 L 8.19 7.08 C 8.22 6.98 8.25 6.87 8.29 6.75 C 8.33 6.54 8.35 6.32 8.35 6.1 C 8.34 6.05 8.38 6 8.43 5.99 L 11.02 5.99 C 11.1 5.99 11.14 6.02 11.15 6.07 L 14.8 16.37 C 14.83 16.479 14.8 16.53 14.7 16.53 Z M 18.1 16.38 C 18.1 16.49 18.061 16.54 17.971 16.54 L 16.01 16.54 C 15.91 16.54 15.86 16.479 15.86 16.38 L 15.86 8.68 C 15.86 8.58 15.901 8.54 15.991 8.54 L 17.971 8.54 C 18.061 8.54 18.1 8.59 18.1 8.68 Z M 17.891 7.35 C 17.652 7.593 17.32 7.72 16.98 7.7 C 16.65 7.71 16.33 7.58 16.089 7.35 C 15.86 7.099 15.738 6.769 15.749 6.43 C 15.739 6.09 15.869 5.77 16.108 5.54 C 16.35 5.31 16.67 5.19 17 5.19 C 17.391 5.19 17.689 5.31 17.91 5.54 C 18.13 5.78 18.25 6.1 18.24 6.43 C 18.25 6.77 18.13 7.1 17.891 7.35 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="23.4px" id="XOBG8hVnd" transform="translate(0 0.3)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,Ya=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),Xa=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),Za=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =Xa(e);
    return c(Ya,{
      ...s,className:z(`framer-PbUeR`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-PbUeR { -webkit-mask: ${Ja}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${Ja}; width: 24px; }`],`framer-PbUeR`),Za.displayName=`Adobeillustrator`,Qa=Za,k(Za,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),eo,to,no,ro,io,ao=e((()=>{
  p(),q(),h(),eo=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.97 4.208 C 4.716 4.814 4.996 4.768 6.398 4.674 L 19.613 3.881 C 19.893 3.881 19.66 3.601 19.567 3.555 L 17.371 1.968 C 16.951 1.642 16.39 1.268 15.316 1.361 L 2.521 2.295 C 2.055 2.341 1.961 2.575 2.147 2.761 Z M 4.763 7.288 L 4.763 21.192 C 4.763 21.939 5.136 22.219 5.977 22.172 L 20.5 21.332 C 21.341 21.286 21.435 20.772 21.435 20.165 L 21.435 6.354 C 21.435 5.748 21.202 5.421 20.687 5.467 L 5.51 6.354 C 4.95 6.401 4.763 6.681 4.763 7.287 Z M 19.1 8.033 C 19.193 8.453 19.1 8.873 18.68 8.921 L 17.98 9.061 L 17.98 19.325 C 17.372 19.652 16.812 19.839 16.345 19.839 C 15.597 19.839 15.41 19.605 14.85 18.906 L 10.273 11.72 L 10.273 18.672 L 11.721 19 C 11.721 19 11.721 19.84 10.553 19.84 L 7.331 20.026 C 7.238 19.84 7.331 19.373 7.658 19.28 L 8.498 19.047 L 8.498 9.854 L 7.333 9.76 C 7.239 9.34 7.473 8.734 8.126 8.687 L 11.582 8.454 L 16.346 15.733 L 16.346 9.293 L 15.131 9.154 C 15.038 8.64 15.411 8.267 15.878 8.221 Z M 1.447 1.035 L 14.757 0.055 C 16.391 -0.085 16.812 0.008 17.839 0.755 L 22.088 3.741 C 22.788 4.254 23.022 4.394 23.022 4.954 L 23.022 21.332 C 23.022 22.358 22.649 22.966 21.342 23.058 L 5.884 23.992 C 4.904 24.039 4.436 23.899 3.922 23.245 L 0.793 19.185 C 0.233 18.438 0 17.879 0 17.225 L 0 2.667 C 0 1.828 0.374 1.127 1.447 1.035 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="24.00005076732048px" id="QIHV3GUwU" transform="translate(0.489 0)" width="23.022px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,to=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),no=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),ro=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =no(e);
    return c(to,{
      ...s,className:z(`framer-qvVrt`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-qvVrt { -webkit-mask: ${eo}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${eo}; width: 24px; }`],`framer-qvVrt`),ro.displayName=`Notion`,io=ro,k(ro,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),oo,so,co,lo,uo,fo=e((()=>{
  p(),q(),h(),oo=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.85 8.12 C 9.48 7.97 9.08 7.91 8.67 7.92 C 8.41 7.92 8.18 7.92 7.99 7.93 C 7.79 7.92 7.65 7.93 7.58 7.94 L 7.58 11.3 C 7.72 11.31 7.85 11.32 7.97 11.32 L 8.5 11.32 C 8.89 11.32 9.28 11.26 9.65 11.14 C 9.97 11.05 10.25 10.86 10.47 10.61 C 10.68 10.36 10.78 10.02 10.78 9.58 C 10.79 9.27 10.71 8.96 10.55 8.69 C 10.383 8.43 10.138 8.231 9.85 8.12 Z M 19.75 0 L 4.25 0 C 1.9 0 0 1.9 0 4.25 L 0 19.149 C 0 21.499 1.9 23.399 4.25 23.399 L 19.75 23.399 C 22.1 23.399 24 21.499 24 19.149 L 24 4.25 C 24 1.9 22.1 0 19.75 0 Z M 12.359 11.65 C 11.96 12.21 11.4 12.63 10.75 12.87 C 10.07 13.12 9.32 13.21 8.5 13.21 C 8.26 13.21 8.1 13.21 8 13.2 C 7.9 13.19 7.76 13.19 7.57 13.19 L 7.57 16.399 C 7.58 16.469 7.53 16.53 7.46 16.54 L 5.52 16.54 C 5.44 16.54 5.4 16.499 5.4 16.409 L 5.4 6.12 C 5.4 6.05 5.43 6.01 5.5 6.01 C 5.67 6.01 5.83 6.01 6.06 6 C 6.3 5.99 6.55 5.99 6.82 5.98 C 7.09 5.97 7.38 5.97 7.69 5.96 C 8 5.95 8.3 5.95 8.6 5.95 C 9.42 5.95 10.1 6.05 10.66 6.26 C 11.16 6.43 11.62 6.71 12 7.08 C 12.32 7.4 12.57 7.79 12.73 8.22 C 12.879 8.64 12.959 9.07 12.959 9.52 C 12.96 10.38 12.76 11.09 12.359 11.65 Z M 19.45 15.54 C 19.17 15.94 18.779 16.249 18.33 16.431 C 17.84 16.64 17.24 16.749 16.519 16.749 C 16.06 16.749 15.609 16.71 15.16 16.62 C 14.81 16.559 14.46 16.45 14.14 16.3 C 14.07 16.261 14.019 16.191 14.029 16.111 L 14.029 14.371 C 14.029 14.342 14.04 14.301 14.07 14.281 C 14.099 14.261 14.13 14.271 14.16 14.291 C 14.55 14.521 14.96 14.682 15.4 14.781 C 15.779 14.881 16.179 14.931 16.58 14.931 C 16.96 14.931 17.23 14.88 17.41 14.79 C 17.57 14.72 17.68 14.55 17.68 14.37 C 17.68 14.229 17.6 14.1 17.44 13.97 C 17.28 13.841 16.951 13.691 16.461 13.499 C 15.951 13.319 15.482 13.079 15.041 12.78 C 14.728 12.556 14.468 12.266 14.28 11.93 C 14.121 11.614 14.042 11.263 14.051 10.909 C 14.051 10.479 14.171 10.069 14.392 9.699 C 14.642 9.299 15.011 8.979 15.441 8.779 C 15.91 8.54 16.5 8.43 17.21 8.43 C 17.62 8.43 18.04 8.46 18.45 8.52 C 18.75 8.56 19.04 8.64 19.31 8.75 C 19.349 8.76 19.39 8.8 19.41 8.84 C 19.42 8.88 19.43 8.92 19.43 8.96 L 19.43 10.59 C 19.43 10.63 19.41 10.67 19.38 10.69 C 19.29 10.71 19.24 10.71 19.2 10.69 C 18.9 10.53 18.58 10.42 18.24 10.35 C 17.87 10.27 17.5 10.22 17.12 10.22 C 16.92 10.21 16.71 10.24 16.519 10.29 C 16.39 10.32 16.279 10.39 16.209 10.49 C 16.159 10.57 16.129 10.67 16.129 10.76 C 16.129 10.85 16.169 10.94 16.23 11.02 C 16.32 11.13 16.439 11.22 16.57 11.29 C 16.799 11.41 17.04 11.52 17.279 11.62 C 17.82 11.8 18.34 12.05 18.82 12.35 C 19.15 12.559 19.42 12.84 19.609 13.18 C 19.769 13.498 19.849 13.85 19.839 14.209 C 19.85 14.68 19.71 15.149 19.45 15.54 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="23.398999999999997px" id="bYC27ymtB" transform="translate(0 0.3)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,so=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),co=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),lo=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =co(e);
    return c(so,{
      ...s,className:z(`framer-9mBSh`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-9mBSh { -webkit-mask: ${oo}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${oo}; width: 24px; }`],`framer-9mBSh`),lo.displayName=`Adobephotoshop`,uo=lo,k(lo,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),po,mo,ho,go,_o,vo=e((()=>{
  p(),q(),h(),po=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 4.679 15.872 L 9.373 13.239 L 9.452 13.01 L 9.373 12.883 L 9.144 12.883 L 8.36 12.834 L 5.678 12.762 L 3.352 12.665 L 1.099 12.544 L 0.532 12.424 L 0 11.723 L 0.055 11.373 L 0.532 11.053 L 1.214 11.112 L 2.724 11.216 L 4.988 11.372 L 6.631 11.468 L 9.065 11.721 L 9.452 11.721 L 9.507 11.565 L 9.374 11.468 L 9.271 11.372 L 6.928 9.784 L 4.391 8.105 L 3.062 7.139 L 2.344 6.649 L 1.981 6.19 L 1.825 5.188 L 2.477 4.47 L 3.354 4.529 L 3.577 4.589 L 4.465 5.272 L 6.361 6.739 L 8.837 8.563 L 9.199 8.864 L 9.344 8.761 L 9.362 8.688 L 9.199 8.416 L 7.852 5.982 L 6.416 3.507 L 5.776 2.481 L 5.607 1.865 C 5.547 1.612 5.504 1.4 5.504 1.14 L 6.246 0.132 L 6.657 0 L 7.648 0.132 L 8.065 0.494 L 8.68 1.902 L 9.677 4.119 L 11.224 7.132 L 11.676 8.026 L 11.918 8.854 L 12.008 9.107 L 12.164 9.107 L 12.164 8.962 L 12.292 7.264 L 12.527 5.18 L 12.755 2.498 L 12.834 1.743 L 13.208 0.838 L 13.951 0.348 L 14.53 0.625 L 15.007 1.308 L 14.941 1.749 L 14.658 3.592 L 14.102 6.478 L 13.74 8.411 L 13.951 8.411 L 14.192 8.17 L 15.17 6.871 L 16.813 4.818 L 17.538 4.003 L 18.383 3.102 L 18.926 2.674 L 19.952 2.674 L 20.708 3.797 L 20.369 4.956 L 19.313 6.296 L 18.437 7.432 L 17.18 9.123 L 16.396 10.476 L 16.468 10.584 L 16.655 10.566 L 19.493 9.962 L 21.027 9.685 L 22.856 9.371 L 23.684 9.758 L 23.774 10.151 L 23.449 10.955 L 21.492 11.438 L 19.197 11.897 L 15.779 12.706 L 15.737 12.736 L 15.785 12.796 L 17.325 12.941 L 17.984 12.976 L 19.596 12.976 L 22.599 13.2 L 23.383 13.719 L 23.853 14.353 L 23.774 14.837 L 22.566 15.452 L 20.936 15.065 L 17.132 14.16 L 15.827 13.835 L 15.647 13.835 L 15.647 13.943 L 16.734 15.006 L 18.726 16.805 L 21.221 19.124 L 21.349 19.698 L 21.028 20.15 L 20.69 20.102 L 18.498 18.453 L 17.652 17.71 L 15.737 16.098 L 15.61 16.098 L 15.61 16.267 L 16.051 16.913 L 18.382 20.416 L 18.503 21.49 L 18.333 21.84 L 17.729 22.051 L 17.066 21.93 L 15.701 20.015 L 14.294 17.858 L 13.158 15.925 L 13.02 16.004 L 12.35 23.222 L 12.035 23.591 L 11.311 23.868 L 10.707 23.409 L 10.386 22.666 L 10.707 21.199 L 11.093 19.284 L 11.407 17.762 L 11.691 15.871 L 11.86 15.242 L 11.849 15.201 L 11.71 15.218 L 10.285 17.175 L 8.117 20.105 L 6.401 21.941 L 5.99 22.104 L 5.278 21.735 L 5.344 21.077 L 5.742 20.49 L 8.117 17.47 L 9.548 15.598 L 10.473 14.518 L 10.467 14.361 L 10.412 14.361 L 4.106 18.456 L 2.983 18.601 L 2.5 18.148 L 2.559 17.406 L 2.788 17.164 L 4.684 15.859 L 4.678 15.866 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="23.86791946308724px" id="zJ3v7QPjc" width="23.853422818791945px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,mo=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),ho=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),go=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =ho(e);
    return c(mo,{
      ...s,className:z(`framer-5cUSt`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-5cUSt { -webkit-mask: ${po}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${po}; width: 24px; }`],`framer-5cUSt`),go.displayName=`Claude`,_o=go,k(go,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),yo,bo,xo,So,Co,wo=e((()=>{
  p(),q(),h(),yo=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.195 8.981 L 7.607 8.981 L 7.607 0 L 12.195 0 C 14.671 0 16.685 2.014 16.685 4.49 C 16.685 6.966 14.671 8.981 12.195 8.981 Z M 9.078 7.51 L 12.195 7.51 C 13.86 7.51 15.214 6.155 15.214 4.491 C 15.214 2.827 13.859 1.472 12.195 1.472 L 9.078 1.472 Z M 9.078 8.981 L 4.491 8.981 C 2.015 8.981 0.001 6.967 0.001 4.491 C 0.001 2.015 2.015 0 4.491 0 L 9.079 0 L 9.079 8.981 Z M 4.491 1.471 C 2.826 1.471 1.472 2.826 1.472 4.49 C 1.472 6.154 2.826 7.51 4.491 7.51 L 7.608 7.51 L 7.608 1.471 Z M 9.078 16.49 L 4.491 16.49 C 2.015 16.49 0.001 14.476 0.001 12 C 0.001 9.524 2.015 7.51 4.491 7.51 L 9.079 7.51 L 9.079 16.49 Z M 4.491 8.981 C 2.826 8.981 1.472 10.336 1.472 12 C 1.472 13.664 2.827 15.019 4.491 15.019 L 7.608 15.019 L 7.608 8.981 Z M 4.515 24 C 2.026 24 0 21.986 0 19.51 C 0 17.034 2.014 15.02 4.49 15.02 L 9.078 15.02 L 9.078 19.461 C 9.078 21.964 7.031 24 4.515 24 Z M 4.491 16.49 C 2.825 16.492 1.474 17.843 1.472 19.509 C 1.472 21.174 2.837 22.528 4.516 22.528 C 6.221 22.528 7.609 21.152 7.609 19.46 L 7.609 16.49 Z M 12.195 16.49 L 12.097 16.49 C 9.621 16.49 7.607 14.476 7.607 12 C 7.607 9.524 9.621 7.51 12.097 7.51 L 12.195 7.51 C 14.671 7.51 16.685 9.524 16.685 12 C 16.685 14.476 14.671 16.49 12.195 16.49 Z M 12.098 8.981 C 10.433 8.981 9.079 10.336 9.079 12 C 9.079 13.664 10.434 15.019 12.098 15.019 L 12.196 15.019 C 13.861 15.019 15.215 13.664 15.215 12 C 15.215 10.336 13.86 8.981 12.196 8.981 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="24.000000457763676px" id="MFERPTv09" transform="translate(3.657 0)" width="16.68499987411499px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,bo=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),xo=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),So=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =xo(e);
    return c(bo,{
      ...s,className:z(`framer-LRnTG`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-LRnTG { -webkit-mask: ${yo}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${yo}; width: 24px; }`],`framer-LRnTG`),So.displayName=`Figma`,Co=So,k(So,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),To,Eo,Do,Oo,ko,Ao=e((()=>{
  p(),q(),h(),To=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16 0 L 16 8 L 8 8 Z M 0 8 L 8 8 L 16 16 L 0 16 Z M 0 16 L 8 16 L 8 24 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="24px" id="cRzu_KaKs" transform="translate(4 0)" width="16px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,Eo=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),Do=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),Oo=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =Do(e);
    return c(Eo,{
      ...s,className:z(`framer-eIDFL`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-eIDFL { -webkit-mask: ${To}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${To}; width: 24px; }`],`framer-eIDFL`),Oo.displayName=`Framer`,ko=Oo,k(Oo,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),jo,Mo,No,Po,Fo,Io=e((()=>{
  p(),q(),h(),jo=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 22.119 9.821 C 22.662 8.186 22.474 6.397 21.603 4.911 C 20.294 2.632 17.663 1.46 15.093 2.011 C 13.645 0.4 11.449 -0.316 9.33 0.131 C 7.211 0.578 5.491 2.121 4.818 4.18 C 3.13 4.526 1.673 5.582 0.82 7.08 C -0.504 9.355 -0.203 12.225 1.563 14.177 C 1.018 15.811 1.204 17.6 2.073 19.088 C 3.384 21.367 6.017 22.539 8.588 21.988 C 9.732 23.276 11.375 24.009 13.097 24 C 15.731 24.002 18.064 22.302 18.869 19.794 C 20.556 19.447 22.013 18.39 22.866 16.894 C 24.174 14.623 23.872 11.768 22.119 9.821 Z M 13.097 22.43 C 12.046 22.431 11.028 22.063 10.221 21.39 L 10.362 21.309 L 15.141 18.551 C 15.383 18.409 15.532 18.15 15.533 17.87 L 15.533 11.133 L 17.553 12.301 C 17.573 12.311 17.587 12.33 17.591 12.353 L 17.591 17.936 C 17.586 20.415 15.577 22.424 13.097 22.43 Z M 3.437 18.304 C 2.91 17.393 2.72 16.326 2.902 15.29 L 3.044 15.375 L 7.827 18.134 C 8.068 18.275 8.366 18.275 8.607 18.134 L 14.45 14.765 L 14.45 17.097 C 14.449 17.121 14.437 17.144 14.417 17.159 L 9.577 19.95 C 7.427 21.188 4.68 20.451 3.437 18.304 Z M 2.177 7.896 C 2.708 6.979 3.546 6.28 4.543 5.923 L 4.543 11.6 C 4.54 11.879 4.688 12.138 4.931 12.276 L 10.746 15.631 L 8.726 16.799 C 8.704 16.81 8.677 16.81 8.655 16.799 L 3.825 14.013 C 1.678 12.769 0.941 10.023 2.177 7.872 Z M 18.774 11.751 L 12.941 8.364 L 14.956 7.2 C 14.978 7.188 15.005 7.188 15.027 7.2 L 19.857 9.991 C 21.366 10.86 22.236 12.523 22.091 14.258 C 21.947 15.993 20.813 17.488 19.181 18.096 L 19.181 12.418 C 19.173 12.139 19.018 11.886 18.774 11.751 Z M 20.784 8.728 L 20.643 8.643 L 15.869 5.861 C 15.627 5.718 15.326 5.718 15.084 5.861 L 9.246 9.23 L 9.246 6.897 C 9.244 6.873 9.254 6.849 9.274 6.836 L 14.104 4.049 C 15.615 3.179 17.493 3.26 18.923 4.258 C 20.353 5.256 21.079 6.99 20.784 8.709 Z M 8.144 12.863 L 6.124 11.699 C 6.104 11.686 6.09 11.665 6.086 11.642 L 6.086 6.075 C 6.09 4.331 7.099 2.747 8.678 2.008 C 10.257 1.269 12.12 1.508 13.461 2.622 L 13.319 2.702 L 8.541 5.46 C 8.299 5.601 8.15 5.86 8.148 6.141 Z M 9.241 10.498 L 11.843 8.998 L 14.45 10.498 L 14.45 13.497 L 11.853 14.997 L 9.246 13.497 Z" fill="var(--12auh5f, var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)))" height="23.999699446554825px" id="StbmadDPt" transform="translate(0.163 0)" width="23.67387420357654px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`,Mo=l((e,t)=>{
    let{
      animated:n,layoutId:r,children:i,...a
    }
    =e;
    return n?c(v.div,{
      ...a,layoutId:r,ref:t
    }):c(`div`,{
      ...a,ref:t
    })
  }),No=({
    color:e,height:t,id:n,width:r,...i
  })=>({
    ...i,zZ3sDiGC9:e??i.zZ3sDiGC9??`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240))`
  }),Po=R(l(function(e,t){
    let{
      style:n,className:r,layoutId:i,variant:a,zZ3sDiGC9:o,...s
    }
    =No(e);
    return c(Mo,{
      ...s,className:z(`framer-bkZDx`,r),layoutId:i,ref:t,style:{
        "--12auh5f":o,...n
      }
    })
  }),[`.framer-bkZDx { -webkit-mask: ${jo}; aspect-ratio: 1; background-color: var(--12auh5f); mask: ${jo}; width: 24px; }`],`framer-bkZDx`),Po.displayName=`ChatGPT`,Fo=Po,k(Po,{
    zZ3sDiGC9:{
      defaultValue:`var(--token-08cb0f10-6dc5-4949-913f-dbd7168f1cf0, rgb(240, 240, 240)) /* {"name":"Gray 20"} */`,hidden:!1,title:`Color`,type:K.Color
    }
  })
})),Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Q,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,$,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc;
e((()=>{
  p(),q(),w(),h(),s(),at(),en(),un(),Je(),Sn(),$n(),Ae(),ft(),wr(),Zr(),wi(),Ii(),Ft(),Mt(),qi(),Rt(),ht(),$e(),rt(),ma(),Bt(),Aa(),Ht(),qa(),Gt(),je(),zt(),Ye(),$a(),ao(),fo(),vo(),wo(),Ao(),Io(),Kt(),Lo=M(xn),Ro=M(Ka),zo=M(Qn),Bo=Ce(W),Vo=M(Jt),Ho=Ce(A(H)),Uo=A(v.div),Wo=M(It),Go=M(At),Ko=Ce(v.div),qo=M(Pt),Jo=M(Vt),Yo=M(vt),Xo=M(pa),Q=A(W),Zo=M(Ci),Qo=M(et),$o=M(Xr),es=N(v.div),ts=M(Cr),ns=ie(v.div),rs=M(ka),is=M(Ki),as=M(Ut),os=N(v.main),ss=M(bt),cs=M(Ne),ls=M(Fi),us=M(it),ds={
    c2VvwuEge:`(min-width: 992px) and (max-width: 1199.98px)`,C3r9hMJuq:`(max-width: 767.98px)`,lrnRvRVeF:`(min-width: 1200px) and (max-width: 1199.98px)`,oIMIRmEsG:`(min-width: 768px) and (max-width: 991.98px)`,WQLkyLRf1:`(min-width: 1200px)`
  },fs=()=>typeof document<`u`,ps=[],ms=`framer-b9wxR`,hs={
    c2VvwuEge:`framer-v-dsxqep`,C3r9hMJuq:`framer-v-1slso0x`,lrnRvRVeF:`framer-v-1t5x8dn`,oIMIRmEsG:`framer-v-1d7c730`,WQLkyLRf1:`framer-v-72rtr7`
  },gs={
    bounce:0,delay:0,duration:.4,type:`spring`
  },_s=(e,t,n)=>e&&t?`position`:n,$=(...e)=>{
    for(let t of e)if(t&&typeof t==`string`)return t
  },vs={
    opacity:.001,rotate:0,scale:1,skewX:0,skewY:0,x:0,y:10
  },ys={
    effect:vs,repeat:!1,startDelay:.3,threshold:.5,tokenization:`element`,transition:{
      delay:.55,duration:.8,ease:[.4,0,.2,1],type:`tween`
    },trigger:`onInView`,type:`appear`
  },bs={
    effect:vs,repeat:!1,startDelay:.2,threshold:.5,tokenization:`element`,transition:{
      delay:.55,duration:.9,ease:[.4,0,.2,1],type:`tween`
    },trigger:`onInView`,type:`appear`
  },xs={
    delay:.4,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Ss={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:xs,x:0,y:0
  },Cs={
    opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
  },ws={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      delay:.6,duration:.8,ease:[.4,0,.2,1],type:`tween`
    },x:0,y:0
  },Ts=(e,t)=>`translateX(-50%) ${t}`,Es={
    bounceDamping:28,bounceStiffness:69,delay:0,type:`inertia`
  },Ds=e=>e.preventDefault(),Os={
    cursor:`grabbing`
  },ks={
    bounceDamping:30,bounceStiffness:400,delay:0,type:`inertia`
  },As={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      delay:0,duration:.7,ease:[.39,.01,1,1],type:`tween`
    },x:0,y:0
  },js={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      delay:0,duration:.9,ease:[.39,.05,.79,.97],type:`tween`
    },x:0,y:0
  },Ms={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      delay:.6,duration:.6,ease:[.4,0,.2,1],type:`tween`
    },x:0,y:0
  },Ns={
    effect:vs,repeat:!1,startDelay:0,threshold:.5,tokenization:`word`,transition:{
      delay:.05,duration:.9,ease:[.55,.01,.2,1],type:`tween`
    },trigger:`onInView`,type:`appear`
  },Ps=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{
    src:e
  }:void 0,Fs=()=>({
    from:{
      alias:`iflcXQ2ZL`,data:Wt,type:`Collection`
    },limit:{
      type:`LiteralValue`,value:1
    },select:[{
      collection:`iflcXQ2ZL`,name:`XdrJID_A2`,type:`Identifier`
    },{
      collection:`iflcXQ2ZL`,name:`lonRy_0aR`,type:`Identifier`
    },{
      collection:`iflcXQ2ZL`,name:`REU1pIKSU`,type:`Identifier`
    },{
      collection:`iflcXQ2ZL`,name:`fwzCneSH2`,type:`Identifier`
    },{
      collection:`iflcXQ2ZL`,name:`id`,type:`Identifier`
    }]
  }),Is=({
    query:e,pageSize:t,children:n
  })=>n(ne(e)),Ls=()=>({
    from:{
      alias:`trhF01sIM`,data:Wt,type:`Collection`
    },limit:{
      type:`LiteralValue`,value:1
    },offset:{
      type:`LiteralValue`,value:1
    },select:[{
      collection:`trhF01sIM`,name:`XdrJID_A2`,type:`Identifier`
    },{
      collection:`trhF01sIM`,name:`lonRy_0aR`,type:`Identifier`
    },{
      collection:`trhF01sIM`,name:`REU1pIKSU`,type:`Identifier`
    },{
      collection:`trhF01sIM`,name:`fwzCneSH2`,type:`Identifier`
    },{
      collection:`trhF01sIM`,name:`id`,type:`Identifier`
    }]
  }),Rs=()=>({
    from:{
      alias:`ElHlGkgdE`,data:Wt,type:`Collection`
    },limit:{
      type:`LiteralValue`,value:1
    },offset:{
      type:`LiteralValue`,value:2
    },select:[{
      collection:`ElHlGkgdE`,name:`XdrJID_A2`,type:`Identifier`
    },{
      collection:`ElHlGkgdE`,name:`lonRy_0aR`,type:`Identifier`
    },{
      collection:`ElHlGkgdE`,name:`REU1pIKSU`,type:`Identifier`
    },{
      collection:`ElHlGkgdE`,name:`fwzCneSH2`,type:`Identifier`
    },{
      collection:`ElHlGkgdE`,name:`id`,type:`Identifier`
    }]
  }),zs=()=>({
    from:{
      alias:`y5vXWt5zK`,data:Wt,type:`Collection`
    },limit:{
      type:`LiteralValue`,value:1
    },offset:{
      type:`LiteralValue`,value:3
    },select:[{
      collection:`y5vXWt5zK`,name:`XdrJID_A2`,type:`Identifier`
    },{
      collection:`y5vXWt5zK`,name:`lonRy_0aR`,type:`Identifier`
    },{
      collection:`y5vXWt5zK`,name:`REU1pIKSU`,type:`Identifier`
    },{
      collection:`y5vXWt5zK`,name:`fwzCneSH2`,type:`Identifier`
    },{
      collection:`y5vXWt5zK`,name:`id`,type:`Identifier`
    }]
  }),Bs={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-15,y:0
  },Vs={
    delay:.2,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Hs={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-20,y:0
  },Us={
    delay:.3,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Ws={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-10,y:0
  },Gs={
    delay:.1,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Ks={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-5,y:0
  },qs={
    delay:0,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Js={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-25,y:0
  },Ys={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-35,y:0
  },Xs={
    delay:.7,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },Zs={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-30,y:0
  },Qs={
    delay:.5,duration:.6,ease:[.4,0,.2,1],type:`tween`
  },$s={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{
      bounce:0,delay:0,duration:1.3,type:`spring`
    },x:0,y:0
  },ec={
    effect:vs,repeat:!1,startDelay:0,threshold:.5,tokenization:`word`,transition:{
      delay:.05,duration:.8,ease:[.4,0,.2,1],type:`tween`
    },trigger:`onInView`,type:`appear`
  },tc=(e,t)=>{
    if(!(!e||typeof e!=`object`))return{
      ...e,alt:t
    }
  },nc={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
  },rc={
    bounce:.2,delay:0,duration:.4,type:`spring`
  },ic={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:rc,x:0,y:0
  },ac={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:100
  },oc={
    bounce:.2,delay:0,duration:.6,type:`spring`
  },sc={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:oc,x:0,y:100
  },cc={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:148
  },lc={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:oc,x:0,y:148
  },uc={
    bounce:0,delay:0,duration:.8,type:`spring`
  },dc={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:uc,x:500,y:0
  },fc={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:uc,x:0,y:0
  },pc={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:500,y:0
  },mc={
    opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:oc,x:0,y:0
  },hc={
    opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:oc,x:0,y:0
  },gc=()=>document.querySelector(`#template-overlay`)??document.querySelector(`#overlay`)??document.body,_c=({
    children:e,blockDocumentScrolling:t,dismissWithEsc:n,enabled:r=!0
  })=>{
    let[i,a]=O({
      blockDocumentScrolling:t,dismissWithEsc:r&&n
    });
    return e({
      hide:()=>a(!1),show:()=>a(!0),toggle:()=>a(!i),visible:r&&i
    })
  },vc={
    "Desktop Large":`WQLkyLRf1`,"Desktop Small":`c2VvwuEge`,Breakpoint:`lrnRvRVeF`,Phone:`C3r9hMJuq`,Tablet:`oIMIRmEsG`
  },yc=({
    value:e
  })=>be()?null:c(`style`,{
    dangerouslySetInnerHTML:{
      __html:e
    },"data-framer-html-style":``
  }),bc=({
    height:e,id:t,width:n,...r
  })=>({
    ...r,variant:vc[r.variant]??r.variant??`WQLkyLRf1`
  }),xc={
    damping:60,delay:0,mass:1,stiffness:500,type:`spring`
  },Sc={
    component:Fi,transition:xc,variant:`rVwUqmmY9`
  },Cc={
    component:Fi,transition:{
      damping:177,delay:0,mass:4.1,stiffness:427,type:`spring`
    },variant:`rVwUqmmY9`
  },wc={
    alignment:`center`,component:it,offset:{
      x:20,y:20
    },placement:`bottom`,transition:xc,variant:`hDK5a9MFe`
  },Tc={
    alignment:`center`,component:it,offset:{
      x:0,y:0
    },placement:`bottom`,transition:xc,variant:`hDK5a9MFe`
  },Ec=R(l(function(e,n){
    let r=a(null),i=n??r,s=g(),{
      activeLocale:l,setLocale:p
    }
    =J(),h=G(),{
      style:_,className:y,layoutId:b,variant:w,...E
    }
    =bc(e);
    re(d(()=>qt({},l),[l]));
    let[D,O]=xe(w,ds,!1),{
      activeVariantCallback:k,delay:A
    }
    =le(void 0),j=({
      overlay:e
    })=>k(async(...t)=>{
      e.toggle()
    }),M=({
      overlay:e
    })=>k(async(...t)=>{
      e.hide()
    }),N=z(ms,Lt,Qe,Me),P=t(_e)?.isLayoutTemplate,F=_s(P,!!t(x)?.transition?.layout,`position`),ne=()=>fs()?D!==`lrnRvRVeF`:!0,L=U(`BZchDvhMe`),R=a(null),ie=()=>fs()?D!==`C3r9hMJuq`:!0,ae=U(`wa1OpPtbn`),oe=a(null),se=U(`bPRlM5v_3`),ce=a(null),fe=U(`V8zY16Byd`),me=a(null);
    ee();
    let ve=U(`O1EWxm2cI`),K=a(null),q=U(`d2en67I0l`),be=a(null),Se=U(`GqS2yBBGz`),Ce=a(null),we=U(`jUxCuYDrA`),Te=a(null),Ee=U(`wWxpymqOt`),De=a(null),Oe=()=>!fs()||D===`oIMIRmEsG`;
    return de({
      "1ndu3ur":Sc,"1pr93m6":Tc,ouzbm8:Cc,qf8daz:wc
    }),c(_e.Provider,{
      value:{
        activeVariantId:D,humanReadableVariantMap:vc,primaryVariantId:`WQLkyLRf1`,variantClassNames:hs
      },children:f(C,{
        id:b??s,children:[c(yc,{
          value:`html body { background: var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22)); }`
        }),f(es,{
          ...E,className:z(N,`framer-72rtr7`,y),flowEffectEnabled:!0,flowEffectTransition:gs,isNestedFlowEffect:!1,ref:i,style:{
            ..._
          },children:[c(V,{
            children:c(W,{
              className:`framer-2477nt-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:F,nodeId:`juui1CLCr`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(xn,{
                height:`100%`,id:`juui1CLCr`,intensity:10,layoutId:`juui1CLCr`,width:`100%`
              })
            })
          }),ne()&&f(v.section,{
            className:`framer-13kxl6w hidden-1t5x8dn`,"data-framer-name":`Hero`,id:L,layout:F,ref:R,children:[f(`div`,{
              className:`framer-jjf53m`,children:[c(B,{
                breakpoint:D,overrides:{
                  C3r9hMJuq:{
                    height:192,width:`352px`
                  },oIMIRmEsG:{
                    height:279,width:`calc(${h?.width||`100vw`} - 64px)`
                  }
                },children:c(V,{
                  height:366,width:`1039px`,children:c(W,{
                    className:`framer-iuomh4-container`,nodeId:`KKu0qcdNP`,scopeId:`augiA20Il`,children:c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          variant:$(`CbAmNUL0O`)
                        },oIMIRmEsG:{
                          variant:$(`CRMiPgOuX`)
                        }
                      },children:c(Ka,{
                        height:`100%`,id:`KKu0qcdNP`,layoutId:`KKu0qcdNP`,style:{
                          height:`100%`,width:`100%`
                        },variant:$(`Gjxb5Z69j`),width:`100%`
                      })
                    })
                  })
                })
              }),f(`div`,{
                className:`framer-q4zb98`,children:[c(B,{
                  breakpoint:D,overrides:{
                    C3r9hMJuq:{
                      children:c(o,{
                        children:c(`p`,{
                          className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                            "--framer-text-alignment":`center`,"--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                          },children:`I help brands turn ideas into structured, meaningful experiences`
                        })
                      }),effect:bs
                    },oIMIRmEsG:{
                      children:c(o,{
                        children:c(`p`,{
                          className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                            "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                          },children:`I help brands turn ideas into structured, meaningful experiences.`
                        })
                      })
                    }
                  },children:c(T,{
                    __fromCanvasComponent:!0,children:c(o,{
                      children:c(`p`,{
                        className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                          "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                        },children:`I help brands turn ideas into structured, meaningful experiences`
                      })
                    }),className:`framer-hogmjb`,"data-framer-name":`Strategic design that drives growth, not just looks good. I create everything your brand needs to attract customers and turn them into sales.`,effect:ys,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                  })
                }),c(V,{
                  height:44,children:c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        animate:ws
                      }
                    },children:c(Bo,{
                      animate:Ss,className:`framer-6ciele-container`,"data-framer-appear-id":`6ciele`,"data-framer-name":`Book a call`,initial:Cs,name:`Book a call`,nodeId:`QwIlqr9RU`,optimized:!0,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(Qn,{
                        F5kijZeBS:`Book a call with me`,height:`100%`,id:`QwIlqr9RU`,layoutId:`QwIlqr9RU`,N1vCdSJNj:`https://cal.com/ruchit-designs`,name:`Book a call`,variant:$(`cJZx9_mDy`),width:`100%`
                      })
                    })
                  })
                })]
              }),c(B,{
                breakpoint:D,overrides:{
                  C3r9hMJuq:{
                    __perspectiveFX:!1,__targetOpacity:1,drag:!0,dragMomentum:!1,dragSnapToOrigin:!0,dragTransition:Es,onMouseDown:Ds,whileTap:Os
                  },oIMIRmEsG:{
                    transformTemplate:Ts
                  }
                },children:f(Uo,{
                  className:`framer-1oroz0s`,"data-framer-cursor":`1ndu3ur`,children:[ie()&&c(V,{
                    children:c(W,{
                      className:`framer-1j5tb8d-container hidden-1slso0x`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`eNd7aDTcj`,scopeId:`augiA20Il`,children:c(Jt,{
                        direction:`toward`,distance:35,enabled:!0,height:`100%`,id:`eNd7aDTcj`,layoutId:`eNd7aDTcj`,smoothing:63,width:`100%`
                      })
                    })
                  }),c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        "data-framer-cursor":void 0,animate:js,background:{
                          alt:``,fit:`fill`,intrinsicHeight:2400,intrinsicWidth:2400,pixelHeight:3e3,pixelWidth:3e3,sizes:`352.93px`,src:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000`,srcSet:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=512&width=3000&height=3000 512w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=1024&width=3000&height=3000 1024w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=2048&width=3000&height=3000 2048w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000 3000w`
                        },drag:void 0,onMouseDown:void 0
                      },oIMIRmEsG:{
                        background:{
                          alt:``,fit:`fill`,intrinsicHeight:2400,intrinsicWidth:2400,pixelHeight:3e3,pixelWidth:3e3,sizes:`308px`,src:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000`,srcSet:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=512&width=3000&height=3000 512w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=1024&width=3000&height=3000 1024w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=2048&width=3000&height=3000 2048w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000 3000w`
                        }
                      }
                    },children:c(Ho,{
                      __perspectiveFX:!1,__targetOpacity:1,animate:As,background:{
                        alt:``,fit:`fill`,intrinsicHeight:2400,intrinsicWidth:2400,pixelHeight:3e3,pixelWidth:3e3,sizes:`480px`,src:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000`,srcSet:`https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=512&width=3000&height=3000 512w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=1024&width=3000&height=3000 1024w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?scale-down-to=2048&width=3000&height=3000 2048w,https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp?width=3000&height=3000 3000w`
                      },className:`framer-kgdfq0`,"data-framer-appear-id":`kgdfq0`,"data-framer-cursor":`ouzbm8`,"data-framer-name":`IOS Emoji Face PNG`,drag:!0,dragMomentum:!1,dragSnapToOrigin:!0,dragTransition:ks,initial:Cs,onMouseDown:Ds,optimized:!0
                    })
                  })]
                })
              })]
            }),c(`div`,{
              className:`framer-w2n11f`,"data-border":!0,"data-framer-name":`Client Logos`,children:f(`div`,{
                className:`framer-8knrt8`,"data-framer-name":`Insider Container`,children:[c(V,{
                  height:44,children:c(W,{
                    className:`framer-g2ih6x-container`,"data-framer-name":`Happy Clients`,name:`Happy Clients`,nodeId:`l8oWSXbX8`,scopeId:`augiA20Il`,children:c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          variant:$(`VxczZxRsI`)
                        }
                      },children:c(It,{
                        height:`100%`,id:`l8oWSXbX8`,iqJIfbPtt:`0px 0px 0px 2px var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,JN9T_XsQV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,khYrgfDVq:`99+ Happy clients`,layoutId:`l8oWSXbX8`,name:`Happy Clients`,nRc4djRbN:22,variant:$(`jEIpwiYtl`),width:`100%`
                      })
                    })
                  })
                }),c(Ko,{
                  animate:Ms,className:`framer-qbsodz`,"data-framer-appear-id":`qbsodz`,"data-framer-name":`Logos`,initial:Cs,optimized:!0,children:c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        width:`max(max(${h?.width||`100vw`}, 1px) - 44px, 1px)`
                      }
                    },children:c(V,{
                      height:30,children:c(W,{
                        className:`framer-152l3mw-container`,nodeId:`oW8mzZQM_`,scopeId:`augiA20Il`,children:c(At,{
                          height:`100%`,id:`oW8mzZQM_`,layoutId:`oW8mzZQM_`,style:{
                            width:`100%`
                          },width:`100%`
                        })
                      })
                    })
                  })
                })]
              })
            })]
          }),ne()&&f(os,{
            className:`framer-n52bgx hidden-1t5x8dn`,"data-framer-name":`Main`,flowEffectEnabled:!0,id:ae,isNestedFlowEffect:!0,layout:F,ref:oe,children:[c(v.section,{
              className:`framer-vltq38`,"data-framer-name":`Latest Projects`,id:se,layout:`position`,ref:ce,children:f(`div`,{
                className:`framer-4gugwl`,"data-framer-name":`Inside Container`,children:[c(T,{
                  __fromCanvasComponent:!0,children:c(o,{
                    children:f(`h1`,{
                      className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,style:{
                        "--framer-text-color":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
                      },children:[c(`span`,{
                        style:{
                          "--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                        },children:`Latest `
                      }),`Projects`]
                    })
                  }),className:`framer-mplf9h`,effect:Ns,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                }),f(`div`,{
                  className:`framer-19y3y9x`,"data-framer-name":`Projects`,children:[f(`div`,{
                    className:`framer-2o9ve0`,"data-framer-name":`Top Projects`,id:fe,ref:me,children:[c(`div`,{
                      className:`framer-nf8if8`,"data-framer-name":`1`,children:c(ge,{
                        children:c(Is,{
                          query:Fs(),children:(e,t,n)=>c(m,{
                            children:e?.map(({
                              fwzCneSH2:e,id:t,lonRy_0aR:n,REU1pIKSU:r,XdrJID_A2:i
                            },a)=>(n??=``,r??=``,e??=``,c(C,{
                              id:`iflcXQ2ZL-${t}`,children:c(ye.Provider,{
                                value:{
                                  fwzCneSH2:e
                                },children:c(he,{
                                  links:[{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  }],children:e=>c(B,{
                                    breakpoint:D,overrides:{
                                      C3r9hMJuq:{
                                        width:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`
                                      }
                                    },children:c(V,{
                                      height:357,width:`max((min(${h?.width||`100vw`}, 1080px) - 96px) / 2, 1px)`,children:c(W,{
                                        className:`framer-y87dwv-container`,"data-framer-cursor":`qf8daz`,nodeId:`D0IcHQdtY`,rendersWithMotion:!0,scopeId:`augiA20Il`,style:{
                                          transformPerspective:1200
                                        },children:c(B,{
                                          breakpoint:D,overrides:{
                                            c2VvwuEge:{
                                              UHrBTw6mM:e[1]
                                            },C3r9hMJuq:{
                                              UHrBTw6mM:e[3],variant:$(`W6fmImdIS`)
                                            },oIMIRmEsG:{
                                              UHrBTw6mM:e[2]
                                            }
                                          },children:c(Pt,{
                                            height:`100%`,id:`D0IcHQdtY`,iloSRMXnR:r,layoutId:`D0IcHQdtY`,LGYqcgIu1:`1pr93m6`,style:{
                                              width:`100%`
                                            },UHrBTw6mM:e[0],V3EdlvBkG:n,variant:$(`zhYui7icB`),width:`100%`,z6ovJ6t8Z:Ps(i)
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            },t)))
                          })
                        })
                      })
                    }),c(`div`,{
                      className:`framer-9xrltp`,"data-framer-name":`2`,children:c(ge,{
                        children:c(Is,{
                          query:Ls(),children:(e,t,n)=>c(m,{
                            children:e?.map(({
                              fwzCneSH2:e,id:t,lonRy_0aR:n,REU1pIKSU:r,XdrJID_A2:i
                            },a)=>(n??=``,r??=``,e??=``,c(C,{
                              id:`trhF01sIM-${t}`,children:c(ye.Provider,{
                                value:{
                                  fwzCneSH2:e
                                },children:c(he,{
                                  links:[{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  }],children:e=>c(B,{
                                    breakpoint:D,overrides:{
                                      C3r9hMJuq:{
                                        width:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`
                                      }
                                    },children:c(V,{
                                      height:357,width:`max((min(${h?.width||`100vw`}, 1080px) - 96px) / 2, 1px)`,children:c(W,{
                                        className:`framer-12r7e94-container`,"data-framer-cursor":`qf8daz`,nodeId:`JRty21YTx`,rendersWithMotion:!0,scopeId:`augiA20Il`,style:{
                                          transformPerspective:1200
                                        },children:c(B,{
                                          breakpoint:D,overrides:{
                                            c2VvwuEge:{
                                              UHrBTw6mM:e[1]
                                            },C3r9hMJuq:{
                                              UHrBTw6mM:e[3],variant:$(`W6fmImdIS`)
                                            },oIMIRmEsG:{
                                              UHrBTw6mM:e[2]
                                            }
                                          },children:c(Pt,{
                                            height:`100%`,id:`JRty21YTx`,iloSRMXnR:r,layoutId:`JRty21YTx`,LGYqcgIu1:`1pr93m6`,style:{
                                              width:`100%`
                                            },UHrBTw6mM:e[0],V3EdlvBkG:n,variant:$(`zhYui7icB`),width:`100%`,z6ovJ6t8Z:Ps(i)
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            },t)))
                          })
                        })
                      })
                    })]
                  }),f(`div`,{
                    className:`framer-4h54b4`,"data-framer-name":`Bottom Projects`,children:[c(`div`,{
                      className:`framer-dg8crp`,"data-framer-name":`3`,children:c(ge,{
                        children:c(Is,{
                          query:Rs(),children:(e,t,n)=>c(m,{
                            children:e?.map(({
                              fwzCneSH2:e,id:t,lonRy_0aR:n,REU1pIKSU:r,XdrJID_A2:i
                            },a)=>(n??=``,r??=``,e??=``,c(C,{
                              id:`ElHlGkgdE-${t}`,children:c(ye.Provider,{
                                value:{
                                  fwzCneSH2:e
                                },children:c(he,{
                                  links:[{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  }],children:e=>c(B,{
                                    breakpoint:D,overrides:{
                                      C3r9hMJuq:{
                                        width:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`
                                      }
                                    },children:c(V,{
                                      height:357,width:`max((min(${h?.width||`100vw`}, 1080px) - 96px) / 2, 1px)`,children:c(W,{
                                        className:`framer-317lc2-container`,"data-framer-cursor":`qf8daz`,nodeId:`lGMTpzwMi`,rendersWithMotion:!0,scopeId:`augiA20Il`,style:{
                                          transformPerspective:1200
                                        },children:c(B,{
                                          breakpoint:D,overrides:{
                                            c2VvwuEge:{
                                              UHrBTw6mM:e[1]
                                            },C3r9hMJuq:{
                                              UHrBTw6mM:e[3],variant:$(`W6fmImdIS`)
                                            },oIMIRmEsG:{
                                              UHrBTw6mM:e[2]
                                            }
                                          },children:c(Pt,{
                                            height:`100%`,id:`lGMTpzwMi`,iloSRMXnR:r,layoutId:`lGMTpzwMi`,LGYqcgIu1:`1pr93m6`,style:{
                                              width:`100%`
                                            },UHrBTw6mM:e[0],V3EdlvBkG:n,variant:$(`zhYui7icB`),width:`100%`,z6ovJ6t8Z:Ps(i)
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            },t)))
                          })
                        })
                      })
                    }),c(`div`,{
                      className:`framer-8pn4m5`,"data-framer-name":`4`,children:c(ge,{
                        children:c(Is,{
                          query:zs(),children:(e,t,n)=>c(m,{
                            children:e?.map(({
                              fwzCneSH2:e,id:t,lonRy_0aR:n,REU1pIKSU:r,XdrJID_A2:i
                            },a)=>(n??=``,r??=``,e??=``,c(C,{
                              id:`y5vXWt5zK-${t}`,children:c(ye.Provider,{
                                value:{
                                  fwzCneSH2:e
                                },children:c(he,{
                                  links:[{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  },{
                                    href:{
                                      pathVariables:{
                                        fwzCneSH2:e
                                      },webPageId:`O37Bzv5zI`
                                    },implicitPathVariables:void 0
                                  }],children:e=>c(B,{
                                    breakpoint:D,overrides:{
                                      C3r9hMJuq:{
                                        width:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`
                                      }
                                    },children:c(V,{
                                      height:357,width:`max((min(${h?.width||`100vw`}, 1080px) - 96px) / 2, 1px)`,children:c(W,{
                                        className:`framer-1py8tw5-container`,"data-framer-cursor":`qf8daz`,nodeId:`kCbCLdgwP`,rendersWithMotion:!0,scopeId:`augiA20Il`,style:{
                                          transformPerspective:1200
                                        },children:c(B,{
                                          breakpoint:D,overrides:{
                                            c2VvwuEge:{
                                              UHrBTw6mM:e[1]
                                            },C3r9hMJuq:{
                                              UHrBTw6mM:e[3],variant:$(`W6fmImdIS`)
                                            },oIMIRmEsG:{
                                              UHrBTw6mM:e[2]
                                            }
                                          },children:c(Pt,{
                                            height:`100%`,id:`kCbCLdgwP`,iloSRMXnR:r,layoutId:`kCbCLdgwP`,LGYqcgIu1:`1pr93m6`,style:{
                                              width:`100%`
                                            },UHrBTw6mM:e[0],V3EdlvBkG:n,variant:$(`zhYui7icB`),width:`100%`,z6ovJ6t8Z:Ps(i)
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            },t)))
                          })
                        })
                      })
                    })]
                  })]
                }),c(he,{
                  links:[{
                    href:{
                      webPageId:`eOPu6CN6f`
                    },implicitPathVariables:void 0
                  },{
                    href:{
                      webPageId:`eOPu6CN6f`
                    },implicitPathVariables:void 0
                  },{
                    href:{
                      webPageId:`eOPu6CN6f`
                    },implicitPathVariables:void 0
                  },{
                    href:{
                      webPageId:`eOPu6CN6f`
                    },implicitPathVariables:void 0
                  }],children:e=>c(V,{
                    height:28,children:c(W,{
                      className:`framer-ssa3mc-container`,"data-framer-name":`View all projects`,name:`View all projects`,nodeId:`rrB6A7WS7`,scopeId:`augiA20Il`,children:c(B,{
                        breakpoint:D,overrides:{
                          c2VvwuEge:{
                            I8j5ZcDgy:e[1]
                          },C3r9hMJuq:{
                            I8j5ZcDgy:e[3]
                          },oIMIRmEsG:{
                            I8j5ZcDgy:e[2]
                          }
                        },children:c(Vt,{
                          aWr3uf33N:!1,height:`100%`,I8j5ZcDgy:e[0],id:`rrB6A7WS7`,layoutId:`rrB6A7WS7`,MWxLGyIHQ:`View all my projects`,name:`View all projects`,width:`100%`,zRzdSp3NC:!1
                        })
                      })
                    })
                  })
                })]
              })
            }),c(v.section,{
              className:`framer-1kvtyk0`,"data-border":!0,"data-framer-name":`Big Quote Testimonial`,layout:`position`,children:c(`div`,{
                className:`framer-1i2l836`,"data-framer-name":`Inside Container`,children:c(B,{
                  breakpoint:D,overrides:{
                    C3r9hMJuq:{
                      width:`max(min(${h?.width||`100vw`}, 1080px) - 44px, 1px)`
                    }
                  },children:c(V,{
                    height:194,width:`max(min(${h?.width||`100vw`}, 1080px) - 88px, 1px)`,children:c(W,{
                      className:`framer-f3h8i2-container`,nodeId:`sq1iBUo4Q`,scopeId:`augiA20Il`,children:c(B,{
                        breakpoint:D,overrides:{
                          C3r9hMJuq:{
                            IXcQiQTV4:`12px`
                          }
                        },children:c(vt,{
                          bpIEBcjHl:`Phillip B.`,height:`100%`,hvDPmZS7s:c(o,{
                            children:c(`p`,{
                              dir:`auto`,children:`“Ruchit’s approach is structured. He focuses on clarity before design, and that reflects in every detail. Nothing felt random.”`
                            })
                          }),id:`sq1iBUo4Q`,IXcQiQTV4:`24px`,layoutId:`sq1iBUo4Q`,style:{
                            width:`100%`
                          },W8Mbyr0eT:`CTO of INnUP`,width:`100%`
                        })
                      })
                    })
                  })
                })
              })
            }),c(v.section,{
              className:`framer-1tcd00y`,"data-framer-name":`Services`,id:ve,layout:`position`,ref:K,children:f(`div`,{
                className:`framer-ytf2ua`,children:[f(`div`,{
                  className:`framer-16t13w`,"data-framer-name":`Heading / Techstack`,children:[c(T,{
                    __fromCanvasComponent:!0,children:c(o,{
                      children:f(`h1`,{
                        className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,children:[`What I help`,c(`br`,{}),`you to `,c(`span`,{
                          style:{
                            "--framer-text-color":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
                          },children:`Shape…`
                        })]
                      })
                    }),className:`framer-pn9cry`,"data-framer-name":`Services I can help you with.`,effect:Ns,fonts:[`Inter`],id:q,ref:be,verticalAlignment:`top`,withExternalLayout:!0
                  }),f(`div`,{
                    className:`framer-lapy4p`,"data-framer-name":`Techstack`,children:[c(T,{
                      __fromCanvasComponent:!0,children:c(o,{
                        children:c(`p`,{
                          className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                            "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                          },children:`Tools that I use`
                        })
                      }),className:`framer-4tqp5e`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                    }),f(`div`,{
                      className:`framer-a3i36e`,"data-framer-name":`Techstack`,children:[c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:Vs
                          },__framer__animateOnce:!0,__framer__enter:Bs,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1vgiljk-container`,"data-framer-name":`3 - 0.2 delay`,name:`3 - 0.2 delay`,nodeId:`bK4JBMfdW`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`bK4JBMfdW`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`bK4JBMfdW`,lSX_zlJoh:`Adobe Photoshop`,name:`3 - 0.2 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:uo,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:Us
                          },__framer__animateOnce:!0,__framer__enter:Hs,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1dloqpg-container`,"data-framer-name":`4 - 0.3 delay`,name:`4 - 0.3 delay`,nodeId:`lgUsS2UeP`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`lgUsS2UeP`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`lgUsS2UeP`,lSX_zlJoh:`Adobe Illustrator`,name:`4 - 0.3 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:Qa,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:Gs
                          },__framer__animateOnce:!0,__framer__enter:Ws,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-hlb76f-container`,"data-framer-name":`2 - 0.1 delay`,name:`2 - 0.1 delay`,nodeId:`noXfh5Jtz`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`noXfh5Jtz`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`noXfh5Jtz`,lSX_zlJoh:`Framer`,name:`2 - 0.1 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:ko,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:qs
                          },__framer__animateOnce:!0,__framer__enter:Ks,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-t4tofe-container`,"data-framer-name":`1 - 0 delay`,name:`1 - 0 delay`,nodeId:`QE5lUisli`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`QE5lUisli`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`QE5lUisli`,lSX_zlJoh:`Figma`,name:`1 - 0 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:Co,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:xs
                          },__framer__animateOnce:!0,__framer__enter:Js,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-apvw9r-container`,"data-framer-name":`5 - 0.4 delay`,name:`5 - 0.4 delay`,nodeId:`WgBcXjbbg`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`WgBcXjbbg`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`WgBcXjbbg`,lSX_zlJoh:`ChatGPT`,name:`5 - 0.4 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:Fo,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:Xs
                          },__framer__animateOnce:!0,__framer__enter:Ys,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-114oqi7-container`,"data-framer-name":`8 - 0.7 delay`,name:`8 - 0.7 delay`,nodeId:`KSdC4raYS`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`KSdC4raYS`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`KSdC4raYS`,lSX_zlJoh:`Claude`,name:`8 - 0.7 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:_o,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      }),c(V,{
                        height:60,children:c(Q,{
                          __framer__animate:{
                            transition:Qs
                          },__framer__animateOnce:!0,__framer__enter:Zs,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1xrhv9r-container`,"data-framer-name":`6 - 0.5 delay`,name:`6 - 0.5 delay`,nodeId:`gdT8Mv2aF`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              C3r9hMJuq:{
                                variant:$(`jUUWzATNm`)
                              }
                            },children:c(pa,{
                              height:`100%`,id:`gdT8Mv2aF`,K7ek3TKmV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,layoutId:`gdT8Mv2aF`,lSX_zlJoh:`Notion`,name:`6 - 0.5 delay`,nxpovt3KQ:`var(--token-e3a90888-763b-420f-bb27-f2520e07d9b1, rgb(222, 222, 222))`,QL4h8C77w:io,variant:$(`pfYwMgBao`),width:`100%`
                            })
                          })
                        })
                      })]
                    })]
                  })]
                }),f(`div`,{
                  className:`framer-l0jvx4`,children:[c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        height:325,width:`calc(${h?.width||`100vw`} - 44px)`
                      },oIMIRmEsG:{
                        height:350,width:`max((${h?.width||`100vw`} - 88px) / 2, 50px)`
                      }
                    },children:c(V,{
                      height:280,width:`442px`,children:c(Q,{
                        __framer__spring:{
                          damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:300,type:`spring`
                        },__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{
                          target:{
                            opacity:0,rotate:30,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:170
                          }
                        },{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }],__framer__transformTrigger:`onInView`,__perspectiveFX:!1,__targetOpacity:1,className:`framer-qt53c6-container`,nodeId:`fqhjNBpA_`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              sHKmSVB8M:`Understanding the problem clearly before designing the solution. Every decision is based on purpose, `
                            }
                          },children:c(Ci,{
                            AKGKaR72_:`User Research`,bVRtZiN42:!0,E_I7SgBAJ:!0,EqeyGApHf:!0,hA0GNMM83:!1,height:`100%`,id:`fqhjNBpA_`,iPq5htUek:`Information Architecture`,layoutId:`fqhjNBpA_`,lw1xoxeVM:`7yy`,MgyxuhhrT:ln,pThcaAyHy:`Design Strategy`,RseUJq3x6:`Experience Mapping`,sHKmSVB8M:`Understanding the problem clearly before designing the solution. Every decision is based on purpose, not guesswork.`,style:{
                              height:`100%`,width:`100%`
                            },T8xVc_SIr:!0,um9Aucp6E:`User Flows`,variant:$(`ldk8tsURS`),vvRsdYpCi:!1,width:`100%`,wpLlPeKH3:!1,xjulmHYPB:`0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03)`,yIm5rJWzO:`hknm`
                          })
                        })
                      })
                    })
                  }),c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        height:325,width:`calc(${h?.width||`100vw`} - 44px)`
                      },oIMIRmEsG:{
                        height:350,width:`max((${h?.width||`100vw`} - 88px) / 2, 50px)`
                      }
                    },children:c(V,{
                      height:280,width:`442px`,children:c(Q,{
                        __framer__spring:{
                          damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:300,type:`spring`
                        },__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{
                          target:{
                            opacity:1,rotate:-30,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:170
                          }
                        },{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }],__framer__transformTrigger:`onInView`,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1ebnryq-container`,nodeId:`dFNqcJAKX`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(Ci,{
                          AKGKaR72_:`Logo Design`,bVRtZiN42:!0,E_I7SgBAJ:!0,EqeyGApHf:!0,hA0GNMM83:!1,height:`100%`,id:`dFNqcJAKX`,iPq5htUek:`Visual Identity Systems`,layoutId:`dFNqcJAKX`,lw1xoxeVM:`7yy`,MgyxuhhrT:Ke,pThcaAyHy:`Brand Identity`,RseUJq3x6:`Brand Guidelines`,sHKmSVB8M:`Creating strong visual systems that communicate clearly and stay consistent across every touchpoint.`,style:{
                            height:`100%`,width:`100%`
                          },T8xVc_SIr:!0,um9Aucp6E:`Typography`,variant:$(`IVZvitqPF`),vvRsdYpCi:!1,width:`100%`,wpLlPeKH3:!1,xjulmHYPB:``,yIm5rJWzO:`Color Systems`
                        })
                      })
                    })
                  }),c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        height:325,width:`calc(${h?.width||`100vw`} - 44px)`
                      },oIMIRmEsG:{
                        height:350,width:`max((${h?.width||`100vw`} - 88px) / 2, 50px)`
                      }
                    },children:c(V,{
                      height:280,width:`442px`,children:c(Q,{
                        __framer__spring:{
                          damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:300,type:`spring`
                        },__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{
                          target:{
                            opacity:1,rotate:20,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:170
                          }
                        },{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }],__framer__transformTrigger:`onInView`,__perspectiveFX:!1,__targetOpacity:1,className:`framer-aw8e02-container`,nodeId:`m2kXReVnB`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              iPq5htUek:`Usability Thinking`,um9Aucp6E:`Prototyping`,yIm5rJWzO:`Prototyping`
                            }
                          },children:c(Ci,{
                            AKGKaR72_:`Wireframing`,bVRtZiN42:!0,E_I7SgBAJ:!0,EqeyGApHf:!0,hA0GNMM83:!1,height:`100%`,id:`m2kXReVnB`,iPq5htUek:`Prototyping`,layoutId:`m2kXReVnB`,lw1xoxeVM:`7yy`,MgyxuhhrT:Ke,pThcaAyHy:`UI/UX Design`,RseUJq3x6:`Interaction Design`,sHKmSVB8M:`Designing interfaces that are simple, intuitive, and built around real user behavior.`,style:{
                              height:`100%`,width:`100%`
                            },T8xVc_SIr:!0,um9Aucp6E:`Usability Thinking`,variant:$(`ldk8tsURS`),vvRsdYpCi:!1,width:`100%`,wpLlPeKH3:!1,xjulmHYPB:``,yIm5rJWzO:`Accessibility`
                          })
                        })
                      })
                    })
                  }),c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        height:325,width:`calc(${h?.width||`100vw`} - 44px)`
                      },oIMIRmEsG:{
                        height:189,width:`calc(max((${h?.width||`100vw`} - 88px) / 2, 50px) * 2 + 16px)`
                      }
                    },children:c(V,{
                      height:280,width:`442px`,children:c(Q,{
                        __framer__spring:{
                          damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:300,type:`spring`
                        },__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{
                          target:{
                            opacity:1,rotate:-20,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:170
                          }
                        },{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }],__framer__transformTrigger:`onInView`,__perspectiveFX:!1,__targetOpacity:1,className:`framer-e26o30-container`,nodeId:`R3ZGdxV5_`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(Ci,{
                          AKGKaR72_:`Packaging Systems`,bVRtZiN42:!0,E_I7SgBAJ:!0,EqeyGApHf:!0,hA0GNMM83:!1,height:`100%`,id:`R3ZGdxV5_`,iPq5htUek:`Label Design`,layoutId:`R3ZGdxV5_`,lw1xoxeVM:`7yy`,MgyxuhhrT:Ke,pThcaAyHy:`Packaging Design`,RseUJq3x6:`Print Production`,sHKmSVB8M:`Designing packaging that stands out on shelf and communicates product value instantly.`,style:{
                            height:`100%`,width:`100%`
                          },T8xVc_SIr:!0,um9Aucp6E:`Visual Hierarchy`,variant:$(`IVZvitqPF`),vvRsdYpCi:!1,width:`100%`,wpLlPeKH3:!1,xjulmHYPB:``,yIm5rJWzO:`Conversion Design`
                        })
                      })
                    })
                  }),c(B,{
                    breakpoint:D,overrides:{
                      C3r9hMJuq:{
                        height:325,width:`calc(${h?.width||`100vw`} - 44px)`
                      },oIMIRmEsG:{
                        height:350,width:`max((${h?.width||`100vw`} - 88px) / 2, 50px)`
                      }
                    },children:c(V,{
                      height:280,width:`442px`,children:c(Q,{
                        __framer__spring:{
                          damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:300,type:`spring`
                        },__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{
                          target:{
                            opacity:1,rotate:-20,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:170
                          }
                        },{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }],__framer__transformTrigger:`onInView`,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1x2rkqq-container`,nodeId:`ekfDMQmdf`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                          breakpoint:D,overrides:{
                            oIMIRmEsG:{
                              variant:$(`IVZvitqPF`)
                            }
                          },children:c(Ci,{
                            AKGKaR72_:`Social Media Creatives`,bVRtZiN42:!0,E_I7SgBAJ:!0,EqeyGApHf:!0,hA0GNMM83:!1,height:`100%`,id:`ekfDMQmdf`,iPq5htUek:`Ad Creatives`,layoutId:`ekfDMQmdf`,lw1xoxeVM:`7yy`,MgyxuhhrT:Ke,pThcaAyHy:`Digital Design`,RseUJq3x6:`Campaign Visuals`,sHKmSVB8M:`Creating visuals that grab attention and communicate clearly across digital platforms.`,style:{
                              height:`100%`,width:`100%`
                            },T8xVc_SIr:!0,um9Aucp6E:`Content Design`,variant:$(`ldk8tsURS`),vvRsdYpCi:!1,width:`100%`,wpLlPeKH3:!1,xjulmHYPB:``,yIm5rJWzO:`Conversion Design`
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            }),c(v.section,{
              className:`framer-ti4fmg`,"data-border":!0,"data-framer-name":`About Me`,id:Se,layout:`position`,ref:Ce,children:f(`div`,{
                className:`framer-rxatli`,"data-framer-name":`Inside Container`,children:[c(T,{
                  __fromCanvasComponent:!0,children:c(o,{
                    children:f(`h1`,{
                      className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,style:{
                        "--framer-text-alignment":`left`
                      },children:[c(`span`,{
                        style:{
                          "--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                        },children:`Designing experiences`
                      }),c(`span`,{
                        style:{
                          "--framer-text-color":`var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`
                        },children:c(`br`,{})
                      }),c(`span`,{
                        style:{
                          "--framer-text-color":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
                        },children:`that make sense.`
                      })]
                    })
                  }),className:`framer-cbxify`,"data-framer-name":`Designing experiences that solve real problems.`,effect:Ns,fonts:[`Inter`],id:we,ref:Te,verticalAlignment:`top`,withExternalLayout:!0
                }),f(Ko,{
                  animate:$s,className:`framer-u6bdyx`,"data-framer-appear-id":`u6bdyx`,"data-framer-name":`Content`,initial:Cs,optimized:!0,children:[f(`div`,{
                    className:`framer-1myufz4`,"data-framer-name":`Your Details`,children:[c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          background:{
                            alt:``,fit:`fill`,intrinsicHeight:5001,intrinsicWidth:5e3,pixelHeight:2500,pixelWidth:2500,positionX:`center`,positionY:`center`,sizes:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`,src:`https://framerusercontent.com/images/pYrkmWKg9iMIMEQDan7ESNhHlA.webp?scale-down-to=512&width=2500&height=2500`
                          }
                        },oIMIRmEsG:{
                          background:{
                            alt:``,fit:`fill`,intrinsicHeight:5001,intrinsicWidth:5e3,pixelHeight:2500,pixelWidth:2500,positionX:`center`,positionY:`center`,sizes:`261px`,src:`https://framerusercontent.com/images/pYrkmWKg9iMIMEQDan7ESNhHlA.webp?scale-down-to=512&width=2500&height=2500`
                          }
                        }
                      },children:c(H,{
                        background:{
                          alt:``,fit:`fill`,intrinsicHeight:5001,intrinsicWidth:5e3,pixelHeight:2500,pixelWidth:2500,positionX:`center`,positionY:`center`,sizes:`370px`,src:`https://framerusercontent.com/images/pYrkmWKg9iMIMEQDan7ESNhHlA.webp?scale-down-to=512&width=2500&height=2500`
                        },className:`framer-1kqkoe`,"data-framer-name":`Your Picture`,children:c(V,{
                          height:35,children:c(W,{
                            className:`framer-1keoabo-container`,nodeId:`FBP0LbZfx`,scopeId:`augiA20Il`,children:c(et,{
                              height:`100%`,id:`FBP0LbZfx`,layoutId:`FBP0LbZfx`,style:{
                                height:`100%`
                              },variant:$(`FvxAV5TmU`),width:`100%`
                            })
                          })
                        })
                      })
                    }),f(`div`,{
                      className:`framer-131wefz`,"data-framer-name":`Name / Title`,children:[c(T,{
                        __fromCanvasComponent:!0,children:c(o,{
                          children:c(`p`,{
                            dir:`auto`,style:{
                              "--font-selector":`R0Y7Um9ib3RvLTcwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`24px`,"--framer-font-weight":`700`,"--framer-line-height":`140%`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                            },children:`Ruchit P.`
                          })
                        }),className:`framer-15epdyy`,fonts:[`GF;Roboto-700`],verticalAlignment:`top`,withExternalLayout:!0
                      }),c(B,{
                        breakpoint:D,overrides:{
                          oIMIRmEsG:{
                            children:c(o,{
                              children:c(`p`,{
                                dir:`auto`,style:{
                                  "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`18px`,"--framer-line-height":`142%`,"--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                                },children:`Brand Designer | Visual Communicator | UI UX Learner`
                              })
                            })
                          }
                        },children:c(T,{
                          __fromCanvasComponent:!0,children:c(o,{
                            children:c(`p`,{
                              dir:`auto`,style:{
                                "--font-selector":`R0Y7Um9ib3RvLXJlZ3VsYXI=`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`20px`,"--framer-line-height":`142%`,"--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                              },children:`Brand Designer | Visual Communicator | UI UX Learner`
                            })
                          }),className:`framer-i6x5f3`,fonts:[`GF;Roboto-regular`],verticalAlignment:`top`,withExternalLayout:!0
                        })
                      })]
                    })]
                  }),f(`div`,{
                    className:`framer-1piggx9`,"data-framer-name":`Philosophy`,children:[f(`div`,{
                      className:`framer-1s7utx4`,children:[c(T,{
                        __fromCanvasComponent:!0,children:f(o,{
                          children:[c(`p`,{
                            className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                              "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                            },children:`I started my journey with graphic design, exploring visuals, layouts, and creative ideas. Over the past 5 years, I’ve worked across different types of design, gradually understanding how everything connects and works together.`
                          }),c(`p`,{
                            className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                              "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                            },children:`With time, my focus shifted from just making designs to communicating ideas clearly. That’s when I began to see myself more as a Brand communicator, not just a designer.`
                          }),c(`p`,{
                            className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                              "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                            },children:`Now, I’m learning UI UX to understand how design works in real use. It’s helping me think beyond visuals and focus more on how people interact and experience things.`
                          }),c(`p`,{
                            className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                              "--framer-text-color":`var(--token-4d926bee-328f-497f-a3cd-ce0b138f5bc3, rgb(184, 184, 184))`
                            },children:`My goal is to keep growing by combining my background in graphic design with UI UX, and building work that feels clear, useful, and meaningful.`
                          })]
                        }),className:`framer-qkmi34`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                      }),c(`div`,{
                        className:`framer-1iy1cef`,"data-framer-name":`Sign`,children:f(pe,{
                          className:`framer-1wkvno`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 63" overflow="visible"><g><path d="M 102 23.549 C 100.521 25.221 97.707 25.135 95.652 25.645 C 94.76 25.611 94.597 30.292 94.321 31.153 C 94.386 31.564 93.732 33.079 94.598 32.739 C 95.605 32.174 96.687 31.504 97.503 30.675 C 98.185 30.249 99.039 27.94 99.908 29.352 C 99.993 31.353 95.802 34.078 94.035 34.309 C 91.941 34.093 93.063 31.286 93.045 29.894 C 92.514 30.471 92.339 31.239 91.948 31.896 C 90.705 35.269 85.441 40.83 84.434 34.347 C 84.413 33.494 81.936 37.41 80.922 37.419 C 79.567 38 78.772 36.527 78.795 35.324 C 78.735 35.031 78.967 33.736 78.607 33.821 C 78.01 34.553 77.648 35.599 77.128 36.268 C 77.172 36.423 77.11 36.487 76.962 36.497 C 77.065 36.566 77.028 36.697 76.899 36.707 C 76.901 36.72 76.928 36.784 76.924 36.793 C 76.923 36.797 76.869 36.811 76.853 36.812 C 76.796 36.914 76.739 37.02 76.684 37.122 C 75.82 39.033 74.409 39.652 74.239 37.052 C 73.256 37.816 72.323 39.182 71.34 39.73 C 69.74 40.862 67.711 41.598 66.309 40.045 C 66.199 39.864 66.017 39.735 65.837 39.92 C 64.327 41.423 60.819 44.26 59.48 41.249 C 59.007 40.928 58.044 42.47 57.584 42.56 C 56.182 43.581 54.378 43.628 53.56 42.027 C 53.457 41.688 53.083 41.995 52.924 42.094 C 48.501 45.444 44.092 42.375 40.088 40.081 C 38.602 38.908 34.635 38.964 34.272 37.435 C 34.428 35.715 37.847 35.572 39.141 34.866 C 43.52 33.358 47.847 31.758 52.091 29.902 C 62.287 25.43 72.031 19.65 80.452 12.381 C 111.644 -15.277 40.848 18.125 34.297 22.925 C 25.554 28.038 16.899 33.79 9.847 41.213 C 5.777 45.893 0.636 51.952 2.136 58.547 C 4.863 64.422 13.996 59.389 17.771 56.94 C 22.536 53.757 26.538 49.406 29.3 44.396 C 31.28 40.874 32.867 36.425 33.717 32.365 C 34.215 30.521 34.171 28.52 34.836 26.758 C 35.274 28.08 34.835 29.646 34.799 31.027 C 33.145 45.358 22.9 59.562 8.446 62.762 C 2.061 64.228 -1.385 58.67 0.526 52.941 C 2.039 47.523 5.538 43.078 9.439 39.053 C 23.016 25.818 40.066 17.174 57.151 9.395 C 63.184 7.02 84.569 -2.826 89.605 0.789 C 93.802 6.32 71.458 21.397 66.937 23.979 C 58.096 29.371 48.152 33.522 38.167 36.823 C 37.886 36.978 37.413 36.899 37.312 37.272 C 37.35 37.285 37.377 37.307 37.412 37.322 C 38.623 37.745 39.774 38.128 40.946 38.742 C 43.582 39.939 46.316 42.545 49.354 41.944 C 50.633 41.709 51.958 40.941 52.918 40.13 C 53.359 39.458 53.027 38.436 53.247 37.657 C 53.003 35.159 56.478 32.606 56.97 36.134 C 57.073 37.822 55.754 39.231 54.923 40.558 C 55.192 43.655 59.32 39.034 59.53 37.795 C 60.051 35.989 60.281 33.805 62.007 33.03 C 62.93 32.87 63.278 33.898 63.043 34.662 C 62.811 35.612 62.314 36.617 61.94 37.333 C 61.413 38.205 60.012 40.181 61.358 40.948 C 63.113 40.643 64.255 39.2 65.411 38.127 C 66.079 35.77 67.29 33.171 69.441 31.751 C 73.34 31.049 68.3 37.143 67.412 38.21 C 67.384 41.88 73.101 36.567 73.72 35.025 C 74.799 33.715 75.027 32.141 75.252 30.518 C 75.584 28.668 75.961 26.809 76.408 24.984 C 76.775 23.617 76.953 22.109 77.615 20.846 C 78.145 20.083 79.218 20.745 79.078 21.6 C 78.998 25.602 78.12 29.64 76.449 33.181 C 76.267 33.595 75.689 34.907 76.063 35.272 C 77.099 34.505 78.551 29.049 80.258 31.109 C 80.67 32.637 79.987 34.197 80.278 35.788 C 80.929 36.608 82.913 33.425 83.254 32.986 C 83.636 32.405 84.001 31.747 84.368 30.974 C 84.67 30.273 84.569 28.992 85.543 28.941 C 87.35 28.963 84.976 32.339 86.034 34.959 C 87.672 38.784 92.576 27.864 92.588 26.159 C 91.2 26.108 89.675 26.417 88.236 26.499 C 88.039 26.508 87.97 26.675 87.845 26.747 C 87.575 26.64 87.506 26.53 87.767 26.36 C 88.709 25.36 92.99 25.867 93.191 24.632 C 93.638 22.925 94.094 21.223 94.497 19.504 C 94.999 18.433 94.472 16.288 95.83 15.97 C 97.289 16.29 96.127 18.336 96.168 19.335 C 96.001 21.082 95.507 22.892 95.448 24.6 C 96.783 25.018 101.189 22.355 101.999 23.549 Z" fill="var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)) /* {&quot;name&quot;:&quot;Brand Color&quot;} */"></path><path d="M 86.855 24.848 C 86.701 25.203 86.359 25.238 86.033 25.344 C 85.794 25.422 85.556 25.544 85.343 25.53 C 85.022 25.511 84.809 25.189 84.712 24.89 C 84.591 24.528 84.609 24.111 84.782 23.774 C 84.9 23.528 85.091 23.299 85.329 23.189 C 85.478 23.119 85.636 23.066 85.794 23.016 C 85.944 22.972 86.101 22.931 86.255 22.964 C 86.825 23.102 87.094 24.334 86.857 24.844 L 86.855 24.848 Z M 97.999 42.262 C 97.902 42.245 97.814 42.24 97.72 42.24 C 96.509 42.237 95.3 42.469 94.166 42.81 C 93.877 42.911 93.579 43.155 93.46 43.416 C 93.333 43.68 93.424 43.924 93.699 44.024 C 93.884 44.1 94.088 44.103 94.284 44.095 C 95.194 44.071 96.221 44.38 97.006 44.015 C 97.374 43.857 97.742 43.628 98.065 43.352 C 98.548 42.94 98.816 42.424 98.003 42.263 L 97.999 42.262 Z M 91.192 43.135 C 91.113 43.03 90.947 42.975 90.807 42.931 C 88.503 42.363 86.12 42.884 83.783 43.082 C 66.517 44.608 49.402 48.472 32.957 53.865 C 32.8 53.933 32.647 54.011 32.516 54.12 C 32.388 54.228 32.318 54.349 32.322 54.434 C 32.323 54.463 32.332 54.489 32.349 54.511 C 32.366 54.532 32.389 54.547 32.415 54.558 C 32.512 54.599 32.678 54.586 32.863 54.537 C 33.048 54.488 33.23 54.417 33.414 54.36 C 50.199 49.502 67.5 45.697 84.997 44.364 C 86.652 44.226 89.874 44.465 91.114 43.472 C 91.209 43.384 91.285 43.252 91.194 43.137 L 91.193 43.135 Z" fill="var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)) /* {&quot;name&quot;:&quot;Brand Color&quot;} */"></path></g></svg>`,withExternalLayout:!0,children:[c(pe,{
                            className:`framer-1lq8ef8`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 63" overflow="visible"><path d="M 102 23.549 C 100.521 25.221 97.707 25.135 95.652 25.645 C 94.76 25.611 94.597 30.292 94.321 31.153 C 94.386 31.564 93.732 33.079 94.598 32.739 C 95.605 32.174 96.687 31.504 97.503 30.675 C 98.185 30.249 99.039 27.94 99.908 29.352 C 99.993 31.353 95.802 34.078 94.035 34.309 C 91.941 34.093 93.063 31.286 93.045 29.894 C 92.514 30.471 92.339 31.239 91.948 31.896 C 90.705 35.269 85.441 40.83 84.434 34.347 C 84.413 33.494 81.936 37.41 80.922 37.419 C 79.567 38 78.772 36.527 78.795 35.324 C 78.735 35.031 78.967 33.736 78.607 33.821 C 78.01 34.553 77.648 35.599 77.128 36.268 C 77.172 36.423 77.11 36.487 76.962 36.497 C 77.065 36.566 77.028 36.697 76.899 36.707 C 76.901 36.72 76.928 36.784 76.924 36.793 C 76.923 36.797 76.869 36.811 76.853 36.812 C 76.796 36.914 76.739 37.02 76.684 37.122 C 75.82 39.033 74.409 39.652 74.239 37.052 C 73.256 37.816 72.323 39.182 71.34 39.73 C 69.74 40.862 67.711 41.598 66.309 40.045 C 66.199 39.864 66.017 39.735 65.837 39.92 C 64.327 41.423 60.819 44.26 59.48 41.249 C 59.007 40.928 58.044 42.47 57.584 42.56 C 56.182 43.581 54.378 43.628 53.56 42.027 C 53.457 41.688 53.083 41.995 52.924 42.094 C 48.501 45.444 44.092 42.375 40.088 40.081 C 38.602 38.908 34.635 38.964 34.272 37.435 C 34.428 35.715 37.847 35.572 39.141 34.866 C 43.52 33.358 47.847 31.758 52.091 29.902 C 62.287 25.43 72.031 19.65 80.452 12.381 C 111.644 -15.277 40.848 18.125 34.297 22.925 C 25.554 28.038 16.899 33.79 9.847 41.213 C 5.777 45.893 0.636 51.952 2.136 58.547 C 4.863 64.422 13.996 59.389 17.771 56.94 C 22.536 53.757 26.538 49.406 29.3 44.396 C 31.28 40.874 32.867 36.425 33.717 32.365 C 34.215 30.521 34.171 28.52 34.836 26.758 C 35.274 28.08 34.835 29.646 34.799 31.027 C 33.145 45.358 22.9 59.562 8.446 62.762 C 2.061 64.228 -1.385 58.67 0.526 52.941 C 2.039 47.523 5.538 43.078 9.439 39.053 C 23.016 25.818 40.066 17.174 57.151 9.395 C 63.184 7.02 84.569 -2.826 89.605 0.789 C 93.802 6.32 71.458 21.397 66.937 23.979 C 58.096 29.371 48.152 33.522 38.167 36.823 C 37.886 36.978 37.413 36.899 37.312 37.272 C 37.35 37.285 37.377 37.307 37.412 37.322 C 38.623 37.745 39.774 38.128 40.946 38.742 C 43.582 39.939 46.316 42.545 49.354 41.944 C 50.633 41.709 51.958 40.941 52.918 40.13 C 53.359 39.458 53.027 38.436 53.247 37.657 C 53.003 35.159 56.478 32.606 56.97 36.134 C 57.073 37.822 55.754 39.231 54.923 40.558 C 55.192 43.655 59.32 39.034 59.53 37.795 C 60.051 35.989 60.281 33.805 62.007 33.03 C 62.93 32.87 63.278 33.898 63.043 34.662 C 62.811 35.612 62.314 36.617 61.94 37.333 C 61.413 38.205 60.012 40.181 61.358 40.948 C 63.113 40.643 64.255 39.2 65.411 38.127 C 66.079 35.77 67.29 33.171 69.441 31.751 C 73.34 31.049 68.3 37.143 67.412 38.21 C 67.384 41.88 73.101 36.567 73.72 35.025 C 74.799 33.715 75.027 32.141 75.252 30.518 C 75.584 28.668 75.961 26.809 76.408 24.984 C 76.775 23.617 76.953 22.109 77.615 20.846 C 78.145 20.083 79.218 20.745 79.078 21.6 C 78.998 25.602 78.12 29.64 76.449 33.181 C 76.267 33.595 75.689 34.907 76.063 35.272 C 77.099 34.505 78.551 29.049 80.258 31.109 C 80.67 32.637 79.987 34.197 80.278 35.788 C 80.929 36.608 82.913 33.425 83.254 32.986 C 83.636 32.405 84.001 31.747 84.368 30.974 C 84.67 30.273 84.569 28.992 85.543 28.941 C 87.35 28.963 84.976 32.339 86.034 34.959 C 87.672 38.784 92.576 27.864 92.588 26.159 C 91.2 26.108 89.675 26.417 88.236 26.499 C 88.039 26.508 87.97 26.675 87.845 26.747 C 87.575 26.64 87.506 26.53 87.767 26.36 C 88.709 25.36 92.99 25.867 93.191 24.632 C 93.638 22.925 94.094 21.223 94.497 19.504 C 94.999 18.433 94.472 16.288 95.83 15.97 C 97.289 16.29 96.127 18.336 96.168 19.335 C 96.001 21.082 95.507 22.892 95.448 24.6 C 96.783 25.018 101.189 22.355 101.999 23.549 Z" fill="var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)) /* {&quot;name&quot;:&quot;Brand Color&quot;} */"></path></svg>`,withExternalLayout:!0
                          }),f(pe,{
                            className:`framer-ylvc44`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.201 31.63" overflow="visible"><path d="M 54.533 1.896 C 54.379 2.25 54.037 2.286 53.712 2.392 C 53.472 2.47 53.234 2.591 53.022 2.578 C 52.7 2.559 52.487 2.236 52.391 1.937 C 52.27 1.576 52.288 1.159 52.461 0.822 C 52.579 0.576 52.769 0.346 53.007 0.237 C 53.157 0.167 53.314 0.114 53.472 0.064 C 53.622 0.02 53.779 -0.021 53.934 0.012 C 54.503 0.15 54.772 1.382 54.535 1.892 L 54.533 1.896 Z M 65.677 19.31 C 65.581 19.293 65.492 19.288 65.398 19.288 C 64.187 19.285 62.979 19.517 61.845 19.858 C 61.555 19.959 61.258 20.203 61.139 20.464 C 61.012 20.728 61.102 20.972 61.377 21.072 C 61.562 21.148 61.766 21.151 61.962 21.143 C 62.872 21.118 63.9 21.428 64.685 21.063 C 65.052 20.905 65.42 20.676 65.744 20.399 C 66.227 19.988 66.494 19.471 65.682 19.311 L 65.677 19.31 Z M 58.871 20.183 C 58.792 20.078 58.625 20.023 58.486 19.979 C 56.181 19.411 53.798 19.931 51.461 20.129 C 34.195 21.655 17.08 25.52 0.635 30.913 C 0.479 30.98 0.325 31.059 0.195 31.168 C 0.067 31.276 -0.004 31.397 0 31.482 C 0.001 31.511 0.01 31.537 0.028 31.559 C 0.045 31.58 0.068 31.595 0.093 31.606 C 0.19 31.647 0.357 31.634 0.541 31.585 C 0.727 31.536 0.908 31.465 1.092 31.408 C 17.878 26.55 35.178 22.745 52.675 21.412 C 54.331 21.274 57.552 21.512 58.792 20.519 C 58.887 20.432 58.963 20.3 58.872 20.185 L 58.871 20.183 Z" fill="var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68)) /* {&quot;name&quot;:&quot;Brand Color&quot;} */"></path></svg>`,withExternalLayout:!0,children:[c(pe,{
                              className:`framer-1wi84du`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.308 2.579" overflow="visible"><path d="M 2.221 1.896 C 2.066 2.25 1.724 2.286 1.399 2.392 C 1.159 2.47 0.921 2.591 0.709 2.578 C 0.387 2.559 0.174 2.236 0.078 1.937 C -0.043 1.576 -0.025 1.159 0.148 0.822 C 0.266 0.576 0.456 0.346 0.694 0.237 C 0.844 0.167 1.001 0.114 1.159 0.064 C 1.309 0.02 1.466 -0.021 1.621 0.012 C 2.19 0.15 2.46 1.382 2.222 1.892 L 2.22 1.896 Z" fill="transparent"></path></svg>`,withExternalLayout:!0
                            }),c(pe,{
                              className:`framer-12emoob`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.119 1.955" overflow="visible"><path d="M 4.595 0.022 C 4.498 0.005 4.41 0.001 4.316 0 C 3.105 -0.003 1.896 0.229 0.762 0.57 C 0.473 0.671 0.176 0.915 0.056 1.176 C -0.071 1.44 0.02 1.684 0.295 1.784 C 0.48 1.86 0.684 1.863 0.88 1.855 C 1.79 1.831 2.817 2.141 3.602 1.775 C 3.97 1.617 4.338 1.388 4.661 1.112 C 5.145 0.7 5.412 0.184 4.599 0.023 L 4.595 0.022 Z" fill="transparent"></path></svg>`,withExternalLayout:!0
                            }),c(pe,{
                              className:`framer-1o2b3cn`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.913 11.909" overflow="visible"><path d="M 58.871 0.461 C 58.792 0.356 58.625 0.301 58.486 0.257 C 56.181 -0.31 53.798 0.21 51.461 0.408 C 34.195 1.934 17.08 5.798 0.635 11.191 C 0.479 11.259 0.325 11.337 0.195 11.446 C 0.067 11.554 -0.004 11.675 0 11.761 C 0.001 11.789 0.01 11.816 0.028 11.837 C 0.045 11.858 0.068 11.874 0.093 11.884 C 0.19 11.926 0.357 11.912 0.541 11.863 C 0.727 11.814 0.908 11.744 1.092 11.686 C 17.878 6.829 35.178 3.023 52.675 1.69 C 54.331 1.552 57.552 1.791 58.792 0.798 C 58.887 0.71 58.963 0.578 58.872 0.463 L 58.871 0.461 Z" fill="transparent"></path></svg>`,withExternalLayout:!0
                            })]
                          })]
                        })
                      })]
                    }),f(es,{
                      className:`framer-17lv7gh`,"data-framer-name":`Work History`,flowEffectEnabled:!0,isNestedFlowEffect:!0,children:[c(B,{
                        breakpoint:D,overrides:{
                          c2VvwuEge:{
                            children:c(o,{
                              children:c(`p`,{
                                dir:`auto`,style:{
                                  "--font-selector":`R0Y7Um9ib3RvLTYwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`18px`,"--framer-font-weight":`600`,"--framer-line-height":`140%`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                                },children:`My work history`
                              })
                            })
                          },C3r9hMJuq:{
                            children:c(o,{
                              children:c(`p`,{
                                dir:`auto`,style:{
                                  "--font-selector":`R0Y7Um9ib3RvLTYwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-weight":`600`,"--framer-line-height":`140%`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                                },children:`My work history`
                              })
                            })
                          },oIMIRmEsG:{
                            children:c(o,{
                              children:c(`p`,{
                                dir:`auto`,style:{
                                  "--font-selector":`R0Y7Um9ib3RvLTYwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-weight":`600`,"--framer-line-height":`140%`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                                },children:`My work history`
                              })
                            })
                          }
                        },children:c(T,{
                          __fromCanvasComponent:!0,children:c(o,{
                            children:c(`p`,{
                              dir:`auto`,style:{
                                "--font-selector":`R0Y7Um9ib3RvLTYwMA==`,"--framer-font-family":`"Roboto", "Roboto Placeholder", sans-serif`,"--framer-font-size":`24px`,"--framer-font-weight":`600`,"--framer-line-height":`140%`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                              },children:`My work history`
                            })
                          }),className:`framer-za11a9`,fonts:[`GF;Roboto-600`],layout:`position`,verticalAlignment:`top`,withExternalLayout:!0
                        })
                      }),c(B,{
                        breakpoint:D,overrides:{
                          C3r9hMJuq:{
                            width:`calc(min(${h?.width||`100vw`}, 1080px) - 44px)`
                          }
                        },children:c(V,{
                          height:155,children:c(W,{
                            className:`framer-1ku6r18-container`,layout:`position`,nodeId:`IV70lXGDF`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(Xr,{
                              C3wqzi1gH:`Independent Designer`,cWbhifCIf:`Freelance Projects`,height:`100%`,id:`IV70lXGDF`,layoutId:`IV70lXGDF`,qGp7vI2z6:`Marker Designs`,rrXhSebWp:`2025 - Present`,rxHhshyDG:`Ongoing`,style:{
                                width:`100%`
                              },variant:$(`wrjEuEMq5`),width:`100%`,wrlTXIfKr:`Creative Director`
                            })
                          })
                        })
                      })]
                    })]
                  })]
                })]
              })
            }),c(v.section,{
              className:`framer-zk7r8g`,"data-border":!0,"data-framer-name":`Testimonials`,"data-hide-scrollbars":!0,layout:`position`,children:f(`div`,{
                className:`framer-5ff2fu`,"data-framer-name":`Inside Container`,children:[f(`div`,{
                  className:`framer-1fgz1ma`,"data-framer-name":`Heading`,children:[c(T,{
                    __fromCanvasComponent:!0,children:c(o,{
                      children:f(`h1`,{
                        className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,style:{
                          "--framer-text-color":`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`
                        },children:[c(`span`,{
                          style:{
                            "--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                          },children:`Hear from what `
                        }),`my clients have to say.`]
                      })
                    }),className:`framer-105c2yw`,"data-framer-name":`Hear from what my clients have to say.`,effect:ec,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                  }),c(V,{
                    height:44,children:c(W,{
                      className:`framer-ifqj9c-container`,"data-framer-name":`Happy Clients`,name:`Happy Clients`,nodeId:`Z_r8WWrBn`,scopeId:`augiA20Il`,children:c(It,{
                        height:`100%`,id:`Z_r8WWrBn`,iqJIfbPtt:`0px 0px 0px 2px var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(20, 19, 22))`,JN9T_XsQV:`var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, rgb(234, 0, 68))`,khYrgfDVq:`99+ Happy clients`,layoutId:`Z_r8WWrBn`,name:`Happy Clients`,nRc4djRbN:22,variant:$(`jEIpwiYtl`),width:`100%`
                      })
                    })
                  })]
                }),c(B,{
                  breakpoint:D,overrides:{
                    C3r9hMJuq:{
                      tickerEffectGap:`8px`
                    }
                  },children:f(ns,{
                    className:`framer-qtek3b`,tickerEffectAlign:`center`,tickerEffectDirectionModifier:`default`,tickerEffectDraggable:!0,tickerEffectEnabled:!0,tickerEffectGap:`16px`,tickerEffectHoverModifier:100,tickerEffectOverflow:`visible`,tickerEffectPosition:`relative`,tickerEffectStackDirection:`row`,tickerEffectVelocity:50,children:[c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:qs
                                },__framer__animateOnce:!0,__framer__enter:Ks,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-im4e7k-container`,nodeId:`OWOD070Td`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/3IIKOQ9VkCZyf0KlL2N5yBg1cQ.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`OWOD070Td`,iLSSd0G_p:`CTO at INnUP`,layoutId:`OWOD070Td`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Amazing icons. Great creativity and precision. Even with unclear input, everything was refined perfectly. Quick and reliable.`
                                      })
                                    }),rTOF5483x:!0,style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Philip B.`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:Gs
                                },__framer__animateOnce:!0,__framer__enter:Ws,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-d5grbg-container`,nodeId:`C3M_B0OwA`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/wFJgmAuVHn37SCJR5MDBtfbFdY.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`C3M_B0OwA`,iLSSd0G_p:`Marketing Director at Thunder Ridge`,layoutId:`C3M_B0OwA`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Smooth experience overall. Strong social media designs with attention to detail. Very patient with revisions.`
                                      })
                                    }),rTOF5483x:!0,style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Daniel Carter`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                },oIMIRmEsG:{
                                  __framer__enter:Ks
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:Vs
                                },__framer__animateOnce:!0,__framer__enter:Bs,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1wc26lu-container`,nodeId:`Xa6HCMX8U`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/9GxBhKhBKO9rBguUErEAr1S5msg.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`Xa6HCMX8U`,iLSSd0G_p:`Brand Manager at Tea Sense`,layoutId:`Xa6HCMX8U`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Great packaging work across multiple tea variants. The designs really captured our brand well.`
                                      })
                                    }),style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Riya Shah`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                },oIMIRmEsG:{
                                  __framer__enter:Ws
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:Us
                                },__framer__animateOnce:!0,__framer__enter:Ks,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-y03255-container`,nodeId:`mOvaXfmcO`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/Ua8czSsCWvNqdtO61P3LQNscwQo.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`mOvaXfmcO`,iLSSd0G_p:`Founder at Pure Pulse`,layoutId:`mOvaXfmcO`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Strong packaging designs with clear thinking behind them. Attention to detail really stood out.`
                                      })
                                    }),style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Arjun Mehta`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                },oIMIRmEsG:{
                                  __framer__enter:Ks
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:xs
                                },__framer__animateOnce:!0,__framer__enter:Ws,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1iir1lk-container`,nodeId:`gIU66T1wQ`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/lAY61a3VYJBYnJJvnRiHal534g.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`gIU66T1wQ`,iLSSd0G_p:`Operations Head at Paper Pro`,layoutId:`gIU66T1wQ`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Loved the box packaging design. Clean, creative, and well executed.`
                                      })
                                    }),rTOF5483x:!0,style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Natalie Rivera`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`95%`
                        }
                      },children:c(te,{
                        children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              width:`min(min(${h?.width||`100vw`} - 44px, 1080px) * 0.95, 315px)`
                            }
                          },children:c(V,{
                            height:345,width:`320px`,children:c(B,{
                              breakpoint:D,overrides:{
                                C3r9hMJuq:{
                                  __framer__styleAppearEffectEnabled:void 0
                                },oIMIRmEsG:{
                                  __framer__enter:Ws
                                }
                              },children:c(Q,{
                                __framer__animate:{
                                  transition:Qs
                                },__framer__animateOnce:!0,__framer__enter:Bs,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-z2o1ln-container`,nodeId:`WQoAIPrtD`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                  breakpoint:D,overrides:{
                                    C3r9hMJuq:{
                                      style:{
                                        maxWidth:`100%`,width:`100%`
                                      },variant:$(`hxl3kFduo`)
                                    }
                                  },children:c(Cr,{
                                    HEEE23pzd:tc({
                                      pixelHeight:76,pixelWidth:76,src:`https://framerusercontent.com/images/v6i3NQRMklaSho2NutbJ0C5YGtA.jpg?width=76&height=76`
                                    },``),height:`100%`,id:`WQoAIPrtD`,iLSSd0G_p:`Co-Founder at GizzMart`,layoutId:`WQoAIPrtD`,oAP3LPOjN:c(o,{
                                      children:c(`p`,{
                                        dir:`auto`,children:`Great collaboration. Helped build our brand identity and supported with Shopify setup.`
                                      })
                                    }),style:{
                                      width:`100%`
                                    },uCIug9WJ5:!0,uVJXGOkcn:`Emma Kraft`,variant:$(`Q6s2KXSCm`),width:`100%`
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })]
                  })
                })]
              })
            }),c(v.section,{
              className:`framer-mabkjr`,"data-border":!0,"data-framer-name":`FAQ`,id:Ee,layout:`position`,ref:De,children:f(es,{
                className:`framer-7zs1j1`,"data-framer-name":`Inside Container`,flowEffectEnabled:!0,flowEffectTransition:gs,isNestedFlowEffect:!0,children:[f(v.div,{
                  className:`framer-3cn029`,"data-framer-name":`Header & FAQ Items`,layout:`position`,children:[c(B,{
                    breakpoint:D,overrides:{
                      oIMIRmEsG:{
                        children:c(o,{
                          children:c(`h1`,{
                            className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,style:{
                              "--framer-text-alignment":`center`,"--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                            },children:`FAQs`
                          })
                        })
                      }
                    },children:c(T,{
                      __fromCanvasComponent:!0,children:c(o,{
                        children:c(`h1`,{
                          className:`framer-styles-preset-gb8znb`,"data-styles-preset":`wmceTUSWM`,dir:`auto`,style:{
                            "--framer-text-color":`var(--token-bf8bd38a-4575-40c0-9459-6a86668113f1, rgb(250, 250, 250))`
                          },children:`FAQs`
                        })
                      }),className:`framer-12ed5ig`,"data-framer-name":`Your questions answered`,effect:ec,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                    })
                  }),f(Uo,{
                    __framer__animate:{
                      transition:rc
                    },__framer__animateOnce:!0,__framer__enter:nc,__framer__exit:ic,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-y6tvc`,"data-framer-name":`FAQ`,children:[c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-1m412a4-container`,nodeId:`by_D_STbH`,scopeId:`augiA20Il`,children:c(ka,{
                            height:`100%`,id:`by_D_STbH`,layoutId:`by_D_STbH`,OVmUC8M7N:c(o,{
                              children:c(`p`,{
                                dir:`auto`,children:`We start with a quick discussion where you share your idea, goals, and what you need. From there, I suggest the right approach and next steps.`
                              })
                            }),qQefXa5XK:`How do we get started?`,r6VA76aYh:`01`,style:{
                              width:`100%`
                            },variant:$(`mgkPLXnxl`),width:`100%`
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-b66scp-container`,nodeId:`mfIqVRF_E`,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              oIMIRmEsG:{
                                qQefXa5XK:`What if I’m not sure what I need yet?`
                              }
                            },children:c(ka,{
                              height:`100%`,id:`mfIqVRF_E`,layoutId:`mfIqVRF_E`,OVmUC8M7N:c(o,{
                                children:c(`p`,{
                                  dir:`auto`,children:`That’s completely fine. I help you figure that out. We break things down together and define what will actually work for your product or brand.`
                                })
                              }),qQefXa5XK:`How do we get started?`,r6VA76aYh:`02`,style:{
                                width:`100%`
                              },variant:$(`JGbZnEgiv`),width:`100%`
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-123cik8-container`,nodeId:`WzWYdA0st`,scopeId:`augiA20Il`,children:c(ka,{
                            height:`100%`,id:`WzWYdA0st`,layoutId:`WzWYdA0st`,OVmUC8M7N:c(o,{
                              children:c(`p`,{
                                dir:`auto`,children:`Yes. You’ll be part of key stages like direction, feedback, and refinements. The process stays collaborative, not one-sided.`
                              })
                            }),qQefXa5XK:`Will I be involved in the design process?`,r6VA76aYh:`03`,style:{
                              width:`100%`
                            },variant:$(`JGbZnEgiv`),width:`100%`
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-1iri2gf-container`,nodeId:`jRw6MmXlj`,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              oIMIRmEsG:{
                                OVmUC8M7N:c(o,{
                                  children:c(`p`,{
                                    dir:`auto`,children:`I include a reasonable number of revisions to make sure the final result feels right. The focus is on getting it correct, not rushing it.`
                                  })
                                })
                              }
                            },children:c(ka,{
                              height:`100%`,id:`jRw6MmXlj`,layoutId:`jRw6MmXlj`,OVmUC8M7N:c(o,{
                                children:c(`p`,{
                                  dir:`auto`,children:`I include a reasonable number of revisions to make sure the final result feels right. The focus is on getting it correct, not rushing it. to 30 days after delivery. If there's a need for longer support, we can discuss a retainer.`
                                })
                              }),qQefXa5XK:`How many changes can I request?`,r6VA76aYh:`04`,style:{
                                width:`100%`
                              },variant:$(`JGbZnEgiv`),width:`100%`
                            })
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-1x2vv18-container`,nodeId:`PH8FxJu5v`,scopeId:`augiA20Il`,children:c(ka,{
                            height:`100%`,id:`PH8FxJu5v`,layoutId:`PH8FxJu5v`,OVmUC8M7N:c(o,{
                              children:c(`p`,{
                                dir:`auto`,children:`I do both. I help shape the idea, not just design it. The goal is to make something that works, not just something that looks good.`
                              })
                            }),qQefXa5XK:`Do you only design, or also help with ideas?`,r6VA76aYh:`05`,style:{
                              width:`100%`
                            },variant:$(`JGbZnEgiv`),width:`100%`
                          })
                        })
                      })
                    }),c(B,{
                      breakpoint:D,overrides:{
                        C3r9hMJuq:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 44px)`
                        },oIMIRmEsG:{
                          width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        height:110,width:`max((min(max(${h?.width||`100vw`}, 1px), 1080px) - 120px) * 0.6, 1px)`,children:c(W,{
                          className:`framer-mravxd-container`,nodeId:`PuigyqHcw`,scopeId:`augiA20Il`,children:c(B,{
                            breakpoint:D,overrides:{
                              oIMIRmEsG:{
                                OVmUC8M7N:c(o,{
                                  children:c(`p`,{
                                    dir:`auto`,children:`I do both. I help shape the idea, not just design it. The goal is to make something that works, not just something that looks good.`
                                  })
                                }),qQefXa5XK:`Do you only design, or also help with ideas?`
                              }
                            },children:c(ka,{
                              height:`100%`,id:`PuigyqHcw`,layoutId:`PuigyqHcw`,OVmUC8M7N:c(o,{
                                children:c(`p`,{
                                  dir:`auto`,children:`Timelines depend on the scope. Smaller projects usually take 1–3 weeks, while full branding or packaging systems can take 3–6 weeks. I share a clear timeline after understanding your requirements.`
                                })
                              }),qQefXa5XK:`How long does a typical project take to complete?`,r6VA76aYh:`06`,style:{
                                width:`100%`
                              },variant:$(`JGbZnEgiv`),width:`100%`
                            })
                          })
                        })
                      })
                    }),Oe()&&c(B,{
                      breakpoint:D,overrides:{
                        oIMIRmEsG:{
                          height:110,width:`calc(min(max(${h?.width||`100vw`}, 1px), 1080px) - 88px)`
                        }
                      },children:c(V,{
                        children:c(W,{
                          className:`framer-mhyla9-container hidden-72rtr7 hidden-dsxqep hidden-1slso0x`,nodeId:`WWDR32Wpz`,scopeId:`augiA20Il`,children:c(ka,{
                            height:`100%`,id:`WWDR32Wpz`,layoutId:`WWDR32Wpz`,OVmUC8M7N:c(o,{
                              children:c(`p`,{
                                dir:`auto`,children:`Yes. From UI and digital creatives to packaging and print, I make sure everything stays consistent across platforms.`
                              })
                            }),qQefXa5XK:`Can you handle both digital and print work?`,r6VA76aYh:`06`,style:{
                              width:`100%`
                            },variant:$(`JGbZnEgiv`),width:`100%`
                          })
                        })
                      })
                    })]
                  })]
                }),f(Uo,{
                  __framer__animate:{
                    transition:rc
                  },__framer__animateOnce:!0,__framer__enter:nc,__framer__exit:ic,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-ysoez0`,"data-border":!0,"data-framer-name":`Book a Call`,layout:`position`,children:[f(`div`,{
                    className:`framer-1yrv4p2`,"data-framer-name":`Pic / Header / Description`,children:[c(V,{
                      height:64,width:`64px`,children:c(W,{
                        className:`framer-1upenlf-container`,nodeId:`aLtsa1coq`,scopeId:`augiA20Il`,children:c(Ki,{
                          height:`100%`,id:`aLtsa1coq`,layoutId:`aLtsa1coq`,style:{
                            height:`100%`,width:`100%`
                          },width:`100%`
                        })
                      })
                    }),f(`div`,{
                      className:`framer-19dgrlv`,"data-framer-name":`Header / Description`,children:[c(B,{
                        breakpoint:D,overrides:{
                          C3r9hMJuq:{
                            children:c(o,{
                              children:f(`h2`,{
                                className:`framer-styles-preset-13dj660`,"data-styles-preset":`eXomDaVSf`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`
                                },children:[`Still not sure?`,c(`br`,{}),`Book a free discovery call.`]
                              })
                            })
                          },oIMIRmEsG:{
                            children:c(o,{
                              children:f(`h2`,{
                                className:`framer-styles-preset-13dj660`,"data-styles-preset":`eXomDaVSf`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`
                                },children:[`Still not sure?`,c(`br`,{}),`Book a free discovery call.`]
                              })
                            })
                          }
                        },children:c(T,{
                          __fromCanvasComponent:!0,children:c(o,{
                            children:f(`h2`,{
                              className:`framer-styles-preset-13dj660`,"data-styles-preset":`eXomDaVSf`,dir:`auto`,children:[`Still not sure?`,c(`br`,{}),`Book a free discovery call.`]
                            })
                          }),className:`framer-uc26ke`,"data-framer-name":`Still not sure? Book a free discovery call`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                        })
                      }),c(B,{
                        breakpoint:D,overrides:{
                          C3r9hMJuq:{
                            children:f(o,{
                              children:[c(`p`,{
                                className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`,"--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                },children:`It should make your brand clear, strong, and easy to trust.`
                              }),f(`p`,{
                                className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`
                                },children:[c(`span`,{
                                  style:{
                                    "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                  },children:`If that’s what you’re aiming for,`
                                }),c(`br`,{}),c(`span`,{
                                  style:{
                                    "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                  },children:`we should talk.`
                                })]
                              })]
                            })
                          },oIMIRmEsG:{
                            children:f(o,{
                              children:[c(`p`,{
                                className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`,"--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                },children:`It should make your brand clear, strong, and easy to trust.`
                              }),f(`p`,{
                                className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                                  "--framer-text-alignment":`center`
                                },children:[c(`span`,{
                                  style:{
                                    "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                  },children:`If that’s what you’re aiming for,`
                                }),c(`br`,{}),c(`span`,{
                                  style:{
                                    "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                  },children:`we should talk.`
                                })]
                              })]
                            })
                          }
                        },children:c(T,{
                          __fromCanvasComponent:!0,children:f(o,{
                            children:[c(`p`,{
                              className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,style:{
                                "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                              },children:`It should make your brand clear, strong, and easy to trust.`
                            }),f(`p`,{
                              className:`framer-styles-preset-xtga9w`,"data-styles-preset":`MvQpTQa7p`,dir:`auto`,children:[c(`span`,{
                                style:{
                                  "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                },children:`If that’s what you’re aiming for,`
                              }),c(`br`,{}),c(`span`,{
                                style:{
                                  "--framer-text-color":`var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))`
                                },children:`we should talk.`
                              })]
                            })]
                          }),className:`framer-nminyr`,"data-framer-name":`Learn more about how I work and how I can help you and your business take the next step.`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0
                        })
                      })]
                    })]
                  }),f(`div`,{
                    className:`framer-10o5x30`,"data-framer-name":`Button & Logo`,children:[c(V,{
                      height:44,children:c(Bo,{
                        animate:Ss,className:`framer-1ixwz5h-container`,"data-framer-appear-id":`1ixwz5h`,"data-framer-name":`Schedule btn`,initial:Cs,name:`Schedule btn`,nodeId:`N7pe1RIeH`,optimized:!0,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                          breakpoint:D,overrides:{
                            C3r9hMJuq:{
                              variant:$(`fMDBJ_Qvh`)
                            },oIMIRmEsG:{
                              variant:$(`fMDBJ_Qvh`)
                            }
                          },children:c(Ut,{
                            FmipTjlYd:`Schedule Now`,fzBjJdIIZ:!0,height:`100%`,id:`N7pe1RIeH`,layoutId:`N7pe1RIeH`,name:`Schedule btn`,Q3oaa0GvQ:2,R0HJsVnb1:1,RMOF6Z3bI:ot,tCywb3cps:`https://cal.com/ruchit-designs`,variant:$(`Vbg99qxyS`),width:`100%`
                          })
                        })
                      })
                    }),c(pe,{
                      className:`framer-13qfdot`,"data-framer-name":`Cal-logo`,opacity:1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 13"><path d="M 6.075 12.887 C 2.61 12.887 0 10.076 0 6.605 C 0 3.124 2.476 0.29 6.075 0.29 C 7.985 0.29 9.306 0.891 10.339 2.268 L 8.673 3.691 C 7.973 2.927 7.13 2.546 6.075 2.546 C 3.731 2.546 2.443 4.384 2.443 6.605 C 2.443 8.826 3.854 10.631 6.075 10.631 C 7.119 10.631 8.007 10.25 8.707 9.486 L 10.35 10.966 C 9.362 12.285 8.007 12.887 6.075 12.887 Z M 17.525 3.644 L 19.768 3.644 L 19.768 12.666 L 17.525 12.666 L 17.525 11.348 C 17.058 12.285 16.28 12.91 14.793 12.91 C 12.416 12.91 10.517 10.792 10.517 8.19 C 10.517 5.587 12.416 3.47 14.793 3.47 C 16.269 3.47 17.058 4.095 17.525 5.032 Z M 17.591 8.19 C 17.591 6.779 16.647 5.61 15.159 5.61 C 13.726 5.61 12.794 6.79 12.794 8.19 C 12.794 9.555 13.726 10.77 15.159 10.77 C 16.636 10.77 17.591 9.59 17.591 8.19 Z M 21.356 0 L 23.599 0 L 23.599 12.655 L 21.356 12.655 Z M 24.599 11.464 C 24.599 10.723 25.176 10.099 25.964 10.099 C 26.321 10.091 26.665 10.232 26.919 10.489 C 27.172 10.746 27.313 11.098 27.309 11.464 C 27.309 12.227 26.742 12.851 25.965 12.851 C 25.603 12.857 25.255 12.712 24.998 12.451 C 24.741 12.19 24.597 11.834 24.599 11.464 Z M 35.893 11.209 C 35.06 12.25 33.794 12.91 32.295 12.91 C 29.618 12.91 27.653 10.792 27.653 8.19 C 27.653 5.587 29.618 3.47 32.295 3.47 C 33.738 3.47 34.993 4.095 35.826 5.078 L 34.094 6.57 C 33.661 6.015 33.095 5.599 32.294 5.599 C 30.862 5.599 29.929 6.779 29.929 8.178 C 29.929 9.578 30.862 10.758 32.295 10.758 C 33.161 10.758 33.761 10.295 34.205 9.67 Z M 36.082 8.19 C 36.082 5.587 38.048 3.47 40.724 3.47 C 43.401 3.47 45.366 5.588 45.366 8.19 C 45.366 10.792 43.401 12.91 40.724 12.91 C 38.048 12.897 36.082 10.792 36.082 8.19 Z M 43.09 8.19 C 43.09 6.779 42.156 5.61 40.724 5.61 C 39.291 5.599 38.359 6.779 38.359 8.19 C 38.359 9.589 39.291 10.77 40.724 10.77 C 42.156 10.77 43.09 9.59 43.09 8.19 Z M 60.536 7.149 L 60.536 12.655 L 58.293 12.655 L 58.293 7.715 C 58.293 6.154 57.582 5.483 56.516 5.483 C 55.517 5.483 54.806 5.992 54.806 7.716 L 54.806 12.655 L 52.563 12.655 L 52.563 7.715 C 52.563 6.154 51.841 5.483 50.786 5.483 C 49.786 5.483 48.909 5.992 48.909 7.716 L 48.909 12.655 L 46.666 12.655 L 46.666 3.633 L 48.909 3.633 L 48.909 4.882 C 49.375 3.91 50.219 3.424 51.518 3.424 C 52.751 3.424 53.784 4.049 54.351 5.102 C 54.917 4.026 55.75 3.424 57.26 3.424 C 59.104 3.436 60.536 4.87 60.536 7.149 Z" fill="var(--token-7354084b-2f3d-4256-9942-cf21fcb19d60, rgb(247, 247, 247)) /* {&quot;name&quot;:&quot;Gray 10&quot;} */"></path></svg>`,svgContentId:10674621058,withExternalLayout:!0
                    })]
                  })]
                })]
              })
            })]
          }),ne()&&c(_c,{
            blockDocumentScrolling:!0,dismissWithEsc:!0,children:e=>c(m,{
              children:c(B,{
                breakpoint:D,overrides:{
                  C3r9hMJuq:{
                    y:877
                  },oIMIRmEsG:{
                    y:873
                  }
                },children:c(V,{
                  height:64,y:899,children:c(B,{
                    breakpoint:D,overrides:{
                      c2VvwuEge:{
                        __framer__transformTargets:[{
                          target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        },{
                          ref:be,target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:153
                          }
                        },{
                          ref:Te,target:{
                            opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                          }
                        }]
                      },C3r9hMJuq:{
                        __framer__enter:cc,__framer__exit:lc
                      }
                    },children:f(Q,{
                      __framer__animate:{
                        transition:oc
                      },__framer__animateOnce:!1,__framer__enter:ac,__framer__exit:sc,__framer__spring:{
                        bounce:.2,damping:60,delay:0,duration:.6,durationBasedSpring:!0,ease:[.44,0,.56,1],mass:1,stagger:0,stiffness:500,type:`spring`
                      },__framer__styleAppearEffectEnabled:!0,__framer__styleTransformEffectEnabled:!0,__framer__targets:[{
                        ref:oe,target:`animate`
                      }],__framer__threshold:.5,__framer__transformTargets:[{
                        target:{
                          opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                        }
                      },{
                        ref:be,target:{
                          opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:153
                        }
                      },{
                        offset:56,ref:Ce,target:{
                          opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0
                        }
                      }],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-enu5u9-container hidden-1t5x8dn`,id:`enu5u9`,layout:F,layoutScroll:!0,nodeId:`qC9s9LIqC`,rendersWithMotion:!0,scopeId:`augiA20Il`,transformTemplate:Ts,children:[c(B,{
                        breakpoint:D,overrides:{
                          C3r9hMJuq:{
                            variant:$(e.visible&&`bxU98jWOd`,e.visible?`bxU98jWOd`:`Ykww8_o3B`)
                          },oIMIRmEsG:{
                            variant:$(`Ykww8_o3B`)
                          }
                        },children:c(bt,{
                          height:`100%`,id:`qC9s9LIqC`,layoutId:`qC9s9LIqC`,S36CzfaRp:j({
                            overlay:e
                          }),T2eKpjYwE:`https://cal.com/ruchit-designs`,variant:$(`VuoPoLmFD`),width:`100%`
                        })
                      }),c(S,{
                        children:e.visible&&c(m,{
                          children:u(c(ue,{
                            triggerId:`enu5u9`,children:f(I,{
                              children:[c(v.div,{
                                animate:{
                                  opacity:1
                                },className:z(N,`framer-1rok5cv`),"data-framer-portal-id":`enu5u9`,exit:{
                                  opacity:0
                                },initial:{
                                  opacity:0
                                },onTap:()=>e.hide(),transition:{
                                  bounce:.2,delay:0,duration:.6,type:`spring`
                                }
                              },`HqiRFM6ub`),c(B,{
                                breakpoint:D,overrides:{
                                  C3r9hMJuq:{
                                    width:`100vw`
                                  }
                                },children:c(V,{
                                  width:`540px`,children:c(W,{
                                    animate:fc,className:z(N,`framer-1vx3lmr-container`),"data-framer-portal-id":`enu5u9`,exit:dc,inComponentSlot:!0,initial:pc,nodeId:`oVinFwgN_`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:c(B,{
                                      breakpoint:D,overrides:{
                                        C3r9hMJuq:{
                                          variant:$(`STHSXw64P`)
                                        }
                                      },children:c(Ne,{
                                        height:`100%`,id:`oVinFwgN_`,layoutId:`oVinFwgN_`,RQICOAH9S:M({
                                          overlay:e
                                        }),style:{
                                          height:`100%`,width:`100%`
                                        },variant:$(`noDLSM_JI`),width:`100%`
                                      })
                                    })
                                  })
                                })
                              }),c(v.div,{
                                animate:hc,className:z(N,`framer-1q3mdb7`),"data-framer-name":`Blur BG`,"data-framer-portal-id":`enu5u9`,exit:mc,initial:nc
                              })]
                            })
                          }),gc())
                        })
                      })]
                    })
                  })
                })
              })
            })
          }),c(pe,{
            className:`framer-13cynb1`,layout:F,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><g></g></svg>`,withExternalLayout:!0
          })]
        }),c(`div`,{
          id:`overlay`
        })]
      })
    })
  }),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-b9wxR.framer-lux5qc, .framer-b9wxR .framer-lux5qc { display: block; }`,`.framer-b9wxR.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, #141316); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,`.framer-b9wxR .framer-2477nt-container, .framer-b9wxR .framer-1j5tb8d-container, .framer-b9wxR .framer-g2ih6x-container, .framer-b9wxR .framer-1vgiljk-container, .framer-b9wxR .framer-1dloqpg-container, .framer-b9wxR .framer-hlb76f-container, .framer-b9wxR .framer-t4tofe-container, .framer-b9wxR .framer-apvw9r-container, .framer-b9wxR .framer-114oqi7-container, .framer-b9wxR .framer-1xrhv9r-container, .framer-b9wxR .framer-ifqj9c-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-b9wxR .framer-13kxl6w { align-content: center; align-items: center; background-color: var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, #141316); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 92px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-jjf53m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 562px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 32px 0px 32px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-iuomh4-container { flex: none; height: 366px; position: relative; width: 1039px; z-index: -1; }`,`.framer-b9wxR .framer-q4zb98 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1136px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 70px 27px 75px; position: relative; width: 100%; z-index: 8; }`,`.framer-b9wxR .framer-hogmjb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: 73px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 305px; z-index: 1; }`,`.framer-b9wxR .framer-6ciele-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,`.framer-b9wxR .framer-1oroz0s { align-content: center; align-items: center; bottom: -15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 562px; justify-content: center; left: calc(50.00000000000002% - 1008px / 2); overflow: var(--overflow-clip-fallback, clip); padding: 21px 0px 21px 0px; position: absolute; width: 1008px; z-index: -1; }`,`.framer-b9wxR .framer-kgdfq0 { -webkit-filter: drop-shadow(79px 30px 42px rgba(0, 0, 0, 0.25)); aspect-ratio: 1 / 1; filter: drop-shadow(79px 30px 42px rgba(0, 0, 0, 0.25)); flex: none; height: var(--framer-aspect-ratio-supported, 480px); overflow: visible; position: relative; width: 480px; will-change: var(--framer-will-change-effect-override, transform); z-index: -1; }`,`.framer-b9wxR .framer-w2n11f { --border-bottom-width: 1px; --border-color: var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, #2b2b2b); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 32px 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-8knrt8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1080px; overflow: hidden; padding: 0px 0px 0px 44px; position: relative; width: 1px; }`,`.framer-b9wxR .framer-qbsodz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-b9wxR .framer-152l3mw-container, .framer-b9wxR .framer-f3h8i2-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-b9wxR .framer-n52bgx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-vltq38 { align-content: center; align-items: center; background-color: var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, #141316); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 75px 0px 75px 0px; position: relative; scroll-margin-top: 56px; width: 100%; }`,`.framer-b9wxR .framer-4gugwl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-mplf9h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,`.framer-b9wxR .framer-19y3y9x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-b9wxR .framer-2o9ve0, .framer-b9wxR .framer-4h54b4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-nf8if8, .framer-b9wxR .framer-9xrltp, .framer-b9wxR .framer-dg8crp, .framer-b9wxR .framer-8pn4m5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-b9wxR .framer-y87dwv-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,`.framer-b9wxR .framer-12r7e94-container, .framer-b9wxR .framer-1ku6r18-container, .framer-b9wxR .framer-1m412a4-container, .framer-b9wxR .framer-b66scp-container, .framer-b9wxR .framer-123cik8-container, .framer-b9wxR .framer-1iri2gf-container, .framer-b9wxR .framer-1x2vv18-container, .framer-b9wxR .framer-mravxd-container, .framer-b9wxR .framer-mhyla9-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-b9wxR .framer-317lc2-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-1py8tw5-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,`.framer-b9wxR .framer-ssa3mc-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,`.framer-b9wxR .framer-1kvtyk0 { --border-bottom-width: 1px; --border-color: var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, #2b2b2b); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-1i2l836 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1080px; overflow: hidden; padding: 0px 44px 0px 44px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-1tcd00y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; scroll-margin-top: 56px; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-ytf2ua { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 120px 0px; position: relative; width: 1117px; }`,`.framer-b9wxR .framer-16t13w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 180px; width: 523px; z-index: 1; }`,`.framer-b9wxR .framer-pn9cry, .framer-b9wxR .framer-cbxify, .framer-b9wxR .framer-i6x5f3, .framer-b9wxR .framer-12ed5ig { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-b9wxR .framer-lapy4p, .framer-b9wxR .framer-17lv7gh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-4tqp5e, .framer-b9wxR .framer-15epdyy, .framer-b9wxR .framer-za11a9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-b9wxR .framer-a3i36e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-l0jvx4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 442px; z-index: 1; }`,`.framer-b9wxR .framer-qt53c6-container, .framer-b9wxR .framer-1ebnryq-container, .framer-b9wxR .framer-aw8e02-container, .framer-b9wxR .framer-e26o30-container, .framer-b9wxR .framer-1x2rkqq-container { flex: none; height: 280px; position: sticky; top: 180px; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-ti4fmg { --border-bottom-width: 0px; --border-color: var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, #2b2b2b); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; scroll-margin-top: 56px; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-rxatli { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 44px 0px 44px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-u6bdyx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-b9wxR .framer-1myufz4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 100px; width: min-content; z-index: 1; }`,`.framer-b9wxR .framer-1kqkoe { aspect-ratio: 0.9047619047619048 / 1; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: var(--framer-aspect-ratio-supported, 408px); overflow: visible; position: relative; width: 370px; z-index: 1; }`,`.framer-b9wxR .framer-1keoabo-container { bottom: 14px; flex: none; height: 35px; position: absolute; right: 14px; width: auto; }`,`.framer-b9wxR .framer-131wefz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,`.framer-b9wxR .framer-1piggx9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-b9wxR .framer-1s7utx4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-qkmi34 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 18px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-b9wxR .framer-1iy1cef { flex: none; height: 63px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 102px; }`,`.framer-b9wxR .framer-1wkvno, .framer-b9wxR .framer-1lq8ef8 { height: 63px; left: 0px; position: absolute; top: 0px; width: 102px; }`,`.framer-b9wxR .framer-ylvc44 { height: 32px; left: 33px; position: absolute; top: 23px; width: 66px; }`,`.framer-b9wxR .framer-1wi84du { height: 3px; left: 53px; position: absolute; top: 0px; width: 3px; }`,`.framer-b9wxR .framer-12emoob { height: 2px; left: 61px; position: absolute; top: 20px; width: 5px; }`,`.framer-b9wxR .framer-1o2b3cn { height: 12px; left: 0px; position: absolute; top: 20px; width: 59px; }`,`.framer-b9wxR .framer-zk7r8g { --border-bottom-width: 0px; --border-color: var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, #2b2b2b); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-5ff2fu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 44px 0px 44px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-1fgz1ma { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-105c2yw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-b9wxR .framer-qtek3b { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-im4e7k-container, .framer-b9wxR .framer-d5grbg-container, .framer-b9wxR .framer-1wc26lu-container, .framer-b9wxR .framer-y03255-container, .framer-b9wxR .framer-1iir1lk-container, .framer-b9wxR .framer-z2o1ln-container { flex: none; height: auto; position: relative; width: 320px; }`,`.framer-b9wxR .framer-mabkjr { --border-bottom-width: 1px; --border-color: var(--token-d1fa08ee-c247-459b-aaf3-d2091e9cede1, #2b2b2b); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; scroll-margin-top: 56px; width: 100%; z-index: 1; }`,`.framer-b9wxR .framer-7zs1j1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 44px 0px 44px; position: relative; width: 1px; }`,`.framer-b9wxR .framer-3cn029 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,`.framer-b9wxR .framer-y6tvc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-ysoez0 { --border-bottom-width: 2px; --border-color: rgba(130, 130, 130, 0.5); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: var(--token-20d21273-dd71-4b8c-b9c8-7a4dfb52412f, #ea0044); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; box-shadow: 0px 0.5971439051427296px 0.5971439051427296px -0.9375px rgba(0, 0, 0, 0.07), 0px 1.8108796073283884px 1.8108796073283884px -1.875px rgba(0, 0, 0, 0.07), 0px 4.786990141113346px 4.786990141113346px -2.8125px rgba(0, 0, 0, 0.06), 0px 15px 15px -3.75px rgba(0, 0, 0, 0.03); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 32px; position: sticky; top: 88px; width: 1px; z-index: 1; }`,`.framer-b9wxR .framer-1yrv4p2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-b9wxR .framer-1upenlf-container { flex: none; height: 64px; position: relative; width: 64px; }`,`.framer-b9wxR .framer-19dgrlv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-b9wxR .framer-uc26ke { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-b9wxR .framer-nminyr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-b9wxR .framer-10o5x30 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-b9wxR .framer-1ixwz5h-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-b9wxR .framer-13qfdot { flex: none; height: 13px; position: relative; width: 61px; }`,`.framer-b9wxR .framer-enu5u9-container { bottom: 37px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: auto; z-index: 9; }`,`.framer-b9wxR.framer-1rok5cv { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,`.framer-b9wxR.framer-1vx3lmr-container { flex: none; height: 100%; pointer-events: auto; position: fixed; right: 0px; top: 0px; width: 540px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,`.framer-b9wxR.framer-1q3mdb7 { -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px); background-color: rgba(0, 0, 0, 0.7); flex: none; height: 100%; overflow: hidden; position: fixed; right: 0px; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,`.framer-b9wxR .framer-13cynb1 { height: 0px; position: relative; width: 0px; }`,...jt,...Xe,...ke,`.framer-b9wxR[data-border="true"]::after, .framer-b9wxR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`.framer-b9wxR[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-b9wxR [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,`.framer-b9wxR[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-b9wxR [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,`.framer-b9wxR[data-hide-scrollbars="true"], .framer-b9wxR [data-hide-scrollbars="true"] { scrollbar-width: none; }`,`@media (min-width: 992px) and (max-width: 1199.98px) { .framer-b9wxR.framer-72rtr7 { width: 992px; } .framer-b9wxR .framer-8knrt8 { padding: 0px 44px 0px 44px; } .framer-b9wxR .framer-1kqkoe { height: var(--framer-aspect-ratio-supported, 409px); }}`,`@media (min-width: 768px) and (max-width: 991.98px) { .framer-b9wxR.framer-72rtr7 { width: 768px; } .framer-b9wxR .framer-jjf53m { gap: 10px; height: 426px; padding: 0px 32px 46px 32px; } .framer-b9wxR .framer-iuomh4-container { height: 279px; width: 100%; } .framer-b9wxR .framer-q4zb98 { height: 26%; max-width: unset; padding: 0px; } .framer-b9wxR .framer-hogmjb { height: 100%; width: 212px; } .framer-b9wxR .framer-1oroz0s { bottom: unset; gap: 0px; height: min-content; left: 50%; padding: 64px 0px 49px 0px; top: -6px; transform: translateX(-50%); width: 696px; } .framer-b9wxR .framer-kgdfq0 { height: var(--framer-aspect-ratio-supported, 308px); width: 308px; } .framer-b9wxR .framer-8knrt8 { padding: 0px 44px 0px 44px; } .framer-b9wxR .framer-vltq38 { padding: 47px 0px 47px 0px; } .framer-b9wxR .framer-4gugwl, .framer-b9wxR .framer-cbxify { order: 0; } .framer-b9wxR .framer-1tcd00y { justify-content: flex-start; padding: 60px 0px 0px 0px; } .framer-b9wxR .framer-ytf2ua { flex-direction: column; flex-wrap: wrap; gap: 34px 20px; justify-content: flex-start; padding: 0px 36px 0px 36px; width: 100%; } .framer-b9wxR .framer-l0jvx4 { align-content: unset; align-items: unset; display: grid; gap: 16px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); width: 100%; } .framer-b9wxR .framer-qt53c6-container { align-self: start; height: 350px; justify-self: start; order: 1; } .framer-b9wxR .framer-1ebnryq-container { align-self: start; height: 350px; justify-self: start; order: 0; } .framer-b9wxR .framer-aw8e02-container { align-self: start; height: 350px; justify-self: start; order: 2; } .framer-b9wxR .framer-e26o30-container { align-self: start; grid-column: span 2; height: 189px; justify-self: start; order: 4; } .framer-b9wxR .framer-1x2rkqq-container { align-self: start; height: 350px; justify-self: start; order: 3; } .framer-b9wxR .framer-u6bdyx { gap: 48px; order: 1; } .framer-b9wxR .framer-1kqkoe { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; height: var(--framer-aspect-ratio-supported, 288px); width: 261px; } .framer-b9wxR .framer-1piggx9 { flex: 1 0 0px; } .framer-b9wxR .framer-zk7r8g { overflow: auto; } .framer-b9wxR .framer-7zs1j1 { flex-direction: column; } .framer-b9wxR .framer-3cn029 { flex: none; width: 100%; } .framer-b9wxR .framer-ysoez0 { flex: none; position: relative; top: unset; width: 100%; } .framer-b9wxR .framer-1yrv4p2 { align-content: center; align-items: center; } .framer-b9wxR .framer-nminyr { max-width: 300px; } .framer-b9wxR .framer-10o5x30 { flex-direction: column; justify-content: center; } .framer-b9wxR .framer-enu5u9-container { bottom: 63px; }}`,`@media (max-width: 767.98px) { .framer-b9wxR.framer-72rtr7 { width: 390px; } .framer-b9wxR .framer-13kxl6w { align-content: flex-start; align-items: flex-start; padding: 0px; } .framer-b9wxR .framer-jjf53m { gap: 316px; height: 742px; padding: 70px 32px 0px 32px; } .framer-b9wxR .framer-iuomh4-container { height: 192px; width: 352px; } .framer-b9wxR .framer-q4zb98 { align-content: center; align-items: center; flex-direction: column; } .framer-b9wxR .framer-1oroz0s { bottom: unset; cursor: grab; gap: 7.36px; height: 375px; left: 0px; padding: 15.43px 0px 15.43px 0px; right: 0px; top: calc(52.15633423180596% - 375px / 2); width: unset; z-index: 0; } .framer-b9wxR .framer-kgdfq0 { -webkit-filter: drop-shadow(58.08px 22.06px 42px rgba(0, 0, 0, 0.25)); filter: drop-shadow(58.08px 22.06px 42px rgba(0, 0, 0, 0.25)); height: var(--framer-aspect-ratio-supported, 353px); order: 0; width: 353px; } .framer-b9wxR .framer-8knrt8 { flex-direction: column; max-width: unset; padding: 0px 22px 0px 22px; } .framer-b9wxR .framer-qbsodz, .framer-b9wxR .framer-nf8if8, .framer-b9wxR .framer-9xrltp, .framer-b9wxR .framer-dg8crp, .framer-b9wxR .framer-8pn4m5, .framer-b9wxR .framer-105c2yw { flex: none; width: 100%; } .framer-b9wxR .framer-vltq38, .framer-b9wxR .framer-mabkjr { padding: 48px 0px 48px 0px; } .framer-b9wxR .framer-4gugwl { gap: 48px; order: 0; padding: 0px 22px 0px 22px; } .framer-b9wxR .framer-2o9ve0, .framer-b9wxR .framer-4h54b4 { flex-direction: column; } .framer-b9wxR .framer-1kvtyk0 { padding: 32px 0px 32px 0px; } .framer-b9wxR .framer-1i2l836 { padding: 0px 22px 0px 22px; } .framer-b9wxR .framer-1tcd00y, .framer-b9wxR .framer-5ff2fu { gap: 48px; padding: 0px; } .framer-b9wxR .framer-ytf2ua { flex-direction: column; gap: 37px; justify-content: flex-start; padding: 31px 22px 200px 22px; width: 100%; } .framer-b9wxR .framer-16t13w { gap: 28px; top: 100px; width: 100%; } .framer-b9wxR .framer-l0jvx4 { position: sticky; top: 150px; width: 100%; } .framer-b9wxR .framer-qt53c6-container, .framer-b9wxR .framer-1ebnryq-container, .framer-b9wxR .framer-aw8e02-container, .framer-b9wxR .framer-e26o30-container, .framer-b9wxR .framer-1x2rkqq-container { height: 325px; top: 405px; } .framer-b9wxR .framer-ti4fmg { gap: 48px; padding: 48px 0px 48px 0px; } .framer-b9wxR .framer-rxatli { gap: 48px; padding: 0px 22px 0px 22px; } .framer-b9wxR .framer-cbxify { order: 0; } .framer-b9wxR .framer-u6bdyx { flex-direction: column; gap: 32px; order: 1; } .framer-b9wxR .framer-1myufz4 { order: 0; position: relative; top: unset; width: 100%; } .framer-b9wxR .framer-1kqkoe { height: var(--framer-aspect-ratio-supported, 383px); width: 100%; } .framer-b9wxR .framer-131wefz { align-self: unset; width: 100%; } .framer-b9wxR .framer-1piggx9 { flex: none; order: 1; width: 100%; } .framer-b9wxR .framer-zk7r8g { gap: 48px; justify-content: flex-start; padding: 48px 22px 48px 22px; z-index: 2; } .framer-b9wxR .framer-1fgz1ma { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-b9wxR .framer-qtek3b { gap: 8px; } .framer-b9wxR .framer-im4e7k-container, .framer-b9wxR .framer-d5grbg-container, .framer-b9wxR .framer-1wc26lu-container, .framer-b9wxR .framer-y03255-container, .framer-b9wxR .framer-1iir1lk-container, .framer-b9wxR .framer-z2o1ln-container { max-width: 315px; width: 100%; } .framer-b9wxR .framer-7zs1j1 { flex-direction: column; padding: 0px 22px 0px 22px; } .framer-b9wxR .framer-3cn029 { flex: none; gap: 48px; width: 100%; } .framer-b9wxR .framer-ysoez0 { flex: none; padding: 32px 16px 32px 16px; position: relative; top: unset; width: 100%; } .framer-b9wxR .framer-1yrv4p2 { align-content: center; align-items: center; overflow: visible; } .framer-b9wxR .framer-10o5x30 { flex-direction: column; justify-content: center; } .framer-b9wxR .framer-enu5u9-container { bottom: 59px; } .framer-b9wxR.framer-1vx3lmr-container { height: 89.81042654028435vh; left: 0px; right: unset; top: -7px; width: 100%; }}`],`framer-b9wxR`),Dc=Ec,Ec.displayName=`Home`,Ec.defaultProps={
    height:7312,width:1200
  },L(Ec,[{
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
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammWggvWl0Qn.woff2`,weight:`700`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,weight:`400`
    },{
      cssFamilyName:`Roboto`,source:`google`,style:`normal`,uiFamilyName:`Roboto`,url:`https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYaammWggvWl0Qn.woff2`,weight:`600`
    }]
  },...Lo,...Ro,...zo,...Vo,...Wo,...Go,...qo,...Jo,...Yo,...Xo,...Zo,...Qo,...$o,...ts,...rs,...is,...as,...ss,...cs,...ls,...us,...j(Nt),...j(Ze),...j(Oe)],{
    supportsExplicitInterCodegen:!0
  }),Ec.loader={
    load:(e,t)=>{
      let n=t.locale,r=ce.get(Fs(),n),i=ce.get(Ls(),n),a=ce.get(Rs(),n),o=ce.get(zs(),n);
      return Promise.allSettled([r.preload(),i.preload(),a.preload(),o.preload(),E(Ka,{},t),E(Qn,{},t),E(It,{},t),E(At,{},t),E(Vt,{},t),E(vt,{},t),E(pa,{},t),E(Ci,{},t),E(et,{},t),E(Xr,{},t),E(Cr,{},t),E(ka,{},t),E(Ki,{},t),E(Ut,{},t),E(bt,{},t),E(Ne,{},t),(async()=>{
        let e=await r.readMaybeAsync()??[];
        return Promise.allSettled(e.flatMap(e=>E(Pt,{},t)))
      })(),(async()=>{
        let e=await i.readMaybeAsync()??[];
        return Promise.allSettled(e.flatMap(e=>E(Pt,{},t)))
      })(),(async()=>{
        let e=await a.readMaybeAsync()??[];
        return Promise.allSettled(e.flatMap(e=>E(Pt,{},t)))
      })(),(async()=>{
        let e=await o.readMaybeAsync()??[];
        return Promise.allSettled(e.flatMap(e=>E(Pt,{},t)))
      })()])
    }
  },Oc={
    exports:{
      Props:{
        type:`tsType`,annotations:{
          framerContractVersion:`1`
        }
      },default:{
        type:`reactComponent`,name:`FrameraugiA20Il`,slots:[],annotations:{
          framerIntrinsicHeight:`7312`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"c2VvwuEge":{"layout":["fixed","auto"]},"oIMIRmEsG":{"layout":["fixed","auto"]},"C3r9hMJuq":{"layout":["fixed","auto"]},"lrnRvRVeF":{"layout":["fixed","auto"]}}}`,framerLayoutTemplateFlowEffect:`true`,framerComponentViewportWidth:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerAcceptsLayoutTemplate:`true`,framerImmutableVariables:`true`,framerColorSyntax:`true`,framerAutoSizeImages:`true`,framerScrollSections:`{"BZchDvhMe":{"pattern":":BZchDvhMe","name":"hero"},"wa1OpPtbn":{"pattern":":wa1OpPtbn","name":"main"},"bPRlM5v_3":{"pattern":":bPRlM5v_3","name":"projects"},"V8zY16Byd":{"pattern":":V8zY16Byd","name":"topprojects"},"O1EWxm2cI":{"pattern":":O1EWxm2cI","name":"services"},"d2en67I0l":{"pattern":":d2en67I0l","name":"service-2"},"GqS2yBBGz":{"pattern":":GqS2yBBGz","name":"about"},"jUxCuYDrA":{"pattern":":jUxCuYDrA","name":"about-2"},"wWxpymqOt":{"pattern":":wWxpymqOt","name":"faq"}}`,framerIntrinsicWidth:`1200`,framerContractVersion:`1`
        }
      },queryParamNames:{
        type:`variable`,annotations:{
          framerContractVersion:`1`
        }
      },__FramerMetadata__:{
        type:`variable`
      }
    }
  }
}))();
export{
  Oc as __FramerMetadata__,Dc as default,ps as queryParamNames
};
//# sourceMappingURL=vpH4yNY87FDbV-gIYd-pjP0PitUwOs5SeBbaGGLpDUE.Bvb55FHM.mjs.map
