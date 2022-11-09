import axios from "axios";

axios.defaults.baseURL = "https://farm-api-todo.herokuapp.com/"

const setToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common[`Authorization`];
    }
};
export { setToken };