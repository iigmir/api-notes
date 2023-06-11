# [FinMind](https://finmindtrade.com)

* <https://finmindtrade.com/analysis/#/data/api>

## `/api/v4/data`

| Parameter | Description |
|---|---|
| dataset | Dataset name |
| data_id | Data ID |
| start_date | Start date |
| end_date | End date |
| token | Login token |

### Avaiable values for `dataset`

| Dataset name in Chinese | Description |
| 台股總覽 | TaiwanStockInfo
| 股價日成交資訊 | TaiwanStockPrice
| 即時股價 | TaiwanStockPriceTick
| 歷史股價-Tick | TaiwanStockPriceTick
| 即時最佳五檔 | TaiwanStockPriceBidAsk
| 歷史最佳五檔 | TaiwanStockPriceBidAsk
| 個股 PER、PBR 資料表 | TaiwanStockPER
| 每 5 秒委託成交統計 | TaiwanStockStatisticsOfOrderBookAndTrade
| 加權指數 | TaiwanVariousIndicators5Seconds
| 加權、櫃買報酬指數 | TaiwanStockTotalReturnIndex
| 個股融資融劵表 | TaiwanStockMarginPurchaseShortSale
| 整體市場融資融劵表 | TaiwanStockTotalMarginPurchaseShortSale
| 個股三大法人買賣表 | TaiwanStockInstitutionalInvestorsBuySell
| 整體市場三大法人買賣表 | TaiwanStockTotalInstitutionalInvestors
| 外資持股表 | TaiwanStockShareholding
| 股權持股分級表 | TaiwanStockHoldingSharesPer
| 借券成交明細 | TaiwanStockSecuritiesLending
| 綜合損益表 | TaiwanStockFinancialStatements
| 現金流量表 | TaiwanStockCashFlowsStatement
| 資產負債表 | TaiwanStockBalanceSheet
| 股利政策表 | TaiwanStockDividend
| 除權除息結果表 | TaiwanStockDividendResult
| 月營收表 | TaiwanStockMonthRevenue
| 期貨、選擇權即時報價總覽 | TaiwanFutOptTickInfo
| 期貨、選擇權即時報價 | TaiwanFutOptTick
| 期貨、選擇權日成交資訊總覽 | TaiwanFutOptDailyInfo
| 期貨日成交資訊 | TaiwanFuturesDaily
| 選擇權日成交資訊 | TaiwanOptionDaily
| 期貨交易明細表 | TaiwanFuturesTick
| 選擇權交易明細表 | TaiwanOptionTick
| 相關新聞 | TaiwanStockNews
| 美國股票清單列表 | USStockInfo
| 美國股價每分資料表 | USStockPriceMinute
| 美國股價 | USStockPrice
| 英國股價資料表 | UKStockPrice
| 英國股票清單列表 | UKStockInfo
| 歐洲股票清單列表 | EuropeStockInfo
| 歐洲股價資料表 | EuropeStockPrice
| 日本股票清單列表 | JapanStockInfo
| 日本股價資料表 | JapanStockPrice
| 匯率 | TaiwanExchangeRate
| 利率資料表 | InterestRate
| 黃金價格表 | GoldPrice
| 原油資料表 | CrudeOilPrices
| 各國貨幣發行量表 | CurrencyCirculation
| 政府公債殖利率表 | GovernmentBondsYield
| 選擇權、期貨三大法人買賣 | TaiwanFutOptInstitutionalInvestors
| 期貨三大法人買賣 | TaiwanFuturesInstitutionalInvestors
| 選擇權三大法人買賣 | TaiwanOptionInstitutionalInvestors
| 期貨各卷商每日交易 | TaiwanFuturesDealerTradingVolumeDaily
| 選擇權各卷商每日交易 | TaiwanOptionDealerTradingVolumeDaily
| 當日沖銷交易標的及成交量值 | TaiwanStockDayTrading
| 每5秒指數統計 | TaiwanStockEvery5SecondsIndex
| 信用額度總量管制餘額表 | TaiwanDailyShortSaleBalances
| 台股分點資料表 | TaiwanStockTradingDailyReport
| 台股即時資訊 | taiwan_stock_tick_snapshot
| 台股期貨即時資訊 | taiwan_futures_snapshot
| 台股選擇權即時資訊 | taiwan_options_snapshot
| 恐懼與貪婪指數 | CnnFearGreedIndex
| 證券商資訊表 | TaiwanSecuritiesTraderInfo
| 減資恢復買賣參考價格表 | TaiwanStockCapitalReductionReferencePrice
| 台股八大行庫買賣表 | TaiwanStockGovernmentBankBuySell"

### Example

<https://api.finmindtrade.com/api/v3/data?dataset=TaiwanExchangeRate&data_id=JPY&date=2023-06-01> returns:

```json
{"msg":"success","status":200,"data":[{"date":"2023-06-01","currency":"JPY","cash_buy":0.2104,"cash_sell":0.2232,"spot_buy":0.2177,"spot_sell":0.2217},{"date":"2023-06-02","currency":"JPY","cash_buy":0.2113,"cash_sell":0.2241,"spot_buy":0.2186,"spot_sell":0.2226},{"date":"2023-06-05","currency":"JPY","cash_buy":0.2093,"cash_sell":0.2221,"spot_buy":0.2166,"spot_sell":0.2206},{"date":"2023-06-06","currency":"JPY","cash_buy":0.2114,"cash_sell":0.2242,"spot_buy":0.2187,"spot_sell":0.2227},{"date":"2023-06-07","currency":"JPY","cash_buy":0.2109,"cash_sell":0.2237,"spot_buy":0.2182,"spot_sell":0.2222},{"date":"2023-06-08","currency":"JPY","cash_buy":0.2108,"cash_sell":0.2236,"spot_buy":0.2181,"spot_sell":0.2221},{"date":"2023-06-09","currency":"JPY","cash_buy":0.2109,"cash_sell":0.2237,"spot_buy":0.2182,"spot_sell":0.2222}]}
```

Example parameter:

```json
{
    "dataset": "TaiwanExchangeRate",
    "data_id": "JPY",
    "date": "2023-06-01",
}
```

## References

* <https://finmind.github.io/v3/tutor/ExchangeRate/>
