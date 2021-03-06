import React, {Component} from 'react';
import './InstanceInfo.css';
import {clearAllMessage, setControlVisibility} from '../../../actions';
import {connect} from 'react-redux';

class InstanceInfo extends Component {

    render() {
        return (
            <div className={"instance-info " + this.props.className + " " + (this.props.selected ? "selected" : "")}>
                <div onClick={this.props.toggleSelectorVisible}>{this.props.instances.length} <span className="big">INSTANCES</span><span className="small">INS</span></div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        instances: state.target.instances
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setControlVisibility: (name, value) => dispatch(setControlVisibility(name, value)),
        clearAllMessage: () => dispatch(clearAllMessage())
    };
};

InstanceInfo = connect(mapStateToProps, mapDispatchToProps)(InstanceInfo);

export default InstanceInfo;