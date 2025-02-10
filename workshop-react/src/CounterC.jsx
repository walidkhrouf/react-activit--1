import { Component } from "react";

export default class CounterC extends Component
{
    static getDerivedStateFromProps(props, state)
    {
        console.log('CounterC: getDerivedStateFromProps');
        if(props.value !== state.value)
        {
            return { value: props.value };
        }
    
    }
    render()
    {
        console.log('CounterC: render');
        return (
            <div>
                <h1>CounterC</h1>
                <p>{this.state.value}</p>
            </div>
        );
    }
}