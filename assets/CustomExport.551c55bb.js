import{_ as e}from"./index.940e52ae.js";import{E as t}from"./index.a094cfd9.js";import{c as i,d as o,j as s}from"./data.ab7706be.js";import{b as r}from"./index.12ea96cd.js";import{_ as d}from"./index.006e14c0.js";import{d as a,h as p,o as n,i as m,w as c,j,m as f}from"./index.12192f00.js";import"./index.90675504.js";import"./SearchOutlined.940caa2d.js";import"./CheckOutlined.eb33baf8.js";import"./DownOutlined.dd186a31.js";import"./index.382ec6c4.js";import"./index.09d69b67.js";import"./index.ceef1048.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c632e60a.js";import"./isEqual.292bb384.js";import"./get.6fddfe2d.js";import"./_baseProperty.74f89655.js";import"./toInteger.db0f0ea0.js";import"./index.bab8cfa1.js";import"./index.1bbbabab.js";import"./EyeOutlined.8664505d.js";import"./index.197c4eb2.js";import"./index.fcafca0f.js";import"./UpOutlined.4916bc51.js";import"./index.6d5a306c.js";import"./RightOutlined.c9c720ac.js";import"./RedoOutlined.5c75f95b.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./Tree.1d725590.js";import"./util.fe3cd4e6.js";import"./useAttrs.1da06bfb.js";/* empty css              */import"./uuid.6cf4dc1a.js";import"./index.d3f9b625.js";import"./DeleteOutlined.d83cfd81.js";import"./index.d8b5d5c4.js";import"./index.c8c13533.js";import"./index.4c154755.js";import"./index.fe2a3406.js";import"./index.39f57c76.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./useTimeout.061f51e0.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./index.43f0da41.js";import"./LeftOutlined.72f8a14c.js";import"./download.2dd29e3d.js";import"./index.66633179.js";import"./DoubleLeftOutlined.21f066b7.js";import"./DoubleRightOutlined.7bdd8502.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.616a14bf.js";import"./CaretDownFilled.e2ae1d05.js";import"./clickOutside.2a6abb69.js";import"./useSortable.ebfafe37.js";import"./useWindowSizeFn.f842e9fc.js";import"./SettingOutlined.429c9527.js";import"./useExpose.29e8a305.js";import"./useForm.61ab65a4.js";import"./FullscreenOutlined.547d7f44.js";import"./index.459ff6cc.js";import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./ArrowLeftOutlined.e1191e7a.js";var l=a({components:{BasicTable:e,ExpExcelModel:t,PageWrapper:d},setup(){const[e,{openModal:t}]=r();return{defaultHeader:function({filename:e,bookType:t}){s({data:o,filename:e,write2excelOpts:{bookType:t}})},columns:i,data:o,register:e,openModal:t}}});const u=f(" 导出 ");l.render=function(e,t,i,o,s,r){const d=p("a-button"),a=p("BasicTable"),f=p("ExpExcelModel"),l=p("PageWrapper");return n(),m(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[j(a,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(d,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),j(f,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
