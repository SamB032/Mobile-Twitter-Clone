import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Thread, User} from '@/types/threads';
import { generateThreads } from '@/utils/generate-dummy-data';

interface ThreadsContextProps {
    threads: Thread[];
    users: User[];
  }

export const ThreadsUserContext = createContext<ThreadsContextProps | undefined>(undefined);

export const ThreadProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [threads, setThread] = useState<Thread[]>([]);
    const [users, setUser] = useState<User[]>([]);
    
    useEffect(() => {
        const [threads, users] = generateThreads();
        setThread(threads);
        setUser(users);
    }, []);
    
    return <ThreadsUserContext.Provider value={{threads, users}}>{children}</ThreadsUserContext.Provider>
};