import Cards from "@component/components/GridList/Cards";
import Sidebar from "@component/components/Layout/Navigation/Sidebar";
import Breadcrumbs from "@component/components/Breadcrumbs";
import Divider from "@component/components/Divider";
import Container from "@component/components/Containers/Container";

export default function Page() {
  return (
    <div className="flex pt-4">
      <Container>
        <Cards />
      </Container>
    </div>
  );
}
