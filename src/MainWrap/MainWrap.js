import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TeamCard from '../TeamCard/TeamCard';
import Leaders from '../Members/Leaders';
import './MainWrap.css'

function MainWrap () {

    console.log(Leaders);

    return(
        <div className='MainWrap'>
            <div className="CardWrap">
                <TeamCard teamNum="1" teamLeader={Leaders[0]}/>
                <TeamCard teamNum="2" teamLeader={Leaders[1]}/>
                <TeamCard teamNum="3" teamLeader={Leaders[2]}/>
                <TeamCard teamNum="4" teamLeader={Leaders[3]}/>
                <TeamCard teamNum="5" teamLeader={Leaders[4]}/>
                <TeamCard teamNum="6" teamLeader={Leaders[5]}/>
            </div>
            <div className='ButtonWrap'>
                <ShuffleButton />
            </div>
        </div>
    )
}

export default MainWrap;