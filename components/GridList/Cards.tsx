import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Badge from "../Badge";
import Image from "next/image";
import Link from "next/link";
import routes from "@component/utils/routes";
import Divider from "../Divider";

const people = [
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
  },
  {
    name: "Bulbasaur",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
  },
  // More people...
];

export default function Cards() {
  return (
    <ul role="list" className="flex flex-wrap justify-center align-middle">
      {people.map((person) => (
        <li
          key={person.email}
          className="relative col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow m-2 h-64"
        >
          <Link href={routes.pokemon.link("1")}>
            <div className="p-8 relative">
              <Badge color="gray" className="top-3 left-3 absolute">
                #01
              </Badge>
              <Image
                className="mx-auto flex-shrink-0 object-contain"
                src={person.imageUrl}
                alt="pokemon image"
                width={120}
                height={120}
              />
            </div>

            <div className="absolute bottom-1 -mt-px flex divide-x divide-gray-200 ">
              <div className="flex w-0 flex-1 py-2">
                <div className="w-0 rounded-bl-lg border border-transparent text-sm font-semibold text-gray-900 pl-3">
                  {person.name}
                  <div className="flex">
                    <Badge color="green" bgColor="green" className="mr-1">
                      grass
                    </Badge>
                    <Badge color="blue" bgColor="blue">
                      water
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
