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
    .select("*")
    .eq("driver_id", id);

  if (error) {
    console.log(error);
    return {};
  }
  return data[0];
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
