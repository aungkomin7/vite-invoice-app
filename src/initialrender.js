import { createProduct } from "./inventory";
import { productGroup } from "./selectors";
import { products } from "./state";

const initialRender = () => {
  console.log("initialrender");
  products.forEach(({ id, name, price }) => {
    productGroup.append(createProduct(id, name, price));

    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};

export default initialRender;
