import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'orange',
      headerStyle: {
        backgroundColor: 'black'
      },
      headerShadowVisible: false,
      headerTintColor: 'orange',
      tabBarStyle: {
        backgroundColor: 'black',
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'PATOLINO-STICKER',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}