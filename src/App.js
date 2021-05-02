import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'hookrouter';
import MainPage from './pages/MainPage';
import CreateGamePage from './pages/CreateGamePage';
import GameTeacherPage from './pages/GameTeacherPage';
import GameWaitPage from './pages/GameWaitPage';
import GameStudentPage from './pages/GameStudentPage';
import NotFoundPage from './pages/NotFoundPage';

const routes={
  "/": () => <MainPage />,
  "/create-game": () => <CreateGamePage />,
  "/game-teacher": () => <GameTeacherPage />,
  "/game-lobby": () => <GameWaitPage />,
  "/game": () => <GameStudentPage />
}
function App() {
  const routeResult=useRoutes(routes);
  return routeResult || <NotFoundPage />
}

export default App;
