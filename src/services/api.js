import axios from "axios";

const api = axios.create({
    baseURL: "https://kitsu.io/api/edge/",
  });

export default api;