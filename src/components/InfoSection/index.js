import React from 'react'
import {Button} from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Column2
} from './InfoElements'

export default function InfoSection({dark2,id,lightBg,lightText,lightTextDesc,topLine,headline,description,buttonLabel,imgStart,img,alt,dark,primary,darkText}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper >
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Topline>{topLine}</Topline>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1: 0}
                                        dark={dark ? 1:0}
                                        dark2={dark2 ? 1:0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
