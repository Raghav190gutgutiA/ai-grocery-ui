import axios from "axios";

const paymentApi = axios.create({
  baseURL:
    "http://localhost:5005/api/payment",

  withCredentials: true,
});

export const createPayment =
  async (data) => {

    const response =
      await paymentApi.post(
        "/create",
        data
      );

    return response.data;
  };

export const verifyPayment =
  async (data) => {

    const response =
      await paymentApi.post(
        "/verify",
        data
      );

    return response.data;
  };

export default paymentApi;