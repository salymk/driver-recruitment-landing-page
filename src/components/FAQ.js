import React from 'react';

export const FAQ = () => (
  <>
    <section className="bg-gray-900 mx-4 rounded-lg section-spacing" id="FAQ">
      <div className="px-4 mx-auto">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-400">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
            elementum blandit et.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <div>
              <dt className="font-semibold text-white">
                What&#039;s the best thing about Switzerland?
              </dt>
              <dd className="mt-3 text-gray-400">
                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quas cupiditate
                laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">
                What&#039;s the best thing about Switzerland?
              </dt>
              <dd className="mt-3 text-gray-400">
                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quas cupiditate
                laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </>
);
