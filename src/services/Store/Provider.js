import React from 'react'
import Context from './Context'

const StoreProvider = ({ children }) => {

    return (
        <Context.Provider>
            value=({
                btoken,
                setToken
            })
                {children}
        </Context.Provider>
    )
}

export default StoreProvider