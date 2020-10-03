import React, { Component } from 'react';
import DbList from '../../components/DbList'
import HeaderHome from '../../components/HeaderHome'
import UserWelcome from '../../components/MainPage/UserWelcome'
import {getUserInfos} from '../../services/UserServices/GetUserInfos'

class MainPage extends Component { 

  render() {

    return (
      <div className="main-page container">
       
        <div className="main-page__wrapper">
          <HeaderHome />
          <UserWelcome/>
          <DbList />
        </div>
      </div>
    )

  }
}

export default MainPage