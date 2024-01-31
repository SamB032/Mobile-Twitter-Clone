import { Thread } from "@/types/threads";

export default function filterThreads(username: string, threads: Thread[]): Thread[] {
    const authoredThreads = threads.filter((thread) => thread.author.username === username)
    return authoredThreads;
}