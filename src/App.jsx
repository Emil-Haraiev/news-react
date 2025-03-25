import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import NewsBanner from "./components/NewsBanner/NewsBanner.jsx";
import React from "react";

function App() {


  return (
    <>
      <Header/>
      <div className="p-8 min-h-screen">
          <Main/>
      </div>
    </>
  )
}

export default App
