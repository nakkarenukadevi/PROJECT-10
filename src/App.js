
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Store from './components/Store/Store';
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
