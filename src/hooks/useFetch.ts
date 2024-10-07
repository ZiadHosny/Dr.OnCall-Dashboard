import useSWR from "swr"
import { fetcher } from "../utils/fetcher"
import { useAppDispatch } from "../stores/hooks"
import { useEffect } from "react"
import { setLoading } from "../stores/loadingSlice"
import { toast } from "react-toastify"

export const useFetch = <T>(url: string): T => {
    const { data, isLoading, error } = useSWR(url, fetcher)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLoading(isLoading))
    }, [dispatch, isLoading]);

    useEffect(() => {
        if (error) {
            toast.error(error || 'An error occurred!');
        }
    }, [dispatch, error]);

    useEffect(() => {
        if (data) {
            toast.success(data.message || 'Action completed successfully!');
        }
    }, [dispatch, data]);

    return data?.data;
}