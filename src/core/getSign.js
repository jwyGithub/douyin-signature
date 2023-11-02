import sign from '../sign/sign.cjs';

/**
 * @description 获取签名
 * @param {string} location
 * @returns {{xbogus:string}}} 签名
 */

export function getSign(location) {
    const query = location.includes('?') ? location.split('?')[1] : '';
    const xbogus = sign(
        query,
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
    );

    return {
        xbogus
    };
}

