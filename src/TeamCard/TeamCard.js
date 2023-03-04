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
                <p className='TeamMember'>이예빈</p>
                <p className='TeamMember'>홍용준</p>
                <p className='TeamMember'>윤현지</p>
                <p className='TeamMember'>이재헌</p>
            </div>
        </div>
    )

}

export default TeamCard