import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Driver Recruitment Landing Page" }) {
        recruitment {
          hero {
            title
            description
            ctaButtons {
              learn
              apply
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

  const { title, description, image, ctaButtons } =
    data?.wpPage?.recruitment?.hero;

  return (
    <>
      <section id="Home">
        <div className="px-4 mx-auto mt-24">
          <div className="pt-6 lg:pt-0 flex flex-wrap items-center -mx-4 lg:my-10">
            <div className="text-center w-full md:text-left md:w-1/2 px-4 mb-8 md:mb-0">
              <h2 className="mb-8 text-3xl lg:text-4xl font-bold lg:max-w-md">
                {title}
              </h2>
              <p className="mb-6 text-lg text-gray-500 lg:max-w-lg">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-left lg:justify-start">
                <div className="rounded-md shadow">
                  <LinkScroll
                    to="Application"
                    spy
                    smooth
                    offset={-95}
                    duration={1000}
                    className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:text-sm lg:text-lg md:py-4 lg:text-md md:px-10"
                  >
                    {ctaButtons.apply}
                  </LinkScroll>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <LinkScroll
                    to="Benefits"
                    spy
                    smooth
                    offset={-95}
                    duration={1000}
                    className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 sm:text-sm lg:text-lg md:py-4 lg:text-md md:px-10"
                  >
                    {ctaButtons.learn}
                  </LinkScroll>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full h-full md:px-4 md:w-1/2">
              <img
                className="object-cover w-full sm:rounded-lg"
                src={image.sourceUrl}
                alt={image.altText}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
