import React from "react"
import { componentDidUpdate } from "react"
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusLocal: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusThunk(this.state.statusLocal)
    }

    onChangeUserStatus = (event) => {
        this.setState({
            statusLocal: event.target.value 
        })
    }

    componentDidUpdate(prevProps, prevState) {
        prevProps.status !== this.props.status && 
        this.setState({
            statusLocal: this.props.status
        })
    }

    selectText = (event) => {
        event.target.select()
    }

    render() {
        return <div className={classes.statusBlock}>
            { !this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode} >{this.props.status || 'Status: ;););)' }</span>
                </div> :
                <div>
                    <input autoFocus={true} onFocus={this.selectText} onBlur={this.deActivateEditMode} 
                    onChange={this.onChangeUserStatus} value={this.state.statusLocal} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus