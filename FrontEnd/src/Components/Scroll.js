import React , {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'


const Scroll = () => {
    const [visible , setVisible] = useState(false);

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true)
        }
        else if(scrolled < 300){
            setVisible(false)
        }
    };

    const scrolltop = () =>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    }

    window.addEventListener('scroll' , toggleVisible);

    return (
        <div>
            <FontAwesomeIcon className='scroll' icon={faArrowAltCircleUp} onClick={scrolltop} style={{display : visible ? 'inline' : 'none'}}  /> 
        </div>      
    );
}

export default Scroll;
