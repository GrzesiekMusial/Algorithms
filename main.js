import { generator } from "./tools/arrayGenerator.js";
import { sortTimer } from "./tools/soringTimer.js";
import { bubbleSort } from "./sorting/bubble.js";
import { selectionSort } from "./sorting/selection.js";
import { insertionSort } from "./sorting/insertion.js";

const numbers = generator(1000);
// insertionSort.sort(numbers);

sortTimer(numbers, bubbleSort);
sortTimer(numbers, selectionSort);
sortTimer(numbers, insertionSort);
