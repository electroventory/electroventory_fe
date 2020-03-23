import React from 'react'
import { useAuth } from './AuthContext'

const UserContext = React.createContext()

function UserProvider(props) {
    const auth = useAuth();
    return <UserContext.Provider value={auth.user} {...props} />
}

function useUser() {
    const context = React.useContext(UserContext)

    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider")
    }

    return context
}

export { UserProvider, useUser }