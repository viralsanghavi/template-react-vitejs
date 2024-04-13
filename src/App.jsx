import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/dashboard" element={<p>Dashboard</p>} />
      <Route path="about" element={<p>About</p>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
