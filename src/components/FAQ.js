import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

export const FAQ = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Recruitment Landing Page" }) {
        recruitment {
          faq {
            to
            title
            description
            questions {
              question
              answer
            }
          }
        }
      }
    }
  `);

  const { to, title, description, questions } = data.wpPage.recruitment.faq;

  return (
    <>
      <section className="bg-gray-900 mx-4 rounded-lg section-spacing" id={to}>
        <div className="px-4 mx-auto">
          <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-400">{description}</p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {questions.map((question) => (
                <div key={uuidv4()}>
                  <dt className="font-semibold text-white">
                    {question.question}
                  </dt>
                  <dd className="mt-3 text-gray-400">{question.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};
