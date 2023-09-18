import "./App.css";
import { Products } from "./Products";
import { ApolloContextProvider } from "./apolloClient";
import AppLayout from "./layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ApolloContextProvider>
        <AppLayout>
          <Products />
        </AppLayout>
      </ApolloContextProvider>
    </Provider>
  );
}

export default App;
