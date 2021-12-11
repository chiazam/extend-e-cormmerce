import React from 'react';
import { Routes, Route} from "react-router-dom";
import { NavHeader } from './pages/shared-components/nav-header';
import Home from './pages/home/index';
import { ProdHooks } from './pages/products/products';


class App extends React.Component {
  render() {
    return <div className="flex flex-col font-lato">
      <NavHeader />
      <main>
        {/* <BrowserRouter> */}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="products/:id" element={<ProdHooks/>} />
        </Routes>
        {/* </BrowserRouter> */}
      </main>
    </div>
  }
}

export default App;
