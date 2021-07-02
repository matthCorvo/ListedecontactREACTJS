import React, { Component } from 'react'
import Contact from './Contact';
export default class Contacts extends Component {

    state = {
        contacts : [
            {
                id : 1,
                nom : 'John Wick',
                email : 'Wick@hotmail.fr',
                tel : '111-111-11'
            },
            {
                id : 2,
                nom : 'Sasha Bourgpalette',
                email : 'pikachu@hotmail.fr',
                tel : '222-222-22'
            },
            {
                id : 3,
                nom : 'Robert Stark',
                email : 'stark@hotmail.fr',
                tel : '444-444-44'
            }

        ]
    }


    deleteContact = (id) => {
       // console.log(123);
        console.log(id);
        // Filtrer contact 
        const newContacts = this.state.contacts.filter(contact => 
            contact.id !== id);

            this.setState ({ 
                contacts: newContacts
            })
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(contact => (
                    <Contact 
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </div>
        )
    }
}
