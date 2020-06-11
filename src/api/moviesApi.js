import { BASE_URI, ENDPOINTS } from "../constants/apiConstants";
import { handleResponse, handleError } from "./apiUtils";
import request from "request";

export const getMoviesData = () => {
  const uri = BASE_URI.concat(ENDPOINTS.movies);
  return new Promise((res, rej) => {
    request(uri, (err, response, body) => {
      if (err) {
        rej(handleError(err));
      }

      res(handleResponse(response, body));
    });
  });
};
