import styles from './Topbar.module.css';

import PenIcon from '../../icons/pen.svg';
import CircleIcon from '../../icons/circle.svg';
import TextIcon from '../../icons/text.svg';

import { SnippylyPresence, SnippylyCommentTool, SnippylyRecorderTool, SnippylyHuddleTool, SnippylyTagTool, SnippylySidebarButton } from '@snippyly/react';


const Topbar = () => {

  return (

    <div data-snippyly-comment-disabled className={styles['topbar']}>
      <div className={styles['toolbar']}>
        <div className={styles['avatar']}></div>
        <img src={PenIcon} />
        <img src={CircleIcon} />
        <img src={TextIcon} />
        {/**
         * Snippyly Code Example
         * Feature: Comments -- Step #2
         * Add the comment tool so users can initiate comments.
         */}
        <SnippylyCommentTool />
      </div>
      <div className={styles['presence-container']}>
        {/**
         * Snippyly Code Example
         * Feature: Recorder -- Step #2
         * Feature: Huddle -- Step #2
         * Feature: Presence -- Step #1
         */}
        <SnippylyTagTool />
        <SnippylySidebarButton />
        <SnippylyRecorderTool type="all" />
        <SnippylyHuddleTool type="all" />
        <SnippylyPresence />
      </div>
    </div>
  );
}

export default Topbar;