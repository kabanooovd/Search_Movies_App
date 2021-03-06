import React, {useState} from "react";
import s from './SuperInput.module.css'
import {searchMovie_TC} from "../../bll/searchMovieReducer";
import {useDispatch} from "react-redux";


export const SuperInput = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        setError(false)
    }
    const searchHandler = () => {
        dispatch(searchMovie_TC(text))
    }
    const EnterByPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && searchHandler()

    return <div className={s.superInputContainer}>
        <div className={s.inputWrapper}>
            <input type="text"
                   className={s.inputStyle}
                   value={text}
                   onChange={changeTextHandler}
                   onKeyPress={EnterByPress}
                   placeholder={'Search Movie...'}
            />
            <button className={s.btnStyle}
                    onClick={searchHandler}
            >Search</button>
        </div>
        {error && <span className={s.error}>Please, inert value</span>}
    </div>
}

