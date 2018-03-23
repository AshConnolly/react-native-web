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


// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.app}>
//                 <View style={styles.appHeader}>
//                     <Image style={{height: 80, resizeMode: 'contain'}} source={require('./logo.svg')} />
//                     <Text style={styles.appTitle}>Welcome to React️</Text>
//                 </View>
//                 <Text style={styles.appIntro}>To get started, edit src/App.js and save to reload.</Text>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//   app: {
//     textAlign: 'center',
//   },
//   appHeader: {
//   backgroundColor: '#222',
//   minHeight: '150px',
//   padding: '20px',
//   color: 'white',
//   },
//   appTitle: {
//     fontSize: 16,
//   },
//   appIntro: {
//     fontSize: 30,
//   }
// })


import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
export default class App extends Component {
    render() {
        return (
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    {/* <Image style={{height: 80, resizeMode: 'contain'}} source={require('./logo.svg')} /> */}
                    <Text style={styles.appTitle}>U</Text>
                </View>
                <View style={styles.contentWrap}>
                  <Text style={styles.textPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis magni, nulla nam voluptatem praesentium quos. Iure, dolorem non quasi quos reprehenderit, quia tenetur repudiandae odit modi facere recusandae reiciendis!</Text>

                  <Text style={styles.textPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis magni, nulla nam voluptatem praesentium quos. Iure, dolorem non quasi quos reprehenderit, quia tenetur repudiandae odit modi facere recusandae reiciendis!</Text>

                  <Text style={styles.textPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis magni, nulla nam voluptatem praesentium quos. Iure, dolorem non quasi quos reprehenderit, quia tenetur repudiandae odit modi facere recusandae reiciendis!</Text>

                  <View style={styles.appFoooter}>
                      <Text>Footer</Text>
                  </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  contentWrap: {
    padding: 40,
  },
  app: {
    position: 'relative',
  },
  appHeader: {
    backgroundColor: '#f2663b',
    padding: 20,
  },
  appFoooter: {
    backgroundColor: '#f2663b',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',

  },
  appTitle: {
    fontSize: 16,
  },
  appIntro: {
    fontSize: 30,
  },
  textPara: {
    marginTop: 20,
  }
})


