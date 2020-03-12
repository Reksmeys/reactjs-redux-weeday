import React, { Component } from 'react'
import {fetchArticle} from './../actions/articleAction'
import {connect} from 'react-redux'
class ArticleList extends Component {
    componentWillMount(){
        this.props.fetchArticle()
    }
    render() {
        console.log(this.props.articles)
        return (
            <div>
                
            </div>
        )
    }
}

const mTp = (store) => {
    return {
        articles: store.articleR.articles
    }
}

export default connect(mTp, {fetchArticle})(ArticleList)
