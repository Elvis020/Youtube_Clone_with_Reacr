import React from "react";
import { Header, RecommendedVids, Sidebar } from "./layout";
import styled from "styled-components";

function App() {
  return (
    <AppMain>
      {/* Header */}
      <Header />
      <AppPage>
        <Sidebar />
        <RecommendedVids />
      </AppPage>
    </AppMain>
  );
}

export default App;

const AppMain = styled.div`
  body,
  html {
    font-family: "PT Sans", sans-serif;
  }
`;

const AppPage = styled.div`
  display: flex;
`;
