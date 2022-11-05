import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// TODO no PropsWithChildren
const Card: React.FC<
  PropsWithChildren<{
    description: string;
    emoji: string;
  }>
> = ({description, emoji}) => {
  return (
    <LinearGradient
      colors={['rgba(24, 24, 24, 1)', 'rgba(24, 24, 24, 0)']}
      style={[styles.container, styles.linearGradient]}>
      <View style={styles.mediaSection}>
        <Text style={styles.mediaSectionText}>{emoji}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </LinearGradient>
  );
};

const defaultTextStyling = {
  color: 'rgba(200, 200, 200, 1)',
  fontFamily: 'Inter',
};
const styles = StyleSheet.create({
  container: {
    marginTop: 32, // This should go to the wrapper instead
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  description: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    ...defaultTextStyling,
  },
  mediaSection: {
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
