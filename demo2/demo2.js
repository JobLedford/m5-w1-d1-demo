class HelloMessage extends React.Component {
    render(){
        return React.CreateElement(
            "div",
            null,
            "Hello",
            this.props.name
        );
    }
}
ReactDOM.render(React.createElement(HelloMessage,
    { name: "Westcliff" }),
    document.getElementById('hello-example')
);