import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#15532d").all(10));
  console.log();
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
