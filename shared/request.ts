import { parseQuery } from './shared.js';
import { Logger, logger } from './logger.js';

interface RequestInit {
    body?: Record<string, any>;
    headers?: Record<string, any>;
}

class HttpRequest {
    /**
     * @description get请求
     * @param url  请求地址
     * @param params 请求参数
     * @returns  {Promise<R>}
     */
    @Logger('get')
    async $get<R = any>(url: string, options: RequestInit = {}): Promise<R> {
        try {
            const query = parseQuery(options.body ?? {});
            const request_url = `${url}?${query}`;
            logger.info(`request_url: ${request_url}`);
            const response = await fetch(request_url, {
                method: 'GET',
                headers: options.headers,
                redirect: 'manual'
            });
            return response.json() as Promise<R>;
        } catch (error: any) {
            logger.error(error.message);
            return Promise.reject(error.message);
        }
    }

    async $getHeaders(url: string, options: RequestInit = {}) {
        try {
            const query = parseQuery(options.body ?? {});
            const request_url = `${url}?${query}`;
            logger.info(`request_url: ${request_url}`);
            const response = await fetch(request_url, {
                method: 'GET',
                headers: options.headers,
                redirect: 'manual'
            });
            return response.headers;
        } catch (error: any) {
            logger.error(error.message);
            return Promise.reject(error.message);
        }
    }
    /**
     * @description post请求
     * @param url  请求地址
     * @param params 请求参数
     * @returns {Promise<R>}
     */
    @Logger('post')
    async $post<R = any>(url: string, params: Record<string, any> = {}, headers = {}): Promise<R> {
        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });

        try {
            // 尝试格式为json的返回
            const json = await result.json();
            return json as Promise<R>;
        } catch (error) {
            // 如果失败，尝试返回text
            return result.text() as Promise<R>;
        }
    }
}

export const request = new HttpRequest();

export const $get = request.$get;
export const $getHeaders = request.$getHeaders;
export const $post = request.$post;

