"use client";

import SectionButton from "@/components/shared/section-button";
import { useState } from "react";
import ThumbSection from "../shared/thumb-section";
import CircuitInfoSection from "./circuit-info-section";

type CircuitSectionSelect = "INFO" | "THUMB";

export interface TempCircuit{
  circuit_id: string;
  circuit_image: null | string
  created_at: string
  fastest_race_lap: string
  id: number
  kor_name: string
  laps: number
  length: number
  name: string
}

const CircuitDetail = ({circuitInfo}:{circuitInfo:TempCircuit}) => {
  const [section, setSection] = useState<CircuitSectionSelect>("INFO");

  const onClickSection = (value: CircuitSectionSelect) => {
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
      </div>
      {section === "INFO" && <CircuitInfoSection />}
      {section === "THUMB" && <ThumbSection thumbUrl={circuitInfo.circuit_image ? circuitInfo.circuit_image : null}/>}
    </>
  );
};

export default CircuitDetail;
