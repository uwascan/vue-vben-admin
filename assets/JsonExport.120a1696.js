import{_ as e}from"./index.5a4506de.js";import"./index.1b23941f.js";import{c as i,d as t,j as o}from"./data.7e849c3a.js";import{_ as s}from"./index.6a59b07e.js";import{d as r,h as d,o as a,i as m,w as n,j as p,m as j}from"./index.89eaa474.js";import"./index.7738c60b.js";import"./SearchOutlined.a793b9df.js";import"./CheckOutlined.8a1d6e93.js";import"./DownOutlined.1abeee16.js";import"./index.a11b9577.js";import"./index.a7743e73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e6cdd1b0.js";import"./vendor.3b1829c7.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./index.77be0dac.js";import"./index.591d974e.js";import"./index.f7d29dbe.js";import"./UpOutlined.c83d32c3.js";import"./index.c01cefa1.js";import"./EyeOutlined.b4c40e2a.js";import"./index.1e19492c.js";import"./colors.e9cc1e07.js";import"./RightOutlined.f6122b3f.js";import"./RedoOutlined.1b8dc239.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./Tree.62740264.js";import"./util.99ac0f73.js";import"./useAttrs.2235e19b.js";/* empty css              */import"./index.6c42ac2e.js";import"./uuid.f9ee62f2.js";import"./index.089467a0.js";import"./DeleteOutlined.74882a9c.js";import"./index.7b6fd761.js";import"./useTimeout.2438cbf6.js";import"./useWindowSizeFn.02c59bc0.js";import"./index.72bfb6c6.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./FullscreenOutlined.038a48b5.js";import"./index.577f6c6d.js";import"./index.ef8c8b6c.js";import"./index.0b034549.js";import"./LeftOutlined.3f688a61.js";import"./download.3a13bc2e.js";import"./index.92fb4aac.js";import"./DoubleLeftOutlined.89419e92.js";import"./DoubleRightOutlined.5528d655.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.31c0fca4.js";import"./CaretDownFilled.a131afde.js";import"./clickOutside.e44aad26.js";import"./useSortable.fd642570.js";import"./SettingOutlined.9cc209c2.js";import"./useExpose.911f3df6.js";import"./useForm.96500e09.js";import"./index.e2fe5134.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./ArrowLeftOutlined.d2d3a70b.js";var c=r({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){o({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:t})});const l=j(" 导出：默认头部 "),f=j(" 导出：自定义头部 ");c.render=function(e,i,t,o,s,r){const j=d("a-button"),c=d("BasicTable"),u=d("PageWrapper");return a(),m(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:n((()=>[p(c,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:n((()=>[p(j,{onClick:e.defaultHeader},{default:n((()=>[l])),_:1},8,["onClick"]),p(j,{onClick:e.customHeader},{default:n((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default c;
