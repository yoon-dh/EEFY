"use client"
import { publicApi, setLocalStorage} from "..";

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
  }
};


