import React from 'react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';
// import Auth from '../Auth/Auth';
import './NewsPanel.css';
import NewsCard from '../NewsCard/NewsCard';
import _ from 'lodash';


class NewsPanel extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         news : null,
    //         page_num: 0
    //     };
    // }

    constructor(){
      super();
      this.state = {news:null, pageNum:1, totalPages:1, loadedAll:false};
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
      let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
        console.log('Loading more news');
        this.loadMoreNews();
      }
    }

    // scrollHandler() {
    //     const scroll_y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    //     if ((scroll_y + window.innerHeight) >= document.body.offsetHeight + 20) {
    //         // console.log(`${scroll_y} + ${window.innerHeight} = ${scroll_y + window.innerHeight} ? ${document.body.offsetHeight}`)
    //         console.log('scroll handler: ...')
    //         this.loadMoreNews();
    //     }
    // }

    // componentDidMount() {
    //     this.loadMoreNews();
    //     this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    //     window.addEventListener('scroll', () => this.scrollHandler()); // closure neccessary here
    // }
    componentDidMount(){
      this.loadMoreNews();
      this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
      window.addEventListener('scroll', this.handleScroll);
    }

    loadMoreNews() {
      if (this.state.loadedAll == true) {
        return;
      }

      console.log('Loading more news');

      const news_url = 'http://' + window.location.hostname + ':3000' + '/news/userId/' + Auth.getEmail() + '/pageNum/' + this.state.pageNum;
      const request = new Request(encodeURI(news_url), {
        method: 'GET',
        headers: {
          'Authorization': 'bearer ' + Auth.getToken(),
        },
        cache: false
      });

      fetch(request)
        .then((res) => res.json())
        .then((news) => {
          if (!news || news.length === 0) {
            this.setState({loadedAll: true});
          }

          this.setState({
            news: this.state.news ? this.state.news.concat(news) : news,
            PageNum: this.state.pageNum + 1
          });
        });
    }
    // loadMoreNews() {
    //     if (!Auth.isAuthenticated()) {
    //         // TODO: redirect to login page
    //         this.context.router.history.replace('/login');
    //         return;
    //     }
    //
    //     const url = `${window.location.origin}/news/userId/${Auth.getEmail()}/pageNum/${this.state.page_num}`;
    //
    //     const request = new Request(encodeURI(url), {
    //         headers: { // otherwise the server would not understand
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + Auth.getToken()
    //         }
    //     });
    //     fetch(request)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json();
    //             }
    //
    //             // TODO: not authenticated; redirect to login page?
    //             if (res.status === 401) {
    //                 Auth.deAuthenticate();
    //                 this.context.router.history.replace('/login');
    //                 throw Error('user not authenticated')
    //             }
    //             if (res.status === 500) {
    //                 // TODO: server might send back some error info, but not take it here
    //                 throw Error('Fetching news: server error!');
    //             }
    //             throw Error('Fetching news: other error!')
    //         })
    //         .then(new_list => {
    //             this.setState({
    //                 news: this.state.news == null ? new_list : this.state.news.concat(new_list),
    //                 page_num: this.state.page_num + 1
    //             }
    //         )})
    //         .catch((err => console.error(err))); // server error
    // }


    renderNews() {
        const news_list = this.state.news.map(news => {
            return (
                <a className='list-group-item' key={news.digest} href="#">
                    <NewsCard news={news} />
                </a>
            )
        })

        return (
            <div className="container-fluid">
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.news) {
            return(
                <div>
                    {this.renderNews()}
                </div>
            )
        }
        return (
            <div> loading... </div>
        )
    }
}

// NewsPanel.contextTypes = {
//     router: PropTypes.object.isRequired
// }

export default NewsPanel;
