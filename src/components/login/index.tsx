"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import LoginForm from "./components/login-form";
import OtpForm from "./components/otp-form";

const LoginPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const defaultAccountId =
    searchParams.get("accountId") || "";

  const [step, setStep] = useState<
    "login" | "otp"
  >("login");

  const [form, setForm] = useState({
    accountId: defaultAccountId,
    email: "",
    otp: "",
  });

  const handleChange = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleContinue = () => {
    setStep("otp");
  };

  const handleVerifyOtp = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#F7F8FA]
        flex items-center justify-center
        px-4
      "
    >
      <div className="w-full max-w-[420px]">
        {/* LOGO */}
        <div className="flex flex-col items-center mb-10">
          <h1
            className="
              text-[44px]
              leading-none
              font-black
              tracking-[-0.04em]
              text-[#5F6F2F]
            "
          >
            SUDLABS
          </h1>

          <p
            className="
              mt-5
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-[var(--text-secondary)]
            "
          >
            Class Management System
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            bg-white
            border border-[var(--border)]
            rounded-[32px]
            p-8 md:p-10
            shadow-sm
          "
        >
          {step === "login" ? (
            <LoginForm
              form={form}
              onChange={handleChange}
              onContinue={handleContinue}
            />
          ) : (
            <OtpForm
              otp={form.otp}
              onChange={(value) =>
                handleChange("otp", value)
              }
              onBack={() =>
                setStep("login")
              }
              onVerify={handleVerifyOtp}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;