import './TeamCard.css'

function TeamCard(props) {

    return (
        <div className='TeamCard'>
            <div className='LeaderSection'>
                <p className='TeamNumber'># team{props.teamNum}</p>
                <div className='LeaderTextSection'>
                    <p className='Leader'>Leader</p>
                    <p className='TeamLeader'>{props.teamLeader}</p>
                </div>
            </div>

            <div className='MemberSection'>
                <p className='TeamMember'>{props.mem1}</p>
                <p className='TeamMember'>{props.mem2}</p>
                <p className='TeamMember'>{props.mem3}</p>
                <p className='TeamMember'>{props.mem4}</p>
            </div>
        </div>
    )

}

export default TeamCard