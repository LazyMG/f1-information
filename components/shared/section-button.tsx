import { ReactNode } from "react";

const SectionButton = ({
  isBold,
  children,
}: {
  isBold: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      className={`bg-blue-gray-200 text-lg  px-3 py-1 rounded-lg ${
        isBold ? "font-bold" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default SectionButton;
