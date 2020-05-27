import ApiConfig from '@/config/api'
import qs from 'qs'
export default function ({ $axios }) {
    // $axios.defaults.timeout = 60000
    $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // 请求回调
    $axios.onRequest(config => {
        // console.log('Making request to ' + config.url);
    });
    // 返回回调
    $axios.onResponse(res => { });
    // 错误回调
    $axios.onError(error => {
        const _code = parseInt(error.response && error.response.status);

        switch (_code) {
            case 404:
                break;
        }

    });
    // get 方法
    $axios.$GET = ({
        serviceName,
        apiUrl,
        params,
        time
    }) => {
        let _url = ApiConfig.service[serviceName] + apiUrl;
        $axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/enterprise' : ApiConfig.apiHost;
        return $axios({
            method: 'get',
            url: _url,
            params: params,
            timeout: time || 60000,
        })
    };
    // post 方法，不做 stringify 处理
    $axios.$POST = ({
        serviceName,
        apiUrl,
        params,
        time
    }) => {
        let _url = ApiConfig.service[serviceName] + apiUrl;
        $axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/enterprise' : ApiConfig.apiHost;
        return $axios({
            method: 'post',
            url: _url,
            data: params,
            timeout: time || 60000,
        })
    };
    // post 方法，不做 stringify 处理
    $axios.$POST_JSON = ({
        serviceName,
        apiUrl,
        params,
        time
    }) => {
        let _url = ApiConfig.service[serviceName] + apiUrl;
        let config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        $axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/enterprise' : ApiConfig.apiHost;
        return $axios({
            method: 'post',
            url: _url,
            data: params,
            config: config,
            timeout: time || 60000,
        })
    };
    // post 方法，做 stringify 处理
    $axios.$POST_QS = ({
        serviceName,
        apiUrl,
        params,
        time
    }) => {
        let _url = ApiConfig.service[serviceName] + apiUrl;
        $axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/enterprise' : ApiConfig.apiHost;
        return $axios({
            method: 'post',
            url: _url,
            data: qs.stringify(params),
            timeout: time || 60000,
        })
    };
    // post 方法，上传文件
    $axios.$POSTFile = ({
        serviceName,
        apiUrl,
        baseURL,
        fb,
        time
    }) => {
        let _url = ApiConfig.service[serviceName] + apiUrl;
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };
        $axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/enterprise' : ApiConfig.apiHost;
        return $axios({
            method: 'post',
            url: _url,
            data: fb,
            contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"
            processData: false,
            config: config,
            timeout: time || 60000,
        })
    }
}