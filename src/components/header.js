import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link as LinkScroll } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';

const navigation = [
  { name: 'Benefits', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Application', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Job Openings', href: '#' },
];

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Recruitment Landing Page" }) {
        title
        recruitment {
          menu {
            menuItems {
              item
            }
            ctaBtn
            logo
          }
        }
      }
    }
  `);
  const { menuItems, ctaBtn, logo } = data.wpPage.recruitment.menu;
  return (
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
                  <div className="flex items-center justify-between w-full lg:w-auto">
                    <LinkScroll
                      className="cursor-pointer capitalize  text-xl font-bold text-white p-2 hover:text-gray-300"
                      activeClass="none"
                      to="Home"
                      spy
                      smooth
                      offset={-95}
                      duration={1000}
                    >
                      {logo ?? 'Al Umarian'}
                    </LinkScroll>
                    <div className="-mr-2 flex items-center lg:hidden">
                      <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  {/* Desktop Menu */}

                  <div className="hidden space-x-8 lg:flex lg:ml-10">
                    {menuItems.map((menu) => (
                      <LinkScroll
                        key={menu.item}
                        className="cursor-pointer p-2 capitalize text-base font-medium text-white hover:text-gray-300"
                        to={menu.item}
                        spy
                        smooth
                        offset={-95}
                        duration={1000}
                      >
                        {menu.item}
                      </LinkScroll>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  <LinkScroll
                    to="Application"
                    spy
                    smooth
                    offset={-95}
                    duration={1000}
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent capitalize text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                  >
                    {ctaBtn ?? 'Apply now'}
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
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <LinkScroll
                        className="cursor-pointer capitalize text-xl font-bold text-gray-900 hover:text-gray-800"
                        activeClass="none"
                        to="Home"
                        spy
                        smooth
                        offset={-95}
                        duration={1000}
                      >
                        {logo ?? 'Al Umarian'}
                      </LinkScroll>
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
                      {menuItems.map((menu) => (
                        <LinkScroll
                          key={menu.item}
                          className="cursor-pointer block px-3 py-2 rounded-md capitalize text-base font-medium text-gray-900 hover:bg-gray-50"
                          to={menu.item}
                          spy
                          smooth
                          offset={-95}
                          duration={1000}
                        >
                          {menu.item}
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
                        className="block text-center w-full py-3 px-4 rounded-md shadow bg-blue-500 capitalize text-white font-medium hover:bg-blue-600"
                      >
                        {ctaBtn ?? 'Apply Now'}
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
};
