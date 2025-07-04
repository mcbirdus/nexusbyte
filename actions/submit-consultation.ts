"use server"

import { createClient } from "@supabase/supabase-js"

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
    // Get environment variables
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log("Environment check:", {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseServiceKey,
      urlStart: supabaseUrl?.substring(0, 20),
    })

    // Validate environment variables
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase environment variables")
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      }
    }

    // Validate form data
    if (
      !formData.firstName?.trim() ||
      !formData.lastName?.trim() ||
      !formData.email?.trim() ||
      !formData.phone?.trim() ||
      !formData.address?.trim() ||
      !formData.message?.trim()
    ) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    // Test the connection first - using a simple query instead of count(*)
    try {
      const { error: testError } = await supabase.from("consultation_requests").select("id").limit(1)

      if (testError) {
        console.error("Supabase connection test failed:", testError)

        // Check if it's a table not found error
        if (testError.message?.includes("relation") && testError.message?.includes("does not exist")) {
          // Try to create the table
          try {
            await createConsultationTable(supabase)
            console.log("Created consultation_requests table")
          } catch (createError) {
            console.error("Failed to create table:", createError)
            return {
              success: false,
              message: "Database table not configured. Please contact support.",
            }
          }
        } else {
          return {
            success: false,
            message: "Database connection failed. Please try again later.",
          }
        }
      }
    } catch (testError) {
      console.error("Connection test error:", testError)
      return {
        success: false,
        message: "Failed to connect to database. Please try again later.",
      }
    }

    // Prepare the data for insertion
    const insertData = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      service_type: formData.service,
      message: formData.message.trim(),
      status: "new",
      created_at: new Date().toISOString(),
    }

    console.log("Attempting to insert data:", { ...insertData, email: "***@***.***" })

    // Insert data into Supabase
    const { data, error } = await supabase.from("consultation_requests").insert([insertData])

    if (error) {
      console.error("Supabase insert error:", error)

      // Handle specific error cases
      if (error.message?.includes("duplicate key")) {
        return {
          success: false,
          message: "A request with this email already exists.",
        }
      }

      if (error.message?.includes("permission")) {
        return {
          success: false,
          message: "Database permission error. Please contact support.",
        }
      }

      return {
        success: false,
        message: "Failed to save your request. Please try again.",
      }
    }

    console.log("Successfully inserted data")

    return {
      success: true,
      message: "Thank you! Your consultation request has been submitted successfully. We'll contact you soon.",
    }
  } catch (error) {
    console.error("Server action error:", error)

    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message.includes("fetch")) {
        return {
          success: false,
          message: "Network error. Please check your connection and try again.",
        }
      }

      if (error.message.includes("Invalid")) {
        return {
          success: false,
          message: "Invalid request. Please refresh the page and try again.",
        }
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

// Helper function to create the consultation_requests table if it doesn't exist
async function createConsultationTable(supabase: any) {
  const query = `
    CREATE TABLE IF NOT EXISTS consultation_requests (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      address TEXT NOT NULL,
      service_type VARCHAR(50) NOT NULL,
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `

  return await supabase.rpc("exec", { query })
}
