import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/assets/logo.png" alt="Logo e-games" width={220} height={40} />
      </a>
    </Link>
  )
};

export default Logo;
