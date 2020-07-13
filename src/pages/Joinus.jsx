import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//component
import TitleBar from '../components/TitleBar'
//assest
import ButtonPrev from '../assets/images/joinus/prev.png'
import ButtonNext from '../assets/images/joinus/next.png'
import sec1Title from '../assets/images/joinus/sec1-title.png'
import sec2Title from '../assets/images/joinus/sec2-title.png'
import sec3Title from '../assets/images/joinus/sec3-title.png'
import sec4Title from '../assets/images/joinus/sec4-title.png'
import sec1Bg from '../assets/images/joinus/sec1-bg.png'
import iconQQ from '../assets/images/joinus/icon-qq.png'
import iconSkype from '../assets/images/joinus/icon-skype.png'
import iconSugram from '../assets/images/joinus/icon-sugram.png'
import sec2img from '../assets/images/joinus/sec2-img.png'
import sec3img1 from '../assets/images/joinus/sec3-img1.png'
import sec3img2 from '../assets/images/joinus/sec3-img2.png'
import sec4img1 from '../assets/images/joinus/sec4-img1.png'
import sec4img2 from '../assets/images/joinus/sec4-img2.png'
import sec4img3 from '../assets/images/joinus/sec4-img3.png'
//utils
import copy from '../utils/copy'
//action
import { TOAST_MSG_OPEN } from '../actions/actionType'

const useStyles = makeStyles(theme => ({
  slider: {
    position: 'relative',
    paddingTop: theme.typography.pxToRem(44),
    '& .slick-arrow': {
      position: 'absolute',
      top: 'auto',
      bottom: theme.typography.pxToRem(380),
      width: theme.typography.pxToRem(15),
      height: theme.typography.pxToRem(40),
      backgroundSize: '100% auto',
      transform: 'none',
      zIndex: 1,
      '&::before': {
        display: 'none'
      },
      '&.slick-prev': {
        left: theme.typography.pxToRem(8),
        backgroundImage: `url(${ButtonPrev})`
      },
      '&.slick-next': {
        right: theme.typography.pxToRem(8),
        backgroundImage: `url(${ButtonNext})`
      },
      '&.slick-disabled': {
        display: 'none !important'
      },
      '&:focus, &:hover': {
        backgroundSize: '100% auto'
      }
    },
    '& .slick-dots': {
      position: 'fixed',
      left: 0,
      bottom: theme.typography.pxToRem(16),
      '& li': {
        width: theme.typography.pxToRem(8),
        height: theme.typography.pxToRem(8),
        border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        '&.slick-active': {
          background: theme.palette.primary.main
        },
        '& button': {
          display: 'none'
        }
      }
    }
  },
  section: {
    position: 'relative',
    width: '100%',
    padding: `${theme.typography.pxToRem(38)} ${theme.typography.pxToRem(16)} 0 ${theme.typography.pxToRem(16)}`,
    overflow: 'auto',
    '&:focus': {
      outline: 'none'
    },
    '& .main-title': {
      marginBottom: theme.typography.pxToRem(8),
      '& img': {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }
    },
    '& .sub-title': {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.common.black,
      textAlign: 'center'
    }
  },
  sec1: {
    height: theme.typography.pxToRem(window.innerHeight - 44),
    background: `url(${sec1Bg}) center center no-repeat`,
    backgroundSize: '100% auto',
    '& .wrap': {
      position: 'absolute',
      left: 0,
      bottom: theme.typography.pxToRem(65),
      width: '100%',
      padding: `0 ${theme.typography.pxToRem(16)}`,
      '& dl': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.typography.pxToRem(15),
        padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(15)}`,
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: theme.typography.pxToRem(8),
        boxShadow: `0 0 ${theme.typography.pxToRem(2)} 0 rgba(0, 0, 0, 0.08)`,
        '&:last-child': {
          marginBottom: 0
        },
        '&::before': {
          content: '""',
          flexShrink: 0,
          display: 'block',
          width: theme.typography.pxToRem(35),
          height: theme.typography.pxToRem(35),
          marginRight: theme.typography.pxToRem(10),
          backgroundSize: '100% auto'
        },
        '&.qq::before': {
          backgroundImage: `url(${iconQQ})`
        },
        '&.skype::before': {
          backgroundImage: `url(${iconSkype})`
        },
        '&.sugram::before': {
          backgroundImage: `url(${iconSugram})`
        }
      },
      '& dt': {
        flexGrow: 1,
        width: '50%',
        color: theme.palette.common.black,
        '& .title': {
          marginBottom: '5px',
          fontSize: theme.typography.pxToRem(16)
        },
        '& .content': {
          margin: 0,
          fontSize: theme.typography.pxToRem(20),
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      },
      '& dd': {
        flexShrink: 0,
        width: theme.typography.pxToRem(66),
        margin: 0,
        textAlign: 'right',
        '& .copy': {
          width: theme.typography.pxToRem(60),
          background: 'none',
          border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.main}`,
          borderRadius: theme.typography.pxToRem(8),
          fontSize: theme.typography.pxToRem(12),
          color: theme.palette.primary.main,
          lineHeight: theme.typography.pxToRem(30),
          '&:focus': {
            outline: 'none'
          }
        }
      }
    },
    '& .join-btn': {
      position: 'absolute',
      left: theme.typography.pxToRem(16),
      right: theme.typography.pxToRem(16),
      bottom: theme.typography.pxToRem(60),
      display: 'none',
      width: `calc(100% - ${theme.typography.pxToRem(32)})`,
      background: 'linear-gradient(to right, #69b3f8, #4668d1)',
      border: 'none',
      borderRadius: theme.typography.pxToRem(8),
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.common.white,
      lineHeight: theme.typography.pxToRem(40),
      textAlign: 'center',
      textDecoration: 'none'
    }
  },
  sec2: {
    '& .sub-title': {
      marginBottom: theme.typography.pxToRem(62)
    },
    '& img': {
      display: 'block',
      width: '100%',
      maxWidth: theme.typography.pxToRem(317),
      height: 'auto',
      margin: '0 auto'
    }
  },
  sec3: {
    '& .main-title img': {
      maxWidth: theme.typography.pxToRem(302)
    },
    '& .sub-title': {
      marginBottom: theme.typography.pxToRem(17)
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      '&.img01': {
        maxWidth: theme.typography.pxToRem(317),
        marginBottom: theme.typography.pxToRem(50)
      },
      '&.img02': {
        maxWidth: theme.typography.pxToRem(311),
      }
    }
  },
  sec4: {
    '& .main-title img': {
      maxWidth: theme.typography.pxToRem(183)
    },
    '& .sub-title': {
      marginBottom: theme.typography.pxToRem(16)
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      '&.img01': {
        maxWidth: theme.typography.pxToRem(303),
        marginBottom: theme.typography.pxToRem(22)
      },
      '&.img02': {
        maxWidth: theme.typography.pxToRem(240),
        marginBottom: theme.typography.pxToRem(52)
      },
      '&.img03': {
        maxWidth: theme.typography.pxToRem(264)
      },
    }
  }
}))

