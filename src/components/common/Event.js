import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import speakers from '../../data/speakers/speakers.json'
import talks from '../../data/talks.json'
import "../../styles/app.css";
import { Link } from "gatsby-plugin-modal-routing";
import ReactModal from 'react-modal';
import { GatsbyImage  } from "gatsby-plugin-image"

const Event = ({data, speakerId}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true)
        console.log("openModal")
    }
    const closeModal = () => {
        setIsOpen(false)
        console.log("closeModal")
    }
    const afterOpenModal = () => {
        console.log("afterOpenModal")
    }
    const speaker = speakers[speakerId]
    const talk = talks[data.id]

    return (
        <div>
            <div className="event" onClick={openModal}>
                <div className="event-time">
                    {data.startTime} ~ {data.endTime == "" ? 
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>{data.endTime}</span>}
                </div>
                {speaker != undefined ?
                    <div className="event-speaker">
                        <div className="name">
                            {speaker.speakerKorean}
                        </div>
                        <div className="affiliation">
                            {speaker.affiliation}
                        </div>
                    </div> : null}
                <div className="event-title">
                    {data.title}
                </div>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="event-modal">
                    <button onClick={closeModal} className="event-modal-close">
                        <img src="images/icons/close.svg" alt="Close" />
                    </button>
                    {
                        speaker != undefined
                        ? <div>
                            <img className="event-modal-image"
                                src={speaker.image} alt="profile"/>
                            <div className="event-modal-speaker-name">
                                {speaker.speakerKorean}
                                <div className="event-modal-speaker-affiliation">
                                    {`(${speaker.affiliation})`}
                                </div>
                            </div>
                            <div className="event-modal-speaker-contact">
                                {
                                    speaker.website != ""
                                    ? <a
                                        href={speaker.website}
                                        className="event-modal-speaker-website"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img
                                            src="/images/icons/website.svg"
                                            alt="Homepage"
                                            height="20px"
                                            width="20px"/>
                                    </a>
                                    : null
                                }
                                {
                                    speaker.email != ""
                                    ? <a
                                        href={speaker.email}
                                        className="event-modal-speaker-email"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img
                                            src="/images/icons/at.svg"
                                            alt="Email"
                                            height="18px"
                                            width="18px"/>
                                    </a>
                                    : null
                                }
                            </div>
                         </div>
                        : null
                    }
                    <div className="event-modal-talk-title">
                        {talk.title}
                    </div>
                    <div className="event-modal-talk">
                        <div className="event-modal-content-title">Talk Abstract</div>
                        {talk.abstract}
                    </div>
                    {
                        speaker != undefined
                        ? <div className="event-modal-talk">
                            <div className="event-modal-content-title">Speaker Bio</div>
                            {speaker.bio}
                        </div>
                        : null
                    }
                </div>
            </ReactModal>
        </div>
    )
}



export default Event;