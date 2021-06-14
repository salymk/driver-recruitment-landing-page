import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const WhyDriveForUs = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Recruitment Landing Page" }) {
        recruitment {
          benefits {
            to
            title
            description
            benefits {
              title
              description
            }
          }
        }
      }
    }
  `);

  const { to, title, description, benefits } = data.wpPage.recruitment.benefits;

  return (
    <>
      <section className="relative bg-white px-4 section-spacing" id={to}>
        <div className="mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {description}
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div className="pt-6">
                  <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <h3 className="mb-0 text-lg font-medium text-white tracking-tight">
                            {benefit.title}
                          </h3>
                        </span>
                      </div>
                      <p className="mt-5 text-base text-white">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
