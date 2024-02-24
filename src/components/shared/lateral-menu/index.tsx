import React from "react";
import styles from "./styles.module.css";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faDollarSign,
  faGamepad,
  faLaptop,
  faSignOutAlt,
  faSignal,
  faTicketAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SignOutService from "@/libs/signOutService";

const LateralMenu: React.FC = () => {
  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/admin">
          <FontAwesomeIcon
            icon={faSignal}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Home
          <hr />
        </Link>

        <Link href="/admin/users/list">
          <FontAwesomeIcon
            icon={faUser}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Users
          <hr />
        </Link>

        <Link href="/admin/products/list">
          <FontAwesomeIcon
            icon={faGamepad}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Products
          <hr />
        </Link>

        <Link href="/admin/categories/list">
          <FontAwesomeIcon
            icon={faCheckSquare}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Categories
          <hr />
        </Link>

        <Link href="/admin/systemrequirements/list">
          <FontAwesomeIcon
            icon={faLaptop}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          System Requirements
          <hr />
        </Link>

        <Link href="/admin/coupons/list">
          <FontAwesomeIcon
            icon={faTicketAlt}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Coupons
          <hr />
        </Link>

        <Link href="/admin/#">
          <FontAwesomeIcon
            icon={faDollarSign}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Financial
          <hr />
        </Link>

        <Link href="/auth/login" onClick={SignOutService.execute}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          Exit
          <hr />
        </Link>
      </div>
    </div>
  );
};

export default LateralMenu;
