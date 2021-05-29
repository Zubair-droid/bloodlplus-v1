import styled from 'styled-components'

const FareWell = (props) => {
    return(
        <Container>
            <GridContainer>
                <LeftContainer>
                    
                     <img src="./assets/2.png" alt="" />
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                </LeftContainer>
                <MainContainer>
                      <b>Important Links</b>
                      <p>Privacy Policy</p>
                      <p>Terms and Conditions</p>
                      <p>FAQ</p>
                      <p>About Us</p>
                      <p>Contact Us</p>
                    <IconStack>
                       
                       <img src="./assets/facebook.png" alt="" />
                       <img src="./assets/instagram.png" alt="" />
                       <img src="./assets/twitter.png" alt="" />
                       <img src="./assets/linkedin.png" alt="" />
                      
                    </IconStack>
                </MainContainer>
                <RightContainer>
                       <h4>Join 1500000+ Donors</h4>
                      {/* <img src="./assets/donate.png" alt="" /> */}
                      <button>Donate Now</button>
                </RightContainer>

            </GridContainer> 
            <FooterContainer>
              <p>All Rights Reserved © BloodPlusIndia</p>
            </FooterContainer> 
        </Container>
    );
};

const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: -1;
    position: absolute;
    max-width: 100%;
    left: 0;
    right: 0;
    background-color:  #c2252d;
    margin-top: 56px;
`;

const GridContainer = styled.div`
    display: grid;
    justify-content: space-evenly;
    text-align: center;
    grid-template-columns: minmax(0, 7fr) minmax(0,7fr) minmax(180px, 7fr);
    column-gap: 25px;
    row-gap:25px;
    grid-template-rows: auto;
    margin: 150px 0px;
    margin-left: 5px;
    @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin-top: 70px;
    align-items: center;
    }
`;


const LeftContainer = styled.div`

   >img{
       width: 200px;
       
   }
   >p{
       text-align: left;
       margin-left: 10px;
       color: white;
       padding: 20px;
       
    }
    @media(max-width: 768px){
        margin-top: 100px;
    }

`;

const MainContainer = styled.div`
    color: white;
    @media(max-width: 768px){
        margin-top: 100px;
    }
   
`;

const IconStack = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    >img{
        padding: 3px 18px;
        max-width: 48px;
    }@media(max-width: 768px){
        margin-top: 40px;
        >img{
        padding: 0px 10px;
    }
}

`;

const RightContainer = styled.div`
 
   display: flex;
   flex-direction: column;
  
   >button{
       width: 300px;
       height: 60px;
       border-radius: 8px;
       border: 1px solid white;
       color: #c22;
       font-size: x-large;
       font-weight: 600;
   }

   >h4{
       text-align: left;
       font-size: x-large;
       color: white;
   }
   @media(max-width: 768px){
        margin-top: 100px;
    }

`;

const FooterContainer = styled.div`
    text-align: center;
    background-color: white;
    padding: 2px;
    font-weight: 300;
    width: 100%;
    color:  #c2252d;
    >p{
        font-size: small;
    }
        
`;



export default FareWell;