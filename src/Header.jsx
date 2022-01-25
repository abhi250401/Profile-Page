import React from 'react';
import styled from 'styled-components';


const Head = styled.div`
border-bottom:4px solid grey;
height:12vh;
color:#92A9BD;
display:flex;
align-items :center;
justify-content :space-evenly;
width:100%;
position:sticky;
font-size:1.4rem;
`
const HeaderText = styled.div`
display:flex;
margin:0.5rem;

`
const RightHeader = styled.div`
display:flex;
`;
const Links = styled.div`
&:hover {
    color: purple;
    transform:scale(1.1);
  }
cursor:pointer;
margin:0.5rem;
`;
const LeftHeader = styled.div`

justify-content:center;
display:flex;

`


const Header = () => {
    return <div>
        <Head >
            <LeftHeader>
                <HeaderText>
                    Profile Page
                </HeaderText>
            </LeftHeader>
            <RightHeader>
                <HeaderText>
                    <Links>Messages</Links>
                </HeaderText>
                <HeaderText>
                    <Links>Contacts</Links>
                </HeaderText>

            </RightHeader>

        </Head>
    </div>;
}
export default Header;
