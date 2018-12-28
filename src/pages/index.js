import React from "react";
import { graphql } from "gatsby";
import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";
import Info from "../components/Info";
import Who from "../components/Who";
import What from "../components/What";
import DevStack from "../components/DevStack";
import Technologies from "../components/Technologies";
import SideProjects from "../components/SideProjects";
import Personal from "../components/Personal";
import TemplateWrapper from "../layouts/index";
import Blogs from "../components/Blogs";


const IndexPage = ({ data }) => {
  var posts = data.allWordpressPost.edges;
  posts = posts.slice(Math.max(posts.length -5, 1));
  posts = posts.reverse();
  posts.forEach(post => {
    post.node.date = new Date(post.node.date);
  });
  return (
    <TemplateWrapper>
      <Sides>
        <LeftSide>
          <Info />
        </LeftSide>
        <RightSideHome>
          <Who />
          <What />
          <DevStack />
          <Technologies />
          <SideProjects />
          <Blogs posts={posts} />
          <Personal />
        </RightSideHome>
      </Sides>
    </TemplateWrapper>
);
}

export const postQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          link
          date
        }
      }
    }
  }
`;

export default IndexPage;
