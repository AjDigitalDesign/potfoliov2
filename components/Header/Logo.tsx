import React from "react";
import logo from "../../public/logov1.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} width={60} height={50} alt="Aj Jardiah Jr" />
      </Link>
    </div>
  );
};

export default Logo;
