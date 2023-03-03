
import http from "./http-client";


export default class MemberService {
    static async getAll() {
        return http.get("/members").then((response) => {
            console.log('response :>> ', response.data);
          return response.data
        });
      }
    
}