"use client";

import { Avatar, Badge, Table } from "flowbite-react";

export function RecentOrders() {
  return (
    <div className="overflow-x-auto !text-white  bg-[#35383b]">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="bg-transparent  !text-white">
            Customer
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent  !text-white">
            Order No.
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent  !text-white">
            Amount
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent  !text-white">
            Status
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y  !text-white">
          <Table.Row className="dark:border-gray-700  !text-white dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap flex items-center  font-medium text-gray-900 dark:text-white">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="inline-block ml-4">Customer 1</span>
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <Badge className=" rounded-full border" color="success">
                Success
              </Badge>
            </Table.Cell>
          </Table.Row>{" "}
          <Table.Row className="dark:border-gray-700  !text-white dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap flex items-center  font-medium text-gray-900 dark:text-white">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="inline-block ml-4">Customer 1</span>
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <Badge className=" rounded-full border" color="success">
                Success
              </Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="dark:border-gray-700  !text-white dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap flex items-center  font-medium text-gray-900 dark:text-white">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="inline-block ml-4">Customer 1</span>
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <Badge className=" rounded-full border" color="success">
                Success
              </Badge>
            </Table.Cell>
          </Table.Row>{" "}
          <Table.Row className="dark:border-gray-700  !text-white dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap flex items-center  font-medium text-gray-900 dark:text-white">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="inline-block ml-4">Customer 1</span>
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <Badge className=" rounded-full border" color="success">
                Success
              </Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="dark:border-gray-700  !text-white dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap flex items-center  font-medium text-gray-900 dark:text-white">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="inline-block ml-4">Customer 1</span>
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <Badge className=" rounded-full border" color="success">
                Success
              </Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
