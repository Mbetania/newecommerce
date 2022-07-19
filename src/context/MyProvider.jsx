import React, { useState } from 'react'
import { createContext } from 'react'

export const Appcontext = createContext()


export const MyProvider = ({children}) => {
    const [state, setState] = useState()



return (
    <Appcontext.Provider value={[state,setState]}>
        {children}
    </Appcontext.Provider>
)
}
