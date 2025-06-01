import Swal from "sweetalert2";
import {
  addRecordForm,
  newProductName,
  recordGroup,
  recordNetTotal,
  recordTemplate,
  recordTotal,
} from "./selectors";
import { products } from "./state";

export const addRecordFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(addRecordForm);

  const currentRecord = products.find(({ id }) => {
    return id == formData.get("product_select");
  });

  if (document.querySelector(`[product-id = "${currentRecord.id}"]`) === null) {
    recordGroup.append(createRecord(currentRecord, formData.get("quantity")));
  } else {
    Swal.fire({
      title: "Are you sure to add quantity?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        changeQuantityValue(
          document
            .querySelector(`[product-id = "${currentRecord.id}"]`)
            .getAttribute("id"),
          parseInt(formData.get("quantity"))
        );
      }
    });
  }

  addRecordForm.reset();
};

export const createRecord = ({ id, name, price }, quantity) => {
  const record = recordTemplate.content.cloneNode(true);
  record.querySelector(".record-name").innerText = name;
  record.querySelector(".record-price").innerText = price;
  record.querySelector(".record-quantity").innerText = quantity;
  record.querySelector(".record-cost").innerText = quantity * price;

  record.querySelector(".record").setAttribute("id", "record" + id);
  record.querySelector(".record").setAttribute("product-id", id);

  return record;
};

export const calculateTotal = () => {
  let total = 0;
  document.querySelectorAll(".record-cost").forEach((el) => {
    total += parseFloat(el.innerText);
  });
  return total;
};

export const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

export const removeRecord = (recordId) => {
  const currentRecord = recordGroup.querySelector(`#${recordId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentRecord.remove();
    }
  });
};

export const changeQuantityValue = (recordId, newquantityvalue) => {
  const currentRecord = recordGroup.querySelector(`#${recordId}`);
  const quantity = currentRecord.querySelector(".record-quantity");
  const price = currentRecord.querySelector(".record-price");
  const cost = currentRecord.querySelector(".record-cost");

  if (newquantityvalue > 0 || quantity.innerText > 0) {
    quantity.innerText = parseFloat(quantity.innerText) + newquantityvalue;

    cost.innerText = quantity.innerText * price.innerText;
  }

  return quantity;
};

export const recordGroupHandler = (event) => {
  if (event.target.classList.contains("remove-record-btn")) {
    removeRecord(event.target.closest(".record").id);
  } else if (event.target.classList.contains("quantity-plus-btn")) {
    changeQuantityValue(event.target.closest(".record").id, 1);
  } else if (event.target.classList.contains("quantity-minus-btn")) {
    changeQuantityValue(event.target.closest(".record").id, -1);
  }
};
