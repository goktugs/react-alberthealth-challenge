import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './MovieContext';
import Container from './components/Container';
import Details from './components/Details';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopHeader />
                <Container />
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
