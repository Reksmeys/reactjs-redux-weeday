import React, { Component } from 'react'
import ArticleList from './components/Article'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <ArticleList />
      </div>
    )
  }
}

export const baseURL = 'http://110.74.194.124:15011/'
