import './employers-list-item.css'
import {Component} from "react";


class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { //передаём состояние
            increase: false,
            promotion: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) =>({ //callback. Деструктуризируем increase, чтобы не писать state
            increase:!increase // возвращаем объект из setState -не пишем return, так как есть круглые скобки
        })) // устанавливаем свойство increase, которое противоположно тому, которое было
    }

    addPromotion = (promotion) => {
        this.setState(({promotion})=> ({
            promotion:!promotion
        }))
    }

    render() {

        const {name, salary} = this.props; //вытаскиваем переменные
        const {increase, promotion} = this.state;


        let classNames = "list-group-item d-flex justify-content-between"; //все классы, которые находятся в элементе
        if (increase) {
            classNames += ' increase';
        }

        if (promotion) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                onClick={this.addPromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm"
                    onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployersListItem;