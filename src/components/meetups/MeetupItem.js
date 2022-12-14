import Card from '../ui/Card';
import classes from './MeetupItem.module.css';


function MeetupItem(props){
    function favoriteHandler(){
        fetch(
			"https://react-getting-started-ffdf1-default-rtdb.firebaseio.com/favorites.json",
            {
            method:'POST',
            body: JSON.stringify(props),
            headers: {
                'Content-Type':'application/json'
            }
        })
        // .then(() => {
		// 	history('/');
		// });
    }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={favoriteHandler}>Add To Favorites</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;