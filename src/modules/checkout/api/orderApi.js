
import axios from "axios";

const orderApi = axios.create({
  baseURL:
    "http://localhost:5004/api/orders",

  withCredentials: true,
});

export const createOrder =
  async (data) => {

    const response =
      await orderApi.post(
        "/create",
        data
      );

    return response.data;
  };

export const getOrders =
  async () => {

    const response =
      await orderApi.get("/");

    return response.data;
  };

export default orderApi;