
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={"flex justify-center"}>
      <h1>Welcome to our App</h1>
      <Link href="/auth/signin">Sign In</Link>
      <Link href="/auth/signup">Sign Up</Link>{" "}
    </main>
  );
}
