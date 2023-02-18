import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Topbar from './components/topbar/Topbar';
import Content from './components/content/Content';
import Layout from './components/layout/Layout';

import AlignLeftIcon from './icons/align-left.svg';
import AlignMiddleIcon from './icons/align-middle.svg';
import AlignRightIcon from './icons/align-right.svg';


const App = () => {

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

        sidebar={
          <div data-snippyly-comment-disabled className={styles['sidebar']}>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Size</p>
              <div className={styles['double-field']}>
                <div className={styles['field']}>
                  <div className={styles['field-container']}>
                    <div className={styles['label-container']}><span className={styles['label']}>X</span></div>
                    <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>120</span></div>
                  </div>
                  <div className={styles['field-container']}>
                    <div className={styles['label-container']}><span className={styles['label']}>X</span></div>
                    <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>120</span></div>
                  </div>
                </div>
                <div className={styles['field']}>
                  <div className={styles['field-container']}>
                    <div className={styles['label-container']}><span className={styles['label']}>W</span></div>
                    <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>120</span></div>
                  </div>
                  <div className={styles['field-container']}>
                    <div className={styles['label-container']}><span className={styles['label']}>H</span></div>
                    <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>120</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Align</p>
              <div className={styles['alignment']}>
                <img src={AlignLeftIcon} />
                <img src={AlignMiddleIcon} />
                <img src={AlignRightIcon} />
              </div>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Text</p>
              <div className={styles['field-container']}>
                <div className={styles['big-label-container']}><span className={styles['label']}>Poppins</span></div>
                <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>10</span></div>
              </div>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Layer</p>
              <div className={styles['field-container']}>
                <div className={styles['big-label-container']}><span className={styles['label']}>Pass through</span></div>
                <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>100%</span></div>
              </div>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Fill</p>
              <div className={styles['field-container']}>
                <div className={styles['big-label-container']}><div className={styles['color-block']} /><span className={styles['label']}>625DF5</span></div>
                <div className={styles['value-container']}><span contentEditable={true} className={styles['value']}>100%</span></div>
              </div>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Effects</p>
            </div>
            <div className={styles['section']}>
              <p className={styles['section-label']}>Export</p>
            </div>
          </div>

        }
      />
    </div>
  );
};

export default App;