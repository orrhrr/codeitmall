(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return s(1252)}])},3765:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var r=s(5893),n=s(5675),c=s.n(n),i=s(1664),a=s.n(i),o=s(9724),u=s.n(o),l=s(1571);function d(t){let{className:e="",products:s}=t;return(0,r.jsx)("ul",{className:"".concat(u().productList," ").concat(e),children:null==s?void 0:s.map(t=>(0,r.jsx)("li",{children:(0,r.jsxs)(a(),{className:u().product,href:"/item/".concat(t.id),children:[(0,r.jsx)("div",{className:u().image,children:(0,r.jsx)(c(),{fill:!0,src:t.imgUrl,alt:t.name})}),(0,r.jsxs)("div",{className:u().content,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:u().name,children:t.name}),(0,r.jsxs)("div",{className:u().prices,children:[(0,r.jsxs)("span",{className:u().originalPrice,children:[t.price.toLocaleString(),"원"]}),t.salePrice.toLocaleString(),"원"]})]}),(0,r.jsx)("hr",{className:u().divider}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:u().starRating,children:[(0,r.jsx)(l.Z,{value:t.starRating}),t.starRatingCount.toLocaleString()]}),(0,r.jsxs)("div",{className:u().likeCount,children:["♥",t.likeCount.toLocaleString()]})]})]})]})},t.id))})}},2091:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var r=s(5893),n=s(1163),c=s(7294),i=s(8250),a=s.n(i);function o(t){let{initialValue:e=""}=t,s=(0,n.useRouter)(),[i,o]=(0,c.useState)(e),u=t=>{o(t.target.value)},l=t=>{if(t.preventDefault(),!i){s.push("/");return}s.push("/search?q=".concat(i))};return(0,r.jsxs)("form",{className:a().searchForm,onSubmit:l,children:[(0,r.jsx)("input",{className:a().searchInput,name:"q",value:i,placeholder:"찾고 싶은 옷을 검색해보세요.",onChange:u}),(0,r.jsx)("button",{className:a().searchButton,children:"검색"})]})}},1571:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var r=s(5893);let n=[1,2,3,4,5];function c(t){let{value:e=1}=t;return(0,r.jsx)("span",{children:n.map(t=>e>=t?"★":"✩")})}},1979:function(t,e,s){"use strict";var r=s(5121);let n=r.Z.create({baseURL:"https://learn.codeit.kr/api/codeitmall"});e.Z=n},1252:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var r=s(5893),n=s(7294),c=s(1163),i=s(3765),a=s(2091),o=s(1979),u=s(1194),l=s.n(u),d=s(9008),_=s.n(d);function h(){let[t,e]=(0,n.useState)([]),s=(0,c.useRouter)(),{q:u}=s.query;async function d(t){let s=await o.Z.get("/products/?q=".concat(t)),r=s.data.results;e(r)}return(0,n.useEffect)(()=>{d(u)},[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_(),{children:(0,r.jsxs)("title",{children:[" ",u," 검색 결과 - codeitmall"]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{initialValue:u}),(0,r.jsxs)("h2",{className:l().title,children:[(0,r.jsx)("span",{className:l().keyword,children:u})," 검색 결과"]}),(0,r.jsx)(i.Z,{className:l().productList,products:t})]})]})}},9724:function(t){t.exports={productList:"ProductList_productList__9CraL",product:"ProductList_product__3n2Wo",image:"ProductList_image__7f3Dj",content:"ProductList_content__LSYDN",divider:"ProductList_divider__h6anX",name:"ProductList_name__NH2Mx",prices:"ProductList_prices__GFpo8",originalPrice:"ProductList_originalPrice__3DfmU",starRating:"ProductList_starRating__IGcwx",likeCount:"ProductList_likeCount__0koiN"}},8250:function(t){t.exports={searchForm:"SearchForm_searchForm__UEKBn",searchInput:"SearchForm_searchInput__P7SYk",searchButton:"SearchForm_searchButton__dpQJJ"}},1194:function(t){t.exports={title:"Search_title__5OXF6",keyword:"Search_keyword__S2qDl",productList:"Search_productList__aKDZb"}}},function(t){t.O(0,[381,774,888,179],function(){return t(t.s=2774)}),_N_E=t.O()}]);