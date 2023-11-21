import axios from "axios";

export const useSearch = async (search: any) => {
  const searchPageOptions = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_SEARCHURL,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      query: `${search}`,
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SEARCH_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_SEARCH_HOST,
    },
  };

  const response = await axios.request(searchPageOptions);
  const searchCoins = response.data.data.coins;
  console.log(searchCoins);

  return searchCoins;
};
