import axios, { AxiosInstance } from "axios";

//수정
const BASE_URL = "";

axios.defaults.withCredentials = true;

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi= axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

// // config에 오리지널 요청 저장
// // 모든 request요청이 실행되기 전에 호출 -> 모든 요청 헤더에 인증 토큰 추가
// privateApi.interceptors.request.use((config) => {
//   // console.log("first config", config);
//   const token = localStorage.getItem("access_token");
//   config.headers.Authorization = "Bearer " + token;
//   return config;
// });