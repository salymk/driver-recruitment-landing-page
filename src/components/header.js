import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link as LinkScroll } from 'react-scroll';

const navigation = [
  { name: 'Benefits', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Application', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Job Openings', href: '#' },
];

export const Header = () => (
  <>
    <Popover as="header" className="shadow-xl fixed w-full z-20 top-0">
      {({ open }) => (
        <>
          <div className="bg-gray-900 py-4">
            <nav
              className="relative max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/* Desktop Menu */}

                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <LinkScroll
                      key={item.name}
                      className="cursor-pointer p-2 text-base font-medium text-white hover:text-gray-300"
                      to={item.name}
                      spy
                      smooth
                      offset={-95}
                      duration={1000}
                    >
                      {item.name}
                    </LinkScroll>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <LinkScroll
                  to="Application"
                  spy
                  smooth
                  offset={-95}
                  duration={1000}
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Apply now
                </LinkScroll>
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/* Mobile Menu */}

                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <LinkScroll
                        key={item.name}
                        className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                        to={item.name}
                        spy
                        smooth
                        offset={-95}
                        duration={1000}
                      >
                        {item.name}
                      </LinkScroll>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <LinkScroll
                      to="Application"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600"
                    >
                      Apply Now
                    </LinkScroll>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </>
);
