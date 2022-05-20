import React, { memo, useState, useCallback } from 'react'
import { useEffect } from 'react'
import getCountryApi from '../../api'
import { ContainerStyled } from './styles'
import Board from './components/Board'
import Panel from './components/Panel'

function Main(){
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        getCountryApi(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return(
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                />
            </div>
            <Board data={data}/>
        </ContainerStyled>
    )
}

export default memo(Main)