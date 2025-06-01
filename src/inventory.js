import {
  inventoryProductForm,
  newProductName,
  newProductPrice,
  productGroup,
  productSelect,
  productTemplate,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./state";

export const addProductBtnHandler = (event) => {
  event.preventDefault();
  const createId = uuidv4();

  productGroup.append(
    createProduct(createId, newProductName.value, newProductPrice.valueAsNumber)
  );

  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });

  productSelect.append(
    new Option(
      `${newProductName.value} - ${newProductPrice.valueAsNumber}`,
      createId
    )
  );

  inventoryProductForm.reset();
};

export const createProduct = (id, name, price) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-name").innerText = name;
  product.querySelector(".product-price").innerText = price;

  product.querySelector(".product").setAttribute("id", id);

  return product;
};


