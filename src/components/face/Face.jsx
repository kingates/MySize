import React from 'react';
import styles from './Face.scss';


const Face = ({ mood, onSelected }) => {


  const { img, alt, type, name } = mood;

  return (
    <div className={styles.images}>
    <div className={styles.image} onClick={ () => onSelected(type) }>
      <img src={ img } alt={ alt } />
      <span> {name} </span>
    </div>
    </div>
  );
}

export default Face;


// className={styles.image}
