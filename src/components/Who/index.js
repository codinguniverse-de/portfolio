import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";

const Who = () => {
  return (
    <Section id="who">
      <SectionTitle>Who?</SectionTitle>
      <UnorderedList>
          <ListItem key="1">
            <UnderlinedLink target="_blank" href="https://github.com/codinguniverse-de" rel="noopener">
              Software Developer
            </UnderlinedLink>
          </ListItem>
          <ListItem key="2">
            <UnderlinedLink target="_blank" href="https://codinguniverse.de" rel="noopener">
              Blogger
            </UnderlinedLink>
          </ListItem>
      </UnorderedList>
    </Section>
  );
};

export default Who;
