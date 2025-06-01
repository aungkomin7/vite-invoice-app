import { inventorySidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
  inventorySidebar.classList.remove("translate-x-full");
  inventorySidebar.classList.add("duration-400");
};

export const closeInventorySidebarHandler = () => {
  inventorySidebar.classList.add("translate-x-full");
};

export const printBtnHandler = () => {
  window.print();

  document.querySelectorAll(".record").forEach((el) => el.remove());
};
