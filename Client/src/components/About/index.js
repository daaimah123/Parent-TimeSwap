import React from 'react';
// import { LandingLink } from '../Landing/index';
import { Row, Col, Container, Jumbotron} from 'react-bootstrap/';
import { Card, /*Icon, Item */ Image} from 'semantic-ui-react';
import SearchAvailabilityLink from '../SearchAvailability/SeachAvailabilityLink';
import './about.css';

/* ============= ABOUT PAGE CONTENT ============== */

class About extends React.Component {
    render() {
        return (    
          <div>
            <div className='pageBackground'>
              <Container>
                  
                  <Jumbotron  >
                  <Row style={{display: 'flex', justifyContent: 'center'}}><h1>Parent TimeSwap</h1></Row>
                      <Image centered className='text-center' src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57775029_10155892215401191_8643864400391831552_n.jpg?_nc_cat=107&_nc_ht=scontent-lax3-1.xx&oh=fbb00cbdc8f01fb0e9758bb1c91a5dd7&oe=5D6CB372' height="20%" width="20%" />
                  <Row style={{display: 'flex', justifyContent: 'center'}}><h3>A parent's network helping other parents to stay productive!</h3></Row>
                  </Jumbotron>
                  <Row >
                  {
                    userStories.map((story) => {
                      return (
                        <Col><UserCard key={story} src={story.src} name={story.name} meta={story.meta} description={story.description} /></Col>
                      )  
                    })
                  }   
                  </Row>
              </Container>
              <Container>
                  <Jumbotron className='imageBackground'>
                  <Row>
                      <strong>Problem:</strong> Parents that have commitments and no one to watch their children in order to productively complete.
                  </Row>
                  <br/>
                  <Row>
                      <strong>Why Create:</strong> 
                      Parent TimeSwap a space for parents to build an instant network of local parent support towards goals (i.e. school, interviewing, work, conferences, mental health break) by viewing the time availability of local parents, and setting up playdates to determine whether their families are a good fit to help one another during the available times listed. 
                  </Row>
                  <br/>
                  <Row>
                      <strong>Who Is Target:</strong> Parents and caregivers with children who may be busy and have responsibilities outside of parenting. This population may not have the funds, support from others, or knowledge of how to get support with filling in care gaps. 
                  </Row>
                  </Jumbotron>
              </Container>
              <hr/>
              {/* <LandingLink /> */}
              
            </div>
            <SearchAvailabilityLink />
          </div>
        )
    }
}

/* ============= USER STORY CARD CONTENT ============== */
const userStories = [
    {
    src: 'http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Male-Dark-icon.png',
    name:'Marcus',
    meta: 'Single Dad, 41',
    description: 'Dad of 3 children (1 infant and 2 youth). He has a custody arrangement with their mother whereby he keeps the children every two weeks. He works in construction as the site foreman and has to get to work by 11pm. The mother lives four hours away and won’t be able to get the children until 12:30am.',
    }, 
    {
    src:'http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Female-Dark-icon.png',
    name: 'Joyce',
    meta: 'Single Mom, 25',
    description:'Looking for work and cannot pay for childcare at the moment because she is on a tight budget. Her family is unavailable to watch her children and her single friends cancel plans to watch her 2 toddlers her frequently. She has 3 interviews coming up this week and no one to watch her children.',
    }, 
    {
    src:'http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Female-Dark-icon.png',
    name:'Friday',
    meta:'Guardian Granmother, 49',
    description:'Overwhelmed with her grandchildren: 2 newborns and 1 youth. She has just become guardian of the children after their parents perished in an accident. She doesn’t have any support and is new to the area. She needs a break, but has no one she can trust to leave them with for a few hours to recollect.',
    }
]

/* ============= USER STORY CARDS ============== */

 const UserCard = (props) => (
    <Card>
    {/* taking the props stated in UserCard instance and telling them where to go */}
      <Image src={props.src} />
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>{props.meta}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  )


export default About;
