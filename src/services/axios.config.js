import axios from 'axios';
import { store } from '../App';
import { stopLoading, fetchStart, fetchSuccess, fetchError } from '@redux/actions';

const { REACT_APP_API: url } = process.env;
/**
 * set axios base configurations
 */
const axiosInst = axios.create({
  baseURL: url,
  timeout: 30000
});

/**
 * interceptor for request
 * requests can directly use token from here rather than passing it everytime
 */
axiosInst.interceptors.request.use(
  async (requestConfig) => {
    const { dispatch } = store;
    dispatch(fetchStart());
    // add token send logic to API
    const token = 'token'; // Get your token;

    if (token) requestConfig.headers.authorization = `Bearer ${token}`;

    return requestConfig;
  },
  (error) => Promise.reject(error)
);

/**
 * interceptor for response
 * response can directly fill User service and User token
 */
axiosInst.interceptors.response.use(
  async (response) => {
    const { dispatch } = store;
    dispatch(fetchSuccess());
    return response;
  },
  (error) => {
    const { dispatch, getState } = store;
    const { loading } = getState()?.common;
    if (!error.response) {
      dispatch(fetchError('Network Issue'));
    } else if (error.response.status === 401) {
      if (loading) {
        dispatch(fetchError('Token Expired'));
        // your logic
        dispatch(stopLoading());
      }
    } else if (error.response.status === 404) {
      dispatch(fetchError('Not Found'));
    } else if (error.response.status === 0) {
      dispatch(fetchError('server connection lost'));
    } else if (error.response.status === 500) {
      dispatch(fetchError('Internal Server Error'));
    } else {
      dispatch(fetchError(error?.response?.data?.errorMessage));
    }
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInst;
