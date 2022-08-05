const BASE_URL = process.env.REACT_APP_API_URL;

// Holds the functionality for GET,POST and DELETE requests.

const Api = {
  // GET request
  get(url = "") {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url).then((res) => {
        // Check is res is ok then resolve || reject
        return res.ok
          ? res.json().then((res) => resolve(res))
          : res.json().then((res) => reject(res));
      });
    });
  },

  // POST request
  post(url = "", data) {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        // Check is res is ok then resolve || reject
        return res.ok
          ? res.json().then((res) => resolve(res))
          : res.json().then((res) => reject(res));
      });
    });
  },

  // DELETE request
  delete(url = "") {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url, {
        method: "DELETE",
      }).then((res) => {
        // Check is res is ok then resolve || reject
        return res.ok
          ? res.json().then((res) => resolve(res))
          : res.json().then((res) => reject(res));
      });
    });
  },
};

export default Api;
