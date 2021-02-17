import { generator } from "./generator.js";
import { bubbleSort } from "./bubble.js";
import { sortTimeCheck } from "./timeChecker.js";

const numbers = generator(10);

sortTimeCheck(numbers, bubbleSort);
