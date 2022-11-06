import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../src/theme';
export interface CardProps {
  insight: string;
  emoji: string;
  imageUrl?: string;
  onPress: () => void;
}

const shadesOfBorderColor = [
  'rgba(255, 255, 255, 0.6)',
  'rgba(173, 173, 173, 0.8)',
  'rgba(33, 33, 33, 0.8)',
  'rgba(255, 255, 255, 0.2)',
];

const borderGradientColors = [
  shadesOfBorderColor[0],
  shadesOfBorderColor[2],
  shadesOfBorderColor[2],
  shadesOfBorderColor[1],
  shadesOfBorderColor[1],
  shadesOfBorderColor[3],
];

const Card: React.FC<CardProps> = ({insight, emoji, imageUrl, onPress}) => {
  return (
    <LinearGradient
      colors={borderGradientColors}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      useAngle={true}
      angle={13}
      angleCenter={{x: 0.3, y: 0.5}}
      style={styles.cardWrapper}>
      <TouchableHighlight
        underlayColor={theme.colors.darkBackgroundAccent}
        onPress={onPress}
        style={styles.touchable}>
        <LinearGradient
          colors={[
            // on Figma there's a linear gradient with backdrop-filter blur which is not supported by react-native. This is a workaround to give a similar effect.
            '#323232', // brighter color to give a contrast
            '#282828',
            '#212121', // desired linear gradient color
          ]}
          style={[styles.mainContainer]}>
          <View style={styles.mediaSectionWrapper}>
            {imageUrl ? (
              <Image source={{uri: imageUrl, width: 30, height: 30}} />
            ) : (
              <Text style={styles.mediaSectionText}>{emoji}</Text>
            )}
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>{insight}</Text>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    </LinearGradient>
  );
};

/* Internal border radius is equal to the external one minus the spacing between them
/--------
|  ______
| | <- inner border radius == outer border radius - desidered border width
| |
 16(desired border in figma) - 1(padding to create border of 1 width) = 15 (inner border radius)
*/
const styles = StyleSheet.create({
  cardWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 1,
  },
  touchable: {
    flexDirection: 'row',
    borderRadius: 15,
  },
  mainContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 32,
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 15,
    color: theme.colors.textColor,
    fontFamily: theme.fontFamilyRegular,

    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
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
