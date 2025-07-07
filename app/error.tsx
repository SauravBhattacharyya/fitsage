"use client";

import { GlobalErrorProps } from "@/utils/types";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html>
      <body className="h-screen w-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-2xl shadow-xl p-6 bg-white text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-color-primary mb-2">
            Something went wrong
          </h2>
          <p className="text-color-secondary mb-6">
            {error.message ||
              "Unexpected error occurred. Please try again or return to safety."}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-color-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="text-color-primary underline hover:text-opacity-80 text-sm font-medium"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
