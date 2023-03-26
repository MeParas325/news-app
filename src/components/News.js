import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "business"
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  i = 0
  constructor(){
    super()
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount(){
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this?.props?.country}&category=${this?.props?.category}&apiKey=3671f58f31eb4c94acfb56fe503a617b&pageSize=20`);
    // console.log(typeof data)
    // console.log(data)
    let parsedData = await data?.json()
    // console.log(typeof parsedData)
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parseInt(parsedData.totalResults)
      
    })

  }

  handleNextClick = async () =>{
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this?.props?.country}&category=${this?.props?.category}&apiKey=3671f58f31eb4c94acfb56fe503a617b&pageSize=20&page=${this.state.page + 1}&pageSize=20`);
      let parsedData = await data?.json()
    
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    
      })

    



  }

  handlePreviousClick = async () =>{

    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this?.props?.country}&category=${this?.props?.category}&apiKey=3671f58f31eb4c94acfb56fe503a617b&pageSize=20&page=${this.state.page - 1}&pageSize=20`);
    let parsedData = await data?.json()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles

    })


  }
  render() {
    // console.log(this.state.articles)
    return (
        <>
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles?.map((element)=>{
            return <div className="col-md-4" key={this.i++}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>

          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' onClick={this.handlePreviousClick} className='btn btn-dark'>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} type='button' onClick={this.handleNextClick} className='btn btn-dark'>Next &rarr;</button>
        </div>
      </div>
      </>

    )
  }
}

export default News