import styles from "./header.module.css";

const HeaderComponent = () => {
  return (
    <header data-testid="header" className={styles.headerContent}>
      <img src="./logo.svg" alt="logo" />
    </header>
  );
};

export default HeaderComponent;
