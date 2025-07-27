/**
 * Formats a date string using Intl.DateTimeFormat for localized display
 * @param dateString - The date string to format
 * @returns Formatted date string in Spanish (Panama locale)
 */
export function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('es-PA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            /* hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Panama' */
        }).format(date)
    } catch (error) {
        console.error('Error formatting date:', error)
        return dateString // Fallback to original string if parsing fails
    }
} 