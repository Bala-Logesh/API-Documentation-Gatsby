import React from "react";
import { Link, graphql } from "gatsby";
import Application from "../components/Application";
import Layout from "../components/Layout";

const applications = ({ data }) => {
  
  const appls = data.allJson.edges;

  return (
    <Layout>
      <Link className="btn btn-2" to="/">
        Back
      </Link>
      <div className="container flex-column">
        {appls.map((app, index) => (
          <Application key={index} application={app.node} />
        ))}
      </div>
    </Layout>
  );
};

export default applications;

export const query = graphql`
  query getAllApplicationsQuery {
    allJson {
      edges {
        node {
          application
          author
          slug
          id
          endpoints {
            endpoint_id
            url
          }
        }
      }
    }
  }
`;