const Joinus = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  //一鍵複製
  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'success', msg: '复制成功' } })
      })
      .catch(() => {
        dispatch({ type: TOAST_MSG_OPEN, payload: { type: 'error', msg: '复制失败' } })
      })
  }

  //防止觸發 UC 回上一頁
  useEffect(()=> {
    const joinus = document.getElementById('joinus')
    joinus.addEventListener('touchmove', (event)=> event.preventDefault(), false)
  }, [])

  return (
    <div id="joinus">
      <TitleBar>合营计划</TitleBar>
      <div className={classes.slider}>
        <Slider
          arrows={true}
          dots={true}
          autoplay={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div className={`${classes.section} ${classes.sec1}`}>
            <div className='main-title'>
              <img src={sec1Title} alt='agent alliance' />
            </div>
            <div className='sub-title'>诚意为每位合营伙伴提供业内最顶级的服务</div>
            <div className='wrap'>
              <dl className='qq'>
                <dt>
                  <div className='title'>合营部QQ</div>
                  <p className='content'>1991856633</p>
                </dt>
                <dd>
                  <button className='copy' onClick={handleCopy('1991856633')}>复制</button>
                </dd>
              </dl>
              <dl className='skype'>
                <dt>
                  <div className='title'>合营部Skype</div>
                  <p className='content'>1989377711@qq.com</p>
                </dt>
                <dd>
                  <button className='copy' onClick={handleCopy('1989377711@qq.com')}>复制</button>
                </dd>
              </dl>
              <dl className='sugram'>
                <dt>
                  <div className='title'>合营部Sugram</div>
                  <p className='content'>86448125</p>
                </dt>
                <dd>
                  <button className='copy' onClick={handleCopy('86448125')}>复制</button>
                </dd>
              </dl>
            </div>
            <Link to={routes.JOINUS_FORM_PAGE} className='join-btn'>加入我们</Link>
          </div>
          <div className={`${classes.section} ${classes.sec2}`}>
            <div className='main-title'>
              <img src={sec2Title} alt='智能数据领先全行业' />
            </div>
            <div className='sub-title'>SMART DATA LEADS THE</div>
            <img src={sec2img} alt='智能数据领先全行业' />
          </div>
          <div className={`${classes.section} ${classes.sec3}`}>
            <div className='main-title'>
              <img src={sec3Title} alt='全球顶尖专业博彩' />
            </div>
            <div className='sub-title'>体育、真人、棋牌投注一手掌握</div>
            <img src={sec3img1} alt='全球顶尖专业博彩' className='img01' />
            <img src={sec3img2} alt='全球顶尖专业博彩' className='img02' />
          </div>
          <div className={`${classes.section} ${classes.sec4}`}>
            <div className='main-title'>
              <img src={sec4Title} alt='JOIN US' />
            </div>
            <div className='sub-title'>联系我们即刻加入BOB团队</div>
            <img src={sec4img1} alt='赞助伙伴' className='img01' />
            <img src={sec4img2} alt='四大特点' className='img02' />
            <img src={sec4img3} alt='页面展示' className='img03' />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Joinus