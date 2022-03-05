import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Main = styled.main`
  margin: 0 8.9rem;
  padding: 0 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Headline = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.4rem;

  font: 800 16rem "Inter", sans-serif;
  letter-spacing: -0.96rem;
  line-height: 100%;
`;

const Subheading = styled.h2`
  margin: 0.8rem 0 6.4rem 0;

  color: ${props => props.theme.colors.grey};
  font: 400 2rem "Inter", sans-serif;
  letter-spacing: -0.04rem;
  line-height: 3.2rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Develop. Preview. Ship. For the best frontend teams – Vercel
        </title>
        <meta name="description" content="Vercel website ui clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
        <Main>
          <Headline>
            <span>Develop.</span>
            <span>Preview.</span>
            <span>Ship.</span>
          </Headline>

          <div>
            <button type="button">Start Deploying</button>
            <button type="button">Get a Demo</button>
          </div>

          <Subheading>
            Vercel combines the best developer experience with an obsessive
            focus on end-user performance.
            <br /> Their platform enables frontend teams to do their best work.
          </Subheading>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
