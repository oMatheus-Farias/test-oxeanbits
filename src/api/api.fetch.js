const fechApi = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export default fechApi;
