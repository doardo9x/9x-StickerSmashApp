import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Pressable, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.wrapper}>
      {/* Borda animada */}
      <Animated.View style={[styles.borderWrapper, { transform: [{ rotate: spin }] }]}>
        <LinearGradient
          colors={[
            'red',
            'yellow',
            'cyan',
            'pink',
            'violet',
            'red',
            'red',
          ]}


          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
        />
      </Animated.View>

      {/* Botão branco central menor para dar efeito de borda */}
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderWrapper: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 0,
  },
  gradientBorder: {
    flex: 1,
    borderRadius: 50,
  },
  circleButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
