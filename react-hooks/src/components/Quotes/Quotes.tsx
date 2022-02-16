import styled from 'styled-components'
import { Button } from '../../components'

interface QuoteProps {
  quote: string,
  speaker: string,
  onUpdate(): void
}

export const Quotes = ({ quote, speaker, onUpdate}:QuoteProps) => {

  return (
    <Wrapper>
      <QuoteStyled>{quote}</QuoteStyled> -- 
      <SpeakerStyled>{speaker}</SpeakerStyled>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  )

}

const Wrapper = styled.div` 
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`;

const QuoteStyled = styled.p`
  font-size: 2em;
  flex: 1;
  margin: 0;
`
const SpeakerStyled = styled(QuoteStyled)`
  text-align: right;
  margin-bottom: 50px;
`