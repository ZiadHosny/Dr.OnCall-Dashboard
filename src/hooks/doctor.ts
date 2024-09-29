import useSWR from "swr"
import { fetcher } from "../utils/fetcher"

type DoctorType = {
    _id: string,
    user: {
        name: string,
        email: string,
        password: string,
        phone: string,
    };
    imageUrl: string;
    specialty: string;
    rating: number;
    userRating: number | null;
    createdAt: string
}

export const useDoctors = () => {
    const { data, isLoading } = useSWR('doctors', fetcher)

    return {
        doctors: data?.data as DoctorType[] ?? [],
        isLoading: isLoading && !data,
    }
}