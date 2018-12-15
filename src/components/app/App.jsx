import React, { Component } from 'react';
import Calendar from '../calendar/Calendar';
import Banner from '../banner/Banner';
import Faces from '../faces/Faces';
import styles from './App.scss';


export default class MyApp extends Component {
  state = {
    date: new Date(),
    moodHistory: {}
  }

  onDateChange = date => this.setState({ date })

  render() {
    return (
      <div className="page">
        <div className="main">
          <Banner/>
          <Faces onMoodSelected={ (mood) => alert("selected mood " + mood ) } />
          <Calendar date={ this.state.date } moodHistory={ this.state.moodHistory } onDateChange={ this.onDateChange } />
        </div>
      </div>
    );
  }
}
