import routes from "./routes/route";
import { ApolloContextProvider } from "./apolloClient";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <ApolloContextProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </ApolloContextProvider>
    </Provider>
  );
};

export default App;
