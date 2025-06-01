"use server"

import { createClient } from "@supabase/supabase-js"

// Create a type for the newsletter data
export type NewsletterFormData = {
  email: string
}

export async function submitNewsletter(formData: NewsletterFormData) {
  try {
    // Get environment variables
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log("Newsletter subscription attempt:", {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseServiceKey,
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
    if (!formData.email?.trim()) {
      return {
        success: false,
        message: "Please enter your email address.",
      }
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    // Test the connection first
    try {
      const { error: testError } = await supabase.from("newsletter_subscriptions_nexusbyte").select("id").limit(1)

      if (testError) {
        console.error("Supabase connection test failed:", testError)

        // Check if it's a table not found error
        if (testError.message?.includes("relation") && testError.message?.includes("does not exist")) {
          // Try to create the table
          try {
            await createNewsletterTable(supabase)
            console.log("Created newsletter_subscriptions table")
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

    // Check if email already exists
    const { data: existingSubscription } = await supabase
      .from("newsletter_subscriptions_nexusbyte")
      .select("id")
      .eq("email", formData.email.trim().toLowerCase())
      .single()

    if (existingSubscription) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
      }
    }

    // Prepare the data for insertion
    const insertData = {
      email: formData.email.trim().toLowerCase(),
      status: "active",
      subscribed_at: new Date().toISOString(),
    }

    console.log("Attempting to insert newsletter subscription")

    // Insert data into Supabase
    const { data, error } = await supabase.from("newsletter_subscriptions_nexusbyte").insert([insertData])

    if (error) {
      console.error("Supabase insert error:", error)

      // Handle specific error cases
      if (error.message?.includes("duplicate key")) {
        return {
          success: false,
          message: "This email is already subscribed to our newsletter.",
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
        message: "Failed to subscribe. Please try again.",
      }
    }

    console.log("Successfully subscribed to newsletter")

    return {
      success: true,
      message: "Thank you! You've been successfully subscribed to our newsletter.",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)

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

// Helper function to create the newsletter_subscriptions table if it doesn't exist
async function createNewsletterTable(supabase: any) {
  const query = `
    CREATE TABLE IF NOT EXISTS newsletter_subscriptions_nexusbyte (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      status VARCHAR(50) DEFAULT 'active',
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      unsubscribed_at TIMESTAMP WITH TIME ZONE NULL
    );
  `

  return await supabase.rpc("exec", { query })
}
