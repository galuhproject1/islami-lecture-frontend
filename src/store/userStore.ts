import { create } from "zustand";

type User = {
  email: string;
  password: string;
  role: string;
  fullname?: string;
  fileName?: string;
  target?: string;
  avatar?: File | null;
  references?: string[]; // Updated to handle references
};

type RegisterProvider = {
  fullname?: string;
  email: string;
  password: string;
  password_confirmation?: string; // Added for confirmation check
  fileName?: string;
  target?: string;
  avatar?: File | null; // Added for avatar
  references?: string[]; // Added for references
};

type UserStore = {
  user: User | null;
  registerUser: (data: RegisterProvider) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  registerUser: async (data: RegisterProvider) => {
    // You might want to add validation or transformation logic here

    set({
      user: {
        email: data.email,
        password: data.password,
        role: "user",
        fullname: data.fullname,
        fileName: data.fileName,
        target: data.target,
        avatar: data.avatar,
        references: data.references,
      },
    });
  },
}));
