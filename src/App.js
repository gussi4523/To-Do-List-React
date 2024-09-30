import logo from './logo.svg';
import './App.css';
import Todo_list from './custom_cop/Todo_list';
import Person_List from './custom_cop/Keys/Keys_s' 
import TopBar from './custom_cop/Top_bar/Top_bar'
import ListChooser from './custom_cop/List_Choose_Bar/List_Choose_Bar'
function App() {
  return (
    <div className="App">
      
      <header className="App-header">

      </header>
      <body>
      <div className='pot-list-choose'>
        <ListChooser></ListChooser>
      </div>
      <div className='list-center'>
        <div className="Person-list">
          <Person_List title="Webers"></Person_List>
        </div>
      </div>
      
      </body>
    </div>
  );
}



export default App;
