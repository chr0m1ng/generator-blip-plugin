import React, { useEffect, useState } from 'react';
import 'blip-toolkit/dist/blip-toolkit.css';
import {
    getApplication,
    getContacts,
    getThreads
} from '../../api/application-service';
import { showToast, withLoading } from '../../api/common-service';
import { PageHeader } from 'components/PageHeader';
import { BlipTable } from 'components/BlipTable';
import { CommonProvider } from 'contexts/CommonContext';
import { PageTemplate } from 'components/PageTemplate';
import { BlipTabs } from 'blip-toolkit';

const TABLE_CONTACTS_MODEL = [
    { label: 'Name', key: 'name' },
    { label: 'Group', key: 'group' },
    { label: 'Identity', key: 'identity' },
    { label: 'Source', key: 'source' }
];

const TABLE_THREADS_MODEL = [
    { label: 'Identity', key: 'identity' },
    { label: 'Last Message', key: 'lastMessage' },
    { label: 'Unread Messages', key: 'unreadMessages' }
];

const AppComponent = () => {
    const [application, setApplication] = useState({});
    const [contacts, setContacts] = useState([]);
    const [threads, setThreads] = useState([]);

    const fetchApi = async () => {
        setContacts(await getContacts());
        setApplication(await getApplication());
        setThreads(await getThreads());

        showToast({
            type: 'success',
            message: 'Success loaded'
        });
    };

    useEffect(() => {
        withLoading(async () => {
            new BlipTabs('tab-nav');
            await fetchApi();
        });
    }, []);

    const title = 'Sample Plugin - ' + application.shortName;

    return (
        <CommonProvider>
            <div id="main" className="App">
                <PageHeader title={title} />
                <PageTemplate title={title}>
                    <div id="tab-nav" className="bp-tabs-container">
                        <ul className="bp-tab-nav">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#" data-ref="contacts">
                                    Contacts
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#" data-ref="threads">
                                    Threads
                                </a>
                            </li>
                        </ul>
                        <div
                            className="bp-tab-content fl w-100"
                            data-ref="contacts"
                        >
                            <BlipTable
                                id_key="identity"
                                model={TABLE_CONTACTS_MODEL}
                                data={contacts}
                                can_select={false}
                                body_height="400px"
                                selected_items={[]}
                            />
                        </div>
                        <div
                            className="bp-tab-content fl w-100"
                            data-ref="threads"
                        >
                            <BlipTable
                                id_key="identity"
                                model={TABLE_THREADS_MODEL}
                                data={threads.map((t) => ({
                                    ...t,
                                    lastMessage: t.lastMessage.content
                                }))}
                                can_select={false}
                                body_height="400px"
                                selected_items={[]}
                            />
                        </div>
                    </div>
                </PageTemplate>
            </div>
        </CommonProvider>
    );
};

export { AppComponent };
