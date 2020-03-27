import React from 'react';

const AuthContext = React.createContext();

function AuthProvider(props) {
    const data = {
        user: null
    };
    return (
        <AuthContext.Provider value={data} {...props} />
    )
}

function useAuth() {
    const context = React.useContext(AuthContext)

    if (context === undefined) {
        throw new Error("getAuth must be used within a AuthProvider")
    }

    return context
}

export { AuthProvider, useAuth }
