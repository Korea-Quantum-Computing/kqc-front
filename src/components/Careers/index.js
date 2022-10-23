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
            <p style = {{lineHeight: '1.2'}}>{m}</p>
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
            <p style = {{lineHeight: '1.2'}}>{m}</p>
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
            <p style = {{lineHeight: '1.2'}}>{m}</p>
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
          {JD.location}
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
                  Quantum era is not far off.
                </p>
                <p> 
                  Quantum computer, the game-changer in computing, are advancing much faster than people expect.
                </p>
                <p>                     
                  KQC is preparing for coming quantum era 
                </p>
                <p>
                  with the goal of commercializing quantum computing and building an ecosystem in Korea.
                </p>
                <p>    
                  Now is the time to dive into Quantum journey.
                </p>
                <p>    
                  We are waiting for a pioneer to build the quantum world with us in Korea.
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

            <Text textSize = 'title' textWeight = '600'>Recruiting Process</Text>
            
            <div style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <ProcessImg src = {require('../../images/recruiting_process.png')} alt = 'recruiting'/>
            </div>
            <Text>※ Applicants' qualifications are verified based on their resume and additional documents (portfolio, GitHub url, etc.), and additional coding tests are scheduled for engineer positions.</Text>
            <Text>※ All interviews(1st/2nd) are conducted on the same day, and detailed schedules will be announced individually.</Text>
            <Text m = {{b: '1.2rem'}}>※ When passing the interview, reference checks would be conducted with the consent of the applicant, and the final acceptance will be decided after the detailed conditions are agreed.</Text>
            <Text textSize = 'subheader' textWeight = '600'>Caution</Text>
            <Text>※ Please note that the applicants' informationwill be checked through supporting documents, and the admission will be cancelled if the applicants' information is different from the facts.</Text>
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