

import "./GaleriaModalFotos.css"


export function GaleriaModalFotos({children,isOpen,closeModal}){
    const handleModalContainerClick = (e)=> e.stopPropagation();
    return(
       
        <article className={`modal ${isOpen &&"is-Open"}`} onClick={closeModal}>        
        <div className="modalContainer" onClick={handleModalContainerClick}>
                <button className="modalIsClose" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    );
}