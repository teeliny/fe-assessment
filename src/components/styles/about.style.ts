import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 1.5rem;


  @media(min-width: 401px) {
    margin: 0 2.5rem;
  }

  @media(min-width: 769px) {
    margin: 0 5rem;
  }
`;

export const CommitWrapper = styled.div`
  margin: 7.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .tea__pour img {
    width: calc(100vw - 3rem);
    border-radius: 1rem;
  }

  .commitment {
    text-align: center;
  }

  .commitment__header {
    margin-bottom: 1.875rem;
    margin-top: 0.875rem;
  }

  @media(min-width: 401px) {
    margin: 9rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;

    .tea__pour img {
      width: calc(40vw - 2.5rem);
    }

    .commitment {
      text-align: left;
    }

    .commitment__header {
      margin-top: 0;
    }
  }


  @media(min-width: 769px) {
    margin: 10.5rem 6rem;
    gap: 8rem;

    .commitment__text {
      line-height: 2;
      letter-spacing: 0.05rem;
    }
  }
`;

export const QualityWrapper = styled.div`
  margin: 17rem auto;
  background-color: #2C343E;
  padding: 0 2.5rem 6rem 2.5rem;
  border-radius: 1rem;
  display: block;

  .quality__image img {
    width: calc(100vw - 8rem);
    border-radius: 1rem;
    margin: -8rem auto 8rem auto;
  }

  .quality {
    text-align: center;
    color: #ffffff;
  }

  .quality__header {
    margin-bottom: 2.5rem;
  }

  .quality__text {
    color: #f1f1ee;
  }

  @media(min-width: 401px) {
    margin: 20rem auto 10rem auto;
    padding: 0 5rem 6rem 5rem;

    .quality__image img {
      width: calc(100vw - 15rem);
      margin: -12rem auto 8rem auto;
    }
  }

  @media(min-width: 769px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .quality__image img {
      width: calc(40vw - 10rem);
      margin: -8rem 0 0 6rem;
    }

    .quality {
      text-align: left;
      margin: 8rem auto;
    }

    .quality__header {
      font-size: 3rem;
      margin-bottom: 3.5rem;
    }

    .quality__text {
      width: 70%;
      font-size: 1.15rem;
    }
  }
`;
