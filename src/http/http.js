import axios from 'axios'
const MyHttpserver={}
MyHttpserver.install = function (Vue) {

   axios.defaults.baseURL = "http://localhost:8888/api/private/v1/"
    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }
  export default MyHttpserver