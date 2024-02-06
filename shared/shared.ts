// @ts-ignore
import sign from './sign.cjs';

/**
 * @description 解析url参数
 * @param params 参数
 * @returns 返回拼接好的参数
 */
export function parseQuery(params: Record<string, any>) {
    return Object.keys(params)
        .reduce((prev, cur) => {
            return `${prev}&${cur}=${params[cur]}`;
        }, '')
        .slice(1);
}

/**
 * @description 解析短链接
 * @param short_url 短链接
 * @returns 返回解析后的短链接
 */
export function parseShortUrl(short_url: string) {
    const reg = /https:\/\/v.douyin.com\/\w+\//;
    const match = short_url.match(reg);
    if (match) {
        return match[0];
    }
}

/**
 * @description 成功返回
 * @param data 返回数据
 * @returns 返回成功数据
 */
export function toSuccessResponse(data: any) {
    return {
        code: 200,
        message: 'success',
        data: data
    };
}

/**
 * @description 失败返回
 * @param data 返回数据
 * @returns 返回失败数据
 */
export function toFailedResponse(data: any) {
    return {
        code: 400,
        message: 'error',
        data: data
    };
}

/**
 * @description 服务端错误返回
 * @param data 返回数据
 * @returns 返回服务端错误数据
 */
export function toServerErrorResponse(data: any) {
    return {
        code: 500,
        message: 'server error',
        error: data
    };
}

export function getSign(location: string) {
    const query = location.includes('?') ? location.split('?')[1] : '';
    const xbogus = sign(
        query,
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
    );

    return {
        xbogus
    };
}

