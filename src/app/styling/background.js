import React from 'react';
import styled from 'styled-components'

// import { ReactComponent as FullBackground } from '../../assets/background.svg';
import { ReactComponent as FullBackground } from '../../assets/bg.svg';


const Background = (props) => {
  return (
    <BackgroundScene className="background" />
  )
}

export default Background;

const BackgroundScene = styled(FullBackground)`
  position: absolute;
  height: 100vh;
  width: auto;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 0;
  min-height: 500px;
`
