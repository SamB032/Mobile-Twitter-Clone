export function timeAgo(date: string): string {
    const now = new Date();
    const diffInMs = now.getTime() - new Date(date).getTime();
    
    const diffInSecs: number = Math.floor(diffInMs / 1000);
    const diffInMins: number = Math.floor(diffInSecs / 60);
    const diffInHours: number = Math.floor(diffInMins / 60);
    const diffInDays: number = Math.floor(diffInHours / 24);

    if (diffInSecs < 60) {
        return diffInSecs + "s";
    } else if (diffInMins < 60) {
        return diffInMins + " min";
    } else if (diffInHours < 24) {
        return diffInHours + "h";
    } else if (diffInDays === 1) {
        return "yesterday";
    } else {
        return diffInDays + " days"
    }
}