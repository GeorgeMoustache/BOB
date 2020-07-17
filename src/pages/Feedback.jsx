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
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '60px 16px 16px 16px',
    '& .qa-select': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '5px 10px',
      background: '#FFF'
    },
    '& .title': {
      display: 'block',
      width: '100%',
      marginBottom: '5px',
      padding: '10px 14px',
    },
    '& .note': {
      marginBottom: '10px',
      fontSize: '12px',
      color: '#23c6be',
      lineHeight: 1.5
    },
    '& .content': {
      display: 'block',
      width: '100%',
      height: '155px',
      marginBottom: '25px',
      padding: '10px 14px',
      resize: 'none',
    },
    '& .submit': {
      display: 'block',
      width: '100%',
      background: 'linear-gradient(to right, #69b3f8, #4668d1)',
      fontSize: '16px',
      color: '#FFF',
      lineHeight: '40px',
    },
    '& .qa-select, & .title, & .content': {
      fontFamily: 'arial, "微軟正黑體"',
      fontSize: '14px',
      color: '#000',
    },
    '& .title:focus, & .content:focus, & .submit:focus': {
      outline: 'none',
    },
    '& .qa-select, & .title, & .content, & .submit': {
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.08)',
    },
    '& .title::-webkit-input-placeholder, & .content::-webkit-input-placeholder': {
      color: '#CCC',
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
    if (params.feedbackType === '') return dispatch(toastMsg('error', '请选择类别'))
    if (params.title === '') return dispatch(toastMsg('error', '请输入标题'))
    if (params.content === '') return dispatch(toastMsg('error', '请输入内容，不能少于20个字'))
    if (params.content.length < 20) return dispatch(toastMsg('error', '请输入内容，不能少于20个字'))
    fetchApi.feedback(params).then(res => {
      if (res.data.code !== 0) return dispatch(toastMsg('error', res.data.message))
      dispatch(toastMsg('success', '上传成功'))
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
