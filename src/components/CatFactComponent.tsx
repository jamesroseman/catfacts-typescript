import React from 'react';

import styles from './CatFactComponent.module.css';

export type CatFactComponentProps = {
  fact: string;
}

function CatFactComponent({
  fact,
}: CatFactComponentProps) {
  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <div className={styles.fact}>{fact}</div>
      </div>
    </div>
  );
}

export default CatFactComponent;