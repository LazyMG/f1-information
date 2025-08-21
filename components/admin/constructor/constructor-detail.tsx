"use client";

import SectionButton from "@/components/shared/section-button";
import { useState } from "react";
import ThumbSection from "../shared/thumb-section";
import ImageSection from "../shared/image-section";
import ConstructorInfoSection from "./constructor-info-section";

type ConstructorSectionSelect = "INFO" | "THUMB" | "IMAGE";

interface TempConstructor{
  constructor_id: string
  constructor_images: string[]
  created_at: string
  id: number
  kor_name: string
  name: string
  thumb_url: string | null
}

const ConstructorDetail = ({constructorInfo}:{constructorInfo:TempConstructor}) => {
  const [section, setSection] = useState<ConstructorSectionSelect>("INFO");

  const onClickSection = (value: ConstructorSectionSelect) => {
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
      {section === "INFO" && <ConstructorInfoSection />}
      {section === "THUMB" && <ThumbSection thumbUrl={constructorInfo.thumb_url ? constructorInfo.thumb_url : null}/>}
      {section === "IMAGE" && <ImageSection imageUrls={constructorInfo.constructor_images}/>}
    </>
  );
};

export default ConstructorDetail;
