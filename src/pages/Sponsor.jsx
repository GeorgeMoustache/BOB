import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//API
import { fetchApi } from '../api'
//component
import MainContainer from '../components/Layout/MainContainer'
import TitleBar from '../components/TitleBar'

const useStyles = makeStyles(theme => ({
  row: {
    marginBottom: theme.typography.pxToRem(20),
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }
}))

const Sponsor = ()=> {
  const classes = useStyles()
  const [list, setList] = useState([])
  useEffect(()=>{
    fetchApi.sponsor().then(data => {
      const list = data.data.data.list
      setList(list)
    })
  }, [])
  return (
    <MainContainer>
      <TitleBar disableBack>贊助專題</TitleBar>
      {
        list.map((item)=> {
          return (
            <div key={item.id} className={classes.row}>
              <img src={item.imgUrl} alt={item.title} />
            </div>
          )
        })
      }
    </MainContainer>
  )
}

export default Sponsor