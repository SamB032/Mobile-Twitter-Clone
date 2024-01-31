export function formatDate(isoString: string): string {
    const date = new Date(isoString);

    return date.toLocaleDateString("en-UK", {month: 'long', year: 'numeric'})    
}