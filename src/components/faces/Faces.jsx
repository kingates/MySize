import React from 'react';
import { MOODS } from "./consts";
import Face from "../face/Face";
import styles from './Faces.scss';

const Faces = ({ onMoodSelected }) => (
  <div className={styles.faces}>
      <div className={styles.gallery}>
        <div className={styles.question}>
          <h2>How are you today?</h2>
        </div>
        <div className={styles.content}>
          {
            Object.keys(MOODS).map(moodName => (
              <Face
                onSelected={ onMoodSelected }
                key={ `face_for_mood_${MOODS[moodName].type}` }
                mood={ MOODS[moodName] }
              />
            ))
          }
        </div>
    </div>
    </div>
);

export default Faces;
