import React from 'react';

class Welcome extends React.Component {

    render(){
        const {name}=this.props
        return(
            <h1>
                Hola {name}
            </h1>
        );
    }
}

export default Welcome;