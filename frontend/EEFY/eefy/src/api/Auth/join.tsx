import { publicApi } from "..";

interface userData {
  email: string,
  password: string,
  checkedPassword: string,
  phoneNumber: String,
  role: string,
  nickname: string | null,
  name:string
}
interface email {
  email: string,
}
interface code {
  email: string,
  code:string
}

// 이메일 인증(발송) api
export const postEmail = async (email:email) => {
  try{
    console.log('이메일 확인 진입', email);
    const response = await publicApi.post("/auth/email", email);
    console.log('이메일 확인 성공', response);
    return response;
  }catch(error){
      console.log('이메일 확인 실패',error)
  }
};

// 이메일 인증(확인) api
export const postCheckEmail = async (data: code) => {
  try{
    console.log('이메일 인증 진입', data);
    const response = await publicApi.post("/auth/email/confirm", data);
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
    const formatPhoneNum = user.phoneNumber.slice(0, 3) + '-' + user.phoneNumber.slice(3, 7) + '-' + user.phoneNumber.slice(7, 11);
    user.phoneNumber = formatPhoneNum;
    console.log(user);
    const response = await publicApi.post("/member", user);
    console.log("회원가입 성공", response);
    return response;    
  }catch(error){
    console.log("회원가입 실패", error);
  }
};