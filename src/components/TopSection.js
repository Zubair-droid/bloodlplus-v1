import styled from 'styled-components';

const TopSection = (props) => {
  return (
    <Container>
     <TopContent>
     
     <Brand>
       <img src = "/assets/2.png" alt =  " " /> 
      </Brand>
     
     <Role>
          <h3>Team</h3>
          <h3>Volunteer</h3>
     </Role>
     
     <HeroImage>
     <img src="assets/3.png" alt="" />
    </HeroImage>
   
    
    </TopContent>
    <HeroTextSection>
      <h1>Meet the Smartest Way to <span>Donate Blood!!!</span></h1>
      <h5>Connecting Donors, Blood banks and Hospitals</h5>
    </HeroTextSection>

    <ButtonSection>
      <button>Register to Donate</button>
      <h5>Join 1500000+ Donors</h5>
    </ButtonSection>
   </Container>
    )

};


const Container = styled.div`
    width: auto;
    margin-left: 0;
    margin-right: 0;
    overflow-y: hidden;
    overflow-x: hidden;
     
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const Brand = styled.div`
    width: auto;
    
    position: relative;
    padding: 12px;

   >img{
    max-width: 150px;
    padding: 10px 0 10px;
     
   }

   @media(min-width: 320px) and (max-width: 768px){
     >img{
      
       position: relative;
       margin-left: 0;
       width: 65px;
      
     }
   }
`;

const Role = styled.div`
  position: relative;
  max-width: 100px;
  display: flex;
  flex-direction: row;
  width: auto;
  font-size: large;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
  margin-left:350px;
  >h3{
    padding: 2px 15px;
    justify-content: space-between;
  }
  
  @media(min-width: 310px) and (max-width: 768px){
    position: relative;
    margin-left: -80px;
    text-align: left;
    margin-top: 290px;
    flex-direction: row;
    padding: 10px;
    >h3{
    padding: 2px 15px;
    font-size: 0.3rem;
  }
  }
  
`;

const HeroImage = styled.div`
   z-index: -1;
   position: absolute;
   top:0px;
   right: 0px;
   overflow-x: hidden;
   overflow-y: hidden;
   >img{
     float: inline-end;
     top:0px;
     right: 0px;
     position: relative;
     max-width: 630px;
   }
   @media (min-width: 320px) and (max-width: 768px){
    overflow-x: hidden;
    overflow-y: hidden;
        >img{
          position: relative;
          width: 290px;
          float: right;
         }
      }@media(max-width:1018px){
        z-index: -1;
        position: absolute;
        right: 0px;
        >img{
          top: 0;
          max-width: 470px;
          right: 0;
          float: right;
        }
       }
  `;

  const HeroTextSection = styled.div`
   
    margin-top: 60px;
    position: relative;
    justify-content: left;
    max-width: 500px;
    padding: 25px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.6);
   >h1{
      font-size: 3.5rem;
    >span{
      
      color: #c2252d;
    }
  }
    >h5{
      font-weight: 300;
      font-size: 1.5rem;
    }
    
    @media(min-width: 310px) and (max-width: 768px){
      margin-top: 0;
      >h1{
        font-size: 2rem;
        margin-top: 14px;
       }
      >h5{
        margin-top: 12px;
        font-size: 0.5rem;
      }
    }
  
  `;

  const ButtonSection = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 23px;
    width: 300px;
    >button{
      font-size: 1.2rem;
      border-radius:8px;
      background-color: #c2252d;
      width: 300px;
      padding: 12px;
      color: white;
      border: 1px solid #c2252d
    }
    >h5{
      margin-top: 12px;
      padding-top: 15px;
      font-weight: 700px;
      font-size: x-large;
      color: #c2252d;
      text-align: center;
    }

    @media(min-width: 310px) and (max-width: 768px){
      >button{
        width: 180px;
        margin-top: 0;
      }
      >h5{
        text-align: left;
      }
    }  
  `;


export default TopSection;
