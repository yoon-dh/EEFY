import { privateApi, publicApi } from "..";

interface userData {
  email: string,
  password: string,
  nickname: string,
}

// 이메일 인증(발송) api
export const postEmail = async (email:string) => {
  try{
    console.log('이메일 확인 진입', email);
    const response = await publicApi.post("/api/member/auth/email", email);
    console.log('이메일 확인 성공', response);
    return response;
  }catch(error){
      console.log('이메일 확인 실패',error)
  }
};
// 이메일 인증(확인) api
export const postCheckEmail = async (data: string) => {
  try{
    console.log('이메일 인증 진입', data);
    const response = await publicApi.post("/api/member/auth/email/confirm", data);
    console.log('이메일 인증 성공', response);
    return response;
  }catch(error){
    console.log('이메일 인증 실패',error)
  }
};
// 회원가입 api
export const postJoin = async (user: userData) => {
  try{
    console.log("회원가입 진입", user);
    const response = await publicApi.post("/api/member", user);
    console.log("회원가입 성공", response);
    return response;    
  }catch(error){
    console.log("회원가입 실패", error);
  }
};