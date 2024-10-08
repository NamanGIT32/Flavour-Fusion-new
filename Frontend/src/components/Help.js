import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
const Help = () => {
  return (
    <>
    <div className="bg-[#37718e]">
    <div className=" w-3/5 m-auto pt-20">
      <div className=" text-4xl font-bold text-white pb-10 flex gap-2 items-center">Help & Customer Support  <BiSupport /></div>
      <div className=" border-2 p-10 rounded-xl bg-white shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px]">
        <Accordion allowToggle>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">Help with orders</div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  Cancellations and Refunds
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">Terms of Use</div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  T&Cs for Amazon offer
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  I want to provide feedback
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  I want to cancel my order
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  Can I order from any location?
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  Is extra discount applicable on item total?
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="mb-5">
            <h2>
              <AccordionButton className="flex justify-between">
                <div className="text-lg font-semibold">
                  Where will the cashback be available?
                </div>
                <AccordionIcon className="text-lg" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </div>
    
    </>
  );
};
export default Help;
