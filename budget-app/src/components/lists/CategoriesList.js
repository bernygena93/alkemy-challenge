import React from "react";
import styles from "../../views/form.module.css";

function CategoriesList({ categories }) {
  return (
    <div className={styles.listContainer}>
      <span className={styles.title}>Categorias creadas</span>
      <div className={styles.list}>
        {categories.map((category) => (
          <div key={category.id} className={styles.option}>
            <span>{category.name}</span>
            <button type="button" className={styles.deleteButton}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
