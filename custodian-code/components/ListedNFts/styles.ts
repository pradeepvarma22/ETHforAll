import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  img {
    width: 330px;
    height: 296px;
    border-radius: 0.675rem 0.675rem 0 0;
  }
  section {
    background: var(--black-medium);
  }
  .details-nft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px;
    border-radius: 0 0 0.675rem 0.675rem;
  }
  .details-nft .name {
    font-weight: bold;
  }
  .identify-artist {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.625rem;
  }
  .identify-artist > img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
  .values {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px;
    font-family: 'Space Mono';
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .values .title {
    color: var(--black-light);
    margin-bottom: 8px;
  }
`
