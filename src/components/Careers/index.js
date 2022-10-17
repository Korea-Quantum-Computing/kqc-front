import React,  { useEffect, useState } from 'react';
import { 
  Icon, 
  Container, 
  Bg,
  VideoBg,
  ProcessImg,
  Content,
  H1,
  H2,
  Desc,
  CardWrapper,
  CardList
} from './CareersElements';

import Video from '../../videos/workers.mp4';
import { 
  Tag, 
  Button, 
  Modal, 
  Icon as IconA, 
  Text
} from "atomize";


import { jobs } from '../../data/job-description';




const AlignCenterModal = ({ JD, isOpen, onClose }) => {
  return (
    <Modal 
      width = {400}
      isOpen={isOpen} 
      onClose={onClose} 
      align="center" 
      rounded="md"
    >
      <IconA
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <div >
        <div style = {{display: 'flex', flexDirection: 'row'}}>
          <div style = {{display: 'flex', width: '28px', height: '28px', marginRight: '10px'}}>
            <img tyle = {{width: '20px', height: '20px'}} src = {require('../../images/icons/target.png')} alter = 'target'/>
          </div>
          <Text textWeight = '600' textSize="subheader" m = {{b: ".5rem"}}>
            Mission
          </Text>
        </div>
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="paragraph">
          {JD.mission && JD.mission.map(m => (
            <p style = {{lineHeight: '1'}}>{m}</p>
          ))}
        </Text>
        <div style = {{display: 'flex', flexDirection: 'row', marginTop: '40px'}}>
          <div style = {{display: 'flex', width: '28px', height: '28px', marginRight: '10px'}}>
            <img tyle = {{width: '20px', height: '20px'}} src = {require('../../images/icons/requirement.png')} alt = 'requirements'/>
          </div>
          <Text textWeight = '600' textSize="subheader" m = {{b: ".5rem"}}>
          Requirements
          </Text>
        </div>
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="paragraph">
          {JD.requirements_desc && JD.requirements_desc.map(m => (
            <p style = {{lineHeight: '1'}}>{m}</p>
          ))}
        </Text>
        <div style = {{display: 'flex', flexDirection: 'row', marginTop: '40px'}}>
          <div style = {{display: 'flex', width: '28px', height: '28px', marginRight: '10px'}}>
            <img tyle = {{width: '20px', height: '20px'}} src = {require('../../images/icons/behavior.png')} alt= 'behavior'/>
          </div>
          <Text textWeight = '600' textSize="subheader" m = {{b: ".5rem"}}>
          Preferred
          </Text>
        </div>
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="paragraph">
          {JD.preferred_desc && JD.preferred_desc.map(m => (
            <p style = {{lineHeight: '1'}}>{m}</p>
          ))}
        </Text>

        <div style = {{display: 'flex', flexDirection: 'row', marginTop: '40px'}}>
          <div style = {{display: 'flex', width: '28px', height: '28px', marginRight: '10px'}}>
            <img tyle = {{width: '20px', height: '20px'}} src = {require('../../images/icons/placeholder.png')} alt = 'placeholder'/>
          </div>
          <Text textWeight = '600' textSize="subheader" m = {{b: ".5rem"}}>
          Location
          </Text>
        </div>

        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="paragraph">
          부산광역시 해운대구 우2동 센텀중앙로 55, 9층 KQC 오피스
        </Text>
      </div>
      
    </Modal>
  );
};


