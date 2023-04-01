import {useContext , useReducer , createContext , useEffect} from 'react'
import { useProductContext } from './ProductContext'
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    filters: {
        text:"",
        Brand : "",
    }
}

export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let checked = event.target.checked;
        console.log(name)
        console.log(checked)
        return dispatch({type : "UPDATE_FILTER_VALUE" , payload:[name , checked]})
    }

    useEffect(()=>{ 
        dispatch({type:"FILTER_PRODUCTS"})
    } , [products , state.filters])

    useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCT" , payload : products})
    },[products])

    return(
        <FilterContext.Provider value={{...state , updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
}

