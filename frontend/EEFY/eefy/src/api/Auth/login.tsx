"use client"
import { publicApi, privateApi, setLocalStorage, removeLocalStorage} from "..";

interface loginData {
  email: string,
  password:string
}

// 로그인 api
export const postLogin = async (data:loginData) => {
  try{
    console.log('로그인 진입', data);
    const response = await publicApi.post("/auth", data);
    console.log('로그인 성공', response);
    setLocalStorage("access_token", response.headers.authorization);
    setLocalStorage("refresh_token", response.headers["authorization-refresh"]);
    return response;
  }catch(error){
      console.log('로그인 실패',error)
    return error
  }
};

// 로그아웃 api
export const deleteLogout = async () => {
  try{
    console.log('로그아웃 진입');
    const response = await privateApi.delete("/auth");
    console.log('로그아웃 성공', response);
    removeLocalStorage
    return response;
  }catch(error){
      console.log('로그인 실패',error)
  }
};


