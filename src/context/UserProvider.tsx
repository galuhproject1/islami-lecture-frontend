import { createContext, useState, FC, ReactNode } from "react";

type User = {
    email: string;
    password: string;
    role: string;
    fullname?: string;
    fileName?: string;
    target?: string;
    source?: string;
};

type RegisterProvider = {
    fullname?: string;
    email: string;
    password: string;
    fileName?: string;
    target?: string;
    source?: string;
};

type LoginProvider = {
    email: string;
    password: string;
};

type UserContextType = {
    user: User | null;
    registerUser: (data: RegisterProvider) => Promise<void>;
    loginUser: (data: LoginProvider) => Promise<void>;
    logoutUser: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const registerUser = async (data: RegisterProvider) => {
        // For demonstration purposes, set the user directly
        setUser({
          email: data.email,
          password: data.password,
          role: "user",
          fullname: data.fullname,
        });
      };

    const loginUser = async (data: LoginProvider) => {
        // Simulate a call to a login API
        console.log("Logging in user", data);

        // For demonstration purposes, we are directly setting the user
        setUser({ email: data.email, password: data.password, role: "user" });
    };

    const logoutUser = () => {
        // Clear the user data
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{ user, registerUser, loginUser, logoutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;