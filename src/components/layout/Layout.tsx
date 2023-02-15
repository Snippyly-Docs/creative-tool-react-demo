import styles from './Layout.module.css';

const Layout = (props: any) => {


  return (
    <div className={styles['main-content']}>
      {props.content ? props.content : null}
      {props.sidebar ? props.sidebar : null}
    </div>
  );
}

export default Layout;