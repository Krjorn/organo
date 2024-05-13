import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    return (
        (props.collaborators.length > 0) &&
        <section className='team' style={{ backgroundColor: props.backgroundColor }}>
            <h2>
                {props.name}
                <span style={{ backgroundColor: props.highlightColor }}></span>
            </h2>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator
                    key={collaborator.name}
                    name={collaborator.name}
                    role={collaborator.role}
                    image={collaborator.image}
                    highlightColor={props.highlightColor}
                />)}
            </div>
        </section>
    )
}

export default Team;