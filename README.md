# Tap-News-System
This is a real time news scraping and recommendation system. The system uses a news pipeline to scrape latest news from various of sources such CNN, BBC. To render the news, a single-page web application is built using React. In addition, in order to customize news list for users, I designed and built a training pipeline for news topic modeling using Tensorflow.

● Implemented a data pipeline which monitors, scrapes and dedupes latest news (MongoDB, Redis, RabbitMQ, TF-IDF);

● Built a single-page web application for users to browse news (React, Node.js, RPC, SOA, JWT);

● Implemented a click event log processor which collects users’ click logs, then updates a news preference model for each user (NLP);

● Designed and built an offline training pipeline for news topic modeling (Tensorflow, DNN, NLP);

● Deployed an online classifying service for news topic modeling using the trained model.
   

# ScreenShot
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/screenshot.PNG). 

# Architecture
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/structure.PNG)

# Life Cycle
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/lifecycle.PNG)  

# News Pipeline  
News pipeline is composed by news monitor, web scraper and news deduper, news is sent and received between them by RabbitMQ which decouples these components. The news monitor use [News API](https://newsapi.org) to derive latest news and store news title MD5 digest into Redis to avoid sending same news to the message queue. The web scraper use a third party package [Newspaper](https://newspaper.readthedocs.io/en/latest/) to fetch corresponding news articles from offical news website. News depuper implements TF-IDF to calculate similarity of news to avoid storing same news from different news source into MongoDB. For similar news, only store the one published firstly.  

![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/newspipeline.jpeg)  

# Recommendation service 
A click log processor is built to implement a time decay model. If a news topic is clicked, p = (1-α)p + α, if not, p = (1-α)p, Where p is the selection probability, and α is the degree of weight decrease. The result of this is that the nth most recent selection will have a weight of (1-α)^n.    
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/recommendation.jpeg)


