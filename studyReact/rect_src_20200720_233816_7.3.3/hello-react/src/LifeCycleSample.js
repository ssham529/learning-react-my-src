import React, { Component } from 'react';

class LifeCycleSample extends Component {

    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분

    //==============================================
    // 마운트
    //==============================================
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState); 
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color}
        }
        return null; // state 를 변경할 필요가 없다면 null 을 반환
    }

    /************** 
     * render() 
     **************/

    componentDidMount() {
        console.log('componentDidMount');
    }

    //==============================================
    // 업데이트
    //==============================================

    /*************************** 
     * getDerivedStateFromProps 
     ***************************/

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    /************** 
     * render() 
     **************/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        } 
    }

    //==============================================
    // 언마운트
    //==============================================

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    //==============================================
    // 
    //==============================================

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {

        console.log('render');

        const style = {
            color: this.props.color
        }
       
        return (
            <div>
                {this.props.missing.value}  {/* 일부러 에러 발생 */}
                <h1 style={style} ref={ ref => this.myRef = ref }>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );            
    }
};

export default LifeCycleSample;