import React, { useState } from "react";
import { Prompt } from "react-router-dom";

function BlockingForm() {
  const [isBlocking, setIsBlocking] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        setIsBlocking(false);
      }}
    >
      <Prompt
        when={isBlocking}
        message={(location) =>
          `Are you sure want to go to ${location.pathname}`
        }
      />

      <p>
        Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(e) => {
            setIsBlocking(e.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
}

export default BlockingForm;
