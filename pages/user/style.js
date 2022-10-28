import styled from 'styled-components';

const UserLoginContainerStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    //padding: 5%;
    position: relative;
    z-index: 1;

.facebook-header{
  font-size: 3vw;
  margin-top: 50px;
}
.facebook-body{
  font-size: 2.5vw;
}
`
 
export default UserLoginContainerStyle