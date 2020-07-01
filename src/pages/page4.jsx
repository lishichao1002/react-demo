import React, {Component} from 'react';

export default function Page4() {
    let text = 'Page 41';

    let onClick = () => {
        text = 'Click Page 41';
        console.log(text);
    };

    return (
        <div className={'hello'} style={{width: '100px'}} name={'zhangsan'}>
            <h1 onClick={onClick}>Page 4</h1>
            <Page41 text={text}/>
        </div>
    );
}

export class Page41 extends Component {
    render() {
        return (
            <div>
                <h1>Page 41</h1>
                <span>{this.props.text}</span>
            </div>
        );
    }
}
