import Cards from "@component/components/GridList/Cards";
import Sidebar from "@component/components/Layout/Navigation/Sidebar";
import Breadcrumbs from "@component/components/Breadcrumbs";
import Divider from "@component/components/Divider";
import Container from "@component/components/Containers/Container";

export default function Page() {
  return (
    <div className="flex pt-4">
      {/* <div className="ml-52"> */}
        {/* <Breadcrumbs /> */}
        {/* <Divider /> */}
        {/* <div className="py-3 font-semibold text-lg">1010 Pokemons</div> */}
        <Container>
          <Cards />
        </Container>
      {/* </div> */}
    </div>
  );
}
