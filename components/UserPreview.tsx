import { Text, View } from '@/components/Themed';

import { User } from "@/types/threads"

export default function UserPreview(user: User) {
    return (
        <Text>{user.name} @{user.username} </Text>
    )
}