import { players } from '../shared/ListOfPlayers'
import { useState } from 'react'
export default function Players() {
    const [player, setPlayer] = useState([])
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
            {players.map((player) => (
                <div className='column' key={player.id}>
                    <div className='card'>
                        <img src={player.img} alt='' />
                        <h3>{player.name}</h3>
                        <p className='title'></p>
                        <p><button onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopup'>Detail</a></button></p>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={player.img} alt='' />
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}


