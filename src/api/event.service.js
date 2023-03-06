
import http from "./http-client";


export default class EventService {
    static async getAll() {
        return http.get("/events").then((response) => {
            console.log('response :>> ', response.data);
            return response.data
        });
    }

}