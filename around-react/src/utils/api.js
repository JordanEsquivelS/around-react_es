class Api {
  constructor(options) {
    this.options = options;
    this.headers = {
      authorization: options.token, // Utiliza el token proporcionado en las opciones
      "Content-Type": "application/json",
    };
  }

  fetchData(url, method = "GET", body = null) {
    const requestOptions = {
      method: method,
      headers: this.headers,
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUserInfo(endPoint) {
    return this.fetchData(
      `${this.options.address}/v1/${this.options.groupId}/${endPoint}`
    ).then((result) => {
      return result;
    });
  }

  getInitialCards(endPoint) {
    return this.fetchData(
      `${this.options.address}/v1/${this.options.groupId}/${endPoint}`
    ).then((result) => {
      return result;
    });
  }
}

const api = new Api({
  address: "https://nomoreparties.co",
  groupId: "web_es_07",
  token: "6b6ff122-c6bd-4191-9431-3243f5375a43",
});

export default api;
