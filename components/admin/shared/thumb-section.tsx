"use client";

import { useState } from "react";

const ThumbSection = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const onThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length === 1) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnail(null);
    }
  };

  const deleteThumbnail = () => {
    setThumbnail(null);
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
      <div
        className="col-span-2 grid md:grid-cols-2 gap-5 rounded-lg shadow-md sm:p-6 px-4 py-5"
        id="editor__section-thumbnail"
      >
        <div
          className="rounded-lg aspect-square relative bg-yellow-200"
          id="editor__section-thumbnail__add-button"
        >
          <label
            htmlFor="thumbnail"
            className="absolute w-full h-full top-0 left-0 flex justify-center items-center hover:cursor-pointer"
          >
            추가하기
          </label>
          <input
            onChange={onThumbnailChange}
            className="hidden"
            id="thumbnail"
            type="file"
            accept="image/*"
          />
        </div>
        {thumbnail && (
          <div className="relative group  w-fit">
            <img src={thumbnail} />
            <p
              onClick={deleteThumbnail}
              className="absolute hidden top-1 right-2 group-hover:cursor-pointer group-hover:block"
            >
              X
            </p>
          </div>
        )}
        {thumbnail && (
          <div className="flex justify-end items-end w-full">
            <button>저장</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThumbSection;
