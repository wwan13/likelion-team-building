import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TeamCard from '../TeamCard/TeamCard';
import Leaders from '../Members/Leaders';
import Members from '../Members/Members';
import Shuffle from '../Shuffle/Shuffle';
import './MainWrap.css'
import { useState } from 'react';

function MainWrap () {

    const [leaders, setLeaders] = useState(Leaders);
    const [members, setMembers] = useState(Members);

    const shuffle = () => {
        console.log("click");
        let [leadersAfter, membersAfter] = Shuffle(Leaders, Members);
        console.log(leadersAfter);
        setLeaders(prevList => leadersAfter);
        setMembers(membersAfter);
    }

    return(
        <div className='MainWrap'>
            <div className="CardWrap">
                {
                    leaders.map((leader, i) => {
                        return <TeamCard teamNum={i+1} teamLeader={leader}/>
                    })
                }
            </div>
            <div className='ButtonWrap'>
                <ShuffleButton onClick ={shuffle}/>
            </div>
        </div>
    )
}

export default MainWrap;