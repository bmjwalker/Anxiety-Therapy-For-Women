import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    console.log("[Contact Form Submission]", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with email delivery when ready
    // Example with Resend (free tier, 100 emails/day):
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Contact Form <noreply@yourdomain.com>",
    //   to: ["jennifer@anxietytherapyforwomen.com"],
    //   subject: `New inquiry from ${data.name}`,
    //   html: `<p><strong>Name:</strong> ${data.name}</p>
    //          <p><strong>Email:</strong> ${data.email}</p>
    //          <p><strong>Phone:</strong> ${data.phone ?? "Not provided"}</p>
    //          <p><strong>Message:</strong> ${data.message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: "Thank you! Jennifer will be in touch within one business day." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or email directly." },
      { status: 500 }
    );
  }
}
