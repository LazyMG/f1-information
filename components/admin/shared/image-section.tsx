"use client";

import { useState } from "react";

const ImageSection = () => {
  const [imageList, setImageList] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length === 1) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // console.log("image", image);
        setImage(reader.result as string);
        setImageList((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const deleteImageList = (index: number) => {
    setImageList((prev) => {
      if (prev[index]) {
        const front = prev.slice(0, index);
        const back = prev.slice(index + 1);
        return [...front, ...back];
      } else {
        return prev;
      }
    });
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
      <div className="col-span-2 flex flex-col gap-5 shadow-md sm:p-6 px-4 py-5">
        <div className="grid md:grid-cols-2 gap-5" id="editor__section-images">
          {imageList.length !== 0 &&
            imageList.map((img, idx) => (
              <div key={idx} className="group relative">
                <img src={img} className="w-full" />
                <p
                  onClick={() => deleteImageList(idx)}
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
            />
          </div>
        </div>
        <div className="flex justify-end items-end w-full">
          <button>저장</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
