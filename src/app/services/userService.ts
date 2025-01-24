import axios, { AxiosResponse } from "axios";

export async function call(prompt:string) {
  try {
    const responce: AxiosResponse<any, any> = await axios.post(
      "http://localhost:3000/api/user",
      {
        prompt,
      }
    );
    return  {success : true , data:responce.data} ;
  } catch (error) {
    throw {success : false, error}
  }
}
