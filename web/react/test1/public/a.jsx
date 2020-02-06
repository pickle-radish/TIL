class Counter extends React.Component{
    render(){
        return(
            <h1>{this.props.count}</h1>
        );
    }
}
class CounterParent extends React.Component{
    state={message:0};
    a=()=>{
        this.setState({
            message: this.state.message+1
        });
    };
    render(){
        return(
            <div>
                <Counter count={this.state.message} />
                <button onClick={this.a}> + </button>
            </div>
        );
    }
}
ReactDOM.render(
    <CounterParent/>, document.body
);