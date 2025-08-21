"use client";

import { uploadThumbnail } from "@/actions/admin/upload-actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useFormState } from "react-dom";

type Entity = "drivers" | "races" | "constructors" | "circuits";

const ThumbSection = ({ thumbUrl }: { thumbUrl: string | null }) => {
  const pathname = usePathname();
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(thumbUrl);

  const [_, admin, entity, id] = pathname.split("/");
  const allowedEntities = ["drivers", "races", "constructors", "circuits"];

  const initialEntity = allowedEntities.includes(entity)
    ? (entity as Entity)
    : "drivers";
  const initialId = id || "";
  const isInitialThumb = useRef(!!thumbUrl);

  const uploadAction = async (
    prevState: { message: string },
    formData: FormData
  ) => {
    const file = formData.get("thumbnail");
    if (!file || typeof file === "string") {
      return { message: "파일이 선택되지 않았습니다." };
    }

    return uploadThumbnail(prevState, formData, initialEntity, initialId);
  };

  const [state, formAction, isPending] = useFormState(uploadAction, {
    message: "",
  });

  const onThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length === 1) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnailUrl(null);
    }
  };

  const deleteThumbnail = () => {
    if (isPending) return;
    if (thumbUrl) {
      if (confirm("기존 이미지를 삭제하시겠습니까?")) {
        isInitialThumb.current = false;
        // 삭제 동작
      } else {
        isInitialThumb.current = true;
      }
    }
    setThumbnailUrl(null);
  };

  return (
    <div
      className="md:grid md:grid-cols-3 md:gap-6 flex flex-col"
      id="editor-section-layout"
    >
      <h1
        className="text-3xl font-bold md:mb-0 mb-5"
        id="editor-section-layout__header"
      >
        썸네일
      </h1>
      <form
        className="col-span-2 grid md:grid-cols-2 gap-5 rounded-lg shadow-md sm:p-6 px-4 py-5"
        id="editor__section-thumbnail"
        action={formAction}
      >
        <div
          className={`rounded-lg aspect-square relative ${
            !thumbUrl && !thumbnailUrl ? "bg-yellow-200" : ""
          }`}
          id="editor__section-thumbnail__add-button"
        >
          {thumbnailUrl ? (
            <div className="relative group w-full h-full">
              <Image
                src={thumbnailUrl}
                alt="thumbnail-preview"
                className="rounded-lg"
                width={390}
                height={390}
              />
              <p
                onClick={deleteThumbnail}
                className={`absolute hidden top-1 right-2 group-hover:cursor-pointer group-hover:block ${
                  isPending ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                X
              </p>
            </div>
          ) : (
            <label
              htmlFor="thumbnail"
              className="absolute w-full h-full top-0 left-0 flex justify-center items-center hover:cursor-pointer"
            >
              추가하기
            </label>
          )}
          <input
            onChange={onThumbnailChange}
            className="hidden"
            id="thumbnail"
            type="file"
            accept="image/*"
            name="thumbnail"
          />
        </div>
        {/* <FormStatus message={state.message} isLoaded={!!thumbnailUrl} /> */}
        <div className="flex justify-end items-end w-full">
          {thumbnailUrl && (
            <button
              type="submit"
              aria-disabled={isPending}
              disabled={isPending}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              {isPending ? "저장 중..." : "저장"}
            </button>
          )}
        </div>
        {state.message && (
          <p
            className={`mt-2 text-sm ${
              state.message.includes("성공") ? "text-green-500" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ThumbSection;
