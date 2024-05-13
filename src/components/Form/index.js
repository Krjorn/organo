import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {
    const initialOption = 'Selecione um time';
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState(initialOption);

    const onSave = e => {
        e.preventDefault();

        if(team === initialOption) {
            alert('Selecione um time para continuar!');
            return;
        }

        props.onCollaboratorRegistered({
            name,
            role,
            image,
            team
        });
        
        setName('');
        setRole('');
        setImage('');
        setTeam(initialOption);
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    required={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={name}
                    onChange={setName}
                />
                <TextField
                    required={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    value={role}
                    onChange={setRole}
                />
                <TextField
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    value={image}
                    onChange={setImage}
                />
                <DropdownList
                    required={true}
                    label='Time'
                    items={props.teams}
                    defaultValue={initialOption}
                    value={team}
                    onChange={setTeam}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;