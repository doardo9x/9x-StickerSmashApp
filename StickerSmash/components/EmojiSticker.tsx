import { View, Text } from 'react-native'
import React from 'react'
import  Animated  from 'react-native-reanimated';
import { Image, type ImageSource } from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
}

export default function EmojiSticker({imageSize, stickerSource} : Props) {
  return (
    <View style={{top: -350}}>
      <Animated.Image source={stickerSource}
        resizeMode='contain'
        style={{width: imageSize, height: imageSize }} />
    </View>
  )
}