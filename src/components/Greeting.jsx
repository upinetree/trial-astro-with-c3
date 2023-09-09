import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 class="text-2xl mb-6">{greeting}! Thank you for visiting!</h3>
      <p class="my-4">
        <button
          class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={() => setGreeting(randomMessage())}
        >
          New Greeting
        </button>
      </p>
    </div>
  );
}
