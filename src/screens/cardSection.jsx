import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import bgimg from '../images/fr13.jpg'
import LanguageIcon from '@mui/icons-material/Language';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import BusinessIcon from '@mui/icons-material/Business';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Card from '../components/Card'
const cardData = [
  {
    icon: <BusinessIcon />,
    heading: 'Business School',
    para: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
  },
  {
    icon: <LanguageIcon />,
    heading: 'Marketing',
    para: 'Lacinia, lacinia la cus non, fermen tum nisi.',
  },
  {
    icon: <CameraswitchOutlinedIcon />,
    heading: 'Photography',
    para: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
  },
  {
    icon: <ThumbUpOffAltIcon />,
    heading: 'Social Media',
    para: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
  },
  {
    icon: <WebhookOutlinedIcon />,
    heading: 'Development',
    para: 'Lacinia, lacinia la cus non, fermen tum nisi.',
  },
  {
    icon: <NearMeOutlinedIcon />,
    heading: 'Design',
    para: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
  },
];
const CardSection = () => {
  return (
    <div className='container-fluid mt-5 mb-5 '>
      <img src={bgimg} alt="" width={'100%'} height={'100%'}/>
    <div className='row justify-content-center align-items-center'  style={{gap:'20px'}}>
      {cardData.map((item, index) => (
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-lg-3'>
          <Card key={index} heading={item.heading} para={item.para} img={item.icon} />
        </div>
      ))}
    </div>
  </div>
  )
}
export default CardSection
