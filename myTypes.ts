import { StaticImageData } from "next/image";
import { type } from "os";
import { ReactElement } from "react";

export type HomeExploreCoin = {
  uuid: string;
  name: string;
  iconUrl: string;
  price: number;
  color: string;
};

export type HomeTop10Coin = {
  rank: number;
  name: string;
  iconUrl: string;
  price: number;
  numberOfMarkets: number;
};

export interface articleImage {
  thumbnail: {
    contentUrl: string;
  };
}

export type IHomeNews = {
  name: string;
  image: string | boolean | any;
  thumbnail: string;
  description: string;
  url: string;
};

export type FooterCoinType = {
  name: string;
  iconUrl: string;
  symbol: string;
  btcPrice: string | number;
  uuid: string;
  rank: number;
  change: string;
  marketCap: string;
};

export type NewsTabType = {
  name: string;
  desc: string;
  image: any;
  thumbnail: string;
  url: string;
};

export type SearchResultType = {
  uuid: string;
  iconUrl: string;
  name: string;
};

export type coinType = {
  rank: number;
  name: string;
  iconUrl: string;
};

export type statResults = {
  total: number;
  totalExchanges: number;
  totalMarketCap: any;
  totalCoins: any;
};

export type newCoinsType = {
  name: string;
  iconUrl: string;
};
