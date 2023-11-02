const getSignatureMap = {
    GET_LOCATION: {
        url: '/getLocation',
        data: url => ({ url })
    },
    GET_ITEM_IDS: {
        url: '/getItemIds',
        data: location => ({ location })
    },
    GET_VIDEO_INFO_URL: {
        url: '/getVideoInfoUrl',
        data: (location, item_ids) => ({ location, item_ids })
    },
    GET_VIDEO_URL: {
        url: '/getVideoUrl',
        data: video_url => ({ video_url })
    }
};

/**
 * @description 请求函数 post
 * @param {string} url 请求地址
 * @param {*} data
 * @returns {Promise<any>}
 */
async function httpPost(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    });
    return res.json();
}

/**
 * @description 请求函数 get
 * @param {string} url 请求地址
 * @returns {Promise<any>}
 */
async function httpGet(url) {
    const res = await fetch(url);
    return res.blob();
}

/**
 * @description 获取无水印视频地址
 * @param {string} url 视频地址
 */
async function getSignature(url) {
    const { location } = await httpPost(getSignatureMap.GET_LOCATION.url, getSignatureMap.GET_LOCATION.data(url));
    const { item_ids } = await httpPost(getSignatureMap.GET_ITEM_IDS.url, getSignatureMap.GET_ITEM_IDS.data(location));
    const { video_info_url } = await httpPost(
        getSignatureMap.GET_VIDEO_INFO_URL.url,
        getSignatureMap.GET_VIDEO_INFO_URL.data(location, item_ids)
    );
    const { video_url, video_title } = await httpPost(
        getSignatureMap.GET_VIDEO_URL.url,
        getSignatureMap.GET_VIDEO_URL.data(video_info_url)
    );
}

