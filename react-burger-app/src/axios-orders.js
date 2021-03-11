import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-e503c-default-rtdb.firebaseio.com/",
});

export default instance;
