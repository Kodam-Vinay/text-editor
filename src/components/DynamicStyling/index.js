import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  DynamicStylingBgContainer,
  InsideContainer,
  ImageContainer,
  Heading,
  ImageElement,
  TextContainer,
  ButtonsContainer,
  Button,
  HorizontalRule,
  TextAreaElement,
  ListItem,
} from './styledComponents'

class DynamicStyling extends Component {
  state = {
    applyBold: false,
    applyItalic: false,
    applyUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({applyBold: !prevState.applyBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({applyItalic: !prevState.applyItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({applyUnderline: !prevState.applyUnderline}))
  }

  render() {
    const {applyBold, applyItalic, applyUnderline} = this.state
    return (
      <DynamicStylingBgContainer>
        <InsideContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <ButtonsContainer>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  applyColor={applyBold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  applyColor={applyItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  applyColor={applyUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ButtonsContainer>
            <HorizontalRule />
            <TextAreaElement
              applyBold={applyBold}
              applyItalic={applyItalic}
              applyUnderline={applyUnderline}
            />
          </TextContainer>
        </InsideContainer>
      </DynamicStylingBgContainer>
    )
  }
}
export default DynamicStyling
