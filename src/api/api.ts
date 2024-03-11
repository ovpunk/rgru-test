export const postsFetch = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const currentPostFetch = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
