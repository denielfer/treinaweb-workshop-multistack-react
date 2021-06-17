import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";

export const APIService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "aplication/json",
  },
});
