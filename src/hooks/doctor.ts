import { GetProps } from "../interfaces";
import { useGetDoctorsQuery } from "../stores/api/doctorSlice";

export const useDoctors = (getProps: GetProps) => {
    const { data: doctorsRes } = useGetDoctorsQuery(getProps);

    return {
        doctors: doctorsRes?.data ?? [],
        paginationInfo: doctorsRes?.paginationInfo
    }
}