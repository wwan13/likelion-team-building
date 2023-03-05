import ShuffleButton from '../ShuffleButton/ShuffleButton';
import TeamCard from '../TeamCard/TeamCard';
import Leaders from '../Members/Leaders';
import Members from '../Members/Members';
import Shuffle from '../Shuffle/Shuffle';
import './MainWrap.css'
import { useEffect, useState } from 'react';

function MainWrap () {

    const [leaders, setLeaders] = useState(Leaders);
    const [members, setMembers] = useState(Members);

    const shuffle = () => {
        let [leadersAfter, membersAfter] = Shuffle(Leaders, Members);
        setLeaders([...leadersAfter]);
        setMembers([...membersAfter]);
    }

    return(
        <div className='MainWrap'>
            <div className="CardWrap">
                <div className='InnerCardWrap'>
                    <TeamCard teamNum={'1'} teamLeader={leaders[0]} mem1={members[0]} mem2={members[1]} mem3={members[2]} mem4={members[3]}/>
                    <TeamCard teamNum={'2'} teamLeader={leaders[1]} mem1={members[4]} mem2={members[5]} mem3={members[6]} mem4={members[7]}/>
                    <TeamCard teamNum={'3'} teamLeader={leaders[2]} mem1={members[8]} mem2={members[9]} mem3={members[10]} mem4={members[11]}/>
                </div>
                <div className='InnerCardWrap'>
                    <TeamCard teamNum={'4'} teamLeader={leaders[3]} mem1={members[12]} mem2={members[13]} mem3={members[14]} mem4={members[15]}/>
                    <TeamCard teamNum={'5'} teamLeader={leaders[4]} mem1={members[16]} mem2={members[17]} mem3={members[18]} mem4={members[19]}/>
                    <TeamCard teamNum={'6'} teamLeader={leaders[5]} mem1={members[20]} mem2={members[21]} mem3={members[22]} mem4={members[23]}/>
                </div>
            </div>
            <div className='ButtonWrap'>
                <ShuffleButton onClick ={shuffle}/>
            </div>
        </div>
    )
}

export default MainWrap;