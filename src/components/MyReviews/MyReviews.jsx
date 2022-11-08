import { Button, Table } from "flowbite-react";
import React from "react";

const MyReviews = () => {
  return (
    <div className="w-9/12 mx-auto my-20">
      <Table>
        <Table.Head>
          <Table.HeadCell>Service Name</Table.HeadCell>
          <Table.HeadCell>Review</Table.HeadCell>
          <Table.HeadCell>Option</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Review</Table.Cell>
            <Table.Cell>
              <div className="flex">
                <Button className="mr-1" size="xs">
                  Edit
                </Button>
                <Button size="xs">delete</Button>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyReviews;
