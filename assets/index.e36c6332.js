var e=Object.assign;import{d as t,r as i,a as r,aD as o,cp as s,cq as n,h as p,o as a,i as d,bw as m,j as c,H as j,b8 as l,k as u}from"./index.89eaa474.js";import{S as f}from"./index.cc707c0b.js";import b from"./Step1.37c65d9e.js";import x from"./Step2.2637b029.js";import S from"./Step3.5825b6f1.js";import{_ as v}from"./index.6a59b07e.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.8a1d6e93.js";import"./index.577f6c6d.js";import"./index.c01cefa1.js";import"./SearchOutlined.a793b9df.js";import"./EyeOutlined.b4c40e2a.js";import"./index.7738c60b.js";import"./DownOutlined.1abeee16.js";import"./index.a11b9577.js";import"./index.a7743e73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e6cdd1b0.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./index.77be0dac.js";import"./index.591d974e.js";import"./index.f7d29dbe.js";import"./UpOutlined.c83d32c3.js";import"./index.1e19492c.js";import"./colors.e9cc1e07.js";import"./RightOutlined.f6122b3f.js";import"./RedoOutlined.1b8dc239.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./Tree.62740264.js";import"./util.99ac0f73.js";import"./useAttrs.2235e19b.js";/* empty css              */import"./index.6c42ac2e.js";import"./uuid.f9ee62f2.js";import"./index.089467a0.js";import"./DeleteOutlined.74882a9c.js";import"./index.7b6fd761.js";import"./useTimeout.2438cbf6.js";import"./useWindowSizeFn.02c59bc0.js";import"./index.72bfb6c6.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./FullscreenOutlined.038a48b5.js";import"./index.ef8c8b6c.js";import"./index.0b034549.js";import"./LeftOutlined.3f688a61.js";import"./download.3a13bc2e.js";import"./data.2505cb7f.js";import"./useForm.96500e09.js";import"./index.976aa8c4.js";import"./index.2fb49807.js";import"./index.e2fe5134.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[f.name]:f,[f.Step.name]:f.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,r,o,s)=>{const n=p("a-step"),m=p("a-steps"),f=p("Step1"),b=p("Step2"),x=p("Step3"),S=p("PageWrapper");return a(),d(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(f,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?j((a(),d(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):u("",!0),e.initSetp3?j((a(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):u("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
