import { useState, useEffect, useCallback } from "react";

import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import styles from "./feed.module.css";

import fechApi from "../../api/api.fetch";
import categories from "../../api/categories.json";

const FeedComponent = () => {
  const [products, setProducts] = useState([]);
  const [dataState, setDateState] = useState({
    sort: [{ field: "Category", dir: "asc" }],
    skip: 0,
    take: 10,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fechApi();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleDropDownChange = useCallback(
    (event) => {
      let newDataState = { ...dataState };
      if (event.target.value.Category !== null) {
        newDataState.filter = {
          logic: "and",
          filters: [
            {
              field: "category",
              operator: "eq",
              value: event.target.value.Category,
            },
          ],
        };
        newDataState.skip = 0;
      } else {
        newDataState.filter = [];
        newDataState.skip = 0;
      }

      setDateState(newDataState);
    },
    [dataState]
  );

  const handleGridDataStateChange = (event) => {
    setDateState(event.dataState);
  };

  return (
    <div className={styles.feedContainer}>
      <main className={styles.feedContent}>
        <DropDownList
          data={categories}
          dataItemKey="Category"
          textField="CategoryName"
          defaultItem={{ Category: null, CategoryName: "Todos os Produtos" }}
          onChange={handleDropDownChange}
          className={styles.dropDownList}
        />
        <Grid
          data={process(products, dataState)}
          pageable={true}
          sortable={true}
          {...dataState}
          onDataStateChange={handleGridDataStateChange}
          className={styles.gridContainer}
        >
          <GridColumn field="title" title="Nome do produto" />
          <GridColumn field="price" title="Preço" format="{0:c}" />
          <GridColumn field="rating.count" title="Quantidade" />
          <GridColumn field="rating.rate" title="Avaliação" />
        </Grid>
      </main>
    </div>
  );
};

export default FeedComponent;
