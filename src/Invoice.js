import initialRender from "./initialrender";
import listener from "./listener";
import observer from "./observer";
import { calculateTotal } from "./record";

class Invoice {
  init() {
    observer();
    initialRender();
    listener();
    calculateTotal();
  }
}

export default Invoice;
