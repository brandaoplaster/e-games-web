import React from "react";
import MainComponent from "@/components/shared/main-component";
import LoginForm from "@/components/login-form";

const Login: React.FC = () => {
  return (
    <MainComponent>
      <LoginForm titlePhrase="Title" buttonPhrase="Login" />
    </MainComponent>
  );
};

export default Login;
