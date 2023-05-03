import Sidebar from "@component/components/Layout/Navigation/Sidebar";

export default function PokedexLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
