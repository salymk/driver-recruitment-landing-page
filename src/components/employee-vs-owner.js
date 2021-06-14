import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const EmployeeVSOwner = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Recruitment Landing Page" }) {
        recruitment {
          work {
            to
            title
            description
          }
          companyDriver {
            title
            description
            details {
              title
            }
            image {
              altText
              sourceUrl
            }
          }
          ownerOperator {
            title
            description
            details {
              title
            }
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `);

  const { work, companyDriver, ownerOperator } = data.wpPage.recruitment;
  return (
    <>
      <section className="overflow-hidden section-spacing" id={work.to}>
        <div className="relative max-w-xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative px-4">
            <h2 className="text-center text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
              {work.title}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              {work.description}
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative px-4">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {companyDriver.title}
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                {companyDriver.description}
              </p>
              <dl className="mt-10 space-y-4">
                {companyDriver.details.map((detail) => (
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center text-blue-500">
                        {/* <!-- Heroicon name: outline/mail --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-12 text-lg leading-6 font-medium ">
                        {detail.title}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto sm:rounded-lg"
                src={companyDriver.image.sourceUrl}
                alt={companyDriver.image.altText}
                width="490"
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2 px-4">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {ownerOperator.title}
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  {ownerOperator.description}
                </p>

                <dl className="mt-10 space-y-4">
                  {ownerOperator.details.map((detail) => (
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center text-blue-500">
                          {/* <!-- Heroicon name: outline/mail --> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-12 text-lg leading-6 font-medium ">
                          {detail.title}
                        </p>
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <img
                  className="relative mx-auto sm:rounded-lg"
                  src={ownerOperator.image.sourceUrl}
                  alt={ownerOperator.image.altText}
                  width="490"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
