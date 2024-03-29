import api from "./api";
import User from "@/dtos/user";

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UsersService = {
  signIn: ({ email, password }: SignInData) =>
    api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password
    }),

  signUp: ({
    name,
    email,
    password,
    password_confirmation
  }: SignUpData) =>
    api.post<void>('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
    }),
}

export default UsersService;
