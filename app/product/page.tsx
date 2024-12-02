import Container from "@/components/Container";
import { getSingleProudct } from "@/helpers";
import { Products } from "../../type";
import ProductsData from "@/components/ProductsData";
import SignleProduct from "@/components/SignleProduct";
import { productData } from "@/constants/data";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProuctPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = getSingleProudct(_id);

  // تحديد عرض 4 منتجات فقط من المنتجات الرائجة
  const trendingProducts = productData.slice(0, 4); // أخذ أول 4 منتجات فقط

  return (
    <div>
      <Container>
        <SignleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Tranding Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {trendingProducts?.map((item: Products) => (
              <ProductsData key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProuctPage;
