import './TeamCard.css'

function TeamCard(props) {

    let plip = (event) => {
        let elem = event.currentTarget;
        if (elem.style.transform == "rotateY(180deg)") {
            elem.style.transform = "rotateY(0deg)";
        } else {
            elem.style.transform = "rotateY(180deg)";
        }
    }

    return (
        <div className='TeamCard' onClick={plip}>

            <div className='TeamCardBack'>
                # TEAM{props.teamNum} 
            </div>
            <div className='TeamCardFront'>
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
        </div>
    )

}

export default TeamCard