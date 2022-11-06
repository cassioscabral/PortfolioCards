import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export interface CardProps {
  insights: string[];
  emoji: string;
}

const borderGradientColors = [
  '#AFAFAF80',
  '#AFAFAF80',
  '#21212100',
  '#AFAFAF70',
  '#21212150',
  '#AFAFAF50',
];

const Card: React.FC<CardProps> = ({insights, emoji}) => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const changeInsight = () => {
    setCurrentInsight(
      prevInsightIndex => (prevInsightIndex + 1) % insights.length,
    );
  };
  return (
    <LinearGradient
      colors={borderGradientColors}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      useAngle={true}
      angle={30}
      angleCenter={{x: 0.3, y: 0.5}}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        padding: 1,
      }}>
      <TouchableHighlight onPress={changeInsight} style={styles.containerFake}>
        <LinearGradient
          colors={['rgba(24, 24, 24, 1)', 'rgba(24, 24, 24, 0.2)']}
          style={[styles.container]}>
          <View style={styles.mediaSectionWrapper}>
            <Text style={styles.mediaSectionText}>{emoji}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>
              {insights[currentInsight]}
            </Text>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    </LinearGradient>
  );
};

const defaultTextStyling = {
  color: 'rgba(200, 200, 200, 1)',
  fontFamily: 'Inter',
};
// Internal border radius is equal to the external one minus the spacing between them
// 16(figma) - 1(padding to create border of 1 width) = 15
const styles = StyleSheet.create({
  containerFake: {
    backgroundColor: 'rgba(24, 24, 24, 1)',
    flexDirection: 'row',
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  descriptionText: {
    ...defaultTextStyling,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    flex: 1,
    flexWrap: 'wrap',
  },
  mediaSectionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mediaSectionText: {
    fontSize: 26,
  },
});

export default Card;
