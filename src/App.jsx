import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>

        <h1>Learn & Master GitHub Actions</h1>
        <h2>Hello, this is sherif and i am practicing on GitHub Actions!</h2>
      </header>
      <MainContent />
    </>
  );
}

export default App;
