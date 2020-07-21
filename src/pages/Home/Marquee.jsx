import React, { useState } from 'react'
import { useHistory } from 'react-router'
import * as routes from '../../router/routeLink'
import { makeStyles } from '@material-ui/core'
import Marquee from 'react-simple-marquee'
//components
import AlertDialog from '../../components/AlertDialog'
//assets
import marqueeIcon from '../../assets/images/home/bulletin.svg'

const useStyles = makeStyles((theme) => ({
  marquee: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '5px',
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '10px 10px 0 0',
    '&::before': {
      content: '""',
      flexShrink: 0,
      display: 'block',
      width: '52px',
      height: '19px',
      marginRight: '5px',
      background: `url(${marqueeIcon})`,
      backgroundSize: '100% auto',
    },
    '& > div': {
      flexGrow: 1,
    },
    '& .text-elem': {
      display: 'flex',
      lineHeight: 1,
      '& > button': {
        marginRight: '20px',
        background: 'none',
        border: 'none',
        boxShadow: 'none',
        fontSize: '12px',
        color: '#FFF',
      },
    },
  },
}))

const MarqueeComponent = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { marqueeContent } = props
  const [announcement, setAnnouncement] = useState({
    enabled: false,
    title: '',
    content: '',
  })

  //開啟彈窗
  const openDialog = (item) => () => setAnnouncement({ enabled: true, title: item.title, content: item.content })

  //查看更多
  const handleConfirm = () => history.push(routes.ANNOUNCEMENT)

  //關閉彈窗
  const handleCancel = () => setAnnouncement({ enabled: false, title: '', content: '' })

  return (
    <div className={classes.marquee}>
      {marqueeContent && (
        <Marquee speed={1}>
          {marqueeContent.map((item, idx) => {
            return (
              <button onClick={openDialog(item)} key={idx}>
                {item.content}
              </button>
            )
          })}
        </Marquee>
      )}
      <AlertDialog
        dialogOpen={announcement.enabled}
        title={announcement.title}
        content={announcement.content}
        textYes={'更多'}
        textNo={'關閉'}
        onYes={handleConfirm}
        onNo={handleCancel}
      />
    </div>
  )
}

export default MarqueeComponent
