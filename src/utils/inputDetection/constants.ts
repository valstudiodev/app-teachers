import { InputType } from "./types";

export const INPUT_TYPES = {
  MOUSE: 'mouse',
  TOUCH: 'touch',
  KEYBOARD: 'keyboard',
} as const satisfies Record<string, InputType>;