import axios from 'axios';
import { useErrorContext } from './globalerror';
import { useLoadingContext } from './loadingcontext';

const UseApiCall = () => {
    const { setOpenError } = useErrorContext();
    const { setLoading } = useLoadingContext();

    const apiCall = async (type: ApiCallType, url: string, data?: object): Promise<any> => {
        try {
            setLoading(true);
            switch (type) {
                case ApiCallType.GET:
                    const responseGet = await axios.get(url)
                    return responseGet.data
                case ApiCallType.POST:
                    const responsePost = await axios.post(url, data)
                    return responsePost.data
                case ApiCallType.DELETE:
                    const responseDelete = await axios.delete(url)
                    return responseDelete.data
                case ApiCallType.PUT:
                    const responsePut = await axios.put(url, data)
                    return responsePut.data
                case ApiCallType.PUTID:
                    const responsePutId = await axios.put(url)
                    return responsePutId.data
            }
            return {message: 'not found'}
        } catch (error: any) {
            setOpenError(true);
        } finally {
            setLoading(false);
        }
    }

    return apiCall
}

export default UseApiCall

export enum ApiCallType {
    GET, POST, DELETE, PUT, PUTID
}