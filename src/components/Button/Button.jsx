import classes from './Button.module.css'

export const Button = ({value, onClick, className, type, disabled}) => {
    return <>
        <button onClick={onClick} className={className} type={type} disabled={disabled}>
            {value}
        </button>
    </>
}

export const ButtonAqua = ({value, onClick, type, disabled}) => {
    return <Button onClick={onClick} type={type} value={value} disabled={disabled} className={classes.buttonAqua}/>
}

export const ButtonBlue = ({value, onClick, type}) => {
    return <Button onClick={onClick} type={type} value={value} className={classes.buttonBlue}/>
}

export const ButtonYellow = ({value, onClick, type, disabled}) => {
    return <Button onClick={onClick} type={type} value={value} disabled={disabled} className={classes.buttonYellow}/>
}

export const ButtonWhite = ({value, onClick, type}) => {
    return <Button onClick={onClick} type={type} value={value} className={classes.buttonWhite}/>
}

