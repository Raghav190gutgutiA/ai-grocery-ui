import axios from "axios";

const cartApi = axios.create({
  baseURL:
    "http://localhost:5003/api/cart",

  withCredentials: true,
});

export const getCart =
  async () => {

    const response =
      await cartApi.get("/");

    return response.data;
  };

export const addToCart =
  async (data) => {

    const response =
      await cartApi.post(
        "/add",
        data
      );

    return response.data;
  };

export const removeFromCart =
  async (data) => {

    const response =
      await cartApi.post(
        "/remove",
        data
      );

    return response.data;
  };

export const updateQuantity =
  async (data) => {

    const response =
      await cartApi.put(
        "/update-quantity",
        data
      );

    return response.data;
  };

export const clearCart =
  async () => {

    const response =
      await cartApi.post(
        "/clear"
      );

    return response.data;
  };

export default cartApi;