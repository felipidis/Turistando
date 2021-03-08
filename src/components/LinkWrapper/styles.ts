import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // para sobrepor o leaflet q tem z-index 1000
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;
  svg {
    transition: color: 0.3s ease-in-out ;
  }
  &:hover{
    svg{
      color: var(--highlight)
    }
  }
`
