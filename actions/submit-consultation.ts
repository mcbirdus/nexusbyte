"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with server-side environment variables
const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Create a type for the form data
export type ConsultationFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

export async function submitConsultation(formData: ConsultationFormData) {
  try {
    // Create Supabase client with service role key for server-side operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Insert data into Supabase
    const { data, error } = await supabase.from("consultation_requests").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service_type: formData.service,
        message: formData.message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "There was an error submitting your request. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you! Your consultation request has been submitted successfully.",
    }
  } catch (error) {
    console.error("Server action error:", error)
    return {
      success: false,
      message: "There was an error processing your request. Please try again.",
    }
  }
}
