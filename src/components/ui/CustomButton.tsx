import { ButtonHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  loading?: boolean;
}

export default function CustomButton({
  children,
  className,
  variant = "primary",
  loading = false,
  ...props
}: CustomButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-black",
    secondary: "bg-gray-100 text-black hover:bg-gray-200 focus:ring-gray-300",
    outline: "border border-gray-300 text-black hover:bg-gray-50 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className={cn(
        baseStyles,
        variants[variant],
        "px-4 py-2 text-sm",
        loading && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        <div className="animate-spin w-4 h-4 border-2 border-t-transparent border-white rounded-full mr-2" />
      ) : null}
      {children}
    </button>
  );
}
