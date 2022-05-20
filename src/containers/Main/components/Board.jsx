import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
    const { cases, deaths, recovered, todayCases, todayDeaths } = data

    const getValue = (value) => !(value === undefined) ? value : <Skeleton variant="text" width={182} height={60} />

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de Casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos Hoje" color="#f7b829" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos Hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de Mortos" color="#e95078" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de Recuperados" color="#67c887" />
            </Grid>
        </Grid>

    )
}

export default memo(Board)