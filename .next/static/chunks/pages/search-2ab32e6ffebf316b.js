(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(1252)}])},3765:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var s=r(5893),n=r(1664),c=r.n(n),i=r(9724),a=r.n(i),o=r(1571),u=r(5675),l=r.n(u);function d(t){let{className:e="",products:r}=t;return(0,s.jsx)("ul",{className:"".concat(a().productList," ").concat(e),children:null==r?void 0:r.map(t=>(0,s.jsx)("li",{children:(0,s.jsxs)(c(),{className:a().product,href:"/items/".concat(t.id),children:[(0,s.jsx)("div",{className:a().image,children:(0,s.jsx)(l(),{fill:!0,src:t.imgUrl,alt:t.name})}),(0,s.jsxs)("div",{className:a().content,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:a().name,children:t.name}),(0,s.jsxs)("div",{className:a().prices,children:[(0,s.jsxs)("span",{className:a().originalPrice,children:[t.price.toLocaleString(),"원"]}),t.salePrice.toLocaleString(),"원"]})]}),(0,s.jsx)("hr",{className:a().divider}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:a().starRating,children:[(0,s.jsx)(o.Z,{value:t.starRating}),t.starRatingCount.toLocaleString()]}),(0,s.jsxs)("div",{className:a().likeCount,children:["♥",t.likeCount.toLocaleString()]})]})]})]})},t.id))})}},2091:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var s=r(5893),n=r(1163),c=r(7294),i=r(8250),a=r.n(i);function o(t){let{initialValue:e=""}=t,r=(0,n.useRouter)(),[i,o]=(0,c.useState)(e),u=t=>{o(t.target.value)},l=t=>{if(t.preventDefault(),!i){r.push("/");return}r.push("/search?q=".concat(i))};return(0,s.jsxs)("form",{className:a().searchForm,onSubmit:l,children:[(0,s.jsx)("input",{className:a().searchInput,name:"q",value:i,placeholder:"찾고 싶은 옷을 검색해보세요.",onChange:u}),(0,s.jsx)("button",{className:a().searchButton,children:"검색"})]})}},1571:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var s=r(5893);let n=[1,2,3,4,5];function c(t){let{value:e=1}=t;return(0,s.jsx)("span",{children:n.map(t=>e>=t?"★":"✩")})}},1979:function(t,e,r){"use strict";var s=r(7066);let n=s.Z.create({baseURL:"https://learn.codeit.kr/api/codeitmall"});e.Z=n},1252:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var s=r(5893),n=r(7294),c=r(1163),i=r(3765),a=r(2091),o=r(1979),u=r(1194),l=r.n(u);r(5221),r(8943);var d=r(9008),_=r.n(d);function h(){let[t,e]=(0,n.useState)([]),r=(0,c.useRouter)(),{q:u}=r.query;async function d(t){let r=await o.Z.get("/products/?q=".concat(t)),s=r.data.results;e(s)}return(0,n.useEffect)(()=>{d(u)},[u]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_(),{children:(0,s.jsxs)("title",{children:[u," 검색 결과 - Codeitmall"]})}),(0,s.jsx)(a.Z,{initialValue:u}),(0,s.jsxs)("h2",{className:l().title,children:[(0,s.jsx)("span",{className:l().keyword,children:u})," 검색 결과"]}),(0,s.jsx)(i.Z,{className:l().productList,products:t})]})}},9724:function(t){t.exports={productList:"ProductList_productList__9CraL",product:"ProductList_product__3n2Wo",image:"ProductList_image__7f3Dj",content:"ProductList_content__LSYDN",divider:"ProductList_divider__h6anX",name:"ProductList_name__NH2Mx",prices:"ProductList_prices__GFpo8",originalPrice:"ProductList_originalPrice__3DfmU",starRating:"ProductList_starRating__IGcwx",likeCount:"ProductList_likeCount__0koiN"}},8250:function(t){t.exports={searchForm:"SearchForm_searchForm__UEKBn",searchInput:"SearchForm_searchInput__P7SYk",searchButton:"SearchForm_searchButton__dpQJJ"}},1194:function(t){t.exports={title:"Search_title__5OXF6",keyword:"Search_keyword__S2qDl",productList:"Search_productList__aKDZb"}}},function(t){t.O(0,[31,774,888,179],function(){return t(t.s=2774)}),_N_E=t.O()}]);