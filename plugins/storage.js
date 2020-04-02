import Vue from 'vue'
const $ls = {};
$ls.set = function(key, obj) {
    let val = JSON.stringify(obj) || null;
    return window.localStorage.setItem(key, val)
}
$ls.get = function(key) {
    let obj = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null;
    return obj
}
Vue.prototype.$ls = $ls