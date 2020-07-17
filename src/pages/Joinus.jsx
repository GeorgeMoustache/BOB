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
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles(theme => ({
  slider: {
    position: 'relative',
    paddingTop: '44px',
    '& .slick-arrow': {
      position: 'absolute',
      top: 'auto',
      bottom: '380px',
      width: '15px',
      height: '40px',
      backgroundSize: '100% auto',
      transform: 'none',
      zIndex: 1,
      '&::before': {
        display: 'none'
      },
      '&.slick-prev': {
        left: '8px',
        backgroundImage: `url(${ButtonPrev})`
      },
      '&.slick-next': {
        right: '8px',
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
      bottom: '16px',
      '& li': {
        width: '8px',
        height: '8px',
        border: '1px solid #3e74fa',
        borderRadius: '50%',
        '&.slick-active': {
          background: '#3e74fa'
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
    padding: `38px 16px 0 16px`,
    overflow: 'auto',
    '&:focus': {
      outline: 'none'
    },
    '& .main-title': {
      marginBottom: '8px',
      '& img': {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }
    },
    '& .sub-title': {
      fontSize: '14px',
      color: '#000',
      textAlign: 'center'
    }
  },
  sec1: {
    height: `${window.innerHeight - 44}px`,
    background: `url(${sec1Bg}) center center no-repeat`,
    backgroundSize: '100% auto',
    '& .wrap': {
      position: 'absolute',
      left: 0,
      bottom: '65px',
      width: '100%',
      padding: '0 16px',
      '& dl': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '12px 15px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.08)',
        '&:last-child': {
          marginBottom: 0
        },
        '&::before': {
          content: '""',
          flexShrink: 0,
          display: 'block',
          width: '35px',
          height: '35px',
          marginRight: '10px',
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
        color: '#000',
        '& .title': {
          marginBottom: '5px',
          fontSize: '16px'
        },
        '& .content': {
          margin: 0,
          fontSize: '20px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      },
      '& dd': {
        flexShrink: 0,
        width: '66px',
        margin: 0,
        textAlign: 'right',
        '& .copy': {
          width: '60px',
          background: 'none',
          border: '1px solid #3e74fa',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#3e74fa',
          lineHeight: '30px',
          '&:focus': {
            outline: 'none'
          }
        }
      }
    },
    '& .join-btn': {
      position: 'absolute',
      left: '16px',
      right: '16px',
      bottom: '60px',
      display: 'none',
      width: 'calc(100% - 32px)',
      background: 'linear-gradient(to right, #69b3f8, #4668d1)',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#FFF',
      lineHeight: '40px',
      textAlign: 'center',
      textDecoration: 'none'
    }
  },
  sec2: {
    '& .sub-title': {
      marginBottom: '62px'
    },
    '& img': {
      display: 'block',
      width: '100%',
      maxWidth: '317px',
      height: 'auto',
      margin: '0 auto'
    }
  },
  sec3: {
    '& .main-title img': {
      maxWidth: '302px'
    },
    '& .sub-title': {
      marginBottom: '17px'
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      '&.img01': {
        maxWidth: '317px',
        marginBottom: '50px'
      },
      '&.img02': {
        maxWidth: '311px',
      }
    }
  },
  sec4: {
    '& .main-title img': {
      maxWidth: '183px'
    },
    '& .sub-title': {
      marginBottom: '16px'
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      '&.img01': {
        maxWidth: '303px',
        marginBottom: '22px'
      },
      '&.img02': {
        maxWidth: '240px',
        marginBottom: '52px'
      },
      '&.img03': {
        maxWidth: '264px'
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
        dispatch(toastMsg('success', '复制成功'))
      })
      .catch(() => {
        dispatch(toastMsg('error', '复制失败'))
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
            <Link to={routes.JOINUS_FORM} className='join-btn'>加入我们</Link>
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