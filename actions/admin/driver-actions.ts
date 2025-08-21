"use server";

import { getImageUrl } from "@/utils/getImageUrl";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getDrivers = async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("driver").select("*");

  if (error) {
    console.log(error);
    return {};
  }
  return data;
};

export const getDriverInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("driver")
    .select("*, driver_images(image_url)")
    .eq("driver_id", id);

  if (error) {
    console.log(error);
    return {};
  }

  const driverData = data[0];

  const image_urls = driverData.driver_images.map(
    (img: { image_url: string }) => img.image_url
  );
  return {
    ...driverData,
    driver_images: image_urls,
  };
};

export const uploadDriverInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("driver").insert({
    created_at: new Date().toISOString(),
    driver_id: id,
    kor_name: "막스 베르스타펜",
    given_name: "Max",
    family_name: "Verstappen",
    birth_date: "1997-09-30",
    height: "181.5",
    weight: "72",
    current_number: 33,
    last_season: 2025,
    country: "NL",
  });

  if (error) {
    console.log(error);
    return null;
  }

  redirect(`/admin/drivers/${id}`);
};

export const uploadDriverThumbnail = async (id: string, fullPath: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("driver")
    .update({ thumb_url: getImageUrl(fullPath) })
    .eq("driver_id", id);

  if (error) {
    console.log("error", error);
    return { ok: false };
  }
  return { ok: true };
};

export const uploadDriverImages = async (id: string, fullPath: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("driver_images")
    .insert({ image_url: getImageUrl(fullPath), driver_id: id });

  console.log("DB 업데이트", id, fullPath);
  console.log("DB 업데이트", data);

  if (error) {
    console.log("error", error);
    return { ok: false };
  }
  return { ok: true };
};

export const getCountries = async() => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("country").select("*");

  if (error) {
    console.log("error", error);
    return [];
  }
  console.log(data);

  return data;
}
