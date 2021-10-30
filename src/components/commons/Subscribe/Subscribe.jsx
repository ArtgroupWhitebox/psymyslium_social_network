import { ButtonAqua, ButtonYellow } from "../../Button/Button"


const Subscribe = ({isFollowed, userId, isDisabled, onClickUnFollowed, onClickFollowed}) => {

    return <div>
        {isFollowed 
            ? <ButtonAqua disabled={isDisabled.some(id => id === userId)} onClick={() => {onClickUnFollowed(userId)} } 
                value={'Unsubscribe'} />
            : <ButtonYellow disabled={isDisabled.some(id => id === userId)} onClick={() => {onClickFollowed(userId)} } 
                value={'Subscribe'} />
        }
    </div>          
}

export default Subscribe