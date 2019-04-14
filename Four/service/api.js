function getMoviesFromApiAsync() {
    return fetch('http://hieiscore-dev-as.azurewebsites.net/api/Account/Admin?index=1&pageSize=5')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.Index;
      })
      .catch((error) => {
        console.error(error);
      });
  }