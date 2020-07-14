import axios from 'axios';


axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
// const prefix = "http://localhost:8000";
const prefix = "http://www.miracle1874.com:8000";
// http request 拦截器
axios.interceptors.request.use(
    config => {
        let token = window.localStorage.getItem("token");
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Authorization': token,
            'Content-Type':'application/json'
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.errCode === 2) {
//             router.push({
//                 path: '/',
//                 query: {redirect: router.currentRoute.fullPath} // 从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         // if (error.response) {
//         //     switch (error.response.status) {
//         //         case 401:
//         //             // 401 清除token信息并跳转到登录页面
//         //             store.commit(types.LOGOUT);
//         //             router.replace({
//         //                 path: 'login',
//         //                 query: {redirect: router.currentRoute.fullPath}
//         //             })
//         //     }
//         // }
//         return Promise.reject(error.response.data);
//     });

export default axios

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(prefix + url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(prefix + url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}


/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

export function axiosDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}