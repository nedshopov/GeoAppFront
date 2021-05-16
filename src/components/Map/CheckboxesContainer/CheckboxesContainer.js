// CSS
import style from './CheckboxesContainer.module.css'

// COMPONENTS
import Checkbox from '../Checkbox/Checkbox';

// CONFIGS
import categoriesList from '../../../config/categories';


function CheckboxesContainer({getCategoriesHandler, removeCategoriesHandler}) {

    return (
        <div className={style.checkboxesContainer}>
        {Object.entries(categoriesList).map(([category, categoryInfo]) => (
            <Checkbox
                key={category}
                categoryInfo={categoryInfo}
                category={category}
                getCategoriesHandler={getCategoriesHandler}
                removeCategoriesHandler={removeCategoriesHandler}
            />
        ))}
    </div>
    )
}

export default CheckboxesContainer
