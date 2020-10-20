import { IframeMessageProxy } from 'iframe-message-proxy';

const startLoading = () =>
    IframeMessageProxy.sendMessage({ action: 'startLoading' });

const stopLoading = () =>
    IframeMessageProxy.sendMessage({ action: 'stopLoading' });

const setHeight = (height) =>
    IframeMessageProxy.sendMessage({ action: 'heightChange', content: height });

const showToast = (toast) =>
    IframeMessageProxy.sendMessage({ action: 'toast', content: toast });

const withLoading = async (func) => {
    startLoading();

    try {
        return await func();
    } finally {
        stopLoading();
    }
};

export { startLoading, stopLoading, setHeight, showToast, withLoading };
