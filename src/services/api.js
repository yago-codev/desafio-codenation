import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=3e2c337090a377de4f93864149d0d1919211e941"
});

export default api;
