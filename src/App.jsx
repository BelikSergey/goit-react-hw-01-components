import Profile from './components/Profile/Profile';
import userData from './data/userData.json';
import Statistics from './components/Statistics/Statistics';
import StatData from './data/statistical-data.json';

export default function App(params) {
    return (
        <div>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <Statistics title="HFHFHFH" stats={StatData} />
        </div>
    );
}
