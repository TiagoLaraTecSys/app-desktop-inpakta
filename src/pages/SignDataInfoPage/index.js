import React, { Component } from 'react';
import DbProperties from '../../components/DbProperties'
import Header from '../../components/Header'

class CadDbProperties extends Component { 

  render() {
    return (
      <div className="main-page container">
        <Header/>
        <DbProperties />
      </div>
    )

  }
}

export default CadDbProperties