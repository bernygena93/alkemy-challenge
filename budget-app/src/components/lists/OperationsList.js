import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./list.module.css";

function OperationsList({ title, operations }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(operations);
  }, [operations]);

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.headerContainer}>
        <div className={styles.header}>Concepto</div>
        <div className={styles.header}>Monto</div>
        <div className={styles.header}>Categoria</div>
        <div className={styles.header}>Fecha</div>
        <div className={styles.header} />
      </div>
      <div className={styles.containerBody}>
        {list.length === 0 ? (
          <div className={styles.message}>No hay movimientos disponibles</div>
        ) : (
          list.map((operation) => (
            <Fragment key={operation.id}>
              <div className={styles.body}>{operation.concept}</div>
              <div className={styles.body}>{operation.amount}</div>
              <div className={styles.body}>{operation.category.name}</div>
              <div className={styles.body}>{operation.date}</div>
              <div className={styles.body}>
                <Link to={`/operation/${operation.id}`}>
                  <button type="button" className={styles.buttonUpdate}>
                    Editar
                  </button>
                </Link>
                <button type="button" className={styles.buttonDelete}>
                  Eliminar
                </button>
              </div>
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}

export default OperationsList;
