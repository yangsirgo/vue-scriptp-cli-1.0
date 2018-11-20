
/***************************js组件******************************/
//全局js对象
function GD() {}
window.gd = new GD();

//工具方法
import {
    get,
    post,
    query,
    getMaxZIndex,
    toggleFullscreen,
    getBrowserInfo,
    clone,
    padLeft,
    newDate,
    isDate
} from './jscom/gd_tools.js';
GD.prototype.get = get; //get Ajax
GD.prototype.post = post; //post Ajax
GD.prototype.query = query; //获取url传参
GD.prototype.getMaxZIndex = getMaxZIndex; //获取页面中最大zIndex
GD.prototype.toggleFullscreen = toggleFullscreen; //切换全屏
GD.prototype.getBrowserInfo = getBrowserInfo; //获取浏览器信息
GD.prototype.clone = clone; //JSON数据的深复制
GD.prototype.padLeft = padLeft; //数字位数不足前面补0
GD.prototype.newDate = newDate; //创建日期对象
GD.prototype.isDate = isDate; //判断是否是有效日期
