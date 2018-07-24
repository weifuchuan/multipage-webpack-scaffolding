import '../../common/css/com.less';
import './index.less';
import {throttle} from '../../tools/utils';
import "bootstrap/dist/css/bootstrap.css"
require('bootstrap')
import * as $ from 'jquery'

console.log(throttle);

console.log('首页的js运行了～～')

$("#go").click(()=>{
  alert("去你的吧");
}); 