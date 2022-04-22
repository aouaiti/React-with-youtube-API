/* eslint-disable max-len */

import React from "react";
import { Container } from "semantic-ui-react";

const Contained = (props) => (
  <Container style={{ marginTop: "30px" }}>{props.children}</Container>
);

export default Contained;
