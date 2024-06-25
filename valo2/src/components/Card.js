import React, { Component } from 'react';
import styles from './Card.module.css';


const Card = (props) => {
    // console.log(props.agentInfo);
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.card} style={{backgroundImage: `url(${props.agentInfo?.fullPortrait})`}}>
                    {/* <img src= {props.agentInfo?.fullPortrait} alt='Agent Image' className={styles.image}/> */}
                    <div className={styles.infoContainer}><h1 className={styles.agentInfo}> {props.agentInfo?.agentName} </h1> </div>
                    <p className={styles.agentDesc}> {props.agentInfo?.agentDescription} </p>

                    <div className={styles.roleContainer}>
                        {/* <div className={styles.roleIcon} style={{backgroundImage: `url(${props.agentInfo?.roleIconImg})`}}></div>  */}
                        <img className={styles.roleIcon} src={`${props.agentInfo?.roleIconImg}`} alt="Agent Role Icon"/>
                        <p className={styles.agentRole}> {props.agentInfo?.agentRole} </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Card;