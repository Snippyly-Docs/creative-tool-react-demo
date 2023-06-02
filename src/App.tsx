import { useEffect } from "react";
import { useVeltClient } from '@veltdev/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Topbar from './components/topbar/Topbar';
import Content from './components/content/Content';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {

  /**
   * Velt Code Example
   * Initializes the Velt SDK.
   */
  const { client } = useVeltClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('creative_tool_project_id');

  }, [client]);

  useEffect(() => {

    if (!client) return;

    client.getPresenceElement().getOnlineUsersOnCurrentDocument().subscribe((users: any) => {
      if (users === null) return;
      if (users.length === 0) {
        const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

        if (isDataReset === null) {
          fetch(
            "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ documentId: 'creative_tool_project_id' }),
            }
          );
          window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
        }
      }
    });

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Topbar />
      <Layout
        content={
          <div className={styles['content-pane']}>
            <Content />
          </div>
        }

        sidebar={<Sidebar />}
      />
    </div>
  );
};

export default App;