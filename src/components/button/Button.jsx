import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Button = ({ 
    label, 
    theme, 
    size, 
    isDisabled, 
    width, 
    color, 
    frontIcon, 
    backIcon, 
    onClick,
    radius,
    border
}) => {

    return (
        <Container>
            <Section section={1}>
                <MainTitle>Button</MainTitle>
            </Section>
            <Section section={2}>
                <Article article={1}>
                    <Flex>
                        <div>
                            <SubTitle>LABEL</SubTitle>
                            <Description>
                                <code>Button</code>의 들어갈 내용을 지정할 수 있습니다.
                            </Description>
                        </div>
                        <div>
                            <SubTitle>THEME</SubTitle>
                            <Description>
                                <code>Button</code> 컴포넌트 테마는 4가지의 유형이 있습니다.
                            </Description>
                            <List>
                                <ListItem>
                                    <code>Grey</code>
                                </ListItem>
                                <ListItem>
                                    <code>Blue</code>
                                </ListItem>
                                <ListItem>
                                    <code>BorderGrey</code>
                                </ListItem>
                                <ListItem>
                                    <code>borderBlue</code>
                                </ListItem>
                            </List>
                        </div>
                    </Flex>
                </Article>
                <Article article={2}>
                    <Flex>
                        <div>
                            <SubTitle>WIDTH</SubTitle>
                            <Description>
                                <code>Button</code>의 너비값을 다양한 단위로(px, em, rem, % 등) 지정할 수 있습니다.
                            </Description>
                        </div>
                        <div>
                            <SubTitle>DESABLED</SubTitle>
                            <Description>
                                Boolean 값으로 <code>Button</code>의 활성화 여부를 선택할 수 있습니다.
                            </Description>
                        </div>
                    </Flex>
                </Article>
                <Article article={3}>
                    <Flex>
                        <div>
                            <SubTitle>COLOR</SubTitle>
                            <Description>
                                <code>Button</code>의 배경 색상을 선택할 수 있습니다.
                            </Description>
                        </div>
                        <div>
                            <SubTitle>RADIUS</SubTitle>
                            <Description>
                                <code>Button</code>의 <code>border-radius</code>값을 지정할 수 있습니다.
                            </Description>
                        </div>
                    </Flex>
                </Article>
                <Article article={4}>
                    <Flex>
                        <div>
                            <SubTitle>SIZE</SubTitle>
                            <Description>
                                <code>Button</code>의 크기를 선택할 수 있습니다. (small, medium 중 택 1)
                            </Description>
                        </div>
                        <div>
                            <SubTitle>BORDER</SubTitle>
                            <Description>
                                <code>Button</code>의 border값의 두께, 스타일, 컬러를 지정할 수 있습니다. <br /> (예시: <code>1px solid #333333</code>)
                            </Description>
                        </div>
                    </Flex>
                </Article>
                <Article article={5}>
                    <Flex>
                        <div>
                            <SubTitle>FRONT ICON</SubTitle>
                            <Description>
                                <code>Button</code>의 앞쪽에 아이콘을 넣을 수 있습니다.
                            </Description>
                        </div>
                        <div>
                            <SubTitle>BACK ICON</SubTitle>
                            <Description>
                                <code>Button</code>의 앞쪽에 아이콘을 넣을 수 있습니다.
                            </Description>
                        </div>
                    </Flex>
                </Article>
                <Article article={6}>
                    <SubTitle>Props</SubTitle>
                    <CodeBox>
                        <code>
                            label: PropTypes.string, <br />
                            theme: PropTypes.string, <br />
                            size: PropTypes.oneOf(['small', 'medium']), <br />
                            width: PropTypes.string, <br />
                            isDisabled: PropTypes.bool, <br />
                            color: PropTypes.string, <br />
                            onClick: PropTypes.func, <br />
                            radius: PropTypes.number, <br />
                            border: PropTypes.string, <br />
                            frontIcon: PropTypes.string, <br />
                            backIcon: PropTypes.string,
                        </code>
                    </CodeBox>
                </Article>
            </Section>
            <Section section={3}>
                <Article article={3}>
                    <StyledButton
                        theme={theme} 
                        size={size} 
                        width={width}
                        disabled={Boolean(isDisabled)}
                        color={color}
                        onClick={onClick}
                        radius={radius}
                        border={border}
                    >
                        {frontIcon !== undefined ? <img src={`${frontIcon}`} alt={""} /> : <></>}
                        {label !== null ? <span>{label}</span> : <></>}
                        {backIcon !== undefined ? <img src={`${backIcon}`} alt={""} /> : <></>}
                    </StyledButton>
                </Article>
            </Section>
        </Container>
    )
};


Button.defaultProps = {
    theme: 'grey',
    size: 'small'
};

const Container = styled.main`
    width: 100%;
    
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        line-height: 1.25;
    }

    code {
        padding: 0.2rem 0.4rem;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,.05);
        border-radius: 3px;
    }
`;

const Section = styled.section`
    position: relative;

    ${(props) => {
        switch(props.section) {
            case 1: 
                return`
                    border-bottom: 1px solid #eaecef;
                    padding-bottom: 16px;
                `;
            case 2:
                return`

                `;
        }
    }}
`;

const Article = styled.article`
    padding-bottom: 24px;

    ${(props) => {
        switch(props.article) {
            case 1:
                return`
                    padding-top: 24px;
                `;
        }
    }}
`;

const MainTitle = styled.h2`
    font-size: 2rem;
    padding-bottom: 10px;
`;

const SubTitle = styled.h4`
    font-size: 1.4rem;
    margin-bottom: 16px !important;
`;

const Description = styled.p`
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.8 !important;
`;

const List = styled.ul``;

const ListItem = styled.li`
    font-size: 1rem;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const CodeBox = styled.pre`
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;

    > code {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
        font-size: 16px;
        word-break: normal;
        white-space: pre;
        background: 0 0;
    }
`;

const Flex = styled.div`
    display: flex;
    flex: 1 0 0;

    > div {
        width: 50%;
    }
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    padding: 8px 12px;
    width: ${(props) => props.width};
    height: auto;
    text-align: center;
    background: #2e3338;
    border-radius: ${(props) => props.radius !== undefined ? `${props.radius}px` : "4px"};
    font-weight: 500;
    line-height: 120%;
    color: #ffffff;
    cursor: pointer;

    > span {
        display: inline-block;
        font-size: 1rem;
    }

    &:hover, 
    &:focus {
        background-color: #000000;
    }

    &:disabled {
        cursor: default;
    }

    ${(props) => {
        switch(props.size) {
            case 'small':
                return `
                    min-height: 40px;
                    padding: 8px 12px;
                `;
            case 'medium':
                return `
                    min-height: 56px;
                    padding: 8px 24px;
                `;
        }
    }}
    
    ${(props) => {
        switch(props.theme) {
            case 'grey': 
                return `
                    background: ${props.color !== undefined ? props.color : '#2e3338'};
                    &:hover,
                    &:focus {
                        background: #000000;
                    }
                    &:active {
                        background: #000000;
                    }
                    &:disabled {
                        background: #b5bdc5;
                    }  
                `;
            case 'blue':
                return `
                    background: ${props.color !== undefined ? props.color : '#3294ee'};
                    &:hover {
                        background: #096dd9;
                    }
                    &:focus {
                        background: #0050b3;
                    }
                    &:active {
                        background: #0050b3;
                    }
                    &:disabled {
                        background: #a0cbf3;
                    }
                `;
            case 'borderGrey':
                return `
                    background: ${props.color !== undefined ? props.color : '#ffffff'};
                    border: ${props.border !== undefined ? props.border : '1px solid #d6dbe0'};
                    color: #2e3338;

                    &:hover {
                        background: #f1f3f5;
                    }
                    &:focus {
                        background: #e2e6e9;
                    }
                    &:active {
                        background: #e2e6e9;
                    }
                    &:disabled {
                        background: #ffffff;
                        color: #d6dbe0;
                        border-color: #d6dbe0;
                    }
                `;
            case 'borderBlue':
                return `
                    background: ${props.color !== undefined ? props.color : '#ffffff'};
                    border: ${props.border !== undefined ? props.border : '1px solid #3294ee'};
                    color: #3294ee;

                    &:hover {
                        background: #e4f0fb;
                    }
                    &:focus {
                        background: #c2def6;
                    }
                    &:active {
                        background: #c2def6;
                    }
                    &:disabled {
                        background: #ffffff;
                        color: #a0cbf3;
                        border-color: #a0cbf3;
                    }
                `;
        }
    }}
}
`;

Button.propTypes = {
    label: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    width: PropTypes.string,
    isDisabled: PropTypes.bool,
    color: PropTypes.string,
    onClick: PropTypes.func,
    radius: PropTypes.number,
    border: PropTypes.string,
    frontIcon: PropTypes.string,
    backIcon: PropTypes.string,
};
  
Button.defaultProps = {
    label: null,
    theme: null,
    size: null,
    width: null,
    isDisabled: null,
    onClick: undefined,
    frontIcon: undefined,
    backIcon: undefined,
};


export default Button;