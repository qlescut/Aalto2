import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div>
                <img src="" alt=""/>
                <p>
                    3 Rue du docteur Huart, 59298 Lille/r
                    03 03 03 03 03  | contact@alto.fr
                </p>
            </div>

            <div>
                <subtitle>Projets</subtitle>
                <nav>
                    <Link to="/Index">Bureaux/Co-working</Link>
                    <Link to="/Index">Restaurants</Link>
                    <Link to="/Index">Banques</Link>
                    <Link to="/Index">Médical</Link>
                    <Link to="/Index">Industrie</Link>
                </nav>
            </div>

            <div>
                <subtitle>RECEVOIR NOTRE NEWSLETTER</subtitle>
                <input type={email} required/>
                <button>Envoyer</button>
            </div>

            <div>
                <subtitle>NOUS INTERVENONS A</subtitle>
                <ul>
                    <li><a href="">Lille</a></li>
                    <li><a href="">Villeneuve d’ascq</a></li>
                    <li><a href="">Roubaix</a></li>
                    <li><a href="">Tourcoing</a></li>
                    <li><a href="">Arras</a></li>
                    <li><a href="">Amiens</a></li>
                    <li><a href="">Calais</a></li>
                    <li><a href="">Boulogne sur mer</a></li>
                    <li><a href="">Lens</a></li>
                    <li><a href="">Valenciennes</a></li>
                    <li><a href="">Le Touquet</a></li>
                    <li><a href="">Dunkerque</a></li>
                    <li><a href="">Beauvais</a></li>
                    <li><a href="">Compiègne</a></li>
                    <li><a href="">Cergy</a></li>
                </ul>
            </div>

            <div>
                <subtitle>RESEAUX SOCIAUX</subtitle>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a>
            </div>

            <div>
                <subtitle>PRESTATIONS</subtitle>
                <nav>
                    <Link to="/Index">Construction</Link>
                    <Link to="/Index">Extension</Link>
                    <Link to="/Index">Rénovation</Link>
                    <Link to="/Index">Cabinet d’architecte</Link>
                    <Link to="/Index">Conseil en amménagement</Link>
                </nav>
            </div>
        </div>

    )
}
