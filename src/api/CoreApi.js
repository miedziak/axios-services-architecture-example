import axiosProvider from './axiosProvider';

class CoreApi {
  constructor(baseUrl, slug = '') {
    this.baseUrl = baseUrl;
    this.slug = slug;
    this.api = axiosProvider(`${this.baseUrl}${this.slug}`);
    this.setInterceptors({
      beforeRequest: this._beforeRequest,
      requestError: this._requestError,
      afterResponse: this._afterResponse,
      responseError: this._responseError,
    });
  }

  setInterceptors = ({
    beforeRequest,
    requestError,
    afterResponse,
    responseError,
  }) => {
    this.api.interceptors.request.use(beforeRequest, requestError);
    this.api.interceptors.response.use(afterResponse, responseError);
  };


  _beforeRequest(config) {
    return config;
  }

  _requestError(error) {
    throw error;
  }

  _afterResponse(resp) {
    return resp.data || resp;
  }

  _responseError(error) {
    throw error;
  }
}

export default CoreApi;
