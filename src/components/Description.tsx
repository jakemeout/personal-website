import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";

type DescriptionProps = {
  children: React.ReactNode;
};

const Description: React.FunctionComponent<DescriptionProps> = ({
  children,
}) => {
  const { theme } = useTheme();
  return <DescriptionText theme={theme}>{children}</DescriptionText>;
};

const DescriptionText = styled.p(
  ({ theme }) => `
  color: ${theme.text.primary};
  font-weight: 200;
  font-size: 16px;
  margin-top: 2%;
  @media screen and (max-width: 600px) {
    margin-top: 2%;
    font-size: 14px;
  }
`
);

export default Description;
