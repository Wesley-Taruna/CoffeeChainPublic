"use client"

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    // This will help you see if Vercel is missing your variables
    console.warn("Missing Supabase environment variables")
  }

  return createBrowserClient(url || "", key || "")
}

// Ensure "supply_records" table name matches your Supabase DB
export async function getSupplyRecords() {
  const supabase = createClient()
  const { data, error } = await supabase.from("supply_records").select("*")
  if (error) throw error
  return data
}