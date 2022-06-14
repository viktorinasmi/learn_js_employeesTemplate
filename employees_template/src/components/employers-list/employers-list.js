import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

//создание списка

const EmployersList = ({data}) => {

    //преобразование полученных данных в массив элементов

    const elements = data.map(item => { //перебор данных и получение элементов с дальнейшим транслированием на страницу
        const {id, ...itemProps} =item; // берём переменную id, остальные прокидываем в itemProps
        return (
            <EmployersListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;