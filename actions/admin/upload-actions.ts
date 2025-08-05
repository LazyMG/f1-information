"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";
import { uploadDriverThumbnail } from "./driver-actions";

type Entity = "drivers" | "races" | "constructors" | "circuits";

export async function uploadFile(
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
