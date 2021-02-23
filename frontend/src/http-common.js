import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json",
    'Access-Control-Allow-Methsods': 'GET, POST, OPTIONS, PUT',
    'Access-Control-Allow-Headers': 'Origin, Access-Control-Allow-Headers, Content-Type, X-Auth-Token'
  }
});