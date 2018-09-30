# Tap-News-System
This is a real time news scraping and recommendation system. The system uses a news pipeline to scrape latest news from various of sources such CNN, BBC. To render the news, I built a single-page web application using React. In addition, in order to customize news list for users, I designed and built a training pipeline for news topic modeling using Tensorflow.

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
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/newspipeline.jpeg)  

# Recommendation service  
![image](https://github.com/tyomh/Tap-News-System/blob/master/pictures/recommendation.jpeg)


