"use server"

import { getImageUrl } from "@/utils/getImageUrl";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getCircuits = async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("circuit").select("*");

  if (error) {
    console.log(error);
    return {};
  }
  return data;
};

export const getCircuitInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("circuit")
    .select("*")
    .eq("circuit_id", id);

  if (error) {
    console.log(error);
    return {};
  }

  const constructorData = data[0];

  return constructorData;
};

export const uploadCircuitInfo = async (id: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("circuit").insert({
    created_at: new Date().toISOString(),
    circuit_id: id,
    kor_name: "헝가로링",
    name: "Hungaroring",
    length:4.381,
    laps:70,
    fastest_race_lap:"1:16.627"
  });

  if (error) {
    console.log(error);
    return null;
  }

  redirect(`/admin/circuits/${id}`);
};

export const uploadCircuitThumbnail = async (id: string, fullPath: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("circuit")
    .update({ circuit_image: getImageUrl(fullPath) })
    .eq("circuit_id", id);

  if (error) {
    console.log("error", error);
    return { ok: false };
  }
  return { ok: true };
};