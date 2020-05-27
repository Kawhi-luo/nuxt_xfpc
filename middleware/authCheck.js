import cookie from 'js-cookie'
export default function ({ store, redirect, req }) {
    if (process.server) {
        console.log('服务端')
        let service_cookie = {};
        let tokenParse = req.headers.cookie.split(';');
        for (const i of tokenParse) {
            let parts = i.split('=');
            service_cookie[parts[0].trim()] = (parts[1] || '').trim();
        }
        if (!service_cookie.token) {
            redirect('/login')
        }
    } else {
        console.log('客户端')
        if (!cookie.get('token')) {
            redirect('/login')
        }

    }
}