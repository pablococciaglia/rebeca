import React from 'react'
import entrevistas from '../assets/entrevistas/entrevistas'
import ReactPlayer from 'react-player/lazy'
import YouTube from 'react-youtube';

export const Interviews = () => {

    const opts = {
        width: '100%'
    }

    return (
        <>
            <h1 >Entrevistas</h1>
            <div className="row">
                    {entrevistas.map(entrevista=>(
                        
                        <div key={entrevista.url} className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title"><strong>{entrevista.programa}</strong></span>
                                    <YouTube videoId={entrevista.url} opts={opts}/>
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
