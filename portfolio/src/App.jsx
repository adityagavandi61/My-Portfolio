import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import About from "./components/about";
import Contact from "./routes/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home/>
        </>
      ),
    },
    {
      path: "#about",
      element: (
        <>
          <About/>
        </>
      ),
    },
    {
      path: "#contact",
      element: (
        <>
          <Contact/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
