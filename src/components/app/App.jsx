import React from "react";
import styles from "./App.scss";
import imageSrc from "../../assets/1.png";




export default class App extends React.Component {
  render() {
    return <div className={ styles.app  }>To jest app TEST TEST TEST
    <img src={ imageSrc } />
    </div>
  }
}
