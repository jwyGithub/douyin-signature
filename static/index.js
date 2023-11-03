const getSignatureMap = {
    GET_REAL_VIDEO_URL: {
        url: '/getRealVideoUrl',
        data: url => ({ url })
    },
    GET_DOWNLOAD_COUNT: {
        url: '/getDownloadCount'
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
    try {
        const { video_title, video_url } = await httpPost(
            getSignatureMap.GET_REAL_VIDEO_URL.url,
            getSignatureMap.GET_REAL_VIDEO_URL.data(url)
        );

        const titleEle = document.querySelector('.app-main-title');
        const videoEle = document.querySelector('.app-main-video > video');
        if (titleEle) titleEle.innerText = video_title;
        if (videoEle) {
            videoEle.src = video_url;
            videoEle.setAttribute('data-video', video_title);
            videoEle.controls = true;
        }
        getDownloadCount();
    } catch (error) {
        console.error(error);
        alert('获取视频地址失败');
    } finally {
        const parseElement = document.querySelector('.parseButton');
        const downloadElement = document.querySelector('.app-main-download');
        parseElement.disabled = false;
        downloadElement.disabled = false;
    }
}

function getDownloadCount() {
    fetch(getSignatureMap.GET_DOWNLOAD_COUNT.url)
        .then(res => res.json())
        .then(({ count }) => {
            const downloadCountEle = document.querySelector('.download-count > span');
            if (downloadCountEle) downloadCountEle.innerText = count;
        });
}

window.addEventListener('DOMContentLoaded', () => {
    getDownloadCount();
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
        if (!videoUrl) return;
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

