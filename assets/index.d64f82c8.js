import{D as e}from"./index.1f1430fb.js";import{u as t}from"./useDescription.14aa8caa.js";import{_ as s}from"./index.006e14c0.js";import{d as a,h as i,o as r,i as o,w as m,j as n}from"./index.12192f00.js";import"./index.46c5a3b2.js";import"./responsiveObserve.c545f1cc.js";import"./index.fe2a3406.js";import"./index.39f57c76.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./RightOutlined.c9c720ac.js";/* empty css              */import"./useTimeout.061f51e0.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./get.6fddfe2d.js";import"./index.459ff6cc.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./isEqual.292bb384.js";import"./toInteger.db0f0ea0.js";import"./DownOutlined.dd186a31.js";import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},p=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:p}),[s]=t({title:"无边框",bordered:!1,data:l,schema:p});return{mockData:l,schema:p,register:e,register1:s}}});c.render=function(e,t,s,a,l,p){const c=i("Description"),d=i("PageWrapper");return r(),o(d,{title:"详情组件示例"},{default:m((()=>[n(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),n(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default c;
