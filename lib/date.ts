/**
 * Formats a date string using Intl.DateTimeFormat for localized display
 * @param dateString - The date string to format
 * @returns Formatted date string in Spanish (Panama locale)
 */
export function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString)
        const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        return new Intl.DateTimeFormat('es-PA', {
            dateStyle: 'long',
            timeStyle: 'short'
        }).format(localDate)
        
    } catch (error) {
        console.error('Error formatting date:', error)
        return dateString // Fallback to original string if parsing fails
    }
} 