import axios from "axios";
export const API_BASE_URL = 'http://localhost:4001';

export const getRequest = (path, paramsData) => {
  const url = urlBuilder(path);
  return request("GET", url, null, { params: paramsData });
};

const urlBuilder = (path) => {
  return `${API_BASE_URL}/${path}`;
};

const request = async (method, url, data = null, options = {}) => {
  try {
    const apiResponse = await axios({
      method,
      url,
      data,
      ...options,
    });

    return {
      error: null,
      fail: !(apiResponse.data.status && apiResponse.data),
      res: apiResponse.data,
    };
  } catch (error) {
    /**
     * If error code is 401, clear the session storage (if any) and redirect to the login page
     * to get the updated token
     */
    const statusCode = (error.response && error.response.status) || null;
    if (statusCode && statusCode === 401) {
      localStorage.clear();
      window.location.href = process.env.PUBLIC_URL;
    }

    return {
      res: null,
      fail: false,
      error,
    };
  }
};