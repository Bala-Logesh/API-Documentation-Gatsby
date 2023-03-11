import React from "react";
import { Link } from "gatsby";
import Application from "../components/Application";
import Layout from "../components/Layout";

const applications = () => {
  const appls = [
    {
      id: 1,
      application: "Posts Website",
      author: "JSON Placeholder",
      slug: "posts-website",
      endpoints: [
        {
          endpoint_id: "posts",
          url: "https://jsonplaceholder.typicode.com/posts",
        },
      ],
    },
    {
      id: 2,
      application: "Todos Website",
      author: "JSON Placeholder",
      slug: "todos-website",
      endpoints: [
        {
          endpoint_id: "todos",
          url: "https://jsonplaceholder.typicode.com/todos",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Link className="btn btn-2" to="/">
        Back
      </Link>
      <div className="container flex-column">
        {appls.map((app, index) => (
          <Application key={index} application={app} />
        ))}
      </div>
    </Layout>
  );
};

export default applications;
