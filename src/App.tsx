import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Topbar from './components/topbar/Topbar';
import Content from './components/content/Content';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {

  useEffect(() => {

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
    
  }, []);

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('creative_tool_project_id');

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