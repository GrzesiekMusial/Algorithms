import { generator } from "./tools/arrayGenerator.js";
import { bubbleSort } from "./sorting/bubble.js";
import { selectionSort } from "./sorting/selection.js";
import { sortTimer } from "./tools/soringTimer.js";

const numbers = generator(5000);

sortTimer(numbers, bubbleSort);
sortTimer(numbers, selectionSort);
