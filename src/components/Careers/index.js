import React from 'react';
import { 
  Icon, 
  Container, 
  Bg,
  VideoBg,
  Content,
  H1,
  CardWrapper,
  CardList
} from './CareersElements';
import Row from 'react-bootstrap/Row';
import Video from '../../videos/workers.mp4';
import { Tag, Button, Icon as IconA} from "atomize";

const researcher_major = ['Stat', 'CS', 'Math', 'Physics'];
const researcher_skill = ['Python', 'Qiskit', 'C++'];
const MembersSection = ({ lightBg, }) => {

  return (
    <>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div style = {{width: '1000px'}}>
          <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
              <Icon to="/" ><img style = {{marginRight: '-10px'}} src = {require('../../images/kqc-logo-blue.svg').default}></img>KQC</Icon> 
          </div>
          <Container id = "home">
              <Bg>
              <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
              </Bg>
              <Content>
              <H1>Careers</H1>
              </Content>
          </Container>
      
          <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'top', flexDirection: 'column', height: '350px', width: '100%'}}>
            <h1 style = {{fontSize: '2.5rem', fontWeight: 'bold', marginTop: '30px'}}>Join our team</h1>
            <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <Row style ={{display: 'flex', justifyContent: 'center', width: '800px', height: '500px'}}>
                <p>
                  전 세계적으로 많은 정부 기관과 회사들이 양자컴퓨터를 연구하고 있습니다. 양자 컴퓨터는 현재의 컴퓨터와는 전혀 다른 원리로 동작하는 컴퓨터로, 양자 컴퓨터를 위한 소프트웨어 개발이 필수적입니다. 양자컴퓨터는 현재의 수퍼컴퓨터를 단숨에 뛰어넘을 Computing 분야의 game changer로 알려져 있습니다.바이오와 금융을 포함한 모든 산업 영역에서 고전 컴퓨터가 풀지 못하는 문제들을 풀어낼 수 있게 만드는 양자컴퓨터는 미래 경쟁력의 핵심 중 하나가 될 것으로 전망됩니다. KQC는 양자컴퓨팅을 연구/개발/상용화를 목적으로 설립 되어, 국내 최초 IBM과 양자컴퓨팅 허브 운영 및 기술도입 계약을 체결한 기업입니다. 향후 quantum-readiness를 확보하고, 양자 컴퓨팅을 활용한 국제 경쟁력을 확보할 수 있도록 양자컴퓨팅 교육사업, Quantum 알고리즘/소프트웨어 개발을 포함한 기업 컨설팅 서비스를 제공할 예정입니다. 곧 마주하게 될 양자컴퓨팅 시대를 함께 열어나갈 인재를 모십니다.
                </p>
              </Row>
            </div>
          </div>
          <CardList>
            <CardWrapper>
              <div>Researcher</div>
              <div style = {{height: '200px'}}>
                AAA
              </div>
              <div style = {{marginTop: '30px', display: 'flex', flexDirection: 'row', alignItems: 'middle'}}>
                <Button
                  h="2rem"
                  w="2rem"
                  bg="danger300"
                  hoverBg="danger400"
                  rounded="lg"
                  m={{ r: ".3rem" }}
                >
                  <IconA name="HeartSolid" size="20px" color="danger700" />
                  
                </Button>
                <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {researcher_major.map((r) => (
                    <Tag
                      bg={`gray700`}
                      textColor="white"
                      p={{ x: "0.75rem", y: "0.25rem" }}
                      m={{ r: "0.2rem",  }} //b: "0.5rem"}
                      textSize="caption"
                      textWeight = '400'
                      style = {{width: '60px',}}
                      align = 'center'
                    >
                      {r}
                    </Tag>
                  )
                  )}
                </div>
              </div> 
              <div style = {{marginTop: '5px', display: 'flex', flexDirection: 'row', alignItems: 'middle'}}>
                <Button
                  h="2rem"
                  w="2rem"
                  bg="danger300"
                  hoverBg="danger400"
                  rounded="lg"
                  m={{ r: ".3rem" }}
                >
                  <IconA name="HeartSolid" size="20px" color="danger700" />
                  
                </Button>
                <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {researcher_skill.map((r) => (
                    <Tag
                      bg={`gray700`}
                      textColor="white"
                      p={{ x: "0.75rem", y: "0.25rem" }}
                      m={{ r: "0.2rem",  }} //b: "0.5rem"}
                      textSize="caption"
                      textWeight = '400'
                      style = {{width: '60px',}}
                      align = 'center'
                    >
                      {r}
                    </Tag>
                  )
                  )}
                </div>
              </div> 
            </CardWrapper>
            <CardWrapper onClick = {() =>{}}>
              <div>Researcher</div>
            </CardWrapper>
            <CardWrapper>
              <div>Researcher</div>
            </CardWrapper>
          </CardList>
          

        </div>
      </div>
    </>
  )
}

export default MembersSection;