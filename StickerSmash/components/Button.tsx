import { StyleSheet, Text, View, Presseble } from 'react-native'
import React from 'react'

type Props = {
    label: string;
}

export default function Button( { label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Presseble style={styles.button} onPress={() = alert("AAAAAAAAAAAh")}>
        <Text style={styles.buttonLabel}> Button </Text>
      </Presseble>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{

    },
    button:{

    },
    buttonLabel:{

    },
})