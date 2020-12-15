import React, {Component, Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['样例001','样例002']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {this.state.list.map((item,index) => <XiaojiejieItem content={item} key={index} index={index} deleteItem={this.deleteItem.bind(this)} />)}
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }
    deleteItem(index) {
        let list_n = this.state.list
        list_n.splice(index,1)
        this.setState({
            list: list_n
        })
    }
}

export default Xiaojiejie