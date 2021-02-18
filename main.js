import { generator } from "./tools/arrayGenerator.js";
import { sortTimer } from "./tools/soringTimer.js";
import { bubbleSort } from "./sorting/bubble.js";
import { selectionSort } from "./sorting/selection.js";
import { insertionSort } from "./sorting/insertion.js";
import { mergeSort } from "./sorting/merge.js";
import { quickSort } from "./sorting/quick.js";
import { countingSort } from "./sorting/counting.js";
import { bucketSort } from "./sorting/bucket.js";

const numbers = generator(1);

sortTimer(numbers, bubbleSort);
sortTimer(numbers, selectionSort);
sortTimer(numbers, insertionSort);
sortTimer(numbers, mergeSort);
sortTimer(numbers, quickSort);
sortTimer(numbers, countingSort);
sortTimer(numbers, bucketSort, { buckets: 10, method: quickSort });
