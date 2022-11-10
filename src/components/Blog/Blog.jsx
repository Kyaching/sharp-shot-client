import { Card, Table } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="m-4 mb-20">
      <div className="md:w-1/2 mx-auto">
        <Helmet>
          <title>Sharp Shot - Blog</title>
        </Helmet>
        <h2 className="text-3xl text-center font-semibold">My Blog</h2>
        <Card className="my-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.1: Difference between SQL and NoSQL?
          </h5>
          <Table>
            <Table.Head>
              <Table.HeadCell>SQL</Table.HeadCell>
              <Table.HeadCell>NoSQL</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>relational</Table.Cell>
                <Table.Cell>non-relational</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  use structured query language and have a predefined schemas
                </Table.Cell>
                <Table.Cell>
                  NoSQL databases have dynamic schemas for unstructured data.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>are vertically scalable </Table.Cell>
                <Table.Cell>are horizontally scalable </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>are are table based </Table.Cell>
                <Table.Cell>
                  are document, key-value, graph or wide-column stores.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card>
        <Card className="my-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.2: What is JWT, and how does it work?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: <br /> 1. The header
            and the payload. <br /> 2. The signature. <br /> The JOSE (JSON
            Object Signing and Encryption) header contains the type of token —
            JWT in this case — and the signing algorithm.
          </p>
        </Card>
        <Card className="my-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.1:What is the difference between javascript and NodeJS?
          </h5>
          <Table>
            <Table.Head>
              <Table.HeadCell>JavaScript</Table.HeadCell>
              <Table.HeadCell>Node.js</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  It is an accessible, bridge, parsed, lightweight, reactive,
                  and web apps programming language.
                </Table.Cell>
                <Table.Cell>
                  It's a bridge, open-source Js runtime environment for
                  executing Js on the server.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  It's a programming language, after all. Any browser with a
                  competent browser engine will operate.
                </Table.Cell>
                <Table.Cell>
                  It's a JavaScript translator and environment that includes
                  some valuable libraries for JavaScript programming.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  It's most commonly used on client-side servers.{" "}
                </Table.Cell>
                <Table.Cell>It's mainly popular on the server-side.</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  It's made for creating network-centric apps.
                </Table.Cell>
                <Table.Cell>
                  It's made for real-time data-intensive apps that run on
                  multiple platforms.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card>
        <Card className="my-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.4: How does NodeJS handle multiple requests at the same time?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
