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
    const { video_title, video_url } = await httpPost(
        getSignatureMap.GET_VIDEO_URL.url,
        getSignatureMap.GET_VIDEO_URL.data(video_info_url)
    );

    const titleEle = document.querySelector('.app-main-title');
    const videoEle = document.querySelector('.app-main-video > video');
    if (titleEle) titleEle.innerText = video_title;
    if (videoEle) {
        videoEle.src = video_url;
        videoEle.setAttribute('data-video', video_title);
        videoEle.controls = true;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const parseElement = document.querySelector('.parseButton');
    const parseUrl = document.querySelector('.parseUrlInput');
    const downloadElement = document.querySelector('.app-main-download');
    const loadingElement = document.querySelector('.loading');

    parseElement.addEventListener('click', async () => {
        const url = parseUrl.value;
        if (!url) {
            alert('请输入视频url');
            return;
        }
        loadingElement.style.display = 'flex';
        await getSignature(url);
        loadingElement.style.display = 'none';
    });
    downloadElement.addEventListener('click', () => {
        const videoEle = document.querySelector('.app-main-video > video');
        if (!videoEle) return;
        const videoUrl = videoEle.src;
        const videoTitle = videoEle.getAttribute('data-video');
        loadingElement.style.display = 'flex';
        parseElement.disabled = true;
        downloadElement.disabled = true;

        httpGet(videoUrl)
            .then(res => {
                const url = window.URL.createObjectURL(res);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${videoTitle}.mp4`;
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .finally(() => {
                parseElement.disabled = false;
                downloadElement.disabled = false;
                loadingElement.style.display = 'none';
            });
    });
});

