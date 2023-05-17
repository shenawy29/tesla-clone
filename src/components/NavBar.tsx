"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  headerTitles,
  sideBarItemsMobile,
  sideBarItemsDesktop,
  sideBarItemsMobileMore,
} from "./SideBarData";

export default function NavBar({ scrollVariable }: { scrollVariable: number }) {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchingNavbar, setIsTouchingNavbar] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [sideBarItems, setSideBarItems] = useState(sideBarItemsMobile);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsTouchingNavbar(mousePosition.y >= 52 && mousePosition.y <= 108);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <nav
        className={`w-full top-[52px] h-14 items-center justify-between bg-transparent fixed z-10 transition-colors flex ${
          scrollVariable >= 1 ? "text-[#171a20]" : "text-white"
        } text-sm  px-12 `}
      >
        <div className="w-[50%] flex justify-start">
          <Link className="" href={"/"}>
            <svg
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
              width={"120px"}
              height={"24px"}
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <motion.ul className="hidden xl:grid font-medium text-center w-full grid-flow-col grid-rows-1">
          {headerTitles.map((title) => {
            if (title === "Menu") {
              return (
                <motion.li
                  className={`relative h-8 w-full flex justify-center items-center text-center whitespace-nowrap col-start-[52] col-span-1`}
                  key={title}
                  onMouseEnter={() => {
                    setSelectedTab(title);
                  }}
                  onClick={() => {
                    setSideBarItems(sideBarItemsDesktop);
                    setModalIsShown(!modalIsShown);
                  }}
                >
                  <Link className="px-4 py-2" href={"/"}>
                    {title}
                  </Link>
                  <AnimatePresence>
                    {title === selectedTab && isTouchingNavbar && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="blur_background"
                        layoutId="blur-background"
                      />
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            }
            return (
              <motion.li
                // The hackiest fucking shit you've ever seen
                className={`relative h-8 w-full flex justify-center items-center text-center whitespace-nowrap 
              ${title === "Shop" ? "col-start-[50] col-span-1" : ""}
              ${title === "Account" ? "col-start-[51] col-span-1" : ""}
               `}
                //
                key={title}
                onMouseEnter={() => {
                  setSelectedTab(title);
                }}
              >
                <Link className="px-4 py-2" href={"/"}>
                  {title}
                </Link>
                <AnimatePresence>
                  {title === selectedTab && isTouchingNavbar && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="blur_background"
                      layoutId="blur-background"
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>
        <div
          onClick={() => {
            setSideBarItems(sideBarItemsMobile);
            setModalIsShown(!modalIsShown);
          }}
        >
          <button className="xl:hidden flex backdrop-brightness-95 backdrop-blur-3xl rounded-sm px-2 py-1 text-center justify-center items-center  ">
            <span className="mx-2 text-sm font-medium">Menu</span>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {modalIsShown && (
          <>
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(3px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className="w-full h-full absolute z-40"
            />
            <motion.div
              aria-hidden={!modalIsShown}
              className="w-[311px] h-full bg-white  p-0 mr-0 overflow-y-scroll right-0 will-change-scroll fixed z-40 drop-shadow-2xl "
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full h-20 flex  items-center right-0 p-5 box-border sticky top-0 bg-white justify-between ">
                {sideBarItems === sideBarItemsMobileMore && (
                  <button
                    className={`flex items-center justify-center text-xs text-[#393c41] font-medium ${
                      sideBarItems === sideBarItemsMobileMore
                        ? "opacity-100"
                        : "opacity-0"
                    } `}
                    onClick={() => setSideBarItems(sideBarItemsMobile)}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.025 13.25a.748.748 0 0 1-1.281.53l-5.25-5.264a.75.75 0 0 1 0-1.06L9.717 2.22a.75.75 0 1 1 1.062 1.06L6.084 7.986l4.722 4.734a.748.748 0 0 1 .219.53z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Back</span>
                  </button>
                )}

                <button
                  className="p-2 hover:bg-[#f2f2f2] transition-colors rounded-sm ml-auto"
                  onClick={() => {
                    setModalIsShown(!modalIsShown);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="#393c41"
                  >
                    <path
                      d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <section className="px-8 pt-1 pb-12 ">
                <ul className="flex flex-col justify-center items-start font-medium text-[14px] ">
                  {sideBarItems.map((item) => {
                    if (item === "More") {
                      return (
                        <li
                          onClick={() =>
                            setSideBarItems(sideBarItemsMobileMore)
                          }
                          key={"More"}
                          className="text-[#393c41] text-left mb-2 w-full h-8 hover:bg-[#f2f2f2] transition-colors"
                        >
                          <button className="px-2 py-1 w-full flex items-center justify-between">
                            <span className="mx-1">More</span>
                            <svg
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                            >
                              <path
                                d="M4.975 2.75a.748.748 0 0 1 1.281-.53l5.25 5.264a.75.75 0 0 1 0 1.06L6.283 13.78a.75.75 0 1 1-1.062-1.06l4.695-4.706L5.194 3.28a.748.748 0 0 1-.219-.53z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={item}
                        className="text-[#393c41] text-left mb-2 w-full h-8 hover:bg-[#f2f2f2] transition-colors rounded-md  flex items-center "
                      >
                        <Link href={"/"} className="px-2 py-1">
                          <span className="mx-1">{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <li
                    key={"Locale"}
                    className="text-[#393c41] text-left w-full"
                  >
                    <div className="flex hover:bg-[#f2f2f2] transition-colors cursor-pointer px-3 py-2 ">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                      >
                        <path
                          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="flex flex-col font-medium ml-2 text-sm ">
                        <span>United States</span>
                        <span className="hover:underline transition-[underline] text-xs font-medium text-[#5c5e62]">
                          English
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
