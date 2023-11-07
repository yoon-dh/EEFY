import axios, { AxiosInstance } from 'axios';

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key);
    return value 
  }
};
export const setLocalStorage = (key: string, value: string) => {
  if (!value) return;
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};
export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
};

//수정
const BASE_URL = 'https://k9b306.p.ssafy.io/api';

axios.defaults.withCredentials = true;

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getLocalStorage("access_token")}`,
  },
});

// config에 오리지널 요청 저장
// 모든 request요청이 실행되기 전에 호출 -> 모든 요청 헤더에 인증 토큰 추가
privateApi.interceptors.request.use(config => {
  console.log('토큰 점검');
    const token = getLocalStorage('access_token');
    config.headers.Authorization = token;
  return config;
});

// 리프레시 토큰을 통해 서버로부터 새로운 액세스 토근 가져오기
export async function postRefreshToken() {
  console.log('리프레시 토큰 재발급');
    const headers = {
      Authorization: getLocalStorage('access_token'),
    };
  const response = await publicApi.put('/auth/refresh', null, { headers });
  console.log('리프레시 성공', response);
  return response;
}

// 모든 응답에 대한 처리
privateApi.interceptors.response.use(
  // 응답 성공시
  response => {
    return response;
  },
  // 응답 실패시(토큰 재발급 필요시)
  async error => {
    const { config } = error;
    console.log('error', error);

    const originRequest = config;
    try {
      const response = await postRefreshToken();
      const newAccessToken = response.headers.authorization;
      console.log(newAccessToken);
      setLocalStorage('access_token', response.headers.authorization);
      setLocalStorage('refresh_token', response.headers['authorization-refresh']);
      axios.defaults.headers.common.Authorization = `${newAccessToken}`;
      originRequest.headers.Authorization = `${newAccessToken}`;
      return axios(originRequest);
    } catch {
      removeLocalStorage
    }
    return Promise.reject(error);
  }
);
