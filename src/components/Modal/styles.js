import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #000;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }

  p {
    padding-top: 15px;
    color: #a9a9a9;
    font-size: 12px;
    opacity: 0.6;
  }
`
