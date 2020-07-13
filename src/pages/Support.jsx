import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
//API
import { fetchApi } from '../api'
//action
import { GET_PROBLEM_LIST } from '../actions/actionType'
//component
import MainContainer from '../components/Layout/MainContainer'
import TitleBar from '../components/TitleBar'
//UI
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: theme.typography.pxToRem(20),
    lineHeight: theme.typography.pxToRem(40),
  },
  refresh: {
    color: '#0a91fb',
  },
  list: {
    '& .MuiListItemText-root': {
      marginRight: '20px',
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
    },
    '& img': {
      width: '25px',
      height: '25px',
      marginRight: '10px',
    },
  },
  listRow: {
    borderBottom: '1px solid #f1f1f1',
  },
  listTitle: {
    fontSize: '16px',
  },
  listDesc: {
    fontSize: '14px',
    color: '#999',
  },
}))

const Support = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [list, setList] = useState([])
  const [selectIdx, setSelectIdx] = useState()

  const handleToggle = (idx) => {
    if (idx === selectIdx) {
      setSelectIdx(-1)
    } else {
      setSelectIdx(idx)
    }
  }

  useEffect(() => {
    fetchApi.problem().then((data) => {
      const list = data.data.data
      dispatch({ type: GET_PROBLEM_LIST, payload: list })
      setList(list)
    })
  }, [dispatch])

  return (
    <MainContainer>
      <TitleBar disableBack>聯繫客服</TitleBar>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item className={classes.subTitle}>
          猜你想问
        </Grid>
        <Grid item className={classes.refresh}>
          换一换
        </Grid>
      </Grid>
      <List className={classes.list}>
        {list.map((item, idx) => {
          return (
            <React.Fragment key={item.id}>
              <ListItem onClick={() => handleToggle(idx)} className={classes.listRow}>
                <ListItemIcon>
                  <img src={item.img} alt='' />
                </ListItemIcon>
                <ListItemText>
                  <div className={classes.listTitle}>{item.cateTitle}</div>
                  <p className={classes.listDesc}>{item.description}</p>
                </ListItemText>
                {selectIdx === idx ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={selectIdx === idx} timeout='auto' unmountOnExit>
                {item.problem.map((childItem, childIdx, childArr) => {
                  return (
                    <List disablePadding key={childIdx}>
                      <ListItem>
                        <ListItemText primary={childItem.cate_desc} />
                        <ListItemIcon>
                          <ArrowForwardIosIcon fontSize='small' />
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  )
                })}
              </Collapse>
            </React.Fragment>
          )
        })}
      </List>
    </MainContainer>
  )
}

export default Support
