import React from "react";
import Style from "./App.module.css";

import {
  MDCTopAppBar,
  MDCButton,
  MDCIconButton,
} from "/Users/super/.nvm/versions/node/v14.15.1/lib/node_modules/@sterlingfs/mdc";

function App() {
  return (
    <div className="App">
      <MDCTopAppBar title={"Sample title"} />

      <div className={Style.container}>
        <section className={Style.section}>
          <MDCButton title="Button" />
        </section>

        <section className={Style.section}>
          <MDCIconButton iconName={"add"} />
        </section>
      </div>
    </div>
  );
}

export default App;
