import styled from 'styled-components';

const BackGround = (props) =>{

    return(
        <Container>
           <Comment><h2>Why BloodPlus ?</h2></Comment>
           <GridContainer>
                <Privacy>
                    <img src="./assets/8.png" alt="" />
                     <h3>Privacy</h3>
                     <p>We don't show your details out in public</p>
                </Privacy>
                <Trust>
                    <img src="./assets/9.png" alt="" />
                    <h3>Trusted Resources</h3>
                    <p>No random calls. Only calls from trusted blood banks</p>
                </Trust>
                <Convenience>
                    <img src="./assets/10.png" alt="" />
                    <h3>Donate at Convenience</h3>
                    <p>Schedule your preferable hours to donate through Whatsapp </p>
                </Convenience>
           </GridContainer>

        </Container>

    )
};

const Container = styled.div`
   width: auto;
   margin-left: auto;
   margin-right: auto;
   margin: 140px 0;
   overflow-y: hidden;
   overflow-x: hidden;
   @media(max-width: 768px){
       margin: 50px 0;
     >h1{
         font-size: small;
         font-weight: 500;
     }
   }
   
`;

const GridContainer = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: minmax(0, 5fr) minmax(0, 8fr) minmax(300px, 5fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin-left: 20px;
    margin-top: 80px;
    @media(max-width: 768px){
   
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin-top: 70px;
    align-items: center;
    }


  
`;

const Privacy = styled.div`
    position: relative;
    text-align: center;
    margin: 30px 0;
    >img{
        width: 150px;
    }
    >h3{
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
    }
    >p{
        padding-top: 30px;
        font-size: x-small;
        text-align: center;
    }
    @media(max-width: 768px){
    >img{
        width: 80px;
    }
    }
`;


const Trust = styled.div`
   position: relative;
   text-align: center;
   margin: 30px 0;
   >img{
        width: 150px;
    }
    >h3{
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
    }
    >p{
        padding-top: 30px;
        font-size: x-small;
        text-align: center;
    }
    @media(max-width: 768px){
    >img{
        width: 80px;
    }
    }
`;


const Convenience = styled.div`
    position: relative;
    text-align: center;
    margin: 30px 0;
    >img{
        width: 150px;
    }
    >h3{
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
    }
    >p{
        padding-top: 30px;
        font-size: x-small;
        text-align: center;
    }
    @media(max-width: 768px){
    >img{
        width: 80px;
    }
    }
`;

const Comment = styled.div`
  text-align: center;
  font-size: x-large;
  color: rgba(0, 0, 0, 0.5);
  >h2{
      margin-top:200px;
  }
  @media(max-width: 768px){
      font-size: medium;
      >h2{
          margin-top: 80px;
          
      }
  }
`;

export default BackGround;