import styled from 'styled-components'

export const DynamicStylingBgContainer = styled.div`
  height: 100vh;
  background: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const InsideContainer = styled.div`
  height: 500px;
  width: 600px;
  background-color: #1b1c22;
  padding: 10px;
  display: flex;
`

export const ImageContainer = styled.div`
  width: 50%;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 28px;
  text-align: center;
`
export const ImageElement = styled.img`
  width: 90%;
  margin-top: 50px;
`
export const TextContainer = styled.div`
  width: 50%;
  border-radius: 10px;
  background: #25262c;
  height: 100%;
  border: 1px solid #334155;
`
export const ButtonsContainer = styled.ul`
  height: 10%;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 10px;
`
export const ListItem = styled.li``

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${props => (props.applyColor ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const HorizontalRule = styled.hr`
  margin-top: 0;
  border: 1px solid #334155;
  margin-bottom: 0;
`
export const TextAreaElement = styled.textarea`
  height: 85%;
  width: 100%;
  margin-top: 0;
  background: transparent;
  border: 0;
  outline: none;
  padding: 10px;
  color: #f1f5f9;
  font-size: 14px;
  font-weight: ${props => (props.applyBold ? 'bold' : 'normal')};
  font-style: ${props => (props.applyItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.applyUnderline ? 'underline' : 'normal')};
`
