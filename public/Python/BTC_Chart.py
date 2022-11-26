import matplotlib.pyplot as plt
from pyodide.http import open_url 
import pandas as pd

url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=2400"
df = pd.read_json(open_url(url))

fig = plt.figure(figsize=(10, 6))

stock_df = df.copy()
stock_df = stock_df.rename(columns={'candle_date_time_kst':'Date', 'trade_price':'Close'})
stock_df = stock_df[['Date', 'Close']]
stock_df['Date'] = pd.to_datetime(stock_df['Date'], format='%Y-%m-%d %H:%M:%S', errors='raise')
stock_df.set_index("Date", inplace=True)

plt.plot(stock_df, color = "red", linestyle = 'solid')

fig