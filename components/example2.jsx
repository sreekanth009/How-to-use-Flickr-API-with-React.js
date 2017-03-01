import React from 'react';
import {render} from 'react-dom';
import {Button, Grid, Row, Col, Thumbnail, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import ajax from 'superagent';
import Header from './header.jsx';
import Masonry from 'react-masonry-component';

class Example2 extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            images:[],
        }
    }

    componentDidMount() {
        var This = this;
        ajax
            .get('https://api.flickr.com/services/rest/?&method=flickr.photos.getContactsPublicPhotos&api_key={api_key}&user_id={user_id}&format=json&nojsoncallback=?')
            .accept('json')
            .end(function(err, res){
                console.log(res)
                This.setState({images : res.body.photos.photo})
            });
    }

    render(){
        return(
            <div className="flickr-showcase-wrap">
                <Header />
                <Grid className="flickr-showcase">
                    <Row>

                        <h4>This method will returns the photos of the person and groups which you follow</h4>
                        <ul>
                            <p>Required</p>
                            <li>* Url : https://api.flickr.com/services/rest/</li>
                            <li>* method : flickr.photos.getContactsPublicPhotos</li>
                            <li>* api_key (Required)</li> 
                            <li>* user_id (Required)</li>
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
        )
    }
}

export default Example2;
