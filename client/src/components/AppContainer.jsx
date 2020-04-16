import React, { Component, Fragment } from 'react';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieList : []
         }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>hello</h1>
            </Fragment>
         );
    }
}
 
export default AppContainer;