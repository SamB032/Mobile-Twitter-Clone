import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Thread } from '@/types/threads';
import { generateThreads } from '@/utils/generate-dummy-data';

export const ThreadsContext = createContext<Thread[]>([]);

export const ThreadProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [threads, setThread] = useState<Thread[]>([]);
    useEffect(() => {setThread(generateThreads())}, []);
    return <ThreadsContext.Provider value={threads}>{children}</ThreadsContext.Provider>
};