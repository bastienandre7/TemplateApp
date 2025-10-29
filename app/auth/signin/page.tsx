import SignIn from "@/components/Auth/SignIn";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1300));
  return <SignIn />;
}
