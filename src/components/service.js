import axios from "axios";

export const fetchData = async (id) => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res);
  const { data } = response;
  return data;
};
