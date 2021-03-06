import { useState, useEffect } from 'react';

function Checkbox({categoryInfo, category, getCategoriesHandler, removeCategoriesHandler}) {    
    const [isChecked, setIsChecked] = useState(categoryInfo.isChecked);

    const isCheckedHandler = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        if (isChecked === true) {
            getCategoriesHandler(prevState => [...prevState, category]);
        } else {
            removeCategoriesHandler(prevState => prevState.filter(x => x !== category));
        }
    }, [isChecked, category, getCategoriesHandler, removeCategoriesHandler])

    return (
        <li>
            <input
                type="checkbox"
                onChange={isCheckedHandler}
                key={categoryInfo.categoryName}
                name={categoryInfo.categoryName}
                checked={isChecked}
            />
            <label htmlFor={categoryInfo.categoryName}>{categoryInfo.categoryName}</label>
        </li>


    )
}

export default Checkbox
