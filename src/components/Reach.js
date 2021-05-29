import styled from "styled-components";

const Reach = (props) => {
  return (
    <Container>
      <GridContainer>
        <Image>
          <img src="./assets/4.png" alt="" />
          <div className="text">
            <p>
              Alone we can do so little, together we can do more, Literally!!
            </p>
          </div>
        </Image>

        <FormContainer>
          <Form>
            <h1>Get in touch with us to volunteer</h1>

            <Fields1>
              <input placeholder="Name"></input>
              <input placeholder="E Mail"></input>
            </Fields1>
            <Fields2>
              <input placeholder="City"></input>
              <input placeholder="Phone"></input>
            </Fields2>
            <Field3>
              <input placeholder="Why volunteer with us ?"></input>
            </Field3>
          </Form>
        </FormContainer>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 120px;
  margin-left: 0;
  margin-right: 0;
  
  width: auto;
`;

const GridContainer = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: minmax(0, 5fr) minmax(0, 8fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin-top: 150px;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin-top: 100px;
  }
`;

const Image = styled.div`
    float: left;
    position: relative;
    z-index: -1;
    >div{
        max-width: 250px;
        position: absolute;
        top: 232px;
        left: 26px;
        >p{
          font-size: xx-large;
          font-weight: 700;
          color: white;
        }
    }
    >img{
    position: relative;
    margin-left: -115px;
    left:0;
    position: relative;
    width: 670px;
    >h2{
        width: 90px;
    }
    }
    
    @media(max-width: 568px) and (min-width: 320px){
        >img{
            
            max-width: 350px;
            margin-left: -155px;
        }
        >div{
        max-width: 60px;
        position: absolute;
        top: 62px;
        left: 42px;
        >p{
            font-size: x-small;
            font-weight: 500;
            font-size-adjust: 0.5;
            margin-top: 16px;
            margin-left: -65px;

        }
    }
        
    }
    @media(max-width: 1018px) and (min-width: 569px){
        >img{
            position: relative;
            max-width: 450px;
            margin-left: -85px;
        }
        >div{
          top:90px;
          max-width:180px;
        
        >p{
            font-size-adjust: 0.5;
            font-weight: 500;
            margin-top: 26px;
            margin-left: 12px;
           
        }
        }
    }
`;

const Form = styled.div`
  position: relative;
  margin-left: 90px;
  margin-top: 100px;
  width: 65%;
  > h1 {
    font-size: 2rem;
    margin-left: 40px;
    color: rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 0;
    > h1 {
      text-align: center;
      margin-left: 0;
      font-size: large;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Fields1 = styled.div`
  margin: 20px 5px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > input {
    border: 1px solid #c2252d;
    padding: 12px;
    margin: 10px 10px;
    border-radius: 3px;
    width: 250px;
  }
  @media (max-width: 768px) {
    > input {
      text-align: center;
      padding: 6px;
      width: 100px;
      margin: 8px;
    }
  }
`;

const Fields2 = styled.div`
  margin: 20px 5px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > input {
    border: 1px solid #c2252d;
    padding: 12px;
    margin: 10px 10px;
    border-radius: 3px;
    width: 250px;
  }
  @media (max-width: 768px) {
    > input {
      text-align: center;
      padding: 6px;
      width: 100px;
      margin: 8px;
    }
  }
`;

const Field3 = styled.div`
  margin: 20px 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > input {
    border: 1px solid #c2252d;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    width: 540px;
    height: 120px;
  }
  @media (max-width: 768px) {
    > input {
      text-align: center;
      padding: 6px;
      width: 240px;
      margin: 8px;
      height: 70px;
    }
  }
`;

export default Reach;
