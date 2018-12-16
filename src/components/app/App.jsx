import React, { Component } from 'react';
import Calendar from '../calendar/Calendar';
import Banner from '../banner/Banner';
import Faces from '../faces/Faces';
import Footer from '../footer/Footer';
import styles from './App.scss';
import Input from '../input/Input';


export default class MyApp extends Component {
  state = {
    date: new Date(),
    moodHistory: {}
  }

  onDateChange = date => this.setState({ date })

  addMoodHistoryEntry = moodType => {
    this.setState(prevState => ({
      moodHistory: { ...prevState.moodHistory, [prevState.date.toISOString()]: { type: moodType }}
    }));
  }

  render() {
    return (
      <div className="page">
          <Banner/>
          <Faces onMoodSelected={ this.addMoodHistoryEntry } />
          <pre>
            { JSON.stringify(this.state, null, 2)}
          </pre>
          <div className={styles.thirdContainer}>
          <Calendar date={ this.state.date } moodHistory={ this.state.moodHistory } onDateChange={ this.onDateChange } />
          <Input />
          </div>
          <Footer />
        </div>
    );
  }
}
