import React, {Component} from 'react'
import IconEngrenagem from '../../icons/icon-engrenagem.svg'

class HeaderHome extends Component { 

  render() {
    return (
      <div className="header-home">
        <nav>
          <ul className="header-home__links">
            <li>
              HOME
            </li>
            <li>
              OPÇÕES 
            </li>
            <li>
              PERFIL 
            </li>
          </ul>
          <div className="header-home__buttons">
            <div className="header-home__icon">
              <img src={IconEngrenagem}/>  
            </div>
            <div>
              <button className="header-home__sair" >sair</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
} 

export default HeaderHome 