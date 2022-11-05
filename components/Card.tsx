import React, {useState, type PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// TODO no PropsWithChildren
const Card: React.FC<
  PropsWithChildren<{
    insights: string[];
    emoji: string;
  }>
> = ({insights, emoji}) => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const changeInsight = () => {
    setCurrentInsight(
      prevInsightIndex => (prevInsightIndex + 1) % insights.length,
    );
  };
  return (
    <LinearGradient
      colors={[
        '#AFAFAF80',
        '#AFAFAF80',
        '#21212100',
        '#AFAFAF70',
        '#21212150',
        '#AFAFAF50',
      ]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        // height: 48,
        // width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        // width: 200,
        padding: 2,
        borderRadius: 7,
      }}>
      <TouchableOpacity onPress={changeInsight} style={styles.containerFake}>
        <LinearGradient
          colors={['rgba(24, 24, 24, 1)', 'rgba(24, 24, 24, 0.2)']}
          style={[styles.container, styles.linearGradient]}>
          <View style={styles.mediaSectionWrapper}>
            <Text style={styles.mediaSectionText}>{emoji}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>
              {insights[currentInsight]}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const defaultTextStyling = {
  color: 'rgba(200, 200, 200, 1)',
  fontFamily: 'Inter',
};
const styles = StyleSheet.create({
  containerFake: {
    backgroundColor: '#000',
    flexDirection: 'row',
    borderRadius: 8,
    marginLeft: 1,
    marginRight: 1,
  },
  container: {
    // marginTop: 32, // This should go to the wrapper instead
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    flex: 1,
    flexWrap: 'wrap',
    ...defaultTextStyling,
  },
  mediaSectionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mediaSectionText: {
    fontSize: 26,
  },
  // from the repo example
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Card;
