import axios from 'axios';
import { useErrorContext } from './globalerror';
import { useLoadingContext } from './loadingcontext';

const UseApiCall = () => {
    const { setError } = useErrorContext();
    const { setLoading } = useLoadingContext();

    const apiCall = async (type: ApiCallType, url: string, data?: object): Promise<any> => {
        try {
            setLoading(true);
            const http = import.meta.env.VITE_HTTPCALL;
            console.log(`http: ${http} / ${url}`);            
            switch (type) {
                case ApiCallType.GET:
                    const responseGet = await axios.get('https://' + http + "" + url)
                    return responseGet.data
                case ApiCallType.POST:
                    const responsePost = await axios.post('https://' + http + "" + url, data)
                    return responsePost.data
                case ApiCallType.DELETE:
                    const responseDelete = await axios.delete(http + "" + url)
                    return responseDelete.data
                case ApiCallType.PUT:
                    const responsePut = await axios.put(http + "" + url, data)
                    return responsePut.data
                case ApiCallType.PUTID:
                    const responsePutId = await axios.put(http + "" + url)
                    return responsePutId.data
            }
            return {message: 'not found'}
        } catch (error: any) {         
            if(error.response === undefined || error.response.data.statusCode === 500)
                setError('המערכת לא יכלה לבצע את הפעולה שרצית, נסה שוב או מאוחר יותר.');
            setError(error.response.data.message);
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