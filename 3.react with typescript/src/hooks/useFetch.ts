import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });
    
    useEffect(() => {
        const fetchData = async () => {
            setState(prev => ({ ...prev, loading: true, error: null }));

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setState(prev => ({ ...prev, data, loading: false }));
            } catch (error) {
                setState(prev => ({ ...prev, error: error instanceof Error ? error.message : String(error), loading: false }));
            }
        };

        fetchData();
    }, [url]);

    return state;
}