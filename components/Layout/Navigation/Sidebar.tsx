import routes from "@component/utils/routes";
import {
  BoltIcon,
  FireIcon,
  HomeIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Home",
    href: routes.home,
    icon: HomeIcon,
    current: true,
  },
  { name: "Types", href: routes.types, icon: UsersIcon, current: false },
  {
    name: "Moves",
    href: routes.moves,
    icon: FireIcon,
    count: "12",
    current: false,
  },
  {
    name: "Items",
    href: routes.items,
    icon: ShoppingBagIcon,
    count: "20+",
    current: false,
  },
  {
    name: "Locations",
    href: routes.locations,
    icon: MapPinIcon,
    current: false,
  },
  {
    name: "Abilities",
    href: routes.abilities,
    icon: BoltIcon,
    current: false,
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ className }: { className?: string }) {
  return (
    // <div className="w-1/4 h-screen bg-gray-200 fixed left-0 top-0"></div>
    <div className="flex grow flex-col gap-y-30 overflow-y-auto bg-gray-900 px-6 w-fit min-w-fit max-w-fit h-screen fixed ">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif"
          alt="Your Company"
        />
        by Manggigi
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1 ">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://mir-s3-cdn-cf.behance.net/user/230/de70c8252662485.63243c62764a6.jpg"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Gian Denorte</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
