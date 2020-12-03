import React, { useState } from 'react';

import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = React.createContext({});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            login: async () => {
                const fakeUser = { username: 'Sam' };
                setUser(fakeUser);
                AsyncStorage.setItem("user", JSON.stringify(fakeUser));
            },
            logout: async () => {
                setUser(null);
                AsyncStorage.removeItem("user");
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
