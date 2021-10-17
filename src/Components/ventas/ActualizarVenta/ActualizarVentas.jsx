import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export function ActualizarVentas({ closeAction }) {
    const [stRegistro, setStRegistro] = useState({id:'Generar  > >', Cliente:'', Identificacion:'', Total:"", vendedor:"", Estado:""}); //, estado:true

    const hdlAsignID = ()=>{
        // const newReg = {...stRegistro}
        // newReg.id = nanoid(8)
        setStRegistro((prevState)=>({...prevState, id:nanoid(8)})) //{id:nanoid(8), descripcion:stRegistro.descripcion, valor:stRegistro.valor});
        //setStRegistro({id:nanoid(8), descripcion:stRegistro.descripcion, valor:stRegistro.valor});
    }

    const hdlcli = (e)=>{
        setStRegistro((prevState)=>({...prevState, Cliente:e.target.value}))
    }
    
    const hdlIde = (e)=>{
        setStRegistro((prevState)=>({...prevState, Identificación:e.target.value}))
    }
    const hdlTot = (e)=>{
        setStRegistro((prevState)=>({...prevState, Total:e.target.value}))
    }
    const hdlVen = (e)=>{
        setStRegistro((prevState)=>({...prevState, Vendedor:e.target.value}))
    }

    const hdlEst = (e)=>{
        setStRegistro((prevState)=>({...prevState, Estado:e.target.value}))
    }
    const hdlClose = ()=>{
        closeAction();
    };

    const hdlForm = (e)=>{
        e.preventDefault();


        let id = stRegistro.id;
        let Cli = stRegistro.Cliente;
        let ide = stRegistro.Identificacion;
        let Tot = stRegistro.Total;
        let Vend=stRegistro.Vendedor;
        let Est=stRegistro.Estado;
        
        if(id === 'Generar  > >' || Cli.trim() === '' || ide.trim() === '' || Tot.trim() === '' || Vend.trim() === '' || Est.trim() === ''){
            alert('Faltan datos');
            return;
        }
        
        let jsonProd = stRegistro;
        console.log(jsonProd)
        setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
        
        hdlClose();
    }

    return (
        <Fragment>
            <form onSubmit={hdlForm}>
                {/* <!-- ID --> */}
                <div className="mb-3">
                    <p className="h5 text-center">
                        ID ::: {nanoid(8)/*OJO nota 1*/} {/* <!-- txt --> */}
                    </p>
                </div>
                <p>-Ingrese los nuevos datos de la venta-</p>
                {/* <!-- Cliente --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Nuevo Cliente {/* <!-- txt --> */}
                    </label>
                    <input value={stRegistro.descripcion} onChange={hdlcli} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                {/* <!-- IDentificación --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                    Identificación {/*<!-- txt -->*/}
                    </label>
                    <input value={stRegistro.Identificacion} onChange={hdlIde} className="form-control" id="modalInputProductPrice" type="text"/>
                </div>
                
                {/* <!-- Total --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Valor Total {/*<!-- txt -->*/}
                    </label>
                    <input value={stRegistro.Total} onChange={hdlTot} className="form-control" id="modalInputProductPrice" type="text"/>
                </div>
                {/* <!-- Vendedor --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Vendedor {/* <!-- txt --> */}
                    </label>
                    <input value={stRegistro.vendedor} onChange={hdlVen} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                
                {/* <!-- Estado --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Estado {/* <!-- txt --> */}
                    </label>
                    <input value={stRegistro.estado} onChange={hdlEst} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                

                <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#myModalProdSucces">Actualizar</button>
            </form>
        </Fragment>
    )
}
