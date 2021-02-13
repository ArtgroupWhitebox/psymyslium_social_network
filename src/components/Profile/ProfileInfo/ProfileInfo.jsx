import classes from './ProfileInfo.module.css'
console.log(classes)

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWWl122hfo3Mds1f9lNAfwEXiaGU7_VaiPA&usqp=CAU" />
            </div>
            <div className={classes.postBlock}>
                ava discript
            </div>
        </div>
    );
}

export default ProfileInfo;