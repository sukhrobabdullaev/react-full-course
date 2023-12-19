import styles from "./main.module.css";

const Main = ({ children, royxat }) => {
  return (
    <div className={styles.main}>
      <h1>Maine</h1>
      {children}
      <ul>
        {royxat.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Main;
