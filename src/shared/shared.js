import https from 'node:https';
import crypto from 'node:crypto';

/**
 * @typedef {{data:string,headers:import("node:http").IncomingHttpHeaders}} IResponse
 */

/**
 * @description 请求
 * @param {string} url 请求地址
 * @param {import("node:https").RequestOptions} options 请求配置
 * @returns {Promise<IResponse>} 响应
 */
export function request(url, options) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, res => {
            const chunks = [];

            res.on('data', chunk => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const data = Buffer.concat(chunks).toString();
                resolve({
                    data,
                    headers: res.headers
                });
            });
        });

        req.on('error', error => reject(error));

        req.end();
    });
}

/**
 * @description 获取请求参数
 * @param {string} url 请求地址
 * @return {Object<string, string>} 请求参数
 */
export function getUrlSearchParams(url) {
    const searchParams = new URL(url).searchParams;
    const params = {};
    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
}

/**
 * @description 获取请求地址
 * @param {string} protocol 协议
 * @param {string} host 主机
 * @param {string} path 路径
 * @return {string} 完整请求地址
 */
export function getRequestUrl(protocol, host, path) {
    return `${protocol}//${host}${path}`;
}

/**
 * @description 获取路由
 * @param {string} url
 * @returns {string} 路由
 */
export function getRouteUrl(url) {
    const urlInfo = new URL(url);
    const pathname = urlInfo.pathname;
    return pathname.slice(1);
}

/**
 * @description 获取随机字符串
 * @param {number} length
 * @returns {string} 随机字符串
 */
export function msToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomBytes = crypto.randomBytes(length);
    return Array.from(randomBytes, byte => characters[byte % characters.length]).join('');
}

/**
 * @description 解析url
 * @param {string} url
 * @returns {string} 解析后的url
 */
export function parseUrl(url) {
    const reg = /https:\/\/v.douyin.com\/\w+\//;
    const match = url.match(reg);
    if (match) {
        return match[0];
    }
}

