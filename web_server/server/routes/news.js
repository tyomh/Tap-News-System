var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  news = [
          {
            'url':'http://www.google.com',
            'title':"test",
            'description':"test",
            'source':'cnn',
            'urlToImage':'https://www.google.com/search?tbm=isch&source=hp&biw=1513&bih=870&ei=iJGRW_aJAovysAWhg6C4DQ&q=k&oq=k&gs_l=img.3...1576.1576.0.1775.2.2.0.0.0.0.0.0..0.0....0...1ac.1.64.img..2.0.0.0...0.weJ8KPO2uto#imgrc=d9sP4Ch_9L2l-M:',
            'digest':"3RjuEomJo2601syZbU70HA==",
            'reason':"recommend"
          }]
    res.json(news);
});

module.exports = router;
