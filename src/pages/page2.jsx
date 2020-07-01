import React from 'react';
import loadable from '@loadable/component';

const Page21 = loadable(() => import(/* webpackChunkName: "page21" */'./page21'));

export class Page2 extends React.Component {

    componentDidMount() {
        console.log(this);
        console.log(this.props);
    }

    render() {
        return (
            <>
                <h1>Page 2</h1>
                <Page21/>
            </>
        );
    }
}
