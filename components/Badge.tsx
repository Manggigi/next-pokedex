import { PokemonType } from "./GridList/Cards";

type ColorTheme =
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
  color?: ColorTheme;
  bgColor?: ColorTheme;
  type?: PokemonType;
};
type Colors = {
  [key in ColorTheme]: {
    color: string;
    bgColor: string;
  };
};

export default function Badge({
  children,
  className,
  color = "gray",
  bgColor = "gray",
  type,
}: BadgeProps) {
  const colors: Colors = {
    gray: { bgColor: "bg-gray-100", color: "text-gray-600" },
    red: { bgColor: "bg-red-100", color: "text-red-700" },
    yellow: { bgColor: "bg-yellow-100", color: "text-yellow-800" },
    green: { bgColor: "bg-green-100", color: "text-green-700" },
    blue: { bgColor: "bg-blue-100", color: "text-blue-700" },
    indigo: { bgColor: "bg-indigo-100", color: "text-indigo-700" },
    purple: { bgColor: "bg-purple-100", color: "text-purple-700" },
    pink: { bgColor: "bg-pink-100", color: "text-pink-700" },
  };
  let textColor = colors[color].color;
  let backgroundColor = colors[bgColor].bgColor;

  if (type) {
    let themeColor: ColorTheme = "gray";
    switch (type) {
      case "grass":
        themeColor = "green";
        break;
      case "poison":
        themeColor = "purple";
        break;
      case "fire":
        themeColor = "red";
        break;
      case "water":
        themeColor = "blue";
        break;
      case "bug":
        themeColor = "green";
        break;
      case "flying":
        themeColor = "indigo";
        break;
      case "normal":
        themeColor = "gray";
        break;
      case "electric":
        themeColor = "yellow";
        break;
      case "ground":
        themeColor = "yellow";
        break;
      case "fairy":
        themeColor = "pink";
        break;
      case "fighting":
        themeColor = "red";
        break;
      case "psychic":
        themeColor = "pink";
        break;
      case "rock":
        themeColor = "gray";
        break;
      case "steel":
        themeColor = "gray";
        break;
      case "ice":
        themeColor = "blue";
        break;
      case "ghost":
        themeColor = "indigo";
        break;
      // case "dragon":
      //   themeColor = "indigo";
      //   break;
      default:
        themeColor = "gray";
        break;
    }

    textColor = colors[themeColor].color;
    backgroundColor = colors[themeColor].bgColor;
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-light ${textColor} ${backgroundColor} ${className}`}
    >
      {children}
    </span>
  );
}
