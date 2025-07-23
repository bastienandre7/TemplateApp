// hooks/useRole.ts
"use client";

import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useRole() {
  const { data: session, status } = useSession();
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.email) {
      fetch("/api/user/role")
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
          setLoading(false);
        })
        .catch(() => {
          setRole(null);
          setLoading(false);
        });
    } else {
      setRole(null);
      setLoading(false);
    }
  }, [session, status]);

  return {
    role,
    loading: loading || status === "loading",
    isAdmin: role === "ADMIN",
    isUser: role === "USER",
    session,
  };
}
