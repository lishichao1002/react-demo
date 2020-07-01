import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import loadable from '@loadable/component';

const Page11 = loadable(() => import(/* webpackChunkName: "page11" */'./page11'));

export default function Page1() {
    return (
        <>
            <h1>Page 1</h1>
            <div>
                <ul>
                    <li>
                        <Link to={'/page1/page11'}>Page1 > Sub Page1</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path={'/page1/page11'}>
                        <Page11/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}
