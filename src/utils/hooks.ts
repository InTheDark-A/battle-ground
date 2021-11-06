import { useState, useCallback } from 'react'


let controller = null as any;
export const useFetch = (host:string, mode?:RequestMode | undefined) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        if (controller)
            controller.abort();
        controller = new AbortController();
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(host + url
                , {
                method,
                body,
                headers,
                signal: controller.signal,
                mode: mode
            });
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Wrong something')
            }

            setLoading(false)
            controller = null;
            return data;
        } catch (e:any) {
            setLoading(false)
            setError(e.message as string)
            controller = null;
            return e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}