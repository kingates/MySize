import React from 'react';

const Faces = () => (
  <div className="faces">

      <div className="gallery">
        <div className="question">
          <h2>What's your mood today?</h2>
        </div>
        <div className="content">
            <div className="face">
              <a href="assets/excited.jpg"><img src="assets/excited.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/loved.jpg"><img src="assets/loved.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/happy.jpg"><img src="assets/happy.jpg" alt=""/></a>
            </div>
            <div className="face">
              <a href="assets/normal.jpg"><img src="assets/normal.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/tired.jpg"><img src="assets/tired.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/sad.jpg"><img src="assets/sad.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/sick.jpg"><img src="assets/sick.jpg" alt="" /></a>
            </div>
            <div className="face">
              <a href="assets/angry.jpg"><img src="assets/angry.jpg" alt="" /></a>
            </div>
         </div>
    </div>
    </div>
);

export default Faces;
