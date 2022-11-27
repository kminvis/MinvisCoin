import matplotlib.pyplot as plt
from pyodide.http import open_url 
import pandas as pd
import time

url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=240"
df = pd.read_json(open_url(url))

fig = plt.figure(figsize=(10, 6))

df = df.rename(columns={'candle_date_time_kst':'Date', 'opening_price':'Open', 'high_price':'High', 'low_price':'Low', 'trade_price':'Close', 'candle_acc_trade_volume': 'Volume'})
df = df[['Date', 'Open', 'High', 'Low', 'Close', 'Volume']]
df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d %H:%M:%S', errors='raise')

for i in range(200):
    if df['Open'][i] < df['Close'][i]:
        plt.vlines(df['Date'][i], df['Open'][i],df['Close'][i],color='red',linewidth=2, zorder = 2)
    else:
        plt.vlines(df['Date'][i], df['Open'][i],df['Close'][i],color='blue',linewidth=2, zorder = 2)

    if df['Open'][i] < df['Close'][i]:
        plt.vlines(df['Date'][i], df['Low'][i],df['High'][i],color='red', linewidth=1, zorder = 0)
    else:
        if df['Open'][i] > df['Close'][i]:
            plt.vlines(df['Date'][i], df['Low'][i],df['High'][i],color='blue', linewidth=1, zorder = 0)
        else:
            plt.vlines(df['Date'][i], df['Low'][i],df['High'][i],color='black', linewidth=1, zorder = 0)
            plt.plot(df['Date'][i], df['Close'][i],marker='_',color='black', zorder = 2)

plt.tight_layout()
fig