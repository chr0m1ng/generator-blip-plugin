import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { IframeMessageProxy } from 'iframe-message-proxy';
import './index.scss';
import * as service_worker from './service-worker';
import { setHeight } from 'api/common-service';
import { ResizeObserver } from 'resize-observer';

IframeMessageProxy.listen();

const ROOT_ID = 'root';

const ROOT_DIV = document.getElementById(ROOT_ID);

const DOCUMENT_OBSERVER = new ResizeObserver(() => {
    setHeight(ROOT_DIV.scrollHeight);
});

DOCUMENT_OBSERVER.observe(ROOT_DIV);

ReactDOM.render(<App />, document.getElementById(ROOT_ID));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
service_worker.unregister();
