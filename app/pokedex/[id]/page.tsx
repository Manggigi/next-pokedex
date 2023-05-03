"use client";

import { usePokemon } from "@component/models/pokemon";
import routes from "@component/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { pokemon, isLoading } = usePokemon(params.id);
  const router = useRouter();
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Link href={routes.home}>HOME</Link>
      <div />
      <button onClick={router.back}>Back</button>
      {/* {!isLoading && pokemon && <pre>{JSON.stringify(pokemon, null, 2)}</pre>} */}
      {!isLoading && pokemon && (
        <>
          <div className="text-9xl mt-8">{pokemon?.id}</div>
          <div className="text-9xl">{pokemon?.name}</div>
          <Image
            src={pokemon?.sprites.other.dream_world.front_default!}
            alt={pokemon?.name}
            width={300}
            height={300}
          />
          {pokemon &&
            pokemon.types.map(({ type }) => (
              <span className="text-3xl text-slate-500 mr-6" key={type.name}>
                {type.name}
              </span>
            ))}
        </>
      )}
    </div>
  );
}
