function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

function isEmptyArray(arr) {
    return arr.length === 0;
}

function setStyle(element, style) {
    for (let key in style) {
        element.style[key] = style[key];
    }
    return element;
}

function setAttributes(element, attrs) {
    for (let key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
    return element;
}

function setClassName(element, className) {
    if (Array.isArray(className)) {
        element.classList.add(...className);
    } else {
        element.classList.add(className);
    }
    return element;
}

function hiddenElement(element) {
    element.style.display = 'none';
    return element;
}

function createElement(tag, options = {}) {
    const element = document.createElement(tag || 'div');
    const style = options.style || {};
    const attrs = options.attrs || {};
    const className = options.className || [];
    const innerText = options.innerText || '';

    setStyle(element, style);
    setAttributes(element, attrs);
    setClassName(element, className);
    element.innerText = innerText;

    return element;
}