const Card = ( { job, showJD }) => {
  return(
    <CardWrapper onClick = {(e) => showJD(job.job_id)}>
      <div style = {{height: '50px', fontWeight: '700', fontSize: '1.4rem'}}>
        {job.title}
      </div>
      <div style = {{height: '100px', fontWeight: '400', fontSize: '1.2rem'}}>
        {job.desc}
      </div>
      <div style = {{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
      }}>
        <Button
          h="2rem"
          w="2rem"
          bg="danger300"
          hoverBg="danger400"
          rounded="lg"
          m={{ r: ".3rem" }}
        >
          <IconA name="Rename" size="20px" color="danger700" />
        </Button>
        <div style = {{
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'center'
        }}>
          {job.major.map((r) => (
            <Tag
              bg={`gray700`}
              key = {`${r}-major-tag`}
              textColor="white"
              p={{ x: "0.75rem", y: "0.25rem" }}
              m={{ r: "0.2rem",  }} //b: "0.5rem"}
              textSize="tiny"
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
      <div style = {{marginTop: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Button
          h="2rem"
          w="2rem"
          bg="danger300"
          hoverBg="danger400"
          rounded="lg"
          m={{ r: ".3rem" }}
        >
          <IconA name="Draft" size="20px" color="danger700" />
        </Button>

        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {job.skill.map((r) => (
            <Tag
              bg={`gray700`}
              textColor="white"
              key = {`${r}-skill-tag`}
              p={{ x: "0.75rem", y: "0.25rem" }}
              m={{ r: "0.2rem",  }} //b: "0.5rem"}
              textSize="tiny"
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
  )
}
const Career = ({ lightBg, }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJD, setSelectedJD] = useState('');


  useEffect(() => {
    console.log('selected jd = ', selectedJD)
  }, [selectedJD]);


  const showJD = (job_id) =>{
    console.log('show JD........', job_id)

    jobs.filter((j) => {console.log('>>>', j.job_id)})


    setSelectedJD(jobs.filter((j) => (j.job_id === job_id))[0]);
    setShowModal(true);
    
  }

  return (
    <>
      <div style ={{display: 'flex', minHeight: '1600px', justifyContent: 'center'}}>
        <div style = {{width: '1000px'}}>
          <div style ={{display: 'flex', justifyContent: 'flex-start', width: '100%', minHeight: '80px',}}>
            <Icon to="/" >
              <img 
                style = {{marginRight: '-10px'}} 
                src = {require('../../images/kqc-logo-blue.svg').default}
                alt = 'kqc-logo-blue'
              />
              KQC
            </Icon> 
          </div>
          <Container id = "home">
              <Bg>
              <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
              </Bg>
              <Content>
              <H1>Careers</H1>
              </Content>
          </Container>
      
          <div 
            style ={{
              // display: 'flex', 
              // justifyContent: 'center', 
              // alignItems: 'center', 
              // flexDirection: 'row', 
              // height: '250px', 
              // width: '100%'
            }}
          >
            <div style = {{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '30px'}}>
              <H2 style = {{color: '#A6ABAB', marginRight: '10px'}}>Join</H2>
              <H2 style = {{color: '#515656', marginRight: '10px'}}>Our</H2>
              <H2 style = {{color: '#10606'}}>Team</H2>
            </div>
            
            <div style = {{width: '100%'}}>
              <Desc >

                <p>   
                  양자컴퓨터는 현재의 수퍼컴퓨터를 단숨에 뛰어넘을 Computing 분야의 game changer로 알려져 있습니다.
                </p>
                <p> 
                  양자 컴퓨터는 현재의 컴퓨터와는 전혀 다른 원리로 동작하는 컴퓨터로, 양자 컴퓨터를 위한 소프트웨어 개발이 필수적입니다. 
                </p>
                <p>                     
                  KQC는 양자컴퓨팅을 연구/개발/상용화를 목적으로 설립 되어, 국내 최초 IBM과 양자컴퓨팅 허브 운영 및 기술도입 계약을 체결한 기업입니다. 
                </p>
                <p>    
                  곧 마주하게 될 양자컴퓨팅 시대, Quantum-readiness를 위해 열정적으로 업무에 임하실 인재를 모십니다.
                </p>
              </Desc>
            </div>
          </div>
          <CardList>
            {
              jobs && jobs.map((j) => (
                  <Card 
                    key = {`${j.title}-card`}
                    job  = {j}
                    showJD = {showJD}
                  />
                )
              )
            }
          
          </CardList>
          
          <div style = {{marginTop: '50px', marginBottom: '50px'}}>

            <Text textSize = 'title' textWeight = '600'>채용 절차</Text>
            
            <div style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <ProcessImg src = {require('../../images/recruiting_process.png')} alt = 'recruiting'/>
            </div>
            <Text>※ 이력서 및 추가 서류( 포트폴리오,  GitHub url등 )를 토대로 지원 자격을 검토하게 되며, 개발직군의 경우 코딩 테스트가 추가로 예정되어 있습니다.</Text>
            <Text>※ 1차 실무진 면접과 2차 경영진 면접은 하루에 모두 진행되며, 자세한 일정은 개별적으로 안내될 예정입니다.</Text>
            <Text m = {{b: '1.2rem'}}>※ 면접 합격 시 본인 동의 하에 레퍼런스 체크가 진행될 수 있으며, 처우와 입사일 협의 완료 후 최종 합격이 확정됩니다.</Text>
            <Text textSize = 'subheader' textWeight = '600'>유의 사항</Text>
            <Text>※ 입사지원 시 제출하신 내용은 증빙자료 제출 등을 통해 확인하고 있으며, 기재된 내용이 사실과 다를 경우 입사가 취소될 수 있음을 유의하시기 바랍니다.</Text>
          </div>

          <AlignCenterModal
            JD = {selectedJD}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
        />
        </div>
      </div>
    </>
  )
}

export default Career;