import React, {Component} from 'react'
import ComponentList from './ComponentList'

class TelaInicial extends Component{

    render(){
        return(
            <div>
                <ComponentList></ComponentList>
                <ComponentList></ComponentList>
            </div>
        );
    }
}

export default TelaInicial