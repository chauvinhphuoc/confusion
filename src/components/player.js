import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayers'
export default class Player extends Component {
    render() {
        return (
            // <div className='container'>
            //     <div className='row'>
            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/cr.jpg' className="img-fluid"/>
            //                 <h3>Cristiana Ronaldo</h3>
            //                 <p className='title'>Manchester United</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>

            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/kante.jpg' className="img-fluid"/>
            //                 <h3>Kante</h3>
            //                 <p className='title'>Chelsea</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>

            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/messi.jpg' className="img-fluid"/>
            //                 <h3>Messi</h3>
            //                 <p className='title'>PSG</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>
            //     </div>

            //     <div className='row'>
            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/neymar.jpg' className="img-fluid"/>
            //                 <h3>Neymar</h3>
            //                 <p className='title'>PSG</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>

            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/kane.jpg' className="img-fluid"/>
            //                 <h3>Kane</h3>
            //                 <p className='title'>Tottenham</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>

            //         <div className='col-sm-4'>
            //             <div className='card'>
            //                 <img src='assets/images/haaland.jpg' className="img-fluid"/>
            //                 <h3>Haaland</h3>
            //                 <p className='title'>Manchester City</p>
            //                 <p><button>Detail</button></p>
            //             </div>
            //         </div>
            //     </div>

            // </div>

            <div className='container'>
                {Players.map((player) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}