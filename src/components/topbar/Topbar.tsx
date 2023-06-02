import styles from './Topbar.module.css';

import PenIcon from '../../icons/pen.svg';
import CircleIcon from '../../icons/circle.svg';
import TextIcon from '../../icons/text.svg';

import { VeltPresence, VeltCommentTool, VeltRecorderTool, VeltHuddleTool } from '@veltdev/react';


const Topbar = () => {

  return (

    <div data-velt-comment-disabled className={styles['topbar']}>
      <div className={styles['toolbar']}>
        <div className={styles['avatar']}></div>
        <img src={PenIcon} />
        <img src={CircleIcon} />
        <img src={TextIcon} />
        {/**
         * Velt Code Example
         * Feature: Comments -- Step #2
         * Add the comment tool so users can initiate comments.
         */}
        <VeltCommentTool />
      </div>
      <div className={styles['presence-container']}>
        {/**
         * Velt Code Example
         * Feature: Recorder -- Step #2
         * Feature: Huddle -- Step #2
         * Feature: Presence -- Step #1
         */}
        <VeltRecorderTool type="all" />
        <VeltHuddleTool type="all" />
        <VeltPresence />
      </div>
    </div>
  );
}

export default Topbar;