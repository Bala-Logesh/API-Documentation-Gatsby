import React from "react";
import { Link } from "gatsby";
import EndPoint from "../components/EndPoint";
import Layout from "../components/Layout";

const endpoints = () => {
  const endpoint = [
    {
      application_id: 1,
      application: "Posts Website",
      slug: "posts-website",
      base_url: "https://jsonplaceholder.typicode.com/posts",
      endpoint_id: "posts",
      description: "List of 100 posts in the JSON Placeholder Typicode API",
      count: 6,
    },
    {
      application_id: 1,
      application: "Todos Website",
      slug: "todos-website",
      base_url: "https://jsonplaceholder.typicode.com/todos",
      endpoint_id: "todos",
      description: "List of 100 todos in the JSON Placeholder Typicode API",
      count: 6,
    },
  ];

  return (
    <Layout>
      <Link className="btn btn-2" to="/applications">
        Back
      </Link>
      <div className="container flex">
        {endpoint.map((ep) => (
          <EndPoint key={ep.id} ep={ep} isSlugReq={true} />
        ))}
      </div>
    </Layout>
  );
};

export default endpoints;
