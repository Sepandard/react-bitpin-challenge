

export interface Market {
  id: number;
  currency1: Currency
  currency2: Currency
  tradable: boolean;
  otc_tradable: boolean;
  coming_soon: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: PriceInfoModel
  internal_price_info:PriceInfoModel
  price_info:PriceInfoModel
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
  price_increment: string | null;
}

export type Code = 'IRT' | 'USDT'

export interface Currency {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: Array<{
      id: number;
      name: string;
      name_en: string;
      has_chart: boolean;
    }>;
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: number;
  };


  export interface PriceInfoModel {
    created_at: number;
    price: string;
    change: number;
    min: string;
    max: string;
    time: string | null;
    mean: string | null;
    value: string | null;
    amount: string | null;
  };