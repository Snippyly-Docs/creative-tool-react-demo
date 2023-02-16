import styles from './Topbar.module.css';

import PenIcon from '../../icons/pen.svg';
import CircleIcon from '../../icons/circle.svg';
import TextIcon from '../../icons/text.svg';
import CommentIcon from '../../icons/comment.svg';

import { SnippylyPresence } from '@snippyly/react';


const Topbar = () => {

  return (

    <div className={styles['topbar']}>
      <div className={styles['toolbar']}>
        <div className={styles['avatar']}></div>
        <img src={PenIcon} />
        <img src={CircleIcon} />
        <img src={TextIcon} />
        <img src={CommentIcon} />
      </div>
      <div className={styles['presence-container']}>
        <SnippylyPresence />
      </div>
    </div>
  );
}

export default Topbar;