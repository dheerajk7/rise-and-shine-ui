import { Routes, Route } from 'react-router-dom';
import MainContainer from '../main';
import MobileContainer from '../mobile';

function RoutesList() {
  return (
    <Routes>
      <Route exact path="/mobile" element={<MobileContainer />} />
      <Route exact path="/main" element={<MainContainer />} />
      <Route exact path="/" element={<MainContainer />} />
    </Routes>
  );
}

export default RoutesList;
