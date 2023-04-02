// export const BASE_URL = 'http://127.0.0.1:8000';
export const BASE_URL = 'http://api.mts.augmeneco.ru/';
export const BASE_URL_API = `${BASE_URL}/api`;
export const HEADERS = {
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
}

export function isLogin() {
    return sessionStorage.getItem('access') !== null;
}

// Получение заголовков для запросов
export function getHeaders() {
    if (sessionStorage.getItem('access'))
        return {
            ...HEADERS,
            'Authorization': `Bearer ${sessionStorage.getItem('access')}`
        }
    return HEADERS
}

// Сохраняет переданные данные в сессию (sessionStorage)
export function save(key, value) {
    sessionStorage.setItem(key, value);
}

export function getImage(src) {
    if (src)
        return `${BASE_URL}${src}`
    return null
}

export function getParams(params) {
    if (params === undefined || params === null || params.length === 0)
        return ''

    let paramsStr = []
    for (let key in params)
        if (params[key] !== undefined && params[key] !== null)
            paramsStr.push(`${key}=${params[key]}`)
    if (paramsStr.length)
        return `?${paramsStr.join('&')}`
    return paramsStr
}

export function getURL(url, params) {
    return url + getParams(params)
}

export async function request(method, url, body, headers) {
    const data = {
        method: method,
        // credentials: 'include',
        // mode: 'cors',
        headers: getHeaders(),
        body: body
    }
    if (headers !== undefined) {
        data.headers = headers
    }
    const res = await fetch(url, data)
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject(res);
}