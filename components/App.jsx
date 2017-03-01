import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import {Button, Grid, Row, Col, Thumbnail, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import ajax from 'superagent';
import Header from './header.jsx';
import Example1 from './example1.jsx';
import Example2 from './example2.jsx';
import Masonry from 'react-masonry-component';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={ 
            images:[],
        }
    }

    componentDidMount() {
        var This = this;
        ajax
            .get('https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key={api_key}&format=json&nojsoncallback=?')
            .accept('json')
            .end(function(err, res){
                This.setState({images : res.body.photos.photo})
            });
    }   
 
    render() {
        return (
            <div className="flickr-showcase-wrap">
                <Header />
                <Grid className="flickr-showcase">
                    <Row>
                        <h4>This method will return the random public photos</h4>
                        <ul>
                            <p>Required</p>
                            <li>* Url : https://api.flickr.com/services/rest/</li>
                            <li>* method : flickr.photos.getRecent</li>
                            <li>* api_key (Required)</li>
                        </ul>

                        <Masonry updateOnEachImageLoad={false}>
                            {this.state.images.map((photos, i)=>
                                <Col xs={6} md={4} key={i}>
                                    <Thumbnail src={"http://farm"+photos.farm+".staticflickr.com/"+photos.server+"/"+photos.id+'_'+photos.secret+".jpg"} alt="242x200">
                                        <h3>{photos.title}</h3>
                                    </Thumbnail>
                                </Col>
                            )}
                        </Masonry>
                    </Row>
                </Grid> 
            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/get-photos" component={Example1} />
        <Route path="/get-contact-photos" component={Example2} />
    </Router>
), document.getElementById('app'))
