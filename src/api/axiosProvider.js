import axios from 'axios';

const defaultOptions = {};

function axiosProvider(baseUrl, options) {
  console.log('creating axios instance')
  return axios.create({
    baseURL: baseUrl,
    ...defaultOptions,
    ...options
  });
}

export default axiosProvider;
