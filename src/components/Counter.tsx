import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
        class="p1em text-lg color-#335d92 bg-#446b9e1a border-none rounded-8 outline-none w200px focus:border-solid border-2 border-#335d92 active:bg-#446b9e33"
        onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
    </button>
  );
}
