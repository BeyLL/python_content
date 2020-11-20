#-*-coding:utf-8-*-
import urllib2
from bs4 import BeautifulSoup


#爬取城市吗
cityCode = urllib2.urlopen('http://www.weather.com.cn/')
cityHtml = BeautifulSoup(cityCode,'html.parser')

resp=urllib2.urlopen('http://www.weather.com.cn/weather/101010100.shtml')
soup=BeautifulSoup(resp,'html.parser')
tagToday=soup.find('p',class_="tem")
print tagToday
try:
    temperatureHigh=tagToday.span.string
except AttributeError as e:
    temperatureHigh=tagToday.find_next('p',class_="tem").span.string

temperatureLow=tagToday.i.string
weather=soup.find('p',class_="wea").string

print '最高温度：',temperatureHigh
print '最低气温：',temperatureLow
print  '天气：',weather

# 地区列表
area_list = ['hb','db','hd','hz','hn','xb','xn','gat']
link_path = 'http://www.weather.com.cn/textFC/'

def cell_data(area):
    source =  urllib2.urlopen(link_path+area+'.shtml')
    source_html =  BeautifulSoup(source,'html.parser')
    cell_html = source_html.find('table')
    print cell_html



def all_data():
    for index in range(len(area_list)):
        cell_data(area_list[index])
        break




all_data()