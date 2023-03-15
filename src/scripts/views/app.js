import DrawerInitiator from '../utils/drawer-initiator';
 
class App {
  constructor({ button, drawer, content, jumbotron, main }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._jumbotron = jumbotron;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      jumbotron: this._jumbotron,
    });
 
    // kita bisa menginisiasikan komponen lain bila ada
  }
}
 
export default App;