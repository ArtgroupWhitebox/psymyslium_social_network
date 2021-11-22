const Modal = ({className, onClickFn, argumentOnClickFn, children}) => {
    return <div className={className}
        id='modal_bg' onClick={(e) => e.target.getAttribute('id') === 'modal_bg' && onClickFn(argumentOnClickFn) }>
        <div id='form'>
            {children}
        </div>
    </div>
}

export default Modal