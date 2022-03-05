import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const ButtonsContainer = styled.div`
  margin: 0 29.2rem 6rem 29.2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 1.2rem;

  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;

  height: 50px;
  width: 200px;

  font: 500 1.6rem "Inter", sans-serif;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: transparent;
    border-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
  }
`;

const ButtonOutlined = styled(Button)`
  background: transparent;
  border-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.grey};
`;

const Headline = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.4rem;

  font: 800 16rem "Inter", sans-serif;
  letter-spacing: -0.96rem;
  line-height: 100%;

  @keyframes colorCycle {
    0%,
    55% {
      filter: brightness(0) invert(1);
    }

    11%,
    33% {
      filter: none;
    }
  }
`;

const Main = styled.main`
  margin: 0 8.9rem;
  padding: 4.8rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Span = styled.span`
  padding: 0 0.8rem;

  color: ${props => props.theme.colors.white};
  filter: brightness(0) invert(1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: colorCycle 8s ease infinite;
`;

const BlueSpan = styled(Span)`
  background-image: linear-gradient(90deg, #007cf0, #00dfd8);
`;

const PinkSpan = styled(Span)`
  background-image: linear-gradient(90deg, #7928ca, #ff0080);
  animation-delay: 2.666s;
`;

const OrangeSpan = styled(Span)`
  background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
  animation-delay: 5.333s;
`;

const Subheading = styled.h2`
  margin: 0.8rem 0;

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
            <BlueSpan>Develop.</BlueSpan>
            <PinkSpan>Preview.</PinkSpan>
            <OrangeSpan>Ship.</OrangeSpan>
          </Headline>

          <ButtonsContainer>
            <ButtonsWrapper>
              <Button type="button">Start Deploying</Button>
              <ButtonOutlined type="button">Get a Demo</ButtonOutlined>
            </ButtonsWrapper>
          </ButtonsContainer>

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
