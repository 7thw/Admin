import React, { ReactElement } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Breadcrumb from "@common/Breadcrumb";
import Layout from "@common/Layout";

const Starter = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Starter | Hairpin - Platform</title>
      </Head>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb breadcrumb="Pages" breadcrumbItem="Starter" />
        </Container>
      </div>
    </React.Fragment>
  );
};

Starter.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Starter;
