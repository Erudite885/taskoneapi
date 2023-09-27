import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const headerTabs: string[] = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview",
  ];

  return (
    <header className="w-full grid grid-flow-col auto-cols-[auto] mt-[123px] mb-[113px] shadow-[0px_1px_18px_0px_rgba(0,0,0,0.12)]">
      {headerTabs.map((tab, index) => (
        <div
          className={`flex items-center w-full relative cursor-pointer`}
          key={index}
          onClick={() => setActiveTab(index)}
        >
          <div
            className={`${
              index === activeTab ? "bg-[#00635B] text-white" : ""
            } relative z-[1] py-[52px] px-[54px] w-full text-[20px] text-center`}
          >
            {tab}
          </div>
          {index === activeTab && index !== headerTabs.length - 1 && (
            <div
              className={`${
                index === activeTab ? "bg-[#00635B]" : ""
              } w-[20px] h-[20px] rotate-45 absolute right-[-10px]`}
            ></div>
          )}
        </div>
      ))}
    </header>
  );
};

export default Header;
