import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

export const ApplicationProcess = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Driver Recruitment Landing Page" }) {
        recruitment {
          applicationProcess {
            title
            description
            companyDriver {
              title
              ctaButton {
                text
                link
              }
              steps {
                step {
                  number
                  description
                }
              }
            }
            ownerOperator {
              title
              ctaButton {
                text
                link
              }
              steps {
                step {
                  number
                  description
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    companyDriver,
    ownerOperator,
  } = data?.wpPage.recruitment.applicationProcess;

  return (
    <>
      <section
        className="overflow-hidden relative bg-white section-spacing md:mx-4 lg:pb-28"
        id="Application"
      >
        <div className="mx-auto my-4 max-w-md px-4 text-center sm:max-w-3xl sm:px-0 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {description}
          </p>
          <div className="mt-12">
            <div className="sm:px-16 md:px-0 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="pt-6">
                <div className="flow-root bg-gray-900 rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 px-12 bg-blue-500 rounded-md shadow-lg">
                        <h3 className="mb-0 text-2xl font-medium text-white tracking-tight">
                          {companyDriver.title}
                        </h3>
                      </span>
                    </div>
                    <div className="flex flex-col justify-between text-left py-8 text-white">
                      {companyDriver.steps.map((step) => (
                        <div className="flex items-start mb-6" key={uuidv4()}>
                          <span className="mr-10 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold font-heading">
                            {step.step.number}
                          </span>
                          <div className="max-w-xs">
                            <p className="text-lg leading-loose">
                              {step.step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-md shadow">
                      <a
                        href={companyDriver.ctaButton.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-gray-50 hover:bg-gray-200 md:py-4 lg:text-lg md:px-10"
                      >
                        {companyDriver.ctaButton.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-100 rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 px-12 bg-gray-900 rounded-md shadow-lg">
                        <h3 className="mb-0 text-2xl font-medium text-white tracking-tight">
                          {ownerOperator.title}
                        </h3>
                      </span>
                    </div>
                    <div className="flex flex-col justify-between text-left py-8 text-gray-900">
                      {ownerOperator.steps.map((step) => (
                        <div className="flex items-start mb-6" key={uuidv4()}>
                          <span className="mr-10 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold font-heading">
                            {step.step.number}
                          </span>
                          <div className="max-w-xs">
                            <p className="text-lg leading-loose">
                              {step.step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-md shadow">
                      <a
                        href={ownerOperator.ctaButton.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 lg:text-lg md:px-10"
                      >
                        {ownerOperator.ctaButton.text}
                      </a>
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
