import styled from 'styled-components';
import Leftside from './LeftSide';
import Center from './Center';
import Rightside from './RightSide';

const Home = (props) => {
    return (
        <Container>
            <Layout>
                <Leftside/>
                <Center/>
                <Rightside/>
            </Layout>
        </Container>
    )
} 

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home