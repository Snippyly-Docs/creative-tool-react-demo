import styles from './Topbar.module.css';

import PenIcon from '../../icons/pen.svg';
import CircleIcon from '../../icons/circle.svg';
import TextIcon from '../../icons/text.svg';
import CommentIcon from '../../icons/comment.svg';

import { SnippylyPresence, SnippylyCommentTool, SnippylyRecorderTool, SnippylyHuddleTool } from '@snippyly/react';


const Topbar = () => {

  return (

    <div data-snippyly-comment-disabled className={styles['topbar']}>
      <div className={styles['toolbar']}>
        <div className={styles['avatar']}></div>
        <img src={PenIcon} />
        <img src={CircleIcon} />
        <img src={TextIcon} />
        <SnippylyCommentTool />
      </div>
      <div className={styles['presence-container']}>
        <SnippylyRecorderTool type="all" />
        <SnippylyHuddleTool type="all" />
        <SnippylyPresence />
      </div>
    </div>
  );
}

export default Topbar;