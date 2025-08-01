"use client";

import SectionButton from "@/components/shared/section-button";
import { useState } from "react";
import DriverInfoSection from "./driver-info-section";
import ThumbSection from "../shared/thumb-section";
import ImageSection from "../shared/image-section";

type DriverSectionSelect = "INFO" | "THUMB" | "IMAGE";

const DriverDetail = () => {
  const [section, setSection] = useState<DriverSectionSelect>("INFO");

  const onClickSection = (value: DriverSectionSelect) => {
    setSection(value);
  };
  return (
    <>
      <div className="mb-5 flex gap-2">
        <SectionButton isBold={section === "INFO"}>
          <span onClick={() => onClickSection("INFO")}>정보</span>
        </SectionButton>
        <SectionButton isBold={section === "THUMB"}>
          <span onClick={() => onClickSection("THUMB")}>썸네일</span>
        </SectionButton>
        <SectionButton isBold={section === "IMAGE"}>
          <span onClick={() => onClickSection("IMAGE")}>이미지</span>
        </SectionButton>
      </div>
      {section === "INFO" && <DriverInfoSection />}
      {section === "THUMB" && <ThumbSection />}
      {section === "IMAGE" && <ImageSection />}
    </>
  );
};

export default DriverDetail;
