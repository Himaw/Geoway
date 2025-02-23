import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title?: string;
  icon_start?: ReactNode | string;
  icon_end?: ReactNode | string;
  variant?: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({
  type = "button",
  title,
  icon_start,
  icon_end,
  variant,
  full,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      onClick={onClick}
    >
      {icon_start && icon_start}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon_end && icon_end}
    </button>
  );
};

export default Button;
