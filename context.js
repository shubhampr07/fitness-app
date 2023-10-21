import React, {createContext, useContext, useState} from 'react';

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {

    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);


    return (
        <FitnessItems.Provider
        value={{completed, setCompleted, calories, setCalories, workout, setWorkout, minutes, setMinutes}}>
            {children}
        </FitnessItems.Provider>
    )
}

export {FitnessContext, FitnessItems}