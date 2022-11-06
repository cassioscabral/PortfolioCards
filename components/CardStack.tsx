import React, {useRef} from 'react';
import {Dimensions, View} from 'react-native';

import {PortfolioInformation} from '../App';
import Card from './Card';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {FadeInRight, FadeOutLeft} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

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
          <Animated.View
            style={{flex: 1}}
            exiting={FadeOutLeft.delay((viewCount - index) * 100).duration(600)}
            entering={FadeInRight.delay((viewCount - index) * 100).duration(
              400,
            )}>
            <Card
              onPress={() => carouselRef.current?.next()}
              insights={item.insights}
              emoji={item.emoji}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

export default CardStack;
