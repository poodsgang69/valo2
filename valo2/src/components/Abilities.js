import React, { useState } from 'react';
import styles from './Abilities.module.css';

const Abilities = (props) => {

    const [abilityStyle, setAbilityStyle] = useState(`${styles.ability}`);
    const moveToLeft = () => {
        setAbilityStyle(`${styles.ability}`);
    }

    const moveToCenter = () => {
        setAbilityStyle(`${styles.ability} ${styles.flex}`);
    }

    console.log(props.abilities);

    return (
        <React.Fragment>
            <div className={styles.overallFlex}>
                <div className={styles.abilityContainer}>
                    <div className={abilityStyle} id="ab1">
                        <img src={`https://media.valorant-api.com/agents/${props.uuid}/abilities/ability1/displayicon.png`} alt='ability'/>
                        <p className={styles.info}>{props.abilities.ability1}</p>
                    </div>

                    <div className={abilityStyle} id="ab2">
                        <img src={`https://media.valorant-api.com/agents/${props.uuid}/abilities/ability2/displayicon.png`} alt="ability" />
                        <p className={styles.info}>{props.abilities.ability2}</p>
                    </div>

                    <div className={abilityStyle} id="ab3">
                        <img src={`https://media.valorant-api.com/agents/${props.uuid}/abilities/grenade/displayicon.png`} alt="ability" />
                        <p className={styles.info}>{props.abilities.ability3}</p>
                    </div>

                    <div className={abilityStyle} id="ab4">
                        <img src={`https://media.valorant-api.com/agents/${props.uuid}/abilities/ultimate/displayicon.png`} alt="ability" />
                        <p className={styles.info}>{props.abilities.ability4}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Abilities;