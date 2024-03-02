import styles from "./footer.module.css";

const FooterComponent = () => {
  return (
    <footer data-testid="footer" className={styles.footerContainer}>
      <p>Oxeanbits © 2024</p>
    </footer>
  );
};

export default FooterComponent;
