const AboutUs = () => {

  return (
    <>
    <h2 style = {{fontWeight: 'bold', color: '#010606', marginTop: '30px'}}>Mission</h2>
    <div style = {{display: 'flex', justifyContent: 'center', height: '500px'}}>
        <img src = {require('../../images/kqc-mission-vision.png')} alt = 'mission-vision'/>
    </div>
    <h2 style = {{fontWeight: 'bold', color: '#010606',  marginTop: '30px'}}>Member Benefits</h2>
    <div style = {{display: 'flex', justifyContent: 'center', height: '500px'}}>
        <img src = {require('../../images/kqc-milestones.png')} alt = 'milestones'/>
    </div>
    </>
  )
}


export default AboutUs;