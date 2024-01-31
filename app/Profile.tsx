import { useContext } from 'react';
import { StyleSheet, Linking, ScrollView, SafeAreaView} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";

import { View, Text } from '@/components/Themed';
import { Image } from "expo-image";
import { formatDate } from '@/utils/formatDate';
import { ThreadsUserContext } from '@/context/thread-context';
import { Thread } from '@/types/threads';
import ThreadsItem from '@/components/ThreadsItem'
import filterThreads from '@/utils/filterThreads';

const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Profile(): JSX.Element {
  const {encodedUser} = useLocalSearchParams<{encodedUser: string}>();
  const user = JSON.parse(decodeURIComponent(encodedUser));
  
  const authoredThreads: Thread[] = filterThreads(user.username, useContext(ThreadsUserContext)?.threads ?? []);
  
  return (
    <SafeAreaView style={{marginHorizontal: 15}}>
      <ProfileHeader
        username = {user.username}
        name = {user.name}
        image = {user.photo}
        verified = {user.verified}
      />

      <UserBio
        content = {user.bio}
        link = {user.link}
        numberOfFollowers={user.followers.length}
        joinedAt={user.createdAt}
      />

    
      <ScrollView>
        {authoredThreads && authoredThreads.map((thread) => (<ThreadsItem key={thread.id} {...thread} />))}
      </ScrollView>
    </SafeAreaView>
  );
}

export function UserBio({content, link, numberOfFollowers, joinedAt}: {content: string, link: string, numberOfFollowers: number, joinedAt: string}): JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 16}}>{content}</Text>

      <View style={{paddingTop: 20}}>
        <View style={{flexDirection: "row", gap: 5}}>
          <FontAwesome name="globe" size={20} color="grey"/> 
          <Text style={{color: "grey"}} onPress={() => Linking.openURL(link)}> {link}</Text>
          
        </View>

        <View style={{flexDirection: "row", gap: 5}}>
          <FontAwesome name="calendar" size={18} color="grey" /> 
          <Text style={{color: "grey"}}> Joined {formatDate(joinedAt)}</Text>          
        </View>
      </View>

      <View style={{alignItems: "center", paddingVertical: 20}}>
        <Text style={styles.title}>{numberOfFollowers} Followers</Text>
      </View>
    </View>
  )
}

export function ProfileHeader({image, username, name, verified}: {image: string, username: string, name: string, verified: boolean}): JSX.Element {
  return (
    <View style={{paddingTop: 20, flexDirection: "row", gap: 15}}>
      <View style={styles.ImageContainer}>
        <Image 
            source={image} 
            style={styles.image}
            placeholder={blurhash}
            transition={200}
        />
      </View>

      <View style={{gap: 0.5}}>
          <Text style={styles.title}>{name} {verified && (<MaterialIcons name="verified" size={14} color="#60a5fa"/>)}</Text>
          <Text style={styles.subtitle}>@{username}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer : {
      flexDirection: "row",
      gap: 15,
      paddingBottom: 20,
  },
  title: {
      fontWeight: "bold",
      fontSize: 18,
  },
  subtitle: {
      fontSize: 16,
      color: "grey",
  },
  image: {
      width: 80,
      height: 80,
      borderRadius: 40,
  },
})