import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, phone, preferredTime, preferredDate } =
      await req.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name} | Sajid Quran Academy`,
      html: `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message From ${name}</title>
    <style>
        @keyframes rainbowGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body style="font-family: 'Comic Sans MS', cursive, sans-serif; margin: 0; padding: 0; background-color: #f0f0f0;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 30px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
        <header style="background: linear-gradient(45deg, #ff9a9e, #fad0c4, #ffecd2, #fcb69f, #ff9a9e); background-size: 400% 400%; animation: rainbowGradient 15s ease infinite; padding: 40px 20px; text-align: center; position: relative;">
            <h1 style="font-size: 36px; color: #ffffff; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); animation: bounce 2s ease infinite;">Message From</h1>
            <p style="font-size: 28px; color: #ff6b6b; margin: 10px 0 0; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); animation: bounce 2s ease infinite 0.5s;">${name}</p>
            <div style="position: absolute; top: 10px; left: 10px; width: 50px; height: 50px; background-color: #feca57; border-radius: 50%; animation: spin 10s linear infinite;"></div>
            <div style="position: absolute; bottom: 10px; right: 10px; width: 30px; height: 30px; background-color: #54a0ff; border-radius: 50%; animation: spin 7s linear infinite reverse;"></div>
        </header>
        
        <div style="padding: 30px; background-color: #ffeaa7;">
            <div style="background-color: #ff9ff3; border-radius: 20px; padding: 20px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h2 style="color: #5f27cd; margin-top: 0; font-size: 24px;">Contact Info</h2>
                <p style="font-size: 18px; margin: 10px 0;"><span style="color: #ff6b6b; font-weight: bold;">Email:</span> ${email}</p>
                <p style="font-size: 18px; margin: 10px 0;"><span style="color: #ff6b6b; font-weight: bold;">Phone:</span> ${phone}</p>
                <div style="position: absolute; top: -10px; right: -10px; width: 70px; height: 70px; background-color: #54a0ff; border-radius: 0 0 0 100%; opacity: 0.3;"></div>
            </div>
            
            <div style="background-color: #54a0ff; border-radius: 20px; padding: 20px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h2 style="color: #ffffff; margin-top: 0; font-size: 24px;">Preferred Time</h2>
                <p style="font-size: 18px; margin: 10px 0; color: #ffeaa7;"><span style="font-weight: bold;">Date:</span> ${preferredDate}</p>
                <p style="font-size: 18px; margin: 10px 0; color: #ffeaa7;"><span style="font-weight: bold;">Time:</span> ${preferredTime}</p>
                <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background-color: #ffeaa7; border-radius: 50%; opacity: 0.2;"></div>
            </div>
            
            <div style="background-color: #55efc4; border-radius: 20px; padding: 20px; position: relative; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h2 style="color: #2d3436; margin-top: 0; font-size: 24px;">Message</h2>
                <p style="font-size: 18px; line-height: 1.6; color: #2d3436;">${message}</p>
                <div style="position: absolute; top: 50%; right: -30px; width: 60px; height: 60px; background-color: #fd79a8; border-radius: 50%; transform: translateY(-50%);"></div>
            </div>
        </div>
        
        <footer style="background: linear-gradient(45deg, #a29bfe, #6c5ce7, #a29bfe); padding: 30px; text-align: center;">
            <p style="font-size: 16px; color: #ffffff; margin: 0 0 20px;">&copy; ${new Date().getFullYear()} Sajid Quran Academy. All rights reserved.</p>
            <div>
                <a href="https://sajidquranacademy.online" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #feca57; color: #2d3436; text-decoration: none; border-radius: 30px; font-size: 16px; font-weight: bold; transition: transform 0.3s ease;">Website</a>
            </div>
        </footer>
    </div>
</body>
</html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 }
    );
  }
}
