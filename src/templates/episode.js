import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import EpisodePage from "../components/podcast/EpisodePage";

export const PodcastPageTemplate = ({ info }) => {
  const { title, date, description, episode } = info;

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{episode}</p>
    </div>
  );
};

const PodcastPage = ({ data }) => {
  const { markdownRemark: podcast } = data;

  return (
    <Layout>
      <EpisodePage info={podcast.frontmatter} />
    </Layout>
  );
};

export default PodcastPage;

export const podcastQuery = graphql`
  query Podcast($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        description
        src
      }
    }
  }
`;
