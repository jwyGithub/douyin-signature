/* eslint-disable no-console */
import http from 'node:http';
import path from 'node:path';
import { getRequestUrl, getRouteUrl, request } from './src/shared/shared.js';
import { getSign } from './src/core/getSign.js';

/**
 * @typedef {import("node:http").ServerResponse} ServerResponse
 * @typedef {import("node:http").IncomingMessage} IncomingMessage
 * @typedef {(url: string, req: import("node:http").IncomingMessage, res:import("node:http").ServerResponse ) => void} RouteExcuter
 * @typedef {{[key:string]: RouteExcuter }} Route
 */
const BASE_URL = 'https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/';

/** @type {Route} */
const routes = {
    // 获取location
    getLocation: (url, req, res) => {
        const { url: locationUrl } = req.body;

        request(locationUrl, {
            method: 'GET'
        })
            .then(({ headers }) => {
                res.statusCode = 200;
                res.end(
                    JSON.stringify({
                        location: headers.location
                    })
                );
            })
            .catch(error => {
                console.error(error);
                res.statusCode = 400;
                res.end(error);
            });
    },
    // 获取item_ids
    getItemIds: (url, req, res) => {
        try {
            const location = req.body.location;

            const { base: item_ids } = path.parse(location);

            if (item_ids) {
                res.statusCode = 200;
                res.end(
                    JSON.stringify({
                        item_ids
                    })
                );
            }
        } catch (error) {
            console.error(error);
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    item_ids: ''
                })
            );
        }
    },
    // 获取video_info_url
    getVideoInfoUrl: (url, req, res) => {
        try {
            const { item_ids, location } = req.body;
            const { xbogus } = getSign(location);
            const query = {
                reflow_source: 'reflow_page',
                item_ids: item_ids,
                a_bogus: xbogus
            };
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    video_info_url: `${BASE_URL}?${new URLSearchParams(query).toString()}`
                })
            );
        } catch (error) {
            console.error(error);
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    video_info_url: ''
                })
            );
        }
    },
    // 获取video_info
    getVideoInfo: (url, req, res) => {
        const { video_url } = req.body;
        request(video_url, {
            method: 'GET'
        })
            .then(({ data }) => {
                res.statusCode = 200;
                res.end(data);
            })
            .catch(error => {
                console.error(error);
                res.statusCode = 400;
                res.end(error);
            });
    },
    // 获取video_url
    getVideoUrl: (url, req, res) => {
        const { video_url } = req.body;
        request(video_url, {
            method: 'GET'
        })
            .then(({ data }) => {
                const video_info = JSON.parse(data);
                const { video } = video_info.item_list[0];
                const { play_addr } = video;
                const { url_list } = play_addr;
                const [videoUrl] = url_list;
                const video_title = video_info.item_list[0].desc;
                res.statusCode = 200;
                res.end(
                    JSON.stringify({
                        video_url: videoUrl.replace('playwm', 'play'),
                        video_title
                    })
                );
            })
            .catch(error => {
                console.error(error);
                res.statusCode = 400;
                res.end(error);
            });
    }
};

/**
 * @description 路由
 * @param {string} url
 */
function router(url, req, res) {
    const route = getRouteUrl(url);
    const bodyData = [];
    req.on('data', chunk => {
        bodyData.push(chunk);
    });
    req.on('end', () => {
        req.body = req.method === 'GET' ? {} : JSON.parse(bodyData.toString() || '');
        routes[route](url, req, res);
    });
    req.on('error', error => {
        console.error(error);
    });
}

function createServer() {
    const server = http.createServer((req, res) => {
        const url = getRequestUrl('http:', req.headers.host, req.url);
        router(url, req, res);
    });

    server.listen(80);
}

createServer();

