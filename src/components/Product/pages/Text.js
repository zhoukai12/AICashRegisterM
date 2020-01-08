import React, { Component ,Fragment} from 'react';
import './Text.scss'
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(this.props.match.params)
    }

    render() { 
        const id=this.props.match.params.id||'0';
        return ( 
            <Fragment>
                {id}
            </Fragment>
         );
    }
}
 
export default Text;