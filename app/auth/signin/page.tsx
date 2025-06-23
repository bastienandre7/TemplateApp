import SignIn from "@/components/Auth/SignIn";

export default function Page({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return <SignIn searchParams={searchParams} />;
}
