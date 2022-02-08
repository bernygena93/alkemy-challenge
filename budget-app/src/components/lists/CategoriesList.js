import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import styles from "../../views/form.module.css";
import { destroy } from "../../service/categoriesService";

function CategoriesList({ setValue, categories, setCategories }) {
  const [selectedCategory, setSelectedCategory] = useState(
    "No hay categoria seleccionada",
  );

  const selectCategory = (category) => {
    setValue("categoryId", category.id);
    setSelectedCategory(category.name);
  };

  const deleteCategory = (category) => {
    destroy(category.id);
    setCategories(categories.filter((item) => item.id !== category.id));
    if (selectedCategory === category.name) {
      setSelectedCategory("No hay categoria seleccionada");
    }
  };

  return (
    <div className={styles.listContainer}>
      <span className={styles.title}>Categorias creadas</span>
      <div className={styles.list}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.option}
            aria-hidden
            onClick={() => selectCategory(category)}>
            <span>{category.name}</span>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => deleteCategory(category)}>
              <Delete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
