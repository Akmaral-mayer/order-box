(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,n){t.exports={basket:"basket_basket__27Fhu",product:"basket_product__2dVx5",meal:"basket_meal__1SuPm",title:"basket_title__1lcmr",total:"basket_total__1rz0j",crossBtn:"basket_crossBtn__odwNW",item:"basket_item__1TDXY",discountBtn:"basket_discountBtn__32v3J"}},function(t,e,n){t.exports={product:"products_product__1hNBC",icon:"products_icon__1J8oZ",itemTitle:"products_itemTitle__GhQ5W"}},,,function(t,e,n){t.exports=n.p+"static/media/cross.27e7c55d.svg"},,,function(t,e,n){t.exports=n(21)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),s=(n(18),n(12)),i=n(1),l=n(2),u=n(4),m=n(3),d=n(5),p=function(t){return"KGZ"+Number(t.toFixed(1)).toLocaleString()+" "},h=n(7),f=n.n(h),b=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.products.map(function(e){return r.a.createElement("div",{className:f.a.product,key:e.id},r.a.createElement("a",{href:"#".concat(e.id),onClick:function(n){return t.props.handleAddToCart(n,e)}},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{className:"icon",src:"icons/".concat(e.sku),alt:e.title}))),r.a.createElement("div",{className:f.a.details},r.a.createElement("div",{className:f.a.itemTitle},e.title),r.a.createElement("b",null,p(e.price))))});return r.a.createElement("div",{className:"row"},e)}}]),e}(a.Component),v=n(6),_=n.n(v),E=n(10),k=n.n(E),g=n(11),S=n.n(g),j=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.cartItems,n=[],a=(e.map(function(t){return n.push(t.title+" "+t.count+"*"+t.price+"="+t.count*t.price)}),p(e.reduce(function(t,e){return t+e.price*e.count},0)));return r.a.createElement("div",{className:_.a.basket},0===e.length?"Basket is empty":r.a.createElement("h3",null,"You have ",e.length," items in the basket. ",r.a.createElement("hr",null)),r.a.createElement("br",null),r.a.createElement("b",null,"Sum: ",p(e.reduce(function(t,e){return t+e.price*e.count},0))),r.a.createElement("br",null),r.a.createElement("br",null),e.length>0&&r.a.createElement("div",null,r.a.createElement("ul",{style:{marginLeft:-25}},e.map(function(e){return r.a.createElement("li",{className:_.a.meal,key:e.id},r.a.createElement("div",{className:_.a.item},r.a.createElement("b",null,e.title)),r.a.createElement("span",null,e.count," * ",p(e.price)),r.a.createElement("button",{style:{float:"right"},className:_.a.crossBtn,onClick:function(n){return t.props.handleRemoveFromCart(n,e)}},r.a.createElement("img",{src:k.a,alt:"x"})))}))),r.a.createElement("button",{className:_.a.discountBtn,onClick:function(){var t=new S.a("p","pt");t.setFont("courier"),t.setFontType("bold"),t.text(150,20,"Thank you for being with us !"),t.setFontType("normal"),t.text(100,35,"***************************************"),t.text(200,60,n),t.text(100,180,"***************************************"),t.setFontType("bold"),t.setFontSize(14),t.text(180,195,"Total price : ".concat(a," ")),t.save("Akmaral.pdf")}},"Click to get a receipt"))}}]),e}(a.Component),O=(n(20),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(m.a)(e).call(this))).handleRemoveFromCart=function(e,n){t.setState(function(t){var e=t.cartItems.filter(function(t){return t.id!==n.id});return localStorage.setItem("cartItems",JSON.stringify(e)),{cartItems:e}})},t.handleAddToCart=function(e,n){t.setState(function(t){var e=t.cartItems,a=!1;return e.forEach(function(t){t.id===n.id&&(t.count+=1,a=!0)}),a||e.push(Object(s.a)({},n,{count:1})),localStorage.setItem("cartItems",JSON.stringify(e)),{cartItems:e}})},t.listProducts=function(){t.setState(function(t){return""!==t.sort?t.products.sort(function(e,n){return"lowestprice"===t.sort?e.price>n.price?1:-1:e.price<n.price?1:-1}):t.products.sort(function(t,e){return t.id>e.id?1:-1}),""!==t.size?{filteredProducts:t.products.filter(function(e){return e.availableSizes.indexOf(t.size.toUpperCase())>=0})}:{filteredProducts:t.products}})},t.handleSortChange=function(e){t.setState({sort:e.target.value}),t.listProducts()},t.handleSizeChange=function(e){t.setState({size:e.target.value}),t.listProducts()},t.state={size:"",sort:"",cartItems:[],products:[],filteredProducts:[]},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=this;localStorage.getItem("cartItems")&&this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))}),fetch("http://localhost:8000/products").then(function(t){return t.json()}).catch(function(t){return fetch("db.json").then(function(t){return t.json()}).then(function(t){return t.products})}).then(function(e){t.setState({products:e}),t.listProducts()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"product-list"},r.a.createElement("h3",null,"Food-menu order-box"),r.a.createElement(b,{products:this.state.filteredProducts,handleAddToCart:this.handleAddToCart})),r.a.createElement(j,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart}))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.98659701.chunk.js.map