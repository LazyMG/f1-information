"use server"

import { getImageUrl } from "@/utils/getImageUrl";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getConstructors = async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("constructor").select("*");

  if (error) {
    console.log(error);
    return {};
  }
  return data;
};

export const getConstructorInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("constructor")
    .select("*, constructor_images(image_url)")
    .eq("constructor_id", id);

  if (error) {
    console.log(error);
    return {};
  }

  const constructorData = data[0];

  const constructor_urls = constructorData?.constructor_images.map(
    (img: { image_url: string }) => img.image_url
  );
  return {
    ...constructorData,
    constructor_images: constructor_urls,
  };
};

export const uploadConstructorInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("constructor").insert({
    created_at: new Date().toISOString(),
    constructor_id: id,
    kor_name: "오라클 레드불 레이싱",
    name: "Red Bull Racing",
  });

  if (error) {
    console.log(error);
    return null;
  }

  redirect(`/admin/constructors/${id}`);
};

export const uploadConstructorThumbnail = async (id: string, fullPath: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("constructor")
    .update({ thumb_url: getImageUrl(fullPath) })
    .eq("constructor_id", id);

  if (error) {
    console.log("error", error);
    return { ok: false };
  }
  return { ok: true };
};