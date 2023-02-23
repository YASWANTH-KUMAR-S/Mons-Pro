import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[
      ],
      searchfield:'',
    };
    //console.log("constructor");
  }
  componentDidMount(){
    //console.log("CDM");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>{this.setState(()=>{
      return {monsters:users}
    },
    ()=>{
      return console.log(this.state);
    }
    )});
  }
  onsearchchange=(event)=>
    {
      const searchfield=event.target.value.toLocaleLowerCase();
      this.setState(
        ()=>{
          return {searchfield};
        }
      );
    }
  render(){
    const{monsters,searchfield}=this.state;
    const{onsearchchange}=this;
    const fileteredmonster=this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchfield);
  });
  return (
    <div className="App">
      <h1 className ='app-title'>Monsters-Profile</h1>
      <SearchBox className='search-box' onChangeHandler={onsearchchange}placeholder='search monsters'/>
      <CardList monsters={fileteredmonster}/>  
      </div>
    );
    } 
}
export default App;
