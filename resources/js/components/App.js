import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table} from 'reactstrap';
import axios from 'axios';

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            newUserModal: false,
            newUserData: {
                name: '',
                email: '',
                cpf: '',
                phone: '',
            },
            editUserModal: false,
            editUserData: {
                name: '',
                email: '',
                cpf: '',
                phone: '',
            }
        }
    }

    loadUser() {
        axios.get('http://127.0.0.1:8000/user_json').then((response) => {
            this.setState({
                users: response.data
            })
        })
    }

    addUser() {
        axios.post('http://127.0.0.1:8000/user_json', this.state.newUserData).then((response) => {
            let {users} = this.state
            this.loadUser()
            this.setState({
                users,
                newUserModal: false,
                newUserData: {
                    name: '',
                    email: '',
                    cpf: '',
                    phone: '',
                }
            })

        })
    }

    editUser(id, name, email, cpf, phone) {
        this.setState({
            editUserData: {
                id,
                name,
                email,
                cpf,
                phone
            },
            editUserModal: !this.state.editUserModal
        })
    }

    updateUser() {
        let {name, email, cpf, phone} = this.state.editUserData

        axios.put('http://127.0.0.1:8000/user_json/' + this.state.editUserData.id, {
            name,
            email,
            cpf,
            phone
        }).then((response) => {
            this.loadUser()
            this.setState({
                editUserModal: false,
                editUserData: {
                    name: '',
                    email: '',
                    cpf: '',
                    phone: '',
                }
            })
        })
    }

    deleteUser(id) {
        console.log('delete')
        axios.delete('http://127.0.0.1:8000/user_json/' + id).then((response) => {
            this.loadUser()
        })
    }


    componentDidMount() {
        this.loadUser();
    }

    toggleNewUserModal() {
        this.setState({
            newUserModal: !this.state.newUserModal
        })
    }

    toggleEditUserModal() {
        this.setState({
            editUserModal: !this.state.editUserModal
        })
    }


    render() {
        let users = this.state.users.map((user) => {
            return (
                <tr>
                    <td> {user.id}</td>
                    <td> {user.name}</td>
                    <td> {user.email}</td>
                    <td> {user.cpf}</td>
                    <td> {user.phone}</td>
                    <td>
                        <Button size='sm' className='btnEdit'
                                onClick={this.editUser.bind(this, user.id, user.name, user.email, user.cpf, user.phone)}> Editar </Button>

                        <Button size='sm' className='btnDelete'
                                onClick={this.deleteUser.bind(this, user.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='container'>
                <h1>Lista de Usuários - NED Digital</h1>

                <Modal isOpen={this.state.newUserModal} toggle={this.toggleNewUserModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewUserModal.bind(this)}><h4>Adicionar Usuário</h4></ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for='name'>Nome completo (sem abreviações)</Label>
                            <Input required minlength='3' id='name'
                                   value={this.state.newUserData.name}
                                   onChange={(e) => {
                                       let {newUserData} = this.state
                                       newUserData.name = e.target.value
                                       this.setState({newUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>E-mail</Label>
                            <Input required type='email' id='email' value={this.state.newUserData.email}
                                   onChange={(e) => {
                                       let {newUserData} = this.state
                                       newUserData.email = e.target.value
                                       this.setState({newUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='cpf'>CPF (inserir no formato xxx.xxx.xxx-xx)</Label>
                            <Input required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" id='cpf' value={this.state.newUserData.cpf}
                                   onChange={(e) => {
                                       let {newUserData} = this.state
                                       newUserData.cpf = e.target.value
                                       this.setState({newUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='phone'>Telefone</Label>
                            <Input required id='phone' value={this.state.newUserData.phone}
                                   onChange={(e) => {
                                       let {newUserData} = this.state
                                       newUserData.phone = e.target.value
                                       this.setState({newUserData})
                                   }}></Input>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button className='btnAdicionar' onClick={this.addUser.bind(this)}>Adicionar</Button>{' '}
                        <Button className='btnDelete'
                                onClick={this.toggleNewUserModal.bind(this)}>Voltar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.editUserModal} toggle={this.toggleEditUserModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditUserModal.bind(this)}><h4>Editar Usuário</h4></ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for='name'>Nome completo (sem abreviações)</Label>
                            <Input required minlength='3' id='name'
                                   value={this.state.editUserData.name}
                                   onChange={(e) => {
                                       let {editUserData} = this.state
                                       editUserData.name = e.target.value
                                       this.setState({editUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>E-mail</Label>
                            <Input required type='email' id='email' value={this.state.editUserData.email}
                                   onChange={(e) => {
                                       let {editUserData} = this.state
                                       editUserData.email = e.target.value
                                       this.setState({editUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='cpf'>CPF</Label>
                            <Input required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" id='cpf' value={this.state.editUserData.cpf}
                                   onChange={(e) => {
                                       let {editUserData} = this.state
                                       editUserData.cpf = e.target.value
                                       this.setState({editUserData})
                                   }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='phone'>Telefone</Label>
                            <Input required id='phone' value={this.state.editUserData.phone}
                                   onChange={(e) => {
                                       let {editUserData} = this.state
                                       editUserData.phone = e.target.value
                                       this.setState({editUserData})
                                   }}></Input>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button className='btnConfirmar'
                                onClick={this.updateUser.bind(this)}>Confirmar Edição</Button>{' '}
                        <Button className='btnDelete'
                                onClick={this.toggleEditUserModal.bind(this)}>Voltar</Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </Table>
                <Button onClick={this.toggleNewUserModal.bind(this)}
                        className='btnCadastrar'>Cadastrar</Button>
            </div>
        )
    }
};


if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
