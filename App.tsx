import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})