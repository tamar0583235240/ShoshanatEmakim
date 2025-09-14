import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const postData = async (data: any, path = "/data") => {
  try {
    const response: any = await axios.post(`${API_URL}${path}`, data);
    response.status = "success";
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
    return { message: "שגיאה בשליחת הטופס, נסו שוב.", status: "error" };
  }
};

export const getData = async (path = "/data") => {
  try {
    const response: any = await axios.get(`${API_URL}${path}`);
        return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteData = async (data: any, path = "/data") => {
  try {
    const response = await axios.delete(`${API_URL}${path}`, { data });
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
