"use client";

import { uploadImages } from "@/actions/admin/upload-actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { v4 as uuidv4 } from "uuid";

type Entity = "drivers" | "races" | "constructors" | "circuits";

type ImageItem = {
  id: string;
  url: string;
  file?: File;
};

const SubmitButton = () => {
  // useFormStatus 훅을 호출하여 pending 상태를 가져옵니다.
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
    >
      {pending ? "저장 중..." : "저장"}
    </button>
  );
};

const ImageSection = ({ imageUrls }: { imageUrls: string[] }) => {
  const pathname = usePathname();

  const [images, setImages] = useState<ImageItem[]>(
    imageUrls.map((url) => ({ id: uuidv4(), url })) // 기존 이미지에도 고유 ID 할당
  );

  const [_, admin, entity, id] = pathname.split("/");
  const allowedEntities = ["drivers", "races", "constructors", "circuits"];

  const initialEntity = allowedEntities.includes(entity)
    ? (entity as Entity)
    : "drivers";
  const initialId = id || "";

  const uploadAction = async (
    prevState: { message: string },
    formData: FormData
  ) => {
    const newFiles = images
      .filter((item) => item.file)
      .map((item) => item.file as File);

    if (newFiles.length === 0) {
      // 새로 추가된 파일이 없을 경우 함수를 조기 종료합니다.
      return { message: "추가할 파일이 없습니다." };
    }

    newFiles.forEach((file) => {
      formData.append("images", file);
    });

    return uploadImages(prevState, formData, initialEntity, initialId);
  };

  const [state, formAction, isPending] = useFormState(uploadAction, {
    message: "",
  });

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    // if (files && files.length === 1) {
    //   const file = files[0];
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     // console.log("image", image);
    //     // setImage(reader.result as string);
    //     setImageList((prev) => [...prev, reader.result as string]);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   // setImage(null);
    // }
    if (files) {
      const selectedFiles = Array.from(files);
      const newFileReaders = selectedFiles.map((file) => {
        return new Promise<ImageItem>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () =>
            resolve({
              id: uuidv4(),
              url: reader.result as string,
              file: file,
            });
          reader.readAsDataURL(file);
        });
      });

      // 모든 Promise가 완료된 후에 상태를 한 번만 업데이트합니다.
      Promise.all(newFileReaders).then((newImageItems) => {
        setImages((prev) => [...prev, ...newImageItems]);
      });

      event.target.value = "";
    }
  };

  const deleteImageList = (targetId: string) => {
    setImages((prev) => prev.filter((item) => item.id !== targetId));
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
        이미지
      </h1>
      <form
        className="col-span-2 flex flex-col gap-5 shadow-md sm:p-6 px-4 py-5"
        action={formAction}
      >
        <div className="grid md:grid-cols-2 gap-5" id="editor__section-images">
          {images.length !== 0 &&
            images.map((img, idx) => (
              <div key={img.id} className="group relative">
                <Image
                  src={img.url}
                  alt={`image-${img.id}`}
                  width={390}
                  height={218}
                />
                <p
                  onClick={() => deleteImageList(img.id)}
                  className="absolute top-1 right-2 hidden group-hover:block group-hover:cursor-pointer"
                >
                  X
                </p>
              </div>
            ))}
          <div className="bg-yellow-200 min-h-[50px] relative">
            <label
              className="absolute w-full h-full flex justify-center items-center top-0 left-0 hover:cursor-pointer"
              htmlFor="images"
            >
              추가하기
            </label>
            <input
              onChange={onImageChange}
              className="hidden"
              id="images"
              type="file"
              accept="image/*"
              multiple
            />
          </div>
        </div>
        <div className="flex justify-end items-end w-full">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default ImageSection;
