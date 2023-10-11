import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("9702588f-9493-4dc2-b34e-5ea4478a2236");
  return (
    <div>
      <Container>
        <div className="pb-10 space-y-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
