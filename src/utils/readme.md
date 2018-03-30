#此目录存放工具类的方法

  1.(封装) query-api(基于fetch请求， fetch请求属于新的api, 所以需要自己去配，因为不兼容老版本的，怎么去配呢？判断fetch是否在全局作用域下， 如果全局作用域下有fetch就用fetch，否则用自己分装的（http.js）)
  2.后端给你返回接口的时候一半给你返回那一部分？一般都会返回入口的最后一部分（请求路径）
  3.全路径：协议， 域名 端口 ，请求路径
  4.同源策略：协议相同， 域名相同， 端口号相同
  以下是用rem作为单位进行页面排版时依赖的脚本，原理是根据设计图的宽度来动态设置根元素的大小，从而实现自适应的目的（与媒体查询media query有异曲同工之处）。默认宽度等于640。取设计图上量出来的值除以100即可
(function (doc, win, image_width) {

    var docEl = doc.documentElement, //获取html标签
		//orientationchange方向改变事件
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
			//当前设备视口宽度
	    var clientWidth = docEl.clientWidth;
	    if (!clientWidth) return;
	    docEl.style.fontSize = 100 * (clientWidth / image_width) + 'px';
	};

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window, 640);



/**http.js
 * // http.js 就是请求数据的, 只是$http区分一下
 * // 在首页home 去请求数据
 * // 同源策略：协议相同， 域名相同， 端口号相同
 * // 怎样判断data是不是个对象
 * // 基于fetch封装的请求方法，支持get和post
 * @argument get
 * @argument post
*/