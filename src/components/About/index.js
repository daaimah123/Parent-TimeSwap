import React from 'react';
import { LandingLink } from '../Landing/index';
import { Row, Col, Container, Jumbotron} from 'react-bootstrap/';
import { Card, /*Icon,*/ Image } from 'semantic-ui-react';


class About extends React.Component {
    render() {
      

        return (
            
            <div>
             <h1>About</h1>
            <Container>
                <Row>
                    A Parent's Network
                </Row>
                <Row>
                    Parent's helping other perents to stay productive!
                </Row>
                <Jumbotron>
                    <Image src='../../images/TimeSwapLogo.png' height="33%" width="33%"/>
                </Jumbotron>
                <Row>
                    <strong>Problem: </strong> Parents that have commitments and no one to watch their children in order to productively complete.
                </Row>
                <br/>
                <Row>
                    <strong>Why Create:</strong> Parent TimeSwap a space for parents to build an instant network of local parent support towards goals (i.e. school, interviewing, work, conferences, mental health break) by viewing the time availability of local parents, and setting up playdates to determine whether their families are a good fit to help one another during the available times listed. 

                </Row>
                <br/>
                <Row>
                    <strong>Who Is Target:</strong> Parents and caregivers with children who may be busy and have responsibilities outside of parenting. This population may not have the funds, support from others, or knowledge of how to get support with filling in care gaps. 

                </Row>
            </Container>;
            <Container>
                <Row>
                {/* FIXME: hard coded */}
                    <Col><CardExampleImageCard1/></Col>
                    <Col><CardExampleImageCard2/></Col>
                    <Col><CardExampleImageCard3/></Col>
                </Row>
            </Container>
            <hr/>
                <LandingLink />
            </div>
        )
    }
}

/* ============= USER STORY CARDS ============== */
//FIXME: how can i make this repeatable so that not entering a over and over
//FIXME: do I need to make classes / objects to put this information in as props, so thtat I am not hard coding repeatable code?
//TODO: 
// const userStories = [
    // {
    // image: 'images/Peter.png',
    // header:'Peter',
    // meta: 'Single Dad, 41',
    // description: 'Dad of 3 children (1 infant and 2 youth). He has a custody arrangement with their mother whereby he keeps the children every two weeks. He works in construction as the site foreman and has to get to work by 11pm. The mother lives four hours away and won’t be able to get the children until 12:30am.',
    // }, 
    // {
    // image:'images/Joyce.png',
    // header: 'Joyce',
    // meta: 'Single Mom, 25',
    // description:'Looking for work and cannot pay for childcare at the moment because she is on a tight budget. Her family is unavailable to watch her children and her single friends cancel plans to watch her 2 toddlers her frequently. She has 3 interviews coming up this week and no one to watch her children.',
    // }, 
    // {
    // image:'images/Friday.png',
    // header:'Friday',
    // meta:'Guardian Granmother, 49',
    // description:'Overwhelmed with her grandchildren: 2 newborns and 1 youth. She has just become guardian of the children after their parents perished in an accident. She doesn’t have any support and is new to the area. She needs a break, but has no one she can trust to leave them with for a few hours to recollect.',
    // }
// ]

 const CardExampleImageCard1 = () => (
    <Card>
      <Image src='http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Male-Dark-icon.png' />
      <Card.Content>
        <Card.Header>Peter</Card.Header>
        <Card.Meta>Single Dad, 41</Card.Meta>
        <Card.Description>Dad of 3 children (1 infant and 2 youth). He has a custody arrangement with their mother whereby he keeps the children every two weeks. He works in construction as the site foreman and has to get to work by 11pm. The mother lives four hours away and won’t be able to get the children until 12:30am.</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content> */}
    </Card>
  )

  const CardExampleImageCard2 = () => (
    <Card>
      <Image src='http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Female-Dark-icon.png' />
      <Card.Content>
        <Card.Header>Friday</Card.Header>
        <Card.Meta>Guardian Granmother, 49'</Card.Meta>
        <Card.Description>Looking for work and cannot pay for childcare at the moment because she is on a tight budget. Her family is unavailable to watch her children and her single friends cancel plans to watch her 2 toddlers her frequently. She has 3 interviews coming up this week and no one to watch her children.</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content> */}
    </Card>
  )

  const CardExampleImageCard3 = () => (
    <Card>
      <Image src='http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Female-Dark-icon.png' />
      <Card.Content>
        <Card.Header>Joyce</Card.Header>
        <Card.Meta>Single Mom, 25</Card.Meta>
        <Card.Description>Looking for work and cannot pay for childcare at the moment because she is on a tight budget. Her family is unavailable to watch her children and her single friends cancel plans to watch her 2 toddlers her frequently. She has 3 interviews coming up this week and no one to watch her children.</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content> */}
    </Card>
  )


export default About;
