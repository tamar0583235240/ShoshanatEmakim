import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const post = async (path = "/api", data: any = {}) => {
  try {
    const response = await axios.post(`${API_URL}${path}`, data, {
      withCredentials: true,
    });
    return response.data; // מחזיר את { data?, message? }
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw { message: "שגיאה לא צפויה" };
    }
  }

};

export const get = async (path = "/api") => {
  try {
    const response = await axios.get(`${API_URL}${path}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export const remove = async (path = "/api", data: any = {}) => {
  try {
    const response = await axios.delete(`${API_URL}${path}`, {
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

const handleError = (error: any) => {
  console.error("API Error:", error);
  // אם יש תגובת שרת
  if (error.response && error.response.data) {
    return error.response.data;
  } else {
    return { message: "שגיאה לא צפויה" };
  }
};