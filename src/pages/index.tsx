import Head from "next/head";
import { Contact } from "../components/Contact";
import { Enterprise } from "../components/Enterprise";
import { Homee } from "../components/Homee";
import { Layout } from "../components/Layout/Layout";
import { Location } from "../components/Location";
import { Project } from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title> Real-estate-agency</title>
      </Head>
      <Layout>
        <Homee id="home" />
        <Enterprise id="empreendimento" />
        <Project id="plantas" />
        <Location id="localização" />
        <Contact id="contato" />
      </Layout>
    </>
  );
}
