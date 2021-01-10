import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import Friend from '../friend/friend';

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={s.item}>
                    <Friend
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
export default FriendList;
