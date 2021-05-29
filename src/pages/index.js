import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Hero } from '../components/hero';
import { WhyDriveForUs } from '../components/why-drive-for-us';
import { EmployeeVSOwner } from '../components/employee-vs-owner';
import { Brands } from '../components/brands';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/testimonials';
import { ApplicationProcess } from '../components/application-process';
import { JobOpenings } from '../components/job-openings';

const IndexPage = () => (
  <Layout>
    {/* Hero */}
    <Hero />

    {/* Who are we? and What do we do? */}

    {/* Why work with us? */}
    <WhyDriveForUs />

    {/* How we work with Drivers and Owner Operators */}
    <EmployeeVSOwner />

    {/* Brands we work with logos */}
    <Brands />

    {/* Testimonials */}
    <Testimonials />

    {/* How to get started */}
    <ApplicationProcess />

    {/* FAQ */}
    <FAQ />

    <JobOpenings />
    {/* Open Positions */}
    {/* Employee  */}
    {/* Link to tentstreet */}
    {/* Owner/operator */}
    {/* Calendly Link */}
  </Layout>
);

export default IndexPage;
