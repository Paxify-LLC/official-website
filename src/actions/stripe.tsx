import axios from "axios";
import { BACKEND_URL } from "@/constants/config";

export async function createPaymentSession(body: any): Promise<{
  url: string;
}> {
  const API = `${BACKEND_URL}/stripe/create-generic-checkout-session`;

  return axios
    .post(API, body)
    .then((response) => {
      return response.data;
    })
    .then((responseJson) => {
      return Promise.resolve(responseJson);
    })
    .catch((error) => {
      const result = error.result;
      return Promise.reject(result);
    });
}
