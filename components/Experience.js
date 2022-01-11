
const Experience = (props) => (
    <div>
        <h4 style={{marginTop:'0px'}}>{props.jobName}</h4>
        <p>{props.startYear} - {props.endYear}  |  {props.location}</p>
        <p>{props.jobDescription}</p>
    </div>
)

export default Experience;