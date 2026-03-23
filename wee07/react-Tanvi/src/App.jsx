import React from "react";
import ClassComponent from "./components/classcomponent";
import FunctionComponent from "./components/function";
import EventShowcase from "./components/Eventexample";
import SearchForm from "./components/formexample";

function App() {
  return (
    <div>
      <h1>Props & State Demo</h1>
      <hr />

      {/* 1. Class Component Example */}
      <section>
        <ClassComponent message="Hello Class Component 👋" />
      </section>

      {/* 2. Function Component Example */}
      <section>
        <FunctionComponent message="Hello Function Component" />
      </section>

      {/* 3. Event Example */}
      <section>
        <h3>Interactive Event</h3>
        <EventShowcase />
      </section>

      {/* 4. Form Example */}
      <section>
        <h3>Live Form Input</h3>
        <SearchForm />
      </section>
    </div>
  );
}

export default App;