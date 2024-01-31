import { StyleSheet, SafeAreaView, Platform, TextInput, useColorScheme, ScrollView} from 'react-native';
import { useState, useContext } from 'react';

import { View } from '@/components/Themed';
import { ThreadsUserContext } from '@/context/thread-context';
import UserPreview from '@/components/UserPreview'; 

export default function TabTwoScreen() {
  const allUsers = useContext(ThreadsUserContext)?.users;
  const [currentUsers, setCurrentUsers] = useState(allUsers);

  const currentTheme = useColorScheme();
  const fontColor = currentTheme === "dark" ? "white": "black";
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer} >
        <TextInput
          style={[styles.input, { color: fontColor, borderColor: borderColor }]}
          placeholder="Search Users..."
          placeholderTextColor={fontColor}
          onChangeText={(searchTerm) => {
            const queriedUsers = allUsers && allUsers.filter((user) => user.name.includes(searchTerm) || user.username.includes(searchTerm));
            setCurrentUsers(queriedUsers);
          }}
        />
      </View>

      <ScrollView>
        {currentUsers && currentUsers.map(
          (user) => 
            <UserPreview key={user.id} {...user}/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.select({ android: 45 }),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});
