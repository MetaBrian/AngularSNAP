from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://snap.untapped.gg/cards').text
soup = BeautifulSoup(html_text, 'lxml')

print(soup)