import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type AppButtonPropsType = {
  children: ReactNode;
  className?: string;
  href?: string;
  kind?: "default" | "primary";
};

export default function AppButton({
  kind = "default",
  href,
  className = "",
  children,
  ...rest
}: AppButtonPropsType) {
  return (
    <Button
      {...rest}
      className={`rounded-full cursor-pointer transition-all duration-300 hover:scale-110 active:scale-80 ${
        kind === "primary"
          ? "hover:bg-primary-60 active:bg-primary-60 bg-primary-50"
          : ""
      } ${className}`}
    >
      {href ? (
        <Link href={href} className="flex items-center gap-1">
          {children}
        </Link>
      ) : (
        children
      )}
    </Button>
  );
}
