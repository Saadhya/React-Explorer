import axios from "axios";
import errorHandling from "./errorHandling";

const appApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
  // baseURL:'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}'
});

appApi.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },

  (error) => {
    const { response } = error;

    if (response) {
      // Handle specific HTTP error statuses
      let res = errorHandling(response);
      console.log(res);

      return Promise.reject(res);
    }

    // Handle network errors
    if (error.message === "Network Error") {
      return Promise.reject(
        "Network error. Please check your internet connection."
      );
    }

    // Handle other errors
    // return Promise.reject("An unexpected error occurred. Please try again.");
  }
);

export default appApi;

const apiKey = "e13fc7f7d6fef9ddacfba8ed1ac01c7e";
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`;

export const weatherApi = async () => {
  const res = await fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      // if (!responseData.ok || responseData.cod != 200) {
      //   let error = errorHandling(responseData);
      //   return error;
      // }
      return responseData;
    })
    .catch((err) => {
      console.log(err);
      let error = errorHandling(err);
      return error;
    });
  // return res;

  if (!res.ok) {
    let error = errorHandling(res);
    // console.log(error);
    return Promise.reject(error);
  } else {
    console.log(res);
    return Promise.resolve(res);
  }
};

export async function fetchWeather() {
  try {
    const response = await fetch(URL).then((data) => {
      return data.json();
    });
    console.log("ALL COMPANYS: ", response);
    if (response.cod > 200) {
      let error = errorHandling(response);
      return Promise.reject(error);
    }
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    let error = errorHandling(err);
    return Promise.reject(error);
  }
  // return fetch(URL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data.cod === 200) {
  //       return data;
  //     }
  //     if (!data.ok || data.cod > 200) {
  //       let error = errorHandling(data);
  //       throw new Error(`Custom error response`, { cause: error });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     let error = errorHandling(err);
  //     return Promise.reject(error);
  //   });
}
