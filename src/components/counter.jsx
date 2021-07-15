import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value,
    //     tags: []
    // };
    spanStyles = {
        fontSize: 15,
        fontWeight: 'bold'
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{ this.state.tags.map((tag) => <li key={ tag }>{ tag }</li>)}</ul>
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            // Make API calls to get the latest data
        }
    }

    componentWillUnmount() {
        console.log('Counter - UnMount');
    }

    render() { 
        console.log('Counter Rendered');
        return (           
            <div>
                <h4>Counter #{ this.props.counter.id }</h4>
                <span style={ this.spanStyles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-2">Increment</button> 
                <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>
            </div>
            // { this.state.tags.length === 0 && "Please create a new tag!" }
            // { this.renderTags() } 
            // <React.Fragment>
            // </React.Fragment>
        );
    }

    getBadgeClasses() {
        let countClasses = "badge m-2 alert-";
        countClasses += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return countClasses;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
}
 
export default Counter;