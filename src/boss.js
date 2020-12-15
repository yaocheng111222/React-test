import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        return (
            <div>
                {/* TransitionGroup 控制多个DOM按钮组 */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit //元素退场时自动把元素DOM删掉
                >
                    <div>123</div>
                </CSSTransition>
                <div><button onClick={this.toggle.bind(this)}>按钮</button></div>
            </div>
        );
    }
    toggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Boss;