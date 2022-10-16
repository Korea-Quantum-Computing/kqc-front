import React,  { useEffect, useState } from 'react';
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
import { 
  Tag, 
  Button, 
  Modal, 
  Icon as IconA, 
  Text
} from "atomize";


const jobs = [
  {
    job_id: '22-0001',
    title: 'Researcher',
    skill: ['Python', 'Qiskit', 'C++'],
    major: ['Stat', 'CS', '+5 yr', 'Physics'],
    desc: 'Perform research on quantum computing',
    mission: [
      '양자컴퓨터를 활용한 시스템 구현 및 활용 과정에서 필요한 양자컴퓨팅 전반에 관한 연구개발 수행', 
      '금융, 바이오 등 양자 컴퓨터에서 양자컴퓨팅 알고리즘 개발 및 활용', 
      '파트너사와 협업을 통한 양자 컴퓨팅 관련 PoC Project 수행',
      '양자 컴퓨팅 관련 최신 연구동향 조사'
    ],
    requirements_desc: [
      '통계학, 물리학, 수학, 컴퓨터공학 등 관련 학사 이상 학위를 소지하신 분', 
      'Python 활용 능력을 보유하신 분', 
      'Git 등 형상관리 및 협업 툴 사용 경험이 있으신 분',
      '새로운 분야에서 지속적으로 지식을 습득하고 도전하려는 의지와 열정이 있는 분',
      '원활한 의사 소통과 협업 능력을 갖춘 분'
    ],
    preferred_desc: [
      '모집 분야 관련 석사 이상 학위 보유하신 분', 
      'Qiskit, PennyLane 등 Quantum Computing SDK 중 1개 이상 사용 가능하신 분', 
      '영어로 의사 소통 및 문서 작성 가능하신 분',
      '본인이 유지하고 있는 git repository 첨부시 우선 검토'
    ],
    location: '부산광역시 해운대구 우2동 센텀중앙로 55, 9층 KQC 오피스'
    
  },
  {
    job_id: '22-0002',
    title: 'Online-content planning',
    skill: ['html', 'illustrator', 'photoshop'],
    major: ['Design', 'Illust', 'Marketing'],
    desc: 'Design contents, UI/UX & prototyping',
    mission: [
      '사용자 이해를 기반으로 한 UI 디자인 및 프로토타이핑',
      '비지니스에 대한 이해를 바탕으로 마케팅채널 컨텐츠 ( 홈페이지, Blog, SNS 등 ) 기획, 제작 및 관리',
      '강의 컨텐츠 제작 및 관리'
    ],
    requirements_desc: [
      '1년 이상의 UI/UX 디자인 경력이 있으신 분',
      '온라인 컨텐츠 제작 및 운영 경험이 있으신 분',
      '다양한 직군과 원활한 의사소통과 협업 능력을 갖춘 분',
      '지속적으로 배우고 성장하려는 의지와 열정이 있는 분'
    ],
    preferred_desc: [
      '영어로 의사소통이 가능하신 분',
      '다양한 디자인 툴을 능숙하게 활용가능하신 분',
      '본인 역량을 알 수 있는 포트폴리오 첨부시 우선 검토'
    ],
    location: '부산광역시 해운대구 우2동 센텀중앙로 55, 9층 KQC 오피스'
  },
  {
    job_id: '22-0003',
    title: 'Front Engineer',
    skill: ['Javascript', 'React', 'Node'],
    major: ['CS', 'IE'],
    desc: 'Design contents, UI/UX & prototyping',
    mission: [
      'KQC Webpage 및 LMS 구축 및 운영',
      'Web based quantum toolkit 구축 및 운영',
    ],
    requirements_desc: [
      '웹 프론트엔드 개발 경험자로서 실무 3년차 이상',
      'Typescript, React, Pure Javascript, CSS/SCSS에 대한 이해와 개발 경험이 있으신 분',
      'Redux, MobX, Recoil 등 상태 관리에 대한 이해가 있으신 분',
      '신규 서비스를 위한 기획, 설계, 커뮤니케이션, 개발, 운영 경험이 있으신 분',
      '기획/디자인/운영 등 다양한 직군과 같이 문제를 정의하고, 해결책을 찾는 협업 능력을 갖추신 분',
      '지속적으로 배우고 성장하려는 의지와 열정이 있는 분'
    ],
    preferred_desc: [
      'React 개발 및 운영 경험이 있으신 분',
      '유닛 테스트 및 UI 테스트 작성 경험이 있으신 분',
      '배포 자동화 경험이 있으신 분',
      '본인 역량을 알 수 있는 포트폴리오 첨부시 우선 검토'
    ],
    location: '부산광역시 해운대구 우2동 센텀중앙로 55, 9층 KQC 오피스'
  },
  {
    job_id: '22-0004',
    title: 'Backend Engineer',
    skill: ['Python', 'Qiskit', 'C++'],
    major: ['Stat', 'CS', 'Math', 'Physics'],
    desc: 'Design contents, UI/UX & prototyping',
    mission: [
      'IBM Qiskit runtime 기반 양자컴퓨팅 application 개발',
      'NISQ 양자컴퓨팅 알고리즘 구현',
      'Opensource 양자 소프트웨어 ',
      '각종 서비스 Backend 개발'
    ],
    requirements_desc: [
      '3년 이상의 소프트웨어 개발 경험이 있으신 분',
      '다수의 python 기반 프로젝트 경험이 있으신 분',
      '지속적으로 배우고 성장하려는 의지와 열정이 있는 분'
    ],
    preferred_desc: [
      'C 언어 사용 경험이 있으신 분',
      'SQL 및 No SQL 사용 경험이 있으신 분',
      'CI/CD 및 테스트 자동화 경험이 있으신 분',
      'GIT 등의 형상관리 및 협업 툴 사용 경험이 있으신 분'
    ],
    location: '부산광역시 해운대구 우2동 센텀중앙로 55, 9층 KQC 오피스'
  }
]


