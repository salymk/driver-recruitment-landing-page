import React from 'react';

export const JobOpenings = () => (
  <>
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Open roles
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="pt-6">
              <div className="flow-root bg-gray-900 rounded-lg shadow-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <h3 className="mb-0 text-3xl font-medium text-white tracking-tight">
                        Employee Driver
                      </h3>
                    </span>
                  </div>
                  <div className="flex flex-col justify-between	h-auto max-h-48">
                    <p className="mt-5 text-md text-white mb-6">
                      Click 'Apply Now' to fill out the job application. We have
                      4 positions left.
                    </p>
                    <div className="rounded-md shadow">
                      <a className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-gray-50 hover:bg-gray-200 md:py-4 md:text-md md:px-10">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg shadow-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gray-900 rounded-md shadow-lg">
                      <h3 className="mb-0 text-3xl font-medium text-white tracking-tight">
                        Owner Operator
                      </h3>
                    </span>
                  </div>
                  <div className="flex flex-col justify-between	h-auto max-h-48">
                    <p className="mt-5 text-md text-gray-900 mb-6">
                      Click 'Apply Now' to fill out the job application. We have
                      4 positions left.
                    </p>
                    <div className="rounded-md shadow">
                      <a className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-md md:px-10">
                        Talk to sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);