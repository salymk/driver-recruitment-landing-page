import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const JobOpenings = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Recruitment Landing Page" }) {
        recruitment {
          openPositions {
            to
            title
            description
            companyDriver {
              title
              description
              ctaButtons {
                text
                link
              }
            }
            ownerOperator {
              title
              description
              ctaButtons {
                text
                link
              }
            }
          }
        }
      }
    }
  `);

  const {
    to,
    title,
    description,
    companyDriver,
    ownerOperator,
  } = data.wpPage.recruitment.openPositions;

  return (
    <>
      <section
        className="relative bg-white mx-4 py-16 sm:py-24 lg:py-32"
        id={to}
      >
        <div className="mx-auto max-w-md text-center sm:max-w-3xl sm:px-0 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {description}
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="pt-6">
                <div className="flow-root bg-gray-900 rounded-lg shadow-lg px-6 pb-8">
                  <div>
                    <h2 className="text-3xl text-white font-medium mt-4">
                      {companyDriver.title}
                    </h2>
                    <div className="flex flex-col justify-between	h-auto max-h-48">
                      <p className="mt-5 text-md text-white mb-6">
                        {companyDriver.description}
                      </p>
                      <div className="rounded-md shadow">
                        <a
                          href={companyDriver.ctaButtons.link}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-gray-50 hover:bg-gray-200 md:py-4 lg:text-lg md:px-10"
                        >
                          {companyDriver.ctaButtons.text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-100 rounded-lg shadow-lg px-6 pb-8">
                  <div>
                    <h2 className="text-3xl  font-medium mt-4">
                      {ownerOperator.title}
                    </h2>
                    <div className="flex flex-col justify-between	h-auto max-h-48">
                      <p className="mt-5 text-md text-gray-900 mb-6">
                        {ownerOperator.description}
                      </p>
                      <div className="rounded-md shadow">
                        <a
                          href={ownerOperator.ctaButtons.link}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 lg:text-lg md:px-10"
                        >
                          {ownerOperator.ctaButtons.text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
