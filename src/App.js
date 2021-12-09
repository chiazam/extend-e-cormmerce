import React from 'react'
import Home from './pages/home/index'
import { Routes, Route } from "react-router-dom";
import { NavHeader } from './pages/shared-components/nav-header';


class App extends React.Component {
  render() {
    return <div className="flex flex-col font-lato">
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  }
}

export default App;
