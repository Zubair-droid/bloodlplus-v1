import styled from 'styled-components';

const StepSection = (props) => {
    return (
        <Container>
        <Step><h2>3 Step Registration Process</h2></Step>
        
        <GridContainer>
             <Google>
               <img src="./assets/5.png" alt="" />
                <p>Signup with Google</p>
             </Google>
             <Details>
              <img src="./assets/6.png" alt="" />
              <p>Enter your details</p>
             </Details>
             <Phone>
             <img src="./assets/7.png" alt="" />
             <p>Verify phone number</p>
             </Phone>
        </GridContainer>
        </Container>
    )
};

const Container = styled.div`
    width: auto;
    margin-left: auto;
    margin-right: auto;
    
`;
const Step = styled.div`
    margin-top: 250px;
    margin-bottom: 50px;
    text-align: center;
    font-size: x-large;
    color: rgba(0, 0, 0, 0.5);
    @media(max-width: 768px){
      font-size: medium;
      margin-top: 78px;
  }
`;

const GridContainer = styled.div` 
   
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: minmax(0, 5fr) minmax(0, 8fr) minmax(300px, 5fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 150px 0px;
    margin-left: 20px;

    @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 35px 0;
    align-items: center;
}
`;

const Google = styled.div`
   
    position: relative;
    text-align: center;
    width: auto;
    >img{
        width: 150px;
    }
    >p{
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
    }
    @media(min-width: 320px) and (max-width: 768px){
        >img{
            width: 80px;
        }
    }`;

const Details = styled.div`
   position: relative;
    width: auto;
    text-align: center;
    >img{
        width: 150px;
    }
    >p{
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
    }
    @media(min-width: 320px) and (max-width: 768px){
        >img{
            width: 80px;
        }
    }
`;

const Phone = styled.div`
    position: relative;
    width: auto;
    text-align: center;
    >img{
        width: 150px;
    }
    >p{
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
    }
    @media(min-width: 320px) and (max-width: 768px){
        >img{
            width: 80px;
        }
    }
`;




export default StepSection;