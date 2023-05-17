import { motion } from "framer-motion";
import Link from "next/link";

export default function HeaderOverlay({
  scrollVariable,
}: {
  scrollVariable: number;
}) {
  const getOpacity = (x: number) => {
    if (x > 1) {
      x = x % 1;
    }
    return Math.abs(2 * (Math.abs(x) - 0.5));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: getOpacity(scrollVariable) }}
        transition={{ type: "linear", duration: 0 }}
        className={`fixed h-full flex flex-col z-30 left-0 right-0 m-auto mt-40 text-center pointer-events-none ${
          scrollVariable >= 0.5 ? "text-black " : "text-white"
        } `}
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="text-4xl leading-10 tracking-wide font-medium"
        >
          {scrollVariable >= 0 && scrollVariable <= 0.5 && (
            <span>Experience Tesla</span>
          )}
          {scrollVariable >= 0.5 && scrollVariable <= 1.5 && (
            <span>Model 3</span>
          )}
          {scrollVariable >= 1.5 && scrollVariable <= 2.5 && (
            <span>Model Y</span>
          )}
          {scrollVariable >= 2.5 && scrollVariable <= 3.5 && (
            <span>Model S</span>
          )}
          {scrollVariable >= 3.5 && scrollVariable <= 4.5 && (
            <span>Model X</span>
          )}
          {scrollVariable >= 4.5 && scrollVariable <= 5.5 && (
            <span>Solar Panels</span>
          )}
          {scrollVariable >= 5.5 && scrollVariable <= 6.5 && (
            <span>Solar Roof</span>
          )}
          {scrollVariable >= 6.5 && scrollVariable <= 7.5 && (
            <span>Accessories</span>
          )}
        </motion.h1>

        {
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "linear", duration: 0.5, delay: 0.5 }}
            className="text-sm pt-2 pb-4 leading-5 "
          >
            {scrollVariable >= 0 && scrollVariable <= 0.5 && (
              <span>Schedule a Demo Drive Today</span>
            )}
            {scrollVariable >= 0.5 && scrollVariable <= 1.5 && (
              <span className="underline underline-offset-[3px]">
                Lease from $399/mo
              </span>
            )}
            {scrollVariable >= 1.5 && scrollVariable <= 4.5 && (
              <span className="underline underline-offset-[3px] ">
                View Inventory
              </span>
            )}
            {scrollVariable >= 4.5 && scrollVariable <= 5.5 && (
              <span>Lowest Cost Solar Panels in America</span>
            )}
            {scrollVariable >= 5.5 && scrollVariable <= 6.5 && (
              <span>Produce Clean Energy From Your Roof</span>
            )}
          </motion.p>
        }

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "linear", duration: 0.5, delay: 0.5 }}
          className="m-auto left-0 right-0 bottom-[15rem]  absolute sm:w-full flex-col sm:flex-row w-[93%] h-[40px] text-sm flex justify-center items-center self-end font-medium "
        >
          {scrollVariable >= 0 && scrollVariable <= 0.5 && (
            <Link
              href={"/"}
              className=" flex justify-center items-center border-[3px] w-full rounded-[4px] sm:w-[266px] h-full text-center"
            >
              <span>Demo Drive</span>
            </Link>
          )}
          {scrollVariable >= 0.5 && scrollVariable <= 4.5 && (
            <>
              <Link
                href={"/"}
                className=" flex justify-center items-center rounded-[3px] text-center mb-2 sm:mr-4 sm:mb-0 bg-[#201a20cc] w-[266px] h-full font-medium px-[24px] py-1 text-white"
              >
                <span className="h-20 w-8  whitespace-nowrap flex items-center justify-center">
                  Order Now
                </span>
              </Link>
              <Link
                href={"/"}
                className=" flex justify-center items-center rounded-[3px] text-center mt-2 sm:ml-4 sm:mt-0 bg-[#f4f4f480] w-[266px] h-full font-medium px-[24px] py-1 text-[#393c41]"
              >
                <span className="h-20 w-8  whitespace-nowrap flex items-center justify-center">
                  Demo Drive
                </span>
              </Link>
            </>
          )}
          {scrollVariable >= 4.5 && scrollVariable <= 6.5 && (
            <>
              <Link
                href={"/"}
                className=" flex justify-center items-center rounded-[3px] text-center mb-2 sm:mr-4 sm:mb-0 bg-[#201a20cc] w-[266px] h-full font-medium px-[24px] py-1 text-white"
              >
                <span className="h-20 w-8  whitespace-nowrap flex items-center justify-center">
                  Order Now
                </span>
              </Link>
              <Link
                href={"/"}
                className=" flex justify-center items-center rounded-[3px] text-center mt-2 sm:ml-4 sm:mt-0 bg-[#f4f4f480] w-[266px] h-full font-medium px-[24px] py-1 text-[#393c41]"
              >
                <span className="h-20 w-8  whitespace-nowrap flex items-center justify-center">
                  Learn more
                </span>
              </Link>
            </>
          )}
          {scrollVariable >= 6.5 && scrollVariable <= 7.5 && (
            <Link
              href={"/"}
              className="flex justify-center items-center bg-[#171a20] w-full rounded-[4px] sm:w-[266px] h-full text-center text-white"
            >
              <span>Shop Now</span>
            </Link>
          )}
        </motion.div>
      </motion.div>
      {scrollVariable >= 6.5 && (
        <ul className="text-[#5c5e62] absolute z-30 bottom-1 sm:bottom-7 left-0 right-0 flex justify-center items-center sm:space-x-7 space-x-0 font-medium text-xs flex-col sm:flex-row space-y-1 sm:space-y-0 ">
          <li className="">
            <Link href={"/"}>Tesla © 2023</Link>
          </li>
          <li className="">
            <Link href={"/"}>Privacy & Legal</Link>
          </li>
          <li>
            <Link href={"/"}>Vehicle Recalls</Link>
          </li>
          <li className="sm:block hidden">
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>News</Link>
          </li>
          <li className="sm:block hidden">
            <Link href={"/"}>Get Updates</Link>
          </li>
          <li className="sm:block hidden">
            <Link href={"/"}>Locations</Link>
          </li>
        </ul>
      )}
    </>
  );
}
