import React, {Component, createRef, PureComponent, useRef, useState} from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

console.log(FancyButton);

class RefTest1 extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // 你可以直接获取 DOM button 的 ref：
        this.ref = React.createRef();
        console.log('test1 constructor', this.ref.current);
    }

    componentDidMount() {
        console.log('test1 didMount', this.ref.current);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('test1 didUpdate', this.ref.current);
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        console.log('test1 render', this.ref.current);
        return (
            <div>
                <button ref={this.ref} onClick={this.addCount}>Test1 Count: {this.state.count}</button>
                {/*<h5>Parent Count: {this.props.count}</h5>*/}
            </div>
        );
    }
}

function RefTest2_() {
    const ref = useRef();
    console.log('test2 fun', ref.current);
    return (
        <FancyButton ref={ref}>Click me!</FancyButton>
    );
}

const RefTest2 = React.memo(RefTest2_);

export function Home1() {
    const [count, setCount] = useState(0);
    const ref = useRef();

    console.log('home fun', ref.current);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Home Count: {count}</button>
            <RefTest1 ref={ref}/>
            <RefTest2/>
        </>
    );
}

export class Home extends Component {
    render() {
        return (
            <Home1/>
        );
    }
}