const AlignCenterModal = ({ JD, isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      style = {{minWidth: '700px', maxHeight: '900px'}}
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
            <p style = {{lineHeight: '0.6'}}>{m}</p>
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
            <p style = {{lineHeight: '0.6'}}>{m}</p>
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
            <p style = {{lineHeight: '0.6'}}>{m}</p>
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
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexDirection: 'row', 
              height: '250px', 
              width: '100%'
            }}
          >
            <div>
              <h1 style = {{fontSize: '3rem', fontWeight: 'bold', color: '#A6ABAB'}}>Join</h1>
              <h1 style = {{fontSize: '3rem', fontWeight: 'bold',  color: '#515656'}}>Our</h1>
              <h1 style = {{fontSize: '3rem', fontWeight: 'bold',  color: '#10606'}}>Team</h1>
            </div>
            
            <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <Row style ={{display: 'flex', justifyContent: 'center', width: '850px', paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold', fontSize: '0.9rem', lineHeight: '.7'}}>
                <p>
                  전 세계적으로 많은 정부 기관과 회사들이 양자컴퓨터를 연구하고 있습니다. 
                </p>
                <p> 
                  양자 컴퓨터는 현재의 컴퓨터와는 전혀 다른 원리로 동작하는 컴퓨터로, 양자 컴퓨터를 위한 소프트웨어 개발이 필수적입니다. 
                </p>
                <p>   
                  양자컴퓨터는 현재의 수퍼컴퓨터를 단숨에 뛰어넘을 Computing 분야의 game changer로 알려져 있습니다.
                </p>
                <p>   
                  모든 산업 영역에서 고전 컴퓨터가 풀지 못하는 문제들을 해결할 양자컴퓨터는 미래 경쟁력의 핵심 중 하나가 될 것으로 전망됩니다. 
                </p>
                <p>                     
                  KQC는 양자컴퓨팅을 연구/개발/상용화를 목적으로 설립 되어, 국내 최초 IBM과 양자컴퓨팅 허브 운영 및 기술도입 계약을 체결한 기업입니다. 
                </p>
                <p>    
                  양자 컴퓨팅을 활용한 국제 경쟁력을 확보할 수 있도록 교육 서비스, 기업 컨설팅 서비스를 제공할 예정입니다. 
                </p>
                <p>    
                  곧 마주하게 될 양자컴퓨팅 시대, Quantum-readiness를 위해 열정적으로 업무에 임하실 인재를 모십니다.
                </p>
              </Row>
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
            
            <div style = {{display: 'flex',height: '150px', width: '100%', marginTop: '40px', marginBottom: '20px', justifyContent: 'center'}}>
              <img tyle = {{ height: '60px'}} src = {require('../../images/recruiting_process.png')} alt = 'recruiting'/>
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