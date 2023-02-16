import styles from './Content.module.css';

import CardImage from '../../icons/card.svg';
// import Draggable from "react-draggable";

const Content = () => {

  return (
    // <Draggable>
      <div className={styles['content']}>
        <div className={styles['navbar']}>
          <div className={styles['logo']}></div>
          <a contentEditable={true}>Banking</a>
          <a contentEditable={true}>Cards</a>
          <a contentEditable={true}>Investments</a>
        </div>
        <div className={styles['splash']}>
          <div className={styles['left-side']}>
            <h1 contentEditable={true}>One card for everything</h1>
            <p contentEditable={true}>3% cashback on all purchases</p>
            <button>Get started</button>
          </div>
          <div className={styles['right-side']}>
            <img src={CardImage} />
          </div>
        </div>
      </div>
    // </Draggable>
  );
}

export default Content;