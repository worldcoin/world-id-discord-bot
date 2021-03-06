import { About } from "components/About";
import { Benefits } from "components/Benefits";
import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";
import { Icon } from "components/common/Icon";
import { Layout } from "components/common/Layout";
import { CTA } from "components/CTA";
import { Intro } from "components/Intro";
import { Join } from "components/Join";
import { NoCaptcha } from "components/NoCaptcha";
import { Steps } from "components/Steps";
import { memo } from "react";

export const Home = memo(function Home() {
  return (
    <Layout>
      <div className="grid grid-rows-auto/fr/auto min-h-screen">
        <Header />
        <Intro />

        <CTA wrapperClassName="mt-16 md:mt-0">
          <span>
            Welcome to the World ID Discord Bot, if you want to use this in your
            server to verify proof-of-personhood, follow these instructions to
            get started.
          </span>

          <a
            href="https://github.com/worldcoin/world-id-discord-bot"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className="w-6 h-6"
              name="github"
            />
          </a>
        </CTA>
      </div>

      <About />
      <Steps />
      <NoCaptcha />
      <Benefits />
      <Join />

      <CTA wrapperClassName="mt-32 md:mt-64">
        <span>
          This project is open sourced and anyone can contribute to it.
        </span>

        {/* TODO: validate url */}
        <a
          href="https://github.com/worldcoin/world-id-discord-bot"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className="w-6 h-6"
            name="github"
          />
        </a>
      </CTA>
      <Footer />
    </Layout>
  );
});
