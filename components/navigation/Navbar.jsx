"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/">
            <div className="btn btn-ghost text-xl">Home</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/user">User</a>
            </li>
            {/* <li>
              <details>
                <summary>Menu 2</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <a href="/shop">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
