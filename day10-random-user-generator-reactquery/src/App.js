import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {QueryClientProvider, QueryClient} from 'react-query';
import Home from "./components/Home"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
   
  )
}

export default App
