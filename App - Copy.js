import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';
import CounterExample from './components/CounterExample';
import ViewExample from './components/ViewExample';
import Flexbox from './components/Flexbox';
import TextImage from './components/TextImage';
import ScrollviewExample from './components/ScrollviewExample';
import FlatListExample from './components/FlatListExample';
import SectionListExample from './components/SectionListExample';

import DataCompExample from './data_component/DataCompExample';
import NetworkingExample from './networking/NetworkingExample';
import IndexReduxExample from './networking/IndexReduxExample';

import AnimatedExample from './animation/AnimatedExample';
import RNAnimatedExample from './animation/RNAnimatedExample';
import GesturesExample from './animation/GesturesExample';

import AsyncStorageExample from './components/AsyncStorageExample';

// http://www.reactnativeexpress.com/
export default class App extends React.Component {
  render() {
    // <AssetExample />   <CounterExample /> <ViewExample />  <Flexbox /> <TextImage />  <ScrollviewExample />  <FlatListExample />   <SectionListExample /> <DataCompExample />  <NetworkingExample />  <IndexReduxExample /> <AnimatedExample /> <RNAnimatedExample /> <GesturesExample /> <AsyncStorageExample />

    return <CounterExample />;
  }
}
