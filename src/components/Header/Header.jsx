import classes from './Header.module.css'
console.log (classes)

const Header = () => {
    return <header className={classes.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWWl122hfo3Mds1f9lNAfwEXiaGU7_VaiPA&usqp=CAU" />
    </header>
}

export default Header;