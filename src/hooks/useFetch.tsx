import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        console.log("URL:", url);

        const response = await fetch(url)
        console.log(response.status);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const text = (await response.json() as T)
        console.log(text);

        setData(text)
      } catch (error: unknown) {
        console.log(error);

        setError(
          error instanceof Error ? error : new Error('Unknown error')
        )
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url]);
  console.log(url);

  return {
    data,
    isLoading,
    error
  }
}