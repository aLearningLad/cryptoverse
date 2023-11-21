import { create } from "zustand";
import axios from "axios";
require("dotenv").config();

const store = (set) => ({
  trackedCoins: [],

  addCoin: (coinId, coinDetails) =>
    set((state) => {
      if (state.trackedCoins.some((coin) => coin.id === coinId)) {
        return state;
      }

      const newCoin = { id: coinId, details: coinDetails };
      return { trackedCoins: [...state.trackedCoins, newCoin] };
    }),

  removeCoin: (coinId) =>
    set((state) => ({
      trackedCoins: state.trackedCoins.filter((coin) => coin.id !== coinId),
    })),

  usehomeExploreCoins: async () => {
    const homeExploreOptions = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "100",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_HOME_EXLPORE_COINS_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINRANKING_HOST,
      },
    };

    const response = await axios.request(homeExploreOptions);
    const coins = response.data.data.coins;
    // console.log(coins);

    return coins;
  },

  useHomeTop10Exchanges: async () => {
    const homeTop10ExhangesOptions = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_TOP10_EXCHANGES,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: "3",
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TOP10_EXCHANGES_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINRANKING_HOST,
      },
    };

    const response = await axios.request(homeTop10ExhangesOptions);
    const top = response.data.data.exchanges;
    // console.log(top);

    return top;
  },

  useGetHomeNews: async () => {
    const homeNewsOptions = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_NEWS_URL,
      params: {
        q: "crypto",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_NEWS_HOST,
      },
    };

    const response = await axios.request(homeNewsOptions);
    const news = response.data.value;

    return news;
  },

  useHomeHotCoins: async () => {
    const homeHotCoinsOptions = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_HOTCOINS,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "4",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_HOTCOINS_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_HOTCOINS_HOST,
      },
    };
    const response = await axios.request(homeHotCoinsOptions);
    const top4 = response.data.data.coins;
    //   console.log(top4);
    return top4;
  },

  useGetTop40: async () => {
    const top40options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_TOP40_URL,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "40",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TOP40_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_TOP40_HOST,
      },
    };

    const response = await axios.request(top40options);
    const coins = response.data.data.coins;
    const stats = response.data.data.stats;
    // console.log(coins);
    // console.log(stats);

    const data = [coins, stats];
    return data;
  },

  useNewestCoins: async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/stats",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
      },
      headers: {
        "X-RapidAPI-Key": "8b7fa490cbmsh7d16921daddf254p1aa282jsn224d41edb479",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    const coins = response.data.data.newestCoins;
    console.log(coins);

    return coins;
  },
});

export const useStore = create(store);
export const useAddCoin = () => useStore((state) => state.addCoin);
export const useTrackedCoins = () => useStore((state) => state.trackedCoins);
