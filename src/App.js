import  {createBrowserRouter,RouterProvider} from "react-router-dom"
import Username from "./components/Username";
import Register from "./components/Register";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import PageNotFound from "./components/PageNotFound";
import './App.css';

const router = createBrowserRouter([
 {
  path:"/",
  element: <Username/>
 },
 {
  path:"/register",
  element:<Register/>
 },
 {
  path:"/password",
  element:<Password/>
 },
 {
  path:"/profile",
  element:<Profile/>
 },
 {
  path:"/reset",
  element:<Reset/>
 },
 {
  path:"/recovery",
  element:<Recovery/>
 },
 {
  path:"*",
  element:<PageNotFound/>
 },

])

function App() {
  return (
    <main className="App">
    <RouterProvider router={router}>
    </RouterProvider>
    </main>
  );
}

export default App;
