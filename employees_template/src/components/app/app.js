import AppInfo from "../app-info/app-info";
import './app.css';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-app-form/employers-add-form";
// import {Component} from "react";


// class WhoAmI extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             years:27,
//             position:''
//         }
//     }
//
//     nextYear =() => {
//         this.setState(state =>({
//                 years: state.years + 1
//             }))
//     }
//
//     commitInputChanges = (e, color) => { // получаем сам объект события и записываем
//         console.log(color);
//         this.setState({
//             position:e.target.value
//         })
//     }
//
//     render() {
//         const {name, surname, link} =this.props;
//         const {position, years} =this.state
//         return(
//             <div>
//                 //при клике будет вызывать функцию
//                 <button onClick={this.nextYear}>{this.state.text}</button>
//                 <h1>My name is{name}, surname - {surname},
//                     age - {years},
//                     position - {position}</h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={(e) =>this.commitInputChanges(e, 'some color')}/>
//                 </form>
//             </div>
//         )
//     }
// }
//
//
// function App () {
//     return (
//         <div className='App'>
//             <WhoAmI name="John" surname="Smith" link ="facebook.com"/>
//             <WhoAmI name="Alex" surname="Shepard" link ="vk.com"/>
//         </div>
//     )
// }




function App() {

    const data =[ //массив с данными, которые приходят с сервера - имитация
        {name: "John C.", salary: 800, increase:false, id: 1},
        {name: "Alex M.", salary: 3000, increase: true, id: 2},
        {name: "Carl W.", salary: 5000, increase: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;

