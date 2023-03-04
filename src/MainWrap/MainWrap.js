import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TeamCard from '../TeamCard/TeamCard';
import './MainWrap.css'

function MainWrap () {
    return(
        <div className='MainWrap'>
            <div className="CardWrap">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
            <div className='ButtonWrap'>
                <ShuffleButton />
            </div>
        </div>
    )
}

export default MainWrap;