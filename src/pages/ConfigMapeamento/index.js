import React, {Component, useContext} from 'react'
import ComponentList from './ComponentList'
import StoreContext from '../../components/Store/Context'

class TelaInicial extends Component{

    constructor(){    
        const { token } = useContext(StoreContext);
    }

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