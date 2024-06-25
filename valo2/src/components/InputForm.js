import React, { useRef, useState } from 'react';
import styles from './InputForm.module.css';

const InputForm = (props) => {

    URL = `https://valorant-api.com/v1/agents`;

    const inputElementRef = useRef();
    const [agentName, setAgentName] = useState("");
    const [agentPresent, setAgentPresent] = useState(true);
    // const [extractedData, setExtractedData] = useState({
    //     'agentName': "",
    //     'agentDescription': "",
    //     'agentRole': ""
    // });

    const AgentData = {
        "Astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
        "Breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
        "Brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
        "Chamber": "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
        "Controller": "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        "Cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
        "Duelist": "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        "Fade": "dade69b4-4f5a-8528-247b-219e5a1facd6",
        "Harbor": "95b78ed7-4637-86d9-7e41-71ba8c293152",
        "Initiator": "1b47567f-8f7b-444b-aae3-b0c634622d10",
        "Jett": "add6443a-41bd-e414-f6ad-e58d267f4e95",
        "Kay/o": "601dbbe7-43ce-be57-2a40-4abd24953621",
        "Killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
        "Neon": "bb2a4828-46eb-8cd1-e765-15848195d751",
        "Omen": "8e253930-4c05-31dd-1b6c-968525494517",
        "Phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
        "Raze": "f94c3b30-42be-e959-889c-5aa313dba261",
        "Reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
        "Sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
        "Sentinel": "5fc02f99-4091-4486-a531-98459a3e95e9",
        "Skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
        "Sova": "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
        "Viper": "707eab51-4836-f488-046a-cda6bf494859",
        "Yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89"
    };

    // let agentPresent = true;

    const fetchAgent = async (uuid) => {
        const modifiedURL = URL + '/' + uuid;

        const res =  await fetch(modifiedURL); 
        
        if (res.status === 404) {
            setAgentPresent(false);
        } else {
            setAgentPresent(true);
        }

        const jsonRes =  res.json();
        return jsonRes;

    }

    const extractData = (data) => {
        props.stateSetter({
            'agentName': data.displayName,
            'agentDescription': data.description,
            'agentRole': data.role.displayName,
            'fullPortrait': data.fullPortrait,
            'roleIconImg': data.role.displayIcon,
            'agentFound': agentPresent, 
            'abilities': {
                'ability1': data.abilities[0].displayName,
                'ability2': data.abilities[1].displayName,
                'ability3': data.abilities[2].displayName,
                'ability4': data.abilities[3].displayName
            }
        });
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredAgent = inputElementRef.current.value;
        // modifiedAgentName = enteredAgent[0].toUpperCase() + enteredAgent.splice
        const modifiedAgentName = enteredAgent[0].toUpperCase() + enteredAgent.slice(1,enteredAgent.length).toLowerCase();
        console.log(agentName, modifiedAgentName);
        setAgentName(modifiedAgentName);
        const uuid = AgentData[agentName];

        //update global uuid state
        props.agentIDSetter(uuid);
        
        // send modified URL to fetch function
        const AgentResponseBody = await fetchAgent(uuid);

        // console.log(AgentResponseBody);

        extractData(AgentResponseBody.data);
        // console.log(extractedData);
        
    }
    console.log("THIS PAGE IS WORKING MAN");
    return (
        <React.Fragment>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    <div className={styles.wrapper}>
                        <div className={styles.inputEle}>
                            {/* <label> Enter Agent Name: </label> */}
                            <input type='text' placeholder = "Find an agent" ref = {inputElementRef} />
                        </div>

                        <div className={styles.btnEle}>
                            <button className = {styles.btn} type='submit' value='submit'> 
                                Fetch
                            </button>
                            {/* <input type="submit" value="submit" className={styles.btn2} /> */}
                        </div>

                        {/* <button className = {styles.btn} type='submit' value='submit'> 
                            Fetch
                        </button> */}
                    </div>   
                </form>
            </div>
        </React.Fragment>
    );
}

export default InputForm;