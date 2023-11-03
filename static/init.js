const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
function setLinkCss() {
    const mobileCssPath = '/static/index.mobile.css';
    const webCssPath = '/static/index.css';

    const linkElement = createElement('link', {
        attrs: {
            rel: 'stylesheet',
            href: isMobile ? mobileCssPath : webCssPath
        }
    });
    document.head.appendChild(linkElement);
}

function setMobilePreview() {
    const appMain = createElement('main', {
        className: 'app-main'
    });
    const titleElement = createElement('p', {
        className: 'app-main-title',
        innerText: ''
    });
    const videoContainer = createElement('div', {
        className: 'app-main-video'
    });
    const videoElement = createElement('video', {
        attrs: {
            controls: true,
            src: ''
        }
    });
    videoContainer.appendChild(videoElement);
    const downloadElement = createElement('button', {
        attrs: {
            type: 'button'
        },
        className: 'app-main-download',
        innerText: '下载'
    });
    appMain.appendChild(titleElement);
    appMain.appendChild(videoContainer);
    appMain.appendChild(downloadElement);
    document.querySelector('#app').appendChild(appMain);
}

function setWebPreview() {
    const appMain = createElement('main', {
        className: 'app-main'
    });
    const ulElement = createElement('ul');
    const liElement = createElement('li');
    const spanElement = createElement('span', {
        innerText: '',
        className: 'app-main-title'
    });
    const pElement = createElement('p', {
        className: 'app-main-video'
    });
    const videoElement = createElement('video', {
        attrs: {
            controls: true
        }
    });
    const downloadElement = createElement('button', {
        attrs: {
            type: 'button'
        },
        className: 'app-main-download',
        innerText: '下载'
    });
    pElement.appendChild(videoElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(pElement);
    liElement.appendChild(downloadElement);
    ulElement.appendChild(liElement);
    appMain.appendChild(ulElement);
    document.querySelector('#app').appendChild(appMain);
}

function init() {
    setLinkCss();
    isMobile ? setMobilePreview() : setWebPreview();
}

init();

