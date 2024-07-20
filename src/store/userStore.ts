import { create } from "zustand";

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

type UserStore = {
    user: User | null;
    registerUser: (data: RegisterProvider) => Promise<void>;
    loginUser: (data: LoginProvider) => Promise<void>;
    logoutUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    registerUser: async (data: RegisterProvider) => {
        // Set the user directly for demonstration
        set({
            user: {
                email: data.email,
                password: data.password,
                role: "user",
                fullname: data.fullname,
            },
        });
    },
    loginUser: async (data: LoginProvider) => {
        // Simulate a call to a login API
        console.log("Logging in user", data);

        // Set the user directly for demonstration
        set({
            user: {
                email: data.email,
                password: data.password,
                role: "user",
            },
        });
    },
    logoutUser: () => {
        // Clear the user data
        set({ user: null });
    },
}));