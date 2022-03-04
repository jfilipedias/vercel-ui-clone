import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

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

      <main>
        <h1>
          <span>Develop.</span>
          <span>Preview.</span>
          <span>Ship.</span>
        </h1>

        <div>
          <button type="button">Start Deploying</button>
          <button type="button">Get a Demo</button>
        </div>

        <p>
          Vercel combines the best developer experience with an obsessive focus
          on end-user performance. Their platform enables frontend teams to do
          their best work.
        </p>
      </main>

      <footer>
        <p>EXPLORE THE VERCEL WAY</p>
      </footer>
    </>
  );
};

export default Home;
