//Redux
import { Provider } from "react-redux";
//Store
import store from "./Redux/store";
//Components
import Main from "./Route/Main";

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
