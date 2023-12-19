import styles from './footer.module.css';

const Footer = ({footer}) => {
  return (
    <div className={styles.footer}>
      <h1>{footer}</h1>
      <ul className={styles.list}>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">{footer}</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  );
};

export default Footer;
