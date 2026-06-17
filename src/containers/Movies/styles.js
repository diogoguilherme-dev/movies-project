import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  h1 {
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin: 30px 0 50px;
  }
`

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`
