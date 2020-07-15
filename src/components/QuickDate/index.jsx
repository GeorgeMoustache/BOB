import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
//component
import DatePicker from './DatePicker'
import AlertDialog from '../AlertDialog'
//UI
import Grid from '@material-ui/core/Grid'
import { Tabs, Tab } from '@material-ui/core'
//assets
import arrowRightIcon from '../../assets/images/common/arrow-right.svg'
//action
import { TOAST_MSG_OPEN } from '../../actions/actionType'
//moment
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  quickDate: {
    width: '100%',
    justifyContent: 'space-between',
    minHeight: 'auto',
    padding: '0 5px',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-around',
    },
    '& .MuiTab-root': {
      minWidth: '64px',
      minHeight: 'auto',
      padding: 0,
      background: '#FFF',
      border: '1px solid transparent',
      borderRadius: '8px',
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.08)',
      fontSize: '14px',
      color: '#000',
      lineHeight: '32px',
      '&.Mui-selected': {
        borderColor: '#2472ff',
        color: '#2472ff',
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  dateRange: {
    padding: '10px 0',
    fontSize: '12px',
    '& button': {
      width: '100%',
      paddingRight: '22px',
      background: 'none',
      border: 'none',
      textAlign: 'right',
      '&:focus': {
        outline: 'none',
      },
    },
  },
  dateColumn: {
    padding: '5px 0',
    background: `url(${arrowRightIcon}) right center no-repeat`,
    borderBottom: '1px solid #9b9b9b',
  },
}))

const QuickDate = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { fetchData } = props
  const [quickDate, setQuickDate] = useState(0)
  const [dialogDisabled, setDialogDisabled] = useState(false)

  const minDate = moment()
    .subtract(30, 'days')
    .toDate()
  const maxDate = moment()
    .startOf('day')
    .toDate()

  const enDate = moment()
    .endOf('day')
    .toDate()

  const [startDatePickerDisabled, setStartDatePickerDisabled] = useState(false)
  const [startDate, setStartDate] = useState(maxDate)
  const [endDatePickerDisabled, setEndDatePickerDisabled] = useState(false)
  const [endDate, setEndDate] = useState(enDate)
  const [customDate, setCustomDate] = useState(false)

  //快捷選時
  const changeQuickDate = (event, newValue) => {
    setQuickDate(newValue)
    setEndDate(enDate)
    setCustomDate(false)
    switch (newValue) {
      case 0:
        setStartDate(
          moment()
            .startOf('day')
            .toDate(),
        )
        break
      case 1:
        setStartDate(
          moment()
            .subtract(1, 'days')
            .startOf('day')
            .toDate(),
        )
        setEndDate(
          moment()
            .subtract(1, 'days')
            .endOf('day')
            .toDate(),
        )
        break
      case 2:
        setStartDate(
          moment()
            .subtract(6, 'days')
            .startOf('day')
            .toDate(),
        )
        break
      case 3:
        setStartDate(
          moment()
            .subtract(14, 'days')
            .startOf('day')
            .toDate(),
        )
        break
      case 4:
        setDialogDisabled(true)
        setCustomDate(true)
        setStartDate(
          moment()
            .startOf('day')
            .toDate(),
        )
        setEndDate(
          moment()
            .endOf('day')
            .toDate(),
        )
        break
      default:
        break
    }
  }


  const dialogAgree = () => {
    if (startDate > endDate) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'开始日期不得大于结束日期' }})
    fetchData(startDate, endDate)
    setDialogDisabled(false)
  }

  //dialog content
  const dialogContent = () => {
    return (
      <Grid container direction='column'>
        <Grid item container alignItems='center' className={classes.dateRange}>
          <Grid item xs={3}>
            开始日期
          </Grid>
          <Grid item xs={9} className={classes.dateColumn}>
            <DatePicker
              defaultDate={startDate}
              date={startDate}
              minDate={minDate}
              maxDate={maxDate}
              onConfirm={(date) => setStartDate(date)}
              title='请选择开始日期'
              mode='date'
            >
              <button onClick={()=> setStartDatePickerDisabled(!startDatePickerDisabled)}>{moment(startDate).format('LL')}</button>
            </DatePicker>
          </Grid>
        </Grid>
        <Grid item container alignItems='center' className={classes.dateRange}>
          <Grid item xs={3}>
            結束日期
          </Grid>
          <Grid item xs={9} className={classes.dateColumn}>
            <DatePicker
              defaultDate={startDate}
              date={endDate}
              minDate={minDate}
              maxDate={maxDate}
              onConfirm={(date) => setEndDate(date)}
              title='请选择结束日期'
              mode='date'
            >
              <button onClick={() => setEndDatePickerDisabled(!endDatePickerDisabled)}>{moment(endDate).format('LL')}</button>
            </DatePicker>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  useEffect(() => {
    if (!customDate) {
      fetchData(startDate, endDate)
    }
  }, [startDate, endDate, customDate, fetchData])

  return (
    <>
      <Grid item container>
        <Tabs value={quickDate} onChange={changeQuickDate} className={classes.quickDate}>
          <Tab label='今日' value={0} />
          <Tab label='昨日' value={1} />
          <Tab label='近7日' value={2} />
          <Tab label='近15日' value={3} />
          <Tab label='自选' value={4} />
        </Tabs>
      </Grid>
      <AlertDialog
        dialogOpen={dialogDisabled}
        onNo={() => setDialogDisabled(false)}
        onYes={dialogAgree}
        title={'请选择日期查询'}
        children={dialogContent()}
        textYes={'确定'}
        textNo={'取消'}
      />
    </>
  )
}

export default QuickDate
