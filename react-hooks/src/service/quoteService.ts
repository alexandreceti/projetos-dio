const url = <string> process.env.REACT_APP_API;

export const getQuote = () => {
  return fetch(url).then(response => response.json())
};

