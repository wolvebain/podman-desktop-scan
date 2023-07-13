"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7741],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),h=o,b=f["".concat(c,".").concat(h)]||f[h]||p[h]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(5773),o=(n(7378),n(5318));const i={sidebar_position:100},l="Troubleshooting OpenShift Local",a={unversionedId:"troubleshooting/troubleshooting-openshift-local",id:"troubleshooting/troubleshooting-openshift-local",title:"Troubleshooting OpenShift Local",description:"- Check which preset is defined. (crc config get preset)",source:"@site/docs/troubleshooting/troubleshooting-openshift-local.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-openshift-local",permalink:"/docs/troubleshooting/troubleshooting-openshift-local",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-openshift-local.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"mySidebar",previous:{title:"Troubleshooting Podman on Linux",permalink:"/docs/troubleshooting/troubleshooting-podman-on-linux"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting-openshift-local"},"Troubleshooting OpenShift Local"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check which preset is defined. (",(0,o.kt)("inlineCode",{parentName:"li"},"crc config get preset"),")"),(0,o.kt)("li",{parentName:"ul"},"Check that ",(0,o.kt)("inlineCode",{parentName:"li"},"crc")," binary is available in the user PATH (",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/crc"),")"),(0,o.kt)("li",{parentName:"ul"},"Check that ",(0,o.kt)("inlineCode",{parentName:"li"},"crc setup --check-only")," is running without errors.")))}p.isMDXComponent=!0}}]);