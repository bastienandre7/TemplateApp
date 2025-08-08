"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Trash2 } from "lucide-react";
import { useState } from "react";

export function DeleteAccountButton() {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action is irreversible and will permanently remove all your data, including purchased templates and download history."
    );
    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch("/api/account/delete?confirm=true", {
        method: "DELETE",
      });

      if (res.ok) {
        window.location.reload();
      } else {
        alert("Account deletion error. Please try again or contact support.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-red-100 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-red-900 mb-2">Danger Zone</h3>
          <p className="text-sm text-red-700 mb-4">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <Button
            onClick={handleDelete}
            disabled={loading}
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white inline-flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="h-4 w-4" />
                Delete Account
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
