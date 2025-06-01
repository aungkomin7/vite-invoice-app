import {
  closeInventorySidebarHandler,
  manageInventoryBtnHandler,
  printBtnHandler,
} from "./handlers";
import { addProductBtnHandler } from "./inventory";
import { addRecordFormHandler, recordGroupHandler } from "./record";
import {
  addProductBtn,
  addRecordForm,
  closeInventorySidebar,
  manageInventoryBtn,
  printBtn,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeInventorySidebar.addEventListener("click", closeInventorySidebarHandler);
  addProductBtn.addEventListener("click", addProductBtnHandler);
  addRecordForm.addEventListener("submit", addRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  printBtn.addEventListener("click", printBtnHandler);
};

export default listener;
