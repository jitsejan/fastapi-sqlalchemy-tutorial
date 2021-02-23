import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users/");
  }

  get(id) {
    console.log(id);
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
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