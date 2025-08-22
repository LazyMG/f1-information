"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";
import { uploadDriverImages, uploadDriverThumbnail } from "./driver-actions";
import { v4 as uuidv4 } from "uuid";
import { uploadConstructorThumbnail } from "./constructor-actions";
import { revalidatePath } from "next/cache";
import { uploadCircuitThumbnail } from "./circuit-actions";

type Entity = "drivers" | "races" | "constructors" | "circuits";

type UploadedFile = {
  id: string;
  path: string;
  fullPath: string;
} | null;

export async function uploadThumbnail(
  prevState: { message: string },
  formData: FormData,
  entity: Entity,
  id: string
) {
  console.log("upload 시작");
  const supabase = await createServerSupabaseClient();

  const file = formData.get("thumbnail") as File;

  if (!file) {
    console.log("no file");
    return { message: "파일이 선택되지 않았습니다." };
  }

  const filePath = `${entity}/${id}-thumbnail`;

  if (entity === "drivers") {
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_THUMBNAIL_STORAGE_BUCKET!)
      .upload(filePath, file, { upsert: true });
    if (error) {
      console.log(error);
      return { message: "파일 업로드에 실패했습니다." };
    }
    const response = await uploadDriverThumbnail(id, data.fullPath);

    if (response.ok) {
      console.log("DB 업데이트까지 성공");
      return { message: "썸네일이 성공적으로 업데이트되었습니다!" };
    } else {
      console.log("DB 업데이트 실패");
      return { message: "DB 업데이트에 실패했습니다." };
    }
  }else if(entity === "constructors"){
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_THUMBNAIL_STORAGE_BUCKET!)
      .upload(filePath, file, { upsert: true });
    if (error) {
      console.log(error);
      return { message: "파일 업로드에 실패했습니다." };
    }
    const response = await uploadConstructorThumbnail(id, data.fullPath);

    if (response.ok) {
      console.log("DB 업데이트까지 성공");
      revalidatePath(`/admin/constructors/${id}`)
      return { message: "썸네일이 성공적으로 업데이트되었습니다!" };
    } else {
      console.log("DB 업데이트 실패");
      return { message: "DB 업데이트에 실패했습니다." };
    }
  }else if(entity === "circuits"){
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_THUMBNAIL_STORAGE_BUCKET!)
      .upload(filePath, file, { upsert: true });
    if (error) {
      console.log(error);
      return { message: "파일 업로드에 실패했습니다." };
    }
    const response = await uploadCircuitThumbnail(id, data.fullPath);

    if (response.ok) {
      console.log("DB 업데이트까지 성공");
      revalidatePath(`/admin/circuits/${id}`)
      return { message: "썸네일이 성공적으로 업데이트되었습니다!" };
    } else {
      console.log("DB 업데이트 실패");
      return { message: "DB 업데이트에 실패했습니다." };
    }
  }
  return { message: "유효하지 않은 엔티티입니다." };
}

export async function uploadImages(
  prevState: { message: string },
  formData: FormData,
  entity: Entity,
  id: string
) {
  console.log("upload 시작");
  console.log("formData", formData.getAll("images"));
  console.log("entity", entity);

  const supabase = await createServerSupabaseClient();

  const files = formData.getAll("images") as File[];

  const firstFile = files[0];
  if (
    !files ||
    files.length === 0 ||
    (firstFile instanceof Object && "size" in firstFile && firstFile.size === 0)
  ) {
    return { message: "파일이 선택되지 않았습니다." };
  }

  // 모든 파일이 유효한지 확인합니다.
  // 마찬가지로, file 객체의 size 속성이 0보다 큰지 검사합니다.
  const isValid = files.every(
    (file) => file instanceof Object && "size" in file && file.size > 0
  );
  if (!isValid) {
    return { message: "유효하지 않은 파일이 포함되어 있습니다." };
  }

  let results: UploadedFile[] | null = null;

  if (entity === "drivers") {
    try {
      const uploadImagesPromises = files.map(async (file) => {
        const filePath = `${entity}/${id}/image-${uuidv4()}`;

        // 각 파일을 스토리지에 업로드
        const { data, error } = await supabase.storage
          .from(process.env.NEXT_PUBLIC_IMAGE_STORAGE_BUCKET!)
          .upload(filePath, file as File, { upsert: true });

        if (error) {
          console.error("파일 업로드 실패:", error);
          throw new Error("파일 업로드에 실패했습니다.");
        }
        return data;
      });

      results = await Promise.all(uploadImagesPromises);
    } catch (error) {
      console.log(error);
      return { message: "error" };
    }

    if (results) {
      try {
        results.forEach(async (result) => {
          if (result) {
            const response = await uploadDriverImages(id, result.fullPath);
            console.log("응답", response);
            if (response.ok) {
              console.log("DB 업데이트까지 성공");
              return { message: "썸네일이 성공적으로 업데이트되었습니다!" };
            } else {
              console.log("DB 업데이트 실패");
              return { message: "DB 업데이트에 실패했습니다." };
            }
          }
        });
      } catch (error) {
        console.log(error);
        return { message: "DB 업데이트 error" };
      }
    }
  }
  return { message: "유효하지 않은 엔티티입니다." };
}

// export async function searchFiles(search: string = "") {
//   const supabase = await createServerSupabaseClient();

//   const { data, error } = await supabase.storage
//     .from(process.env.NEXT_PUBLIC_THUMBNAIL_STORAGE_BUCKET!)
//     .list(null, { search });

//   if (error) {
//     console.log(error)
//     return
//   }

//   return data;
// }

// export async function deleteFile(filename: string) {
//   const supabase = await createServerSupabaseClient();

//   const { data, error } = await supabase.storage
//     .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
//     .remove([filename]);

//   if (error) {
//     console.log(error)
//     return
//   }

//   return data;
// }
