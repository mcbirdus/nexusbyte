"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Validate environment variables
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables")
      return {
        success: false,
        error: "Server configuration error. Please try again later.",
      }
    }

    // Extract and validate form data
    const firstName = formData.get("firstName")?.toString()?.trim()
    const lastName = formData.get("lastName")?.toString()?.trim()
    const email = formData.get("email")?.toString()?.trim()
    const phone = formData.get("phone")?.toString()?.trim()
    const subject = formData.get("subject")?.toString()?.trim()
    const message = formData.get("message")?.toString()?.trim()

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Prepare data for insertion
    const contactData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone || null,
      subject: subject,
      message: message,
      created_at: new Date().toISOString(),
    }

    console.log("Attempting to insert contact form data:", contactData)

    // Insert into Supabase
    const { data, error } = await supabase.from("contact_submissions").insert([contactData]).select()

    if (error) {
      console.error("Supabase insert error:", error)
      return {
        success: false,
        error: "Failed to submit your message. Please try again.",
      }
    }

    console.log("Contact form submitted successfully:", data)

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
