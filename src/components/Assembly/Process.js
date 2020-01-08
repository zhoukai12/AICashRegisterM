import React, { Component ,Fragment } from 'react';
import './Process.scss'
class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment >
                <div className="technologicalProcess">
                    <div className="technologicalProcess_title">加盟流程</div>
                    <div className="list">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>

            </Fragment>
         );
    }
}
 
export default Process;