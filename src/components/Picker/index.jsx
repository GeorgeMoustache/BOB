import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
//assets
import checkIcon from '../../assets/images/entry/checked_true.png'

const useStyles = makeStyles(theme => ({
  mask: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, .5)',
    opacity: 0,
    animation: '$maskAnimate .3s forwards',
    zIndex: 9
  },
  '@keyframes maskAnimate': {
    to: {
      opacity: 1
    }
  },
  container: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '30vh',
    background: '#FFF',
    borderRadius: '10px 10px 0 0',
    opacity: 0,
    transform: 'translateY(100%)',
    animation: '$containerAnimate .3s forwards',
    zIndex: 10,
    '& .title': {
      padding: '15px 0',
      borderBottom: '1px solid #9b9b9b',
      fontSize: '16px',
      color: '#000',
      textAlign: 'center'
    },
    '& .wrap': {
      height: 'calc(30vh - 47px)',
      overflow: 'auto',
      '& li': {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #9b9b9b',
        '& img': {
          display: 'block',
          width: '24px',
          height: 'auto',
          marginRight: '10px'
        },
        '&.active': {
          background: `url(${checkIcon}) 96% center no-repeat`,
          backgroundSize: '15px auto',
        }
      }
    }
  },
  '@keyframes containerAnimate': {
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },
}))

const Picker = props => {
  const classes = useStyles()
  const { children, title, onPick, items, disabled } = props
  const [enabled, setEnabled] = useState(false)
  const [selectIdx, setSelectIdx] = useState(-1)

  //開啟 Picker
  const handleOpen = () => {
    if (disabled) return
    setEnabled(true)
  }

  //關閉 Picker
  const handleClose = () => setEnabled(false)

  //選擇項目
  const handlePick = (item, idx) => ()=> {
    onPick(item)
    setSelectIdx(idx)
    setEnabled(false)
  }

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      {
        enabled ? (
          <>
            <div onClick={handleClose} className={classes.mask}></div>
            <div className={classes.container}>
              <div className='title'>{title}</div>
              <ul className='wrap'>
                {
                  items.map((item, idx) => {
                    return (
                      <li onClick={handlePick(item, idx)} key={idx} className={ idx === selectIdx ? 'active' : ''}>
                        {
                          item.icon ? (<img src={item.icon} alt={item.bankName} />) : null
                        }
                        {item.bankName || item.text}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </>
        ) : null
      }
    </>
  )
}

export default Picker