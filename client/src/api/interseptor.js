import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:2112/api',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token'); // Retrieve token from localStorage
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses directly
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
    //   localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
