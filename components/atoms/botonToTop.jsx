import React from "react";
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";


const BotonToTop = () => {

    const onClickUp = () => {
        scroll.scrollToTop();
    }

  return (
        <button onClick={onClickUp}
        className="text-black text-xl w-12 h-12 ml-auto mr-8 mb-">
            <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
  )
}
export default BotonToTop