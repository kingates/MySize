import React from 'react';
import styles from './Input.scss';
import icon from "../../assets/edit.png"


export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Dear Diary...'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }


  render() {
    return(
      <div className={styles.container}>
        <div className={styles.titleDiary}>
                  <img className={styles.icon} src={icon} alt={"pen"}/>
          <h1 className={styles.intro}>My Thoughts / Notes / Smiles</h1>

          </div>
        <div className={styles.box}>
          <input className={styles.inputMedium} type='text' id='input' value={this.state.value} onChange={this.handleChange} />
          <input className={styles.button} type="submit" value="Add to Calendar" />
        </div>
      </div>
    );
  }
}


// <p className={styles.inputValue}><span className="highlight">{this.state.value}</span></p>
