
const url = "http://localhost:3000/__mocks__/data.json";
function serviceJson():any {
  return fetch(url)
      .then((response) => response.json())
  }
export default serviceJson;