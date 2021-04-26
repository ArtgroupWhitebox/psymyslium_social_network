import React from "react"
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }

    selectText = (event) => {
        event.target.select()
    }

    render() {
        return <div className={classes.statusBlock}>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} onFocus={this.selectText} onBlur={this.deActivateEditMode} value={this.props.status} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus