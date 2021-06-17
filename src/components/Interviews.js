import React from 'react'
import ReactPlayer from 'react-player/youtube'
import entrevistas from '../assets/entrevistas/entrevistas'

export const Interviews = () => {
    return (
        <>
            <h1 >Entrevistas</h1>
            <div className="row">


            
                    {entrevistas.map(entrevista=>(
                        
                        <div key={entrevista.url} className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title"><strong>{entrevista.programa}</strong></span>
                                    <ReactPlayer url={entrevista.url} width="100%" />
                                </div>
                                <div className="card-action">
                                    <p> {entrevista.entrevistados}</p>
                                </div>
                            </div>
                         </div>
                    ))} 
            </div>
                
        </>
    )
}
