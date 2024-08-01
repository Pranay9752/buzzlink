import { connectToDatabase } from "@/libs/mongodb";
import { User } from "@/models/Users";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await connectToDatabase();
    console.log("hiii");
    return new Response({ success: 200 });
  } catch (error) {}
}

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();
    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
