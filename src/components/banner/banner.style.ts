import styled from 'styled-components';

// url('${(props: ICard) => props.url}')
export const BannerWrapper = styled.div`
  background-image: url('${(props: {imageUrls: string[]}) => props.imageUrls[0]}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.5rem;
  color: #ffffff;

  .banner__header {
    text-align: center;
  }
  
  .banner__text {
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
    color: #FEFCF7;
    font-family: Barlow;
  }

  .banner__button {
    font-size: 1.5rem;
  }

  @media(min-width: 401px) {
    background-image: url('${(props: {imageUrls: string[]}) => props.imageUrls[1]}');;
    align-items: flex-start;
    padding: 6rem 4rem;
    
    .banner__header {
      text-align: left;
      width: 60%;
    }
    
    .banner__text {
      text-align: left;
      width: 70%;
    }
  }


  @media(min-width: 769px) {
    background-image: url('${(props: {imageUrls: string[]}) => props.imageUrls[2]}');
    padding: 6rem 6rem;

    .banner__header {
      font-size: 4rem;
      width: 30%;
      line-height: 1.05;
    }

    .banner__text {
      width: 30%;
      font-size: 1rem;
      margin-bottom: 5rem;
    }
  }
`;