import { Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import React from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Dialog } from "@headlessui/react";
import Axios from "axios";

function Header(props) {
  let [isOpen, setIsOpen] = useState(true);
  let [nav, setNav] = useState(true);
  let handleNav = () => {
    setNav(!nav);
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <nav className="p-8 relative">
      <div className="flex flex-row justify-between">
        <div className="text-4xl md:text-6xl">
          <div className="text-emerald-400 font-extrabold">LOGO</div>
        </div>
        <div
          className="md:hidden cursor-pointer hover:text-emerald-500 transition"
          onClick={handleNav}
        >
          {nav ? <MenuAlt1Icon className="h-10" /> : <XIcon className="h-10" />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 pt-24 pl-7 pr-5 ease-in-out duration-500 md:hidden"
              : "fixed -left-[100%] pt-24 h-full top-0 md:hidden ease-in-out duration-500"
          }
        >
          <ul className="">
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer p-4 uppercase border-b border-gray-600">
              Home
            </li>
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer p-4 uppercase border-b border-gray-600">
              About
            </li>
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer p-4 uppercase border-b border-gray-600">
              Comments
            </li>
            <li className=" p-4">
              <button
                className="p-3 font-bold border-2 rounded-md border-emerald-400 text-emerald-400 hover:text-zinc-100 hover:bg-emerald-400 transition"
                onClick={openModal}
              >
                Sign Up
              </button>
              <Transition appear={true} show={isOpen} as={Fragment}>
                <Dialog
                  open={isOpen}
                  onClose={closeModal}
                  className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen"
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="md:max-w-sm w-[60%] h-fit-content  p-7 bg-zinc-100 rounded-md">
                      <Dialog.Title>
                        <div className="w-[100%]">
                          <div className="text-3xl md:text-4xl font-bold font-sans text-emerald-400 w-[70%] text-center mx-auto ">
                            Sign Up
                          </div>
                        </div>
                      </Dialog.Title>
                      <Dialog.Description className="my-5">
                        Please enter your e-mail and comment:
                      </Dialog.Description>
                      <form action="">
                        <div className="flex flex-col gap-4">
                          <div>
                            <label htmlFor="user_email" className="font-bold">
                              E-mail:
                            </label>
                            <input
                              type="email"
                              id="user_email"
                              placeholder="example@mail.com"
                              className="w-[100%] border-2 border-emerald-400 p-1 rounded-md focus:outline-none "
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="comment" className="font-bold">
                              Comment:
                            </label>
                            <textarea
                              name=""
                              id="comment"
                              className="h-24 w-[100%] border-2 border-emerald-400 p-1 rounded-md focus:drop-shadow-xl focus:outline-none "
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="rounded-full border-2 border-emerald-400 text-emerald-400 px-4 py-2 mr-4 mt-3"
                        >
                          Submit
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          className="rounded-full border-2 border-zinc-900 text-zinc-900 px-4 py-2 mr-4 mt-3"
                        >
                          Cancel
                        </button>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </Dialog>
              </Transition>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-col md:flex-row gap-6 items-center h-[100%]">
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer">
              Home
            </li>
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer">
              About
            </li>
            <li className="hover:text-emerald-400 transition font-bold cursor-pointer">
              Comments
            </li>
            <li>
              <button
                className="p-3 font-bold border-2 rounded-md border-emerald-400 text-emerald-400 hover:text-zinc-100 hover:bg-emerald-400 transition"
                onClick={openModal}
              >
                Sign Up
              </button>
              <Transition appear={true} show={isOpen} as={Fragment}>
                <Dialog
                  open={isOpen}
                  onClose={closeModal}
                  className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen"
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="md:max-w-sm w-[60%] h-fit-content  p-7 bg-zinc-100 rounded-md">
                      <Dialog.Title>
                        <div className="w-[100%]">
                          <div className="text-3xl md:text-4xl font-bold font-sans text-emerald-400 w-[70%] text-center mx-auto ">
                            Sign Up
                          </div>
                        </div>
                      </Dialog.Title>
                      <Dialog.Description className="my-5">
                        Please enter your e-mail and comment:
                      </Dialog.Description>
                      <form action="">
                        <div className="flex flex-col gap-4">
                          <div>
                            <label htmlFor="user_email" className="font-bold">
                              E-mail:
                            </label>
                            <input
                              type="email"
                              id="user_email"
                              placeholder="example@mail.com"
                              className="w-[100%] border-2 border-emerald-400 p-1 rounded-md focus:outline-none "
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="comment" className="font-bold">
                              Comment:
                            </label>
                            <textarea
                              name=""
                              id="comment"
                              className="h-24 w-[100%] border-2 border-emerald-400 p-1 rounded-md focus:drop-shadow-xl focus:outline-none "
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="rounded-full border-2 border-emerald-400 text-emerald-400 px-4 py-2 mr-4 mt-3"
                        >
                          Submit
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          className="rounded-full border-2 border-zinc-900 text-zinc-900 px-4 py-2 mr-4 mt-3"
                        >
                          Cancel
                        </button>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </Dialog>
              </Transition>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
