import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function IconButton({
  icon: Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  return (
    <button
      className="p-4 bg-fuas-primary border rounded focus:outline-none focus:ring hover:bg-fuas-secondary hover:text-fuas-primary hover:border-fuas-primary flex items-center"
      {...otherProps}
    >
      <span className="pr-4">
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
