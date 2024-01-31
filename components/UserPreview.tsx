import { TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { User } from "@/types/threads"

const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function UserPreview(user: User) {
    const goToProfile = () => {
        router.push({ pathname: `/Profile?encodedUser=${encodeURIComponent(JSON.stringify(user))}` });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={goToProfile}>
            <View>
                <Image 
                    source={user.photo} 
                    style={styles.image}
                    placeholder={blurhash}
                    transition={200}
                />
            </View>

            <View style={{gap: 0.5}}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.subtitle}>@{user.username}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        gap: 15,
        paddingBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        fontSize: 14,
        color: "grey",
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
})