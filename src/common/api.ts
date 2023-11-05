import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

class HttpService {
  private axiosInstance: AxiosInstance;
  private cancelTokenSource: CancelTokenSource;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.cancelTokenSource = axios.CancelToken.source();
  }

  async read<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const newConfig: AxiosRequestConfig = { ...config, cancelToken: this.cancelTokenSource.token };

    try {
      const response = await this.axiosInstance.get<T>(url, newConfig);

      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      }
      throw error;
    }
  }

  async put<T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const newConfig: AxiosRequestConfig = { ...config, cancelToken: this.cancelTokenSource.token };

    try {
      const response = await this.axiosInstance.put<T>(url, data, newConfig);
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      }
      throw error;
    }
  }
}

export default HttpService;