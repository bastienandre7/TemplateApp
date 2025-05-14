"use client";

import { useState } from "react";

export function DeleteAccountButton() {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action is irreversible."
    );
    if (!confirmDelete) return;

    setLoading(true);

    const res = await fetch("/api/account/delete?confirm=true", {
      method: "DELETE",
    });

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Account deletion error.");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-16"
    >
      {loading ? "Deletion in progress..." : "Delete my account"}
    </button>
  );
}
