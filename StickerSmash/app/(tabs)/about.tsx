import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>📱 Patolino-Sticker: Dê vida às suas fotos com figurinhas!</Text>
        <Text style={styles.paragraph}>
          Patolino-Sticker é um app divertido que permite personalizar suas fotos com figurinhas digitais. Você pode escolher uma imagem ou tirar uma foto, e aplicar quantos adesivos quiser de forma simples e rápida.
        </Text>

        <Text style={styles.paragraph}>
          Ideal para quem gosta de criar memes, colagens ou dar um toque criativo às fotos, o app oferece uma biblioteca variada e permite mover, redimensionar e girar as figurinhas livremente.
        </Text>



        <Text style={styles.subtitle}>Funcionalidades principais:</Text>

        <Text style={styles.listItem}>📷 Escolha uma foto da galeria ou use a câmera</Text>
        <Text style={styles.listItem}>🎨 Adicione figurinhas em qualquer lugar da imagem</Text>
        <Text style={styles.listItem}>🔄 Mova, redimensione e gire as figurinhas com gestos simples</Text>
        <Text style={styles.listItem}>💾 Salve sua criação ou compartilhe com amigos</Text>
        <Text style={styles.listItem}>🧩 Biblioteca de stickers em constante expansão</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    color: '#ffd33d',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
  },
  listItem: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
  },
});
