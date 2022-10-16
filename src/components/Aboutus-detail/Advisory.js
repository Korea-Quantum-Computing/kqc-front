import { 
  AdvisorContaner, 
  PeopleCard, 
  CardTitle,
  CardBody,
  CardDesc,
  Img,
} from './AboutusDetailElements';

import { advisors } from '../../data/advisory';


const Advisory = () => {

  return (
    <>
    <AdvisorContaner style = {{paddingBottom: '100px'}}>
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
    </AdvisorContaner>
    </>
  )
}


export default Advisory;