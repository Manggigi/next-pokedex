type Colors =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  color?: Colors;
  bgColor?: Colors;
};

export default function Badge({
  children,
  className,
  color = "gray",
  bgColor = "gray",
}: BadgeProps) {
  const colors = {
    gray: { bgColor: "bg-gray-100", color: "text-gray-600" },
    red: { bgColor: "bg-red-100", color: "text-red-700" },
    yellow: { bgColor: "bg-yellow-100", color: "text-yellow-800" },
    green: { bgColor: "bg-green-100", color: "text-green-700" },
    blue: { bgColor: "bg-blue-100", color: "text-blue-700" },
    indigo: { bgColor: "bg-indigo-100", color: "text-indigo-700" },
    purple: { bgColor: "bg-purple-100", color: "text-purple-700" },
    pink: { bgColor: "bg-pink-100", color: "text-pink-700" },
  };
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-light ${colors[bgColor]["bgColor"]} ${colors[color]["color"]} ${className}`}
    >
      {children}
    </span>
  );
}
