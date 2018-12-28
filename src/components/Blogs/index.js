import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem,
  DescriptionText
} from "../../shared/styles/styled-components";

import { Points, Point } from "../../shared/styles/styles-projects";


const Blogs = ({ posts }) => {
  return (
    <Section id="blogs">
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <Points>
        <Point>
          <UnderlinedLink href="https://codinguniverse.de">
            CodingUniverse
          </UnderlinedLink>
          <DescriptionText>
          (I am blogging mostly in German language)
          </DescriptionText>
        </Point>
      </Points>
      <UnorderedList>
        {posts.map((post) =>
          (
            <ListItem key={post.node.link}>
              <UnderlinedLink href={post.node.link}>
                {post.node.title}
              </UnderlinedLink>{" "}
              <DescriptionText>
                {post.node.date.toLocaleDateString()}
              </DescriptionText>
            </ListItem>
          ))}
      </UnorderedList>
    </Section>
  );
};

Blogs.propTypes = {
  posts: PropTypes.array
};

export default Blogs;
