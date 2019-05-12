import React from 'react';
import SearchAvailabilityLink from '../SearchAvailability/SeachAvailabilityLink';
import { withAuthorization } from '../Session';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class Home extends React.Component {
  render(){
    return (
        <div className='pageBackground'>
          <div className="container">
        
          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row  mb-3">
              <div className="col-12 mt-3 ">
                <div class="card">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='animated children playing on colorful bounce house together' src="http://clipartmag.com/images/playdate-clipart-23.png" height='100%' width='100%'/>
                    </div>
                    <div className="col-md-8 text-center">
                      <div class="card-body">
                          <h1 class="card-title">Play!</h1>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row mb-3">
              <div className="col-12 mt-3">
                <div class="card">
                  <div class="card-horizontal">
                    <div className="col-md-8 text-center">
                        <div class="card-body">
                            <h1 class="card-title">Help!</h1>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='adult playing with infant and toys' src="https://previews.123rf.com/images/iconicbestiary/iconicbestiary1802/iconicbestiary180200002/96325802-female-babysitter-playing-with-baby-boy-.jpg" height='100%' width='100%'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row mb-3">
              <div className="col-12 mt-3">
                <div class="card">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='Parents standing together huddled in friendship' src="http://clipartmag.com/images/friendship-clipart-free-28.jpg" height='100%' width='100%'/>
                    </div>
                    <div className="col-md-8 text-center">
                      <div class="card-body">
                          <h1 class="card-title">Network!</h1>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>


          </div>
        </div>
      )
    }
  };

const condition = authUser => authUser != null;

export default  withAuthorization(condition)(Home);
