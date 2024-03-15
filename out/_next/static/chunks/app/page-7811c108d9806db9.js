(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1249:function(e,n,t){Promise.resolve().then(t.bind(t,985)),Promise.resolve().then(t.bind(t,389)),Promise.resolve().then(t.t.bind(t,9197,23)),Promise.resolve().then(t.t.bind(t,2415,23))},8792:function(e,n,t){"use strict";t.d(n,{default:function(){return s.a}});var c=t(5250),s=t.n(c)},985:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var c=t(7437),s=t(2265),r=t(6311),a=t.n(r),i=t(8792);let l=window.innerWidth<701;function o(e){let{successcriteria:n,status:t}=e;function s(){l&&t(!1)}if(n.length>0)return(0,c.jsx)("ul",{children:n.map(e=>(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"#".concat(e.name),onClick:s,children:"".concat(e.num,". ").concat(e.handle)})},e.name))})}function d(e){let{guidelines:n,status:t}=e;function s(){l&&t(!1)}if(n.length>0)return(0,c.jsx)("ul",{children:n.map(e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(i.default,{href:"#".concat(e.name),onClick:s,children:"".concat(e.num,". ").concat(e.handle)}),(0,c.jsx)(o,{successcriteria:e.successcriteria,status:t})]},e.name))})}function u(e){let{data:n}=e,[t,r]=(0,s.useState)(!0),o=(0,s.useRef)(null),u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{l&&r(!1)},[]),(0,s.useEffect)(()=>{l&&(t?(u.current.removeAttribute("inert"),o.current.classList.add("active-toc")):(u.current.setAttribute("inert","true"),o.current.classList.remove("active-toc")))},[t]),(0,c.jsxs)("div",{className:a().tocWrapper,ref:o,children:[(0,c.jsx)("button",{className:a().mNavToggleBtn,"aria-expendad":t,"aria-controls":"toc",onClick:()=>r(!t),children:"Table of contents"}),(0,c.jsx)("nav",{"aria-label":"Table of contents",className:a().toc,tabIndex:"-1",ref:u,id:"toc",children:(0,c.jsx)("ul",{children:n.principles.map(e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(i.default,{href:"#".concat(e.name),children:"".concat(e.num,". ").concat(e.handle)}),(0,c.jsx)(d,{guidelines:e.guidelines,status:r})]},e.name))})})]})}},389:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var c=t(7437),s=t(2265),r=t(173),a=t.n(r);function i(e){let{tests:n}=e,t=e=>(0,c.jsx)("ul",{children:e.map((e,n)=>(0,c.jsx)("li",{children:(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})},n))}),s=e=>e.length>1?(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{className:"sr-only",children:["Range between ",e[0]," and ",e[1]]}),(0,c.jsxs)("span",{"aria-hidden":"true",children:[(0,c.jsx)("span",{className:"badge ".concat(e[0].toLowerCase()),children:e[0]})," → ",(0,c.jsx)("span",{className:"badge ".concat(e[1].toLowerCase()),children:e[1]})]})]}):(0,c.jsx)("span",{className:"badge ".concat(e[0].toLowerCase()),children:e[0]});if(n.length>0)return(0,c.jsxs)("table",{className:a().testsTable,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{scope:"col",children:"Test"}),(0,c.jsx)("th",{scope:"col",children:"Impact"}),(0,c.jsx)("th",{scope:"col",children:"Notes"})]})}),(0,c.jsx)("tbody",{children:n.map((e,n)=>(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{children:[(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}}),e.details.length>0&&t(e.details)]}),(0,c.jsx)("td",{children:e.impact.length>0&&s(e.impact)}),(0,c.jsx)("td",{children:e.impactNotes})]},"t-".concat(n)))})]})}function l(e){let{references:n}=e;return(0,c.jsx)("table",{className:a().referencesTable,children:(0,c.jsx)("tbody",{children:Object.keys(n).map(e=>{var t;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:(()=>{switch(e){case"wcag":return"WCAG 2.2";case"appleHumanInterface":return"Apple Human Interface";case"appleDeveloperDocs":return"Apple Developer Docs";case"androidAccessibilityPrinciples":return"Android Accessibility Principles";case"materialDesign":return"Material Design";default:return""}})()}),(0,c.jsx)("td",{children:n[e].length>0&&(t=n[e],(0,c.jsx)("ul",{children:t.map((e,n)=>(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:e.url,children:"".concat(e.title).concat(e.level?" ("+e.level+")":"")})},n))}))})]},e)})})})}function o(e){let{sc:n}=e,[t,r]=(0,s.useState)(!1),l=(0,s.useRef)(null);return(0,s.useEffect)(()=>{t?l.current.removeAttribute("inert"):l.current.setAttribute("inert","true")},[t]),(0,c.jsxs)("div",{className:a().tableSection,children:[(0,c.jsx)("h5",{className:a().accordionHeading,children:(0,c.jsxs)("button",{"aria-controls":"tests-".concat(n.name),"aria-expanded":t,onClick:()=>r(!t),children:["Tests for success criterion ".concat(n.num,". ").concat(n.handle),(0,c.jsx)("span",{className:a().accordionChevron,"aria-hidden":"true",children:"▾"})]})}),(0,c.jsx)("section",{id:"tests-".concat(n.name),ref:l,inert:!0,children:(0,c.jsx)(i,{tests:n.tests})})]})}function d(e){let{sc:n}=e,[t,r]=(0,s.useState)(!1),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{i.current&&(t?i.current.removeAttribute("inert"):i.current.setAttribute("inert","true"))},[t]),(0,c.jsxs)("div",{className:a().tableSection,children:[(0,c.jsx)("h5",{className:a().accordionHeading,children:(0,c.jsxs)("button",{"aria-controls":"references-".concat(n.name),"aria-expanded":t,onClick:()=>r(!t),children:["References for success criterion ".concat(n.num,". ").concat(n.handle),(0,c.jsx)("span",{className:a().accordionChevron,"aria-hidden":"true",children:"▾"})]})}),(0,c.jsx)("section",{id:"references-".concat(n.name),ref:i,inert:!0,children:(0,c.jsx)(l,{references:n.references})})]})}function u(e){let{successcriteria:n}=e;if(n.length>0)return n.map(e=>(0,c.jsxs)("div",{id:e.name,className:a().scSection,tabIndex:"-1",children:[(0,c.jsx)("h4",{id:"heading-".concat(e.name),children:"Success Criterion ".concat(e.num,". ").concat(e.handle)}),(0,c.jsx)("p",{dangerouslySetInnerHTML:{__html:e.title}}),(0,c.jsx)(o,{sc:e}),(0,c.jsx)(d,{sc:e})]},e.name))}},9197:function(e){e.exports={guidelineSection:"guidelines_guidelineSection__Zlv77"}},2415:function(e){e.exports={guidelinesWrapper:"page_guidelinesWrapper__XZ7Ks",contentWrapper:"page_contentWrapper__PloUE",prefix:"page_prefix__Nnlu8",card:"page_card__EI4kK"}},173:function(e){e.exports={scSection:"sc_scSection__UvrvO",tableSection:"sc_tableSection__adjCv",testsTable:"sc_testsTable__aJgSO",referencesTable:"sc_referencesTable__2ZkY8",accordionHeading:"sc_accordionHeading__59_q3"}},6311:function(e){e.exports={tocWrapper:"toc_tocWrapper__z3Qwm",toc:"toc_toc__d8JeX",terminology:"toc_terminology__WBOKc",termsSection:"toc_termsSection__qtBNw",mNavToggleBtn:"toc_mNavToggleBtn__VVfv7"}}},function(e){e.O(0,[250,971,69,744],function(){return e(e.s=1249)}),_N_E=e.O()}]);