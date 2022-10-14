import react from 'react';
import styled from 'styled-components';

import { 
  AdvisorContaner, 
  PeopleCard, 
  CardTitle,
  CardBody,
  CardDesc,
  Img,
} from './AboutusDetailElements';


const advisors = [
  {
    name: 'Sungsu Park',
    title: 'Head of ....',
    company: 'ETRI',
    image: 'sungsoo-park.jpeg',
    desc: 'desc here desc here  blabla'
  },
  {
    name: 'Hakbae Lee',
    title: 'Professor, Statstics & Datascience',
    image: 'sungsoo-park.jpeg',
    company: 'Yonsei University',
    desc: 'He is a professor blabla'
  },
  {
    name: 'InKweon Chung',
    title: 'Professor, Statstics & Datascience',
    image: 'sungsoo-park.jpeg',
    company: 'Yonsei University',
    desc: 'He is a professor blabla'
  },
  {
    name: 'Gabyoung Chung',
    title: 'Professor, Economics',
    image: 'sungsoo-park.jpeg',
    company: 'Yonsei University',
    desc: 'He is a professor blabla'
  },
  {
    name: 'Daniel. K. Park',
    title: 'Professor, Statstics & Datascience',
    image: 'sungsoo-park.jpeg',
    company: 'Yonsei University',
    desc: 'He is a professor blabla'
  },
  {
    name: 'Shin Cho',
    title: 'Professor, Statstics & Datascience',
    image: 'sungsoo-park.jpeg',
    company: 'Yonsei University',
    desc: 'He is a professor blabla'
  },
];
const Advisory = () => {

  return (
    <>
    <AdvisorContaner>
      {
        advisors.map((a) => (
          <PeopleCard>
            <div style = {{display: 'flex', alignItems:'center', height: '120px', paddingTop: '20px'}}>
            <Img src = {require(`../../images/people/${a.image}`)}/>
            </div>
            
            <div style = {{height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <CardTitle>{a.name}</CardTitle>
              <CardBody>{a.title}</CardBody>
              <CardBody>{a.company}</CardBody>
            </div>
            <div tyle = {{height: '100%', marginBottom: '20px'}}>
              <CardDesc>{a.desc}</CardDesc>
            </div>
            
          </PeopleCard>
        ))
      }
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>
      <div>A</div>
      <div>A</div>
    </AdvisorContaner>
    </>
  )
}


export default Advisory;