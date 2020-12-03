import React from 'react';

import AuthProvider from "./providers/AuthProvider";
import Routes from "./Routes";

export default ({ children }) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};
