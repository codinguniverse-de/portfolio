import React from "react";
import Link from "gatsby-link";

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

const IndexPage = () => (
  <div>
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
        <Personal />
      </RightSideHome>
    </Sides>
  </div>
);

export default IndexPage;
