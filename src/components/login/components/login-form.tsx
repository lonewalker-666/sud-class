// src/components/login/login-form.tsx

"use client";

import {
  Mail,
  ShieldCheck,
} from "lucide-react";

type Props = {
  form: {
    accountId: string;
    email: string;
  };

  onChange: (
    key: "accountId" | "email",
    value: string
  ) => void;

  onContinue: () => void;
};

const LoginForm = ({
  form,
  onChange,
  onContinue,
}: Props) => {
  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onContinue();
  };

  return (
    <>
      <div className="text-center mb-8">
        <h3 className="font-bold">
          Sign In
        </h3>

        <p className="mt-2">
          Welcome back to your curated
          workspace.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        {/* ACCOUNT ID */}
        <div className="flex flex-col gap-2">
          <label>
            ACCOUNT ID
          </label>

          <div className="relative">
            <ShieldCheck
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
              placeholder="Enter account id"
              value={form.accountId}
              onChange={(e) =>
                onChange(
                  "accountId",
                  e.target.value
                )
              }
              className="
                input-primary
                pl-11
                !bg-[#F3F5F8]
                !border-transparent
              "
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label>EMAIL</label>

          <div className="relative">
            <Mail
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
              type="email"
              placeholder="name@atelier.com"
              value={form.email}
              onChange={(e) =>
                onChange(
                  "email",
                  e.target.value
                )
              }
              className="
                input-primary
                pl-11
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
          Continue
        </button>
      </form>
    </>
  );
};

export default LoginForm;