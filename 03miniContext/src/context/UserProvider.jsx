import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserProvider = ({children}) => {
    const [userData, setUserData]=useState(null)
  return (
    <UserContext.Provider value={{userData,setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider