import React, { Component } from 'react';
import DbList from '../../components/DbList'
import Header from '../../components/Header'

class MainPage extends Component { 

  render() {
    return (
      <div className="main-page container">
        <Header />
        <div className="main-page__wrapper">
          <DbList />
        </div>
      </div>
    )

  }
}

export default MainPage