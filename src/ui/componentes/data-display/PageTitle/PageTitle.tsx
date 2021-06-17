import React from 'react';
import {PageTitleContainer, PageTitleStyled, PageSubtitleStyled} from './PageTitle.style';

interface PageTitleProps{
    title: string;
// interogação para virar opcional, se quiser varios tipos sobota o ' | ' e coloca os tipos
    subtitle?: string | JSX.Element; 
    // coisas que ficam dentro da tag desse elemento via para children e ai pra aparecer vc tem q bota la dentro o props.childern ( podendo assim customizar o local que aparece)
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageSubtitleStyled>
                {props.subtitle}
            </PageSubtitleStyled>
        </PageTitleContainer>

    )
}

export default PageTitle;