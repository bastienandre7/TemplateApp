import { Shield } from "lucide-react";
import Image from "next/image";

export default function PaymentMethodSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 mb-12 bg-white text-center">
      <div className="flex flex-wrap items-center justify-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-4">
        <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />

        <span className="text-green-700 font-medium text-sm sm:text-base text-center">
          100% Safe and Secure Payments Powered by
        </span>

        <div
          className="relative flex-shrink-0"
          style={{ width: "146px", height: "20px" }}
        >
          <Image
            src="/images/logo/lemon-squeezy.png"
            alt="lemon-squeezy"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 146px, 180px"
          />
        </div>
      </div>

      <div className="text-gray-500 text-sm mb-6">
        <p>A VAT receipt will be provided via email</p>
        <p>after making purchase</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3">
        <Image
          src="/images/logo/all-logos.png"
          alt="visa"
          width={810}
          height={64}
        />
      </div>
    </div>
  );
}
