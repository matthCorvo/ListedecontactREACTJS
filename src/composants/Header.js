import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0 "   >
                <div className="container">
                <a href="/" className="navbar-brand"> Liste de Contacts
                </a>
             
              <ul className="navbar-nav mr-auto">
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Accueil</a>
        </li>
      
      </ul>
                </div>

                </nav>

                <h3 className="title text-center" > Changer les icones<span>.</span> <i class="far fa-envelope" ></i> <span>.</span><i class="fas fa-phone"></i> <span>.</span>
                 et plus encore </h3>
            </div>


        )
    }
}
