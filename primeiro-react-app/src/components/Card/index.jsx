import './style.css'

export function Card(props){

    return(

        <div className='card'>
            <strong>{props.name}</strong> {/* pegando valor de uma props*/}
            <small>{props.time}</small>
        </div>
    )
}