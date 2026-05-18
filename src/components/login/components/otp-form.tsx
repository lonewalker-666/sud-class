"use client";

import { LockKeyhole } from "lucide-react";

type Props = {
  otp: string;

  onChange: (value: string) => void;

  onVerify: () => void;

  onBack: () => void;
};

const OtpForm = ({
  otp,
  onChange,
  onVerify,
  onBack,
}: Props) => {
  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onVerify();
  };

  return (
    <>
      <div className="text-center mb-8">
        <h3 className="font-bold">
          Verify OTP
        </h3>

        <p className="mt-2">
          Enter the 6 digit OTP sent to
          your email.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label>6 DIGIT OTP</label>

          <div className="relative">
            <LockKeyhole
              size={17}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[var(--text-secondary)]
              "
            />

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="••••••"
              value={otp}
              onChange={(e) =>
                onChange(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              className="
                input-primary
                pl-11
                tracking-[0.4em]
                text-center
                !bg-[#F3F5F8]
                !border-transparent
              "
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="
            button-primary
            mt-2
            w-full
            !h-14
            justify-center
            text-base
          "
        >
          Verify OTP
        </button>

        <button
          type="button"
          onClick={onBack}
          className="
            text-sm
            font-medium
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            transition
          "
        >
          Back to login
        </button>
      </form>
    </>
  );
};

export default OtpForm;