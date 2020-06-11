export const handleResponse = (response, body) => {
  if (response.statusCode === 200) {
    return JSON.parse(body);
  }
  throw new Error(
    "Network response was not ok. Error: ",
    response.statusMessage
  );
};

export const handleError = (error) => {
  console.error("API call failed. " + error);
  throw error;
};
