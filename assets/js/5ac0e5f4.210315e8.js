"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8065],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(5773),r=(n(7378),n(5318));const o={sidebar_position:10,title:"Custom Lima instance",description:"Podman Desktop can assist you to create custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","installing","linux","macOS"],keywords:["podman desktop","containers","lima","installing","installation","linux","macos"]},i="Creating a Lima instance with Podman Desktop",l={unversionedId:"Installation/creating-a-lima-instance-with-podman-desktop",id:"Installation/creating-a-lima-instance-with-podman-desktop",title:"Custom Lima instance",description:"Podman Desktop can assist you to create custom Lima instance on Linux and macOS.",source:"@site/docs/Installation/creating-a-lima-instance-with-podman-desktop.md",sourceDirName:"Installation",slug:"/Installation/creating-a-lima-instance-with-podman-desktop",permalink:"/docs/Installation/creating-a-lima-instance-with-podman-desktop",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/creating-a-lima-instance-with-podman-desktop.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"podman",permalink:"/docs/tags/podman"},{label:"installing",permalink:"/docs/tags/installing"},{label:"linux",permalink:"/docs/tags/linux"},{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Custom Lima instance",description:"Podman Desktop can assist you to create custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","installing","linux","macOS"],keywords:["podman desktop","containers","lima","installing","installation","linux","macos"]},sidebar:"mySidebar",previous:{title:"Installing from a compressed tar file",permalink:"/docs/Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file"},next:{title:"Custom Podman machine",permalink:"/docs/Installation/creating-a-podman-machine-with-podman-desktop"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Kubernetes",id:"kubernetes",level:4}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-lima-instance-with-podman-desktop"},"Creating a Lima instance with Podman Desktop"),(0,r.kt)("p",null,"To use the Lima provider you need a Lima instance running a Linux virtual machine."),(0,r.kt)("p",null,"In the future, Podman Desktop might be able to create Lima instances."),(0,r.kt)("p",null,"Consider creating a custom Lima instance to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control the assigned resources: CPUs, memory, and disk size."),(0,r.kt)("li",{parentName:"ul"},"Use the rootful connection by default, for example to run Kind.")),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"limactl")," executable is installed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install lima\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://lima-vm.io"},"https://lima-vm.io")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("p",null,"Currently you need to use the console, to create a new Lima instance."),(0,r.kt)("p",null,"After the instance is started, you need to restart the Lima extension."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("p",null,'To create an instance "podman" from a template "podman":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ limactl start --name=podman template://podman\n")),(0,r.kt)("p",null,'To create an instance "docker" from a template "docker":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ limactl start --name=docker template://docker\n")),(0,r.kt)("p",null,"To select the number of CPUs and the memory or disk size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ limactl start --set=\'.cpus = 2 | .memory = "2GiB" | .disk = "50GiB"\' ...\n')),(0,r.kt)("p",null,"To create a rootful instance, use the rootful template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ limactl start --name=podman template://podman-rootful\n")),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("p",null,'To verify the connection to a running "podman" instance:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ podman.lima version\n")),(0,r.kt)("p",null,'To verify the connection to a running "docker" instance:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ docker.lima version\n")),(0,r.kt)("h4",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"To create a single-node Kubernetes cluster running ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ limactl start template://k3s\n")),(0,r.kt)("p",null,"To create a single-node Kubernetes cluster running ",(0,r.kt)("a",{parentName:"p",href:"https://k8s.io/"},"k8s"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ limactl start template://k8s\n")),(0,r.kt)("p",null,"When the installation is done, the location of the KUBECONFIG file is printed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/kubernetes/configuring-access-to-a-kubernetes-cluster"},"Configuring access to a Kubernetes cluster"))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl.lima")," wrapper script, to connect to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl.lima version\n")))}m.isMDXComponent=!0}}]);