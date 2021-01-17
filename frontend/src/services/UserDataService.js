import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users/");
  }

  get(user_id) {
    return http.get(`/users/${user_id}`);
  }

  create(data) {
    return http.post("/users", data);
  }
/* Not implemented in backend */
//   update(id, data) {
//     return http.put(`/users/${id}`, data);
//   }
/* Not implemented in backend */
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
/* Not implemented in backend */
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
/* Not implemented in backend */
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new UserDataService();