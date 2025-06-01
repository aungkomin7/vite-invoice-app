import { calculateTax, calculateTotal } from "./record";
import { recordGroup, recordNetTotal, recordTax, recordTotal } from "./selectors";

const observer = () => {
  const calculate = () => {
    const total = calculateTotal();
    recordTotal.innerText = total;

    const tax = calculateTax(total);
    recordTax.innerText = tax;

    recordNetTotal.innerText = total + tax;
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(calculate);
  observer.observe(recordGroup, observerOptions);
};

export default observer;
