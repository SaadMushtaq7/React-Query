import axios from "axios";

export const fechAllPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`);
  /* .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });*/
};

export const createPost = (title, body) => {
  return axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    body: {
      title: title,
      body: body,
      userId: 1,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  /* .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });*/
};

export const deletePost = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  /*.then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err;
    });*/
};

export const updatePost = (id, title, body, userId) => {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    body: {
      id: id,
      title: title,
      body: body,
      userId: userId,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  /* .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });*/
};
