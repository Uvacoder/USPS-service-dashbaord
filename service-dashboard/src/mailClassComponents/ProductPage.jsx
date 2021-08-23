import data from "../Data/quarterlyData.json";

import ProductGraph from "../DashComponents/ProductGraph";

export const ProductPage = (props) => {
  const { selectedProductId } = props;

  let productId = parseInt(selectedProductId);

  const productData = data.filter((row) => row.productId === productId);

  console.log(productData);

  let renderedProduct;

  if (productId === 0) {
    renderedProduct = <div></div>;
  } else {
    renderedProduct = productComponents(productId, productData);
  }

  return <div>{renderedProduct}</div>;
};

function productComponents(productId, productData) {
  return (
    <div>
      <p>{productData[0].product}</p>
      <div>
        <ProductGraph propData={productData} />
      </div>
    </div>
  );
}

export default ProductPage;
