import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
    return (
        <main class="text-center p1em m0">
            <Title>Hello World</Title>
            <h1 class="color-#335d92 text-4rem font-400 m4rem uppercase">
                Hello world!
            </h1>
            <Counter/>
            <p class="m8">
                Visit{" "}
                <a href="https://start.solidjs.com" target="_blank">
                    start.solidjs.com
                </a>{" "}
                to learn how to build SolidStart apps.
            </p>
        </main>
    );
}
