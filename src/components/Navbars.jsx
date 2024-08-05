"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../logo192.png";
import mail from "../mail.png";
import bell from "../bell.png";
import setting from "../settings.png";
export function NavbarComponent() {
  return (
    <Navbar fluid rounded className="md:!px-10 md:!py-8 !py-4">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex gap-6 md:order-2 align-middle items-center">
        <div>
          <img style={{ width: "28px" }} src={mail} alt="mail" />
        </div>
        <div>
          <img style={{ width: "28px" }} src={setting} alt="setting" />
        </div>
        <div>
          <img style={{ width: "28px" }} src={bell} alt="notification" />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
