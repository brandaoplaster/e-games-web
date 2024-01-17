import withAuthAdmin from "@/components/with-auth-admin";
import React from "react";

const Home: React.FC = () => {
  return <h1>Admin</h1>;
};

export default withAuthAdmin(Home);
