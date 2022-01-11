
const Education = (props) => (
    <div>
        <h4 style={{marginTop:'0px'}}>{props.schoolName}</h4>
        <p>{props.startYear} - {props.endYear}  |  {props.location}</p>
        <p>{props.schoolDescription}</p>
    </div>
)

export default Education;