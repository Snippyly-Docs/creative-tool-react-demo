import styles from './Sidebar.module.css';

import AlignLeftIcon from '../../icons/align-left.svg';
import AlignMiddleIcon from '../../icons/align-middle.svg';
import AlignRightIcon from '../../icons/align-right.svg';


const Sidebar = () => {

  return (
    <div data-velt-comment-disabled className={styles['sidebar']}>
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
  );
}

export default Sidebar;