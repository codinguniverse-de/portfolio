import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem,
  ShowMoreButton
} from "../../shared/styles/styled-components";

import { personalStuff } from "../../data/personal";

class Personal extends Component {
  state = {
    show: false,
    text: "Show me more"
  };

  handleClick() {
    this.setState({
      show: !this.state.show,
      text: this.state.show ? "Show me more" : "That's Enough!"
    });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Personal</SectionTitle>
        <ShowMoreButton onClick={() => this.handleClick()}>
          {this.state.text}
        </ShowMoreButton>
        <ToggleDisplay show={this.state.show}>
          <UnorderedList>
            {personalStuff.map(fact => (
              <ListItem key={fact.description}>{fact.description}</ListItem>
            ))}
          </UnorderedList>
        </ToggleDisplay>
      </Section>
    );
  }
}

export default Personal;
