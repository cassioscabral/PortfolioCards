import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Card from './components/Card';

const data = [
  {
    id: 1,
    description: 'Expect to make $545.12 in dividends next quarter!1',
    emoji: '🤑',
  },
  {
    id: 2,
    description: 'Description 2',
    emoji: '🤑',
  },
  {
    id: 3,
    description: 'Description 3',
    emoji: '😱',
  },
  {
    id: 4,
    description: 'Winter is coming',
    emoji: '🥶',
  },
];

const App = () => {
  return (
    <SafeAreaView style={[styles.container, styles.background]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {data.map(({id, description, emoji}) => {
          return <Card key={id} description={description} emoji={emoji} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
  },
  container: {
    paddingHorizontal: 24,
    height: '100%',
  },
});

export default App;
