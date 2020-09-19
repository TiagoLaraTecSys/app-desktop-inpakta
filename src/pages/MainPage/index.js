import React, { Component } from 'react';
import DbList from '../../components/DbList'
import Header from '../../components/Header'

class MainPage extends Component { 

  render() {
    return (
      <div className="main-page container">
        <Header/>
        <DbList />
      </div>
    )

  }
}

export default MainPage