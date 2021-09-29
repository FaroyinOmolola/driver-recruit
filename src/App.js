import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ApplyScreen from "./screens/ApplyScreen";
import SubmittedScreen from "./screens/SubmittedScreen";

import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/apply" exact component={ApplyScreen} />
          <Route path="/submitted" component={SubmittedScreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
