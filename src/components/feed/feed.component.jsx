import { useState, useEffect } from "react";

import styles from "./feed.module.css";

import fechApi from "../../api/api.fetch";
import categories from "../../api/categories.json";

const FeedComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fechApi();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.feedContainer}>
      <main>Page Feed</main>
    </div>
  );
};

export default FeedComponent;
