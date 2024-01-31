// import { StyleSheet, SafeAreaView, Platform, TextInput, useColorScheme, ScrollView} from 'react-native';
// import { useState, useContext } from 'react';
import {useLocalSearchParams} from "expo-router";

import { View, Text } from '@/components/Themed';
import { User } from "@/types/threads";


export default function Profile() {
  const {encodedUser} = useLocalSearchParams<{encodedUser: string}>();
  const user = JSON.parse(decodeURIComponent(encodedUser));

  return (
    <View>
        <Text>
            {user.username}
        </Text>
    </View>
  );
}

