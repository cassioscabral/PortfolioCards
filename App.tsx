import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import CardStack from './components/CardStack';

export interface PortfolioInformation {
  id: number;
  insights: string[];
  emoji: string;
}

const data: PortfolioInformation[] = [
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
      <View>
        <CardStack cards={data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 24,
    height: '100%',
  },
});

export default App;
