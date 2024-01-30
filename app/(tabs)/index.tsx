import { SafeAreaView, ScrollView, StyleSheet, Platform, RefreshControl} from 'react-native';
import { useRef, useContext} from 'react';
import Lottie from 'lottie-react-native';

import ThreadsItem from '@/components/ThreadsItem'
import { ThreadsUserContext } from '@/context/thread-context';

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const data = useContext(ThreadsUserContext);

  return (
    <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: Platform.select({ android: 30 }),
          }}
          refreshControl={
            <RefreshControl
            onRefresh={() => {animationRef.current?.play()}}
              refreshing={false}
              tintColor={"transparent"}
            />
          }
        >
          <Lottie
            ref={animationRef}
            source={require("../../assets/images/threads-animation-logo.json")} 
            loop={false}
            autoPlay
            style={{width: 90, height: 90, alignSelf: "center"}}
          />
        
        {data && data.threads.map((thread) => (
          <ThreadsItem 
            key={thread.id}
            {...thread}
          />
        ))}
        
        </ScrollView>
    </SafeAreaView>
  );
}
