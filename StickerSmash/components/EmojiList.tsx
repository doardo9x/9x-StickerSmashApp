import { useState } from 'react'
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native'
import { Image, type ImageSource } from 'expo-image'

type Props  = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
    require('../assets/images/3.png'),
    require('../assets/images/4.png'),
    require('../assets/images/5.png'),
    require('../assets/images/6.png'),
    require('../assets/images/7.png'),
    require('../assets/images/8.png'),
    require('../assets/images/9.png'),
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ])
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle = {styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => {
          onSelect(item);
          onCloseModal();
        }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20
  }
})