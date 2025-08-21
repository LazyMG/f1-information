"use client";

import SectionButton from "@/components/shared/section-button";
import { useState } from "react";
import DriverInfoSection from "./driver-info-section";
import ThumbSection from "../shared/thumb-section";
import ImageSection from "../shared/image-section";

type DriverSectionSelect = "INFO" | "THUMB" | "IMAGE";

export interface TempDriver {
  id: number;
  created_at: string;
  driver_id: string;
  kor_name: string;
  given_name: string;
  family_name: string;
  birth_date: string;
  height: string;
  weight: string;
  current_number: number;
  last_season: number;
  thumb_url?: string;
  country: string;
  driver_images: string[];
}

export interface SetUpData{
  countries:{
    id: number,
    created_at: string,
    code: string,
    kor_name: string,
    flag_url: string
  }[];
  constructors?:{}[];
}

const DriverDetail = ({ driverInfo,setUpData }: { driverInfo: TempDriver,setUpData:SetUpData }) => {
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
      {section === "INFO" && <DriverInfoSection driverInfo={driverInfo} setUpData={setUpData}/>}
      {section === "THUMB" && (
        <ThumbSection
          thumbUrl={driverInfo.thumb_url ? driverInfo.thumb_url : null}
        />
      )}
      {section === "IMAGE" && (
        <ImageSection imageUrls={driverInfo.driver_images} />
      )}
    </>
  );
};

export default DriverDetail;
