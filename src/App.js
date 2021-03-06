import { Home } from './views/Home';
import { GlobalStyle } from './assets/style/styled-Global';
import { Container } from './assets/style/styled-App';
import { useContextState} from './provider/Context';

function App() {

  const { theme } = useContextState()

  return (
      <Container>
        <GlobalStyle theme={theme} />
        <Home />
      </Container>
  );
}

export default App;
