import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import { Quotes } from './components';
import narutoImg from './assets/img/naruto.png'
import jutsoSound from './assets/sounds/src_sounds_jutso.mp3';
import {getQuote} from './service'

const audio = new Audio(jutsoSound)

function App() {

  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState(
    {quote: 'loading quote..', speaker: 'loading Speaker'}
    )

  useEffect(()=> {
    halderQuote();
    
    return () => {
      isMounted.current = false;
    }
  }, [])

  const halderQuote = async () => {
    const quote = await getQuote();
    audio.play();
    if (isMounted.current) {
      setQuoteState(quote);
    }
  }

  return (
    <Content>
      <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={halderQuote} />
      <NarutoImg src={narutoImg} alt="naruto anime" />
    </Content>
  );
}


const Content = styled.div`
height: 100vh;
padding: 0 50px;
display: flex;
justify-content: center;
align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`

export default App;
