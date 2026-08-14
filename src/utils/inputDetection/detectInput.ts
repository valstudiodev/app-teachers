import { INPUT_TYPES } from "./constants";
import { InputType } from "./types";


export const detectInputType = (
  e: PointerEvent | KeyboardEvent
): InputType | null => {
  if (e instanceof KeyboardEvent) {
    return INPUT_TYPES.KEYBOARD
  }

  if (e instanceof PointerEvent) {
    switch (e.pointerType) {
      case 'mouse':
        return INPUT_TYPES.MOUSE
      case 'touch':
      case 'pen':
        return INPUT_TYPES.TOUCH
      default:
        return null;
    }
  }

  return null
}