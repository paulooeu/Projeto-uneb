import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box
}
*:focus{
  outline: 0;
}
html,body,#root{
  height: 100%;
}
body{
-webkit-font-smoothing: antialiased;
}
body, input, button{
  font: 14px 'Roboto', sans-serif
}
a{
  text-decoration: none
}
ul{
  list-style: none
}
button{
  cursor: pointer
}



.nav-list {
  height: 10vh;
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  list-style: none;
}
.nav-links {
  text-decoration: none;
  color: #000;
  font-size: 18px;
}
.home,
.about {
  height: 90vh;
  position: absolute;
  width: 100%;
}
.home {
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.about {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
.home-content,
.about-content {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 70%;
  }
  h1 {
    
    margin: 30px 0px;
  }
  p {
    font-size: 20px;
  }
}
.home-presentation,
.about-presentation {
  background-color: #000;
  color: #fff;
  height: 80%;
  width: 50%;
  opacity: 0.5;
  border-radius: 20px; 
  display: flex;
  flex-direction:column;

  align-items: center;
  margin-left: auto;
  list-style: none;
  h1{
    font-size:50px;

  }
}
.nav-list {
  height: 10vh;
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  list-style: none;
}
.nav-links {
  text-decoration: none;
  color: #000;
  font-size: 18px;
}


`;

export const ContainerFrom = styled.div`
  background-color: #fff;
  height: 70%;
  width: 30%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
