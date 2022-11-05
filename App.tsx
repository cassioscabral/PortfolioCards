import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Card from './components/Card';

const data = [
  {
    id: 1,
    insights: [
      'Expect to make $545.12 in dividends next quarter!',
      'So much profit, wow!',
    ],
    emoji: '🤑',
  },
  {
    id: 2,
    insights: [
      'Your stock price has been increasing for the past 6 months!',
      'You are on a good track! Keep it up!',
    ],
    emoji: '📈',
  },
  {
    id: 3,
    insights: [
      'You have been paying dividends for the past 6 months!',
      'Checkout our community to learn more!',
    ],
    emoji: '💸',
  },

  {
    id: 4,
    insights: [
      'BTC is down!',
      'Is time to invest? Checkout our community to learn more!',
    ],
    emoji: '📉',
  },
];

const App = () => {
  return (
    <SafeAreaView style={[styles.container, styles.background]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* TODO create a card stack component */}
        {data.map(({id, insights, emoji}) => {
          return <Card key={id} insights={insights} emoji={emoji} />;
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
