import { detectInputType } from "./detectInput";
import { useEffect } from "react";
import { InputType } from "./types";

function useInputDetection(): void {
  useEffect(() => {
    const root = document.documentElement

    let currentInput: InputType | null = null

    const handleInput = (e: PointerEvent | KeyboardEvent): void => {
      const inputType = detectInputType(e)

      if (!inputType || currentInput === inputType) return

      currentInput = inputType
      root.dataset.input = inputType

      console.log('Current input', inputType);
    }

    window.addEventListener('pointerdown', handleInput)
    window.addEventListener('keydown', handleInput)

    return () => {
      window.removeEventListener('pointerdown', handleInput)
      window.removeEventListener('keydown', handleInput)

      delete root.dataset.input
    };
  }, []);
}

export default useInputDetection;