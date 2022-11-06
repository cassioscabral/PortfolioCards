import React, {useRef} from 'react';
import {Dimensions, StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import {PortfolioInformation} from '../App';
import Card from './Card';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {FadeInRight} from 'react-native-reanimated';
import Animated, {AnimateProps} from 'react-native-reanimated';

export interface CardStackProps {
  cards: PortfolioInformation[];
}
const CardStack: React.FC<CardStackProps> = ({cards}) => {
  const width = Dimensions.get('window').width;
  let carouselRef = useRef<ICarouselInstance>(null);
  const viewCount = cards.length - 1;

  return (
    <View style={{flex: 1}}>
      <Carousel
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        width={width * 0.88}
        height={380}
        pagingEnabled={true}
        snapEnabled={true}
        mode={'vertical-stack'}
        loop={true}
        autoPlay={false}
        autoPlayReverse={false}
        data={cards}
        vertical={true}
        modeConfig={{
          stackInterval: 8,
          opacityInterval: 0.1,
        }}
        ref={carouselRef}
        customConfig={() => ({type: 'positive', viewCount})}
        renderItem={({index, item}) => (
          <SBItem
            index={index}
            key={index}
            onActivated={() => carouselRef.current?.next()}
            entering={FadeInRight.delay((viewCount - index) * 100).duration(
              200,
            )}>
            <Card insights={item.insights} emoji={item.emoji} />
          </SBItem>
        )}
      />
    </View>
  );
};

export default CardStack;

interface SBItemProps extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index: number;
  pretty?: boolean;
  onActivated?: () => void;
}

// TODO move to a separate file
export const SBItem: React.FC<SBItemProps> = props => {
  const {children, onActivated, ...animatedViewProps} = props;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FlingGestureHandler direction={Directions.UP} onActivated={onActivated}>
        <Animated.View style={{flex: 1}} {...animatedViewProps}>
          {children}
        </Animated.View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};
