import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ToggleBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr  1fr;
  z-index: 1;
  height: 80;
  width: 600;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  // background: #000;
  font-size: 18x;
  font-weight: ${({pressed}) => (pressed ? '700': '400')};
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: ${({position}) => (position === 'left'? '30px 0px 0px 30px' : position === 'right'? '0px 30px 30px 0px': '0 0 0 0')};
  background: ${({pressed}) => (pressed? '#000': '#146a4b')};
  color: ${({pressed}) => (pressed? '#f7f8fa': '#d6dbdc')};
  padding:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
      background: #ccc;
  }
`;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  },[value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}

const ToggleButton = ( { setter }) => {

  const [all, setAll] = useState (true);
  const [tech, setTech] = useState (false);
  const [biz, setBiz] = useState (false);

  const prevAll = usePrevious(all)
  const prevTech = usePrevious(tech)
  const prevBiz = usePrevious(biz)

  // const [blog, setBlog] = useState (false);
  useEffect(() => {
    if (prevAll !== all) {
      all === true && setTech(false);
      all === true && setBiz(false);
      all === true && setter('all');
    }

    if (prevTech !== tech) {
      tech === true && setAll(false);
      tech === true && setBiz(false);
      tech === true && setter('tech');
    }
    
    if (prevBiz !== biz) {
      biz === true && setAll(false);
      biz === true && setTech(false);
      biz === true && setter('business');
    }
    console.log('all = ', all, ' tech = ', tech, ' biz = ', biz)
  }, [all, tech, biz]);

  const handleAllClick = () => {
    setAll(!all);
}
  const handleTechClick = () => {
      setTech(!tech);
  }
  const handleBizClick = () => {
      setBiz(!biz);
  }

  return(
      <>
          <ToggleBarContainer>
              <Button pressed = {all} position = {`left`} onClick = {handleAllClick}> All</Button>
              <Button pressed = {tech}  onClick = {handleTechClick}>Tech</Button>
              {/* <Button pressed = {hw}  onClick = {handleBlogClick}>Blogs</Button> */}
              <Button pressed = {biz} position = {`right`}  onClick = {handleBizClick}>Business</Button>
          </ToggleBarContainer>
      </>
  )
}
export default ToggleButton;