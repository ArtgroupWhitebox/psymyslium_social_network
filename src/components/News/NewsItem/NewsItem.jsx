import classes from './NewsItem.module.css'
console.log(classes)

const NewsItem = (props) => {

    return (
        <div className={classes.message}>
            { props.message }
        </div>
    );
}

export default NewsItem;