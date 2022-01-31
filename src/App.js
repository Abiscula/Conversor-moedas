import { Home } from './views/Home';
import { GlobalStyle } from './assets/style/styled-Global';
import { Container } from './assets/style/styled-App';

function App() {
  return (
      <Container>
        <GlobalStyle />
        <Home />
      </Container>
  );
}

export default App;
