import './Collaborator.css';

const Collaborator = ({ name, role, image, highlightColor }) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: highlightColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h3>{name}</h3>
                <h4>{role}</h4>
            </div>
        </div>
    )
}

export default Collaborator;