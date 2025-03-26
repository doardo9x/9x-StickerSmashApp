import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
    label: 'string'
}

export default function CircleButton( {icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color='#fff'/>
        <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>   

  )
}

const styles = StyleSheet.create({

    circleButton:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel:{
        color: '#fff',
        marginTop: 12,
    }
})