import React from 'react'
import imgs from '../assets/fotos/galeria/galeria'
import { SRLWrapper } from "simple-react-lightbox";

export const Gallery = () => {
    return (
        <>
            <h1 >Galería</h1>
            <SRLWrapper>
                <section className="gallery">
                    {imgs.map(img=>(
                        <a href={img} key={img.img}>
                            <figure className="gallery__item"><img src={img.img} alt={img.desc} className="gallery__img z-depth-3"/></figure>
                        </a>
                    ))} 
                </section>
            </SRLWrapper>
        </>
    )
}
