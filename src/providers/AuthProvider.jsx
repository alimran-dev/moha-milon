import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    console.log(children)
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;