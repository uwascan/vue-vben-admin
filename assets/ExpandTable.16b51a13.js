import{_ as e}from"./index.940e52ae.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.160de333.js";import{d as s,h as o,o as r,i as d,j as p,w as m,l as a}from"./index.12192f00.js";import{u as n}from"./useTable.9cf092e3.js";import"./index.90675504.js";import"./SearchOutlined.940caa2d.js";import"./CheckOutlined.eb33baf8.js";import"./DownOutlined.dd186a31.js";import"./index.382ec6c4.js";import"./index.09d69b67.js";import"./index.ceef1048.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c632e60a.js";import"./isEqual.292bb384.js";import"./get.6fddfe2d.js";import"./_baseProperty.74f89655.js";import"./toInteger.db0f0ea0.js";import"./index.bab8cfa1.js";import"./index.1bbbabab.js";import"./EyeOutlined.8664505d.js";import"./index.197c4eb2.js";import"./index.fcafca0f.js";import"./UpOutlined.4916bc51.js";import"./index.6d5a306c.js";import"./RightOutlined.c9c720ac.js";import"./RedoOutlined.5c75f95b.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./Tree.1d725590.js";import"./util.fe3cd4e6.js";import"./useAttrs.1da06bfb.js";/* empty css              */import"./uuid.6cf4dc1a.js";import"./index.d3f9b625.js";import"./DeleteOutlined.d83cfd81.js";import"./index.d8b5d5c4.js";import"./index.12ea96cd.js";import"./useTimeout.061f51e0.js";import"./useWindowSizeFn.f842e9fc.js";import"./index.fe2a3406.js";import"./index.39f57c76.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./FullscreenOutlined.547d7f44.js";import"./index.c8c13533.js";import"./index.4c154755.js";import"./index.43f0da41.js";import"./LeftOutlined.72f8a14c.js";import"./download.2dd29e3d.js";import"./index.66633179.js";import"./DoubleLeftOutlined.21f066b7.js";import"./DoubleRightOutlined.7bdd8502.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.616a14bf.js";import"./CaretDownFilled.e2ae1d05.js";import"./clickOutside.2a6abb69.js";import"./useSortable.ebfafe37.js";import"./SettingOutlined.429c9527.js";import"./useExpose.29e8a305.js";import"./useForm.61ab65a4.js";var j=s({components:{BasicTable:e},setup(){const[e]=n({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,i,t,s,n,j){const f=o("BasicTable");return r(),d("div",c,[p(f,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[p("span",null,"No: "+a(e.no),1)])),_:1},8,["onRegister"])])};export default j;
