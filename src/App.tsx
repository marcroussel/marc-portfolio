import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';

import './App.module.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
