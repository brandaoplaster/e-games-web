import React from "react";
import { useRouter } from "next/router";
import MainComponent from "@/components/shared/main-component";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <button onClick={() => router.push("Auth/login")}>Login</button>
    </MainComponent>
  );
};

export default Home;
