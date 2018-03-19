// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
export default class App extends Component {
    render() {
        return (
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    <Image style={{height: 80, resizeMode: 'contain'}} source={require('./logo.svg')} />
                    <Text style={styles.appTitle}>Welcome to React️</Text>
                </View>
                <Text style={styles.appIntro}>To get started, edit src/App.js and save to reload.</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appHeader: {
  backgroundColor: '#222',
  minHeight: '150px',
  padding: '20px',
  color: 'white',
  },
  appTitle: {
    fontSize: 16,
  },
  appIntro: {
    fontSize: 30,
  }
})