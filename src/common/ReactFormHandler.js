import React from 'react';

export class ReactFormHandler extends React.Component {

    handleFormChange = (event) => {
        if (event && event.target && event.target.value && event.target.name) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };
}
