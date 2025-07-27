import { Redis } from '@upstash/redis'

// Type definition based on the JSON schema
export interface LotteryAnalysisResult {
    frequent_combinations: Array<{
        combination: string
        frequency: number
    }>
    total_combinations_analyzed: number
    unique_combinations: number
    frequent_combinations_count: number
    data_source: string
    total_records: number
    frequency_threshold: number
    last_updated: string
}

const redis = Redis.fromEnv()

/**
 * Gets lottery analysis data from Redis
 * @returns Promise<LotteryAnalysisResult | undefined>
 */
export async function getLotteryAnalysisData(): Promise<LotteryAnalysisResult | undefined> {
    try {
        const data = await redis.get('lottery-analysis-result')
        
        if (!data) {
            return undefined
        }
        
        // Parse the string data to JSON
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data
        
        // Validate that the data matches our expected structure
        if (isValidLotteryAnalysisData(parsedData)) {
            return parsedData as LotteryAnalysisResult
        }
        
        console.warn('Invalid lottery analysis data structure:', parsedData)
        return undefined
        
    } catch (error) {
        console.error('Error fetching lottery analysis data from Redis:', error)
        return undefined
    }
}

/**
 * Type guard to validate the data structure
 */
function isValidLotteryAnalysisData(data: any): data is LotteryAnalysisResult {
    return (
        data &&
        typeof data === 'object' &&
        Array.isArray(data.frequent_combinations) &&
        typeof data.total_combinations_analyzed === 'number' &&
        typeof data.unique_combinations === 'number' &&
        typeof data.frequent_combinations_count === 'number' &&
        typeof data.data_source === 'string' &&
        typeof data.total_records === 'number' &&
        typeof data.frequency_threshold === 'number' &&
        typeof data.last_updated === 'string'
    )
} 