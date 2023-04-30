const items = [
  { id: 1 },
  // More items...
];

export default function SeparateCards({ children }: { children: any }) {
  return (
    <ul role="list" className="space-y-10">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-md px-6 py-4 shadow"
        >
          {children}
        </li>
      ))}
    </ul>
  );
}
