import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//UI
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//components
import TitleBar from '../components/TitleBar'
import Picker from '../components/Picker'
//api
import { fetchApi } from '../api'
//action
import { TOAST_MSG_OPEN } from '../actions/actionType'

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.typography.pxToRem(60)} ${theme.typography.pxToRem(16)} ${theme.typography.pxToRem(16)} ${theme.typography.pxToRem(16)}`,
    '& .qa-select': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.typography.pxToRem(10),
      padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(10)}`,
      background: '#FFF'
    },
    '& .title': {
      display: 'block',
      width: '100%',
      marginBottom: theme.typography.pxToRem(5),
      padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(14)}`,
    },
    '& .note': {
      marginBottom: theme.typography.pxToRem(10),
      fontSize: theme.typography.pxToRem(12),
      color: '#23c6be',
      lineHeight: 1.5
    },
    '& .content': {
      display: 'block',
      width: '100%',
      height: theme.typography.pxToRem(155),
      marginBottom: theme.typography.pxToRem(25),
      padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(14)}`,
      resize: 'none',
    },
    '& .submit': {
      display: 'block',
      width: '100%',
      background: 'linear-gradient(to right, #69b3f8, #4668d1)',
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.common.white,
      lineHeight: theme.typography.pxToRem(40),
    },
    '& .qa-select, & .title, & .content': {
      fontFamily: 'arial, "微軟正黑體"',
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.common.black,
    },
    '& .title:focus, & .content:focus, & .submit:focus': {
      outline: 'none',
    },
    '& .qa-select, & .title, & .content, & .submit': {
      border: 'none',
      borderRadius: theme.typography.pxToRem(8),
      boxShadow: `0 0 ${theme.typography.pxToRem(2)} 0 rgba(0, 0, 0, 0.08)`,
    },
    '& .title::-webkit-input-placeholder, & .content::-webkit-input-placeholder': {
      color: theme.palette.grey[50],
    },
  },
}))

const Feedback = props => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [params, setParams] = useState({ feedbackType: '', title: '', content: '' })
  const [selectedQuestion, setSelectedQuestion] = useState({ text: '请选择类别', value: '' })
  const qaList = [
    { text: '财务问题', value: 2 },
    { text: '帐号问题', value: 3 },
    { text: '游戏问题', value: 4 },
    { text: '活动问题', value: 5 },
    { text: '其他问题', value: 1 }
  ]

  //picker 選擇事件
  const onPick = (item) => {
    setSelectedQuestion(item)
    setParams({ ...params, feedbackType: item.value})
  }

  //input 輸入事件
  const handleChange = (event) => {
    const { className, value } = event.target
    switch (className) {
      case 'title':
        setParams({ ...params, title: value })
        break
      case 'content':
        setParams({ ...params, content: value })
        break
      default:
        setParams({...params})
    }
  }

  //提交反饋
  const submit = () => {
    if (params.feedbackType === '') return dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: '请选择类别' } })
    if (params.title === '') return dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: '请输入标题' } })
    if (params.content === '') return dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: '请输入内容，不能少于20个字' } })
    if (params.content.length < 20) return dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: '请输入内容，不能少于20个字' } })
    fetchApi.feedback(params).then(res => {
      if (res.data.code !== 0) return dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: res.data.message } })
      dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'success', msg: '上传成功' } })
      history.push('/member')
    })
  }

  return (
    <>
      <TitleBar>意见反馈</TitleBar>
      <div className={classes.container}>
        <div className={classes.select}>
          <Picker title='请选择类别' items={qaList} onPick={onPick}>
            <div className='qa-select'>
              {
                selectedQuestion.text === '' ? (<span className='name'>请选择类别</span>) : (<span className='name'>{selectedQuestion.text}</span>)
              }
              <ExpandMoreIcon />
            </div>
          </Picker>
        </div>
        <input type='text' placeholder='请输入标题' className='title' onChange={handleChange} />
        <div className='note'>
          尊敬的会员，反馈有礼畅所欲言，说出您对平台的意见、建议，您的建议是我们前进的动力，我们将对有价值意见给予丰厚奖励，尽情吐槽吧！
        </div>
        <textarea placeholder='请输入内容，不能少于20个字' className='content' onChange={handleChange}></textarea>
        <button onClick={submit} className='submit'>提交反馈</button>
      </div>
    </>
  )
}

export default Feedback
