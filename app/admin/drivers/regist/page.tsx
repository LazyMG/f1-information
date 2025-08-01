"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DriverRegistPage = () => {
  const [id, setId] = useState("");
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-10 max-w-7xl mx-auto"
      id="driver-info-editor"
    >
      <div
        className="md:grid md:grid-cols-3 md:gap-6 flex flex-col"
        id="editor-section-layout"
      >
        <h1
          className="text-3xl font-bold md:mb-0 mb-5"
          id="editor-section-layout__header"
        >
          선수 기본 정보
        </h1>
        <div
          className="col-span-2 shadow-md sm:p-6 px-4 py-5 flex flex-col gap-3"
          id="driver-info-editor__section-description"
        >
          <form
            className="grid md:grid-cols-6 gap-6"
            id="driver-info-editor__section-description__form"
          >
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-id">
                ID
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-id"
                // {...register("id", {
                //   required: "ID를 입력해주세요.",
                // })}
                value={id}
                onChange={(event) => setId(event.target.value)}
                placeholder="ID"
              />
              {/* {errors.id && (
            <p className="text-xs text-red-500">{errors.id.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-korName">
                Korean Name
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-korName"
                // {...register("korName", {
                //   required: "한국 이름을 입력해주세요.",
                // })}
                placeholder="Korean Name"
              />
              {/* {errors.korName && (
            <p className="text-xs text-red-500">{errors.korName.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-givenName">
                Given Name
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-givenName"
                // {...register("givenName", {
                //   required: "이름을 입력해주세요.",
                // })}
                placeholder="Given Name"
              />
              {/* {errors.givenName && (
            <p className="text-xs text-red-500">{errors.givenName.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-familyName">
                Family Name
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-familyName"
                // {...register("familyName", {
                //   required: "성을 입력해주세요.",
                // })}
                placeholder="Family Name"
              />
              {/* {errors.familyName && (
            <p className="text-xs text-red-500">{errors.familyName.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-dateOfBirth">
                Date Of Birth
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg h-[45.33px] box-border"
                type="date"
                id="driver-dateOfBirth"
                // {...register("dateOfBirth", {
                //   required: "생년월일을 입력해주세요.",
                // })}
              />
              {/* {errors.dateOfBirth && (
            <p className="text-xs text-red-500">{errors.dateOfBirth.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl">Stats</label>
              <div className="grid grid-cols-2 gap-1">
                <div className="flex flex-col gap-2">
                  <input
                    placeholder="Height(cm)"
                    className="border border-black rounded-md py-2 px-3 text-lg"
                    id="driver-stat-height"
                    // {...register("height", {
                    //   required: "키를 입력해주세요.",
                    // })}
                  />
                  {/* {errors.height && (
                <p className="text-xs text-red-500">{errors.height.message}</p>
              )} */}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    placeholder="Weight(kg)"
                    className="border border-black rounded-md py-2 px-3 text-lg"
                    id="driver-stat-weight"
                    // {...register("weight", {
                    //   required: "몸무게를 입력해주세요.",
                    // })}
                  />
                  {/* {errors.weight && (
                <p className="text-xs text-red-500">{errors.weight.message}</p>
              )} */}
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-currentNumber">
                Current Number
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-currentNumber"
                type="number"
                // {...register("currentNumber", {
                //   required: "선수 번호를 입력해주세요.",
                // })}
                placeholder="Current Number"
              />
              {/* {errors.currentNumber && (
            <p className="text-xs text-red-500">
              {errors.currentNumber.message}
            </p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-currentTeam">
                Current Team
              </label>
              <div className="relative focus-within:rotate-parent">
                <select
                  // {...register("currentTeam", {
                  //   required: "팀을 선택해주세요.",
                  // })}
                  className="peer w-full border border-black rounded-md py-2 px-3 text-lg appearance-none"
                >
                  <option value="" hidden>
                    팀 선택
                  </option>
                  <option value="RED_BULL">Red Bull</option>
                  <option value="FERRARI">Ferrari</option>
                  <option value="NONE">없음</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-200 ease-in-out peer-focus-within:rotate-180">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* {errors.currentTeam && (
            <p className="text-xs text-red-500">{errors.currentTeam.message}</p>
          )} */}
            </div>

            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-nationality">
                Nation
              </label>
              <div className="relative focus-within:rotate-parent overflow-visible z-10">
                <select
                  // {...register("nationality", {
                  //   required: "국가를 선택해주세요.",
                  // })}
                  className="peer w-full border border-black rounded-md py-2 px-3 text-lg appearance-none box-border"
                >
                  <option value="" hidden>
                    국가 선택
                  </option>
                  <option value="NL">네덜란드</option>
                  <option value="TH">태국</option>
                  <option value="KR">한국</option>
                  <option value="US">미국</option>
                  <option value="CN">중국</option>
                  <option value="JP">일본</option>
                  <option value="UK">영국</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-200 ease-in-out peer-focus-within:rotate-180">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* {errors.nationality && (
            <p className="text-xs text-red-500">{errors.nationality.message}</p>
          )} */}
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <label className="text-xl" htmlFor="driver-lastSeason">
                Last Season
              </label>
              <input
                className="border border-black rounded-md py-2 px-3 text-lg"
                id="driver-lastSeason"
                type="number"
                // {...register("currentNumber", {
                //   required: "선수 번호를 입력해주세요.",
                // })}
                placeholder="Last Season"
              />
              {/* {errors.currentNumber && (
            <p className="text-xs text-red-500">
              {errors.currentNumber.message}
            </p>
          )} */}
            </div>
          </form>
          <div className="flex justify-end items-end w-full">
            <button
              onClick={() => {
                if (id === "") return;
                router.push(`/admin/drivers/${id}`);
              }}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverRegistPage;
