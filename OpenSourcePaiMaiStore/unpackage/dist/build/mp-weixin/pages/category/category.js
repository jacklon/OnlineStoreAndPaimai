(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"1bb8":function(t,n,i){"use strict";i.r(n);var e=i("246c"),a=i("2e99");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("95d1");var r=i("2877"),c=Object(r["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},"246c":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},"2e99":function(t,n,i){"use strict";i.r(n);var e=i("9cc0"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"95d1":function(t,n,i){"use strict";var e=i("c949"),a=i.n(e);a.a},"9cc0":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(i("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,n,i,e,a,o,r){try{var c=t[o](r),s=c.value}catch(u){return void i(u)}c.done?n(s):Promise.resolve(s).then(e,a)}function r(t){return function(){var n=this,i=arguments;return new Promise(function(e,a){var r=t.apply(n,i);function c(t){o(r,e,a,c,s,"next",t)}function s(t){o(r,e,a,c,s,"throw",t)}c(void 0)})}}var c=function(){return i.e("components/min-badge/min-badge").then(i.bind(null,"c93a"))},s={components:{minBadge:c},data:function(){return{txtSearch:"",userInfoCount:0,sizeCalcState:!1,tabScrollTop:0,tabScrollLeft:0,flist:[],slist:[],tlist:[],fatherlist:[],currentId:0,childshow:!1,current_f_id:1,goodslist:[],c_currentid:"",page:1,size:10,loading:!0,levl:0}},onLoad:function(){this.loadData(),this.getInfoCount()},onReachBottom:function(){this.getGoodslist()},methods:{getInfoCount:function(){var t=this;t.$http({method:"GET",url:this.global.target+"/wx/user/userinfopubscount"}).then(function(n){t.userInfoCount=n.data.data},function(t){})},loadData:function(){var t=r(e.default.mark(function t(){var n,i;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,this.$api.cartlists("cateLists");case 3:i=t.sent,n.$http({method:"GET",params:{comId:1,page:1,limit:100},url:this.global.target+"/wx/brand/list"}).then(function(t){console.log(t),i=t.data.data.list;var e={id:0,name:"全部"};n.fatherlist.push(e),i.forEach(function(t){n.fatherlist.push(t)})},function(t){}),this.getGoodslist(1);case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getGoodslist:function(){var n=r(e.default.mark(function n(i){var a,o,r,c,s;return e.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:a=this.loading,t.showLoading(),1==a?(o=this,o.c_currentid,r=o.currentId,c=o.page,s=o.size,o.levl,o.$http({method:"GET",params:{brandId:r,page:c,size:s},url:this.global.target+"/wx/tablelist/bandgoods"}).then(function(n){console.log(n);var e=n.data.data.total;0==e&&(t.hideLoading(),o.$api.msg("无数据"));var a=c*s;e<=a&&(o.loading=!1);var r=n.data.data.list;i?(o.goodslist=r,document.documentElement.scrollTop=0):r.forEach(function(t){o.goodslist.push(t)}),o.page++,t.hideLoading()},function(n){t.hideLoading()})):t.hideLoading();case 3:case"end":return n.stop()}},n,this)}));function i(t){return n.apply(this,arguments)}return i}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var n=this.slist.findIndex(function(n){return n.pid===t.id});this.tabScrollTop=this.slist[n].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var n=t.detail.scrollTop,i=this.slist.filter(function(t){return t.top<=n}).reverse();i.length>0&&(this.currentId=i[0].pid)},calcSize:function(){var n=0;this.slist.forEach(function(i){var e=t.createSelectorQuery().select("#main-"+i.id);e.fields({size:!0},function(t){i.top=n,n+=t.height,i.bottom=n}).exec()}),this.sizeCalcState=!0},navToList:function(n,i){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(n,"&tid=").concat(i)})},change_currentid:function(t){this.currentId=t,this.loading=!0,this.page=1,this.levl=1,this.getGoodslist(1)},childshow_btn:function(){this.childshow=!this.childshow},chioce_c:function(t,n){this.c_currentid=n,this.childshow=!this.childshow,this.loading=!0,this.page=1,this.levl=2,this.getGoodslist(1,2)},navToDetailPage:function(n){var i=n.id;t.navigateTo({url:"/pages/product/product?id=".concat(i)})},navTo:function(n){t.navigateTo({url:n})},navToSearch:function(){t.navigateTo({url:"/pages/category/search?keyword="+this.txtSearch})}},onNavigationBarSearchInputConfirmed:function(n){t.navigateTo({url:"/pages/category/search?keyword="+n.text})}};n.default=s}).call(this,i("543d")["default"])},c949:function(t,n,i){}},[["7f9e","common/runtime","common/vendor"]]]);