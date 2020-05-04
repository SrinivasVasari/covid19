import axios from "axios";

const baseurl = "https://api.covid19api.com";

export const fetchData = async () => {
  let url = `${baseurl}/summary`;
  try {
    const { data } = await axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${baseurl}/countries`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    const countries = data.map((country) => country.Country);
    return countries;
  } catch (error) {
    return error;
  }
};
