import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const header = "!!! Write Your Own Content !!!";

  return (
    <>
      <Header header={header} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
