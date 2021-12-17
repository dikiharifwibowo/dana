import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { Link } from 'react-router-dom';

class DetailPost extends Component {
    state = {
        title: '',
        love: '',
        share: '',
    }

    componentDidMount() {
        const pathArray = window.location.pathname.split("/");
        const segment3 = pathArray[2];
        if(segment3) {
            axios.get(`https://jsonplaceholder.typicode.com/photos/${segment3}`)
            .then(res => {
                 this.setState({
                    title: res.data.title
                })
            })
        }
        this.props.handleChangePage()
    }

    handleLove = () => {
        this.setState({
            love: !this.state.love
        })
    }
    handleShare = () => {
        this.setState({
            share: !this.state.share
        })
    }

    render() {
        return(
            <div class="container detail-post section">
                <div class="columns">
                    <Link to="/dana" class="column is-flex gap-1rem is-align-items-center"><ion-icon name="arrow-back-outline" size="large"></ion-icon> Back to Home</Link>
                </div>
                <div style={{backgroundImage: `url('https://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg')` }} class="mb-6 image-slider">
                </div>
                <div class="columns is-mobile is-align-items-center">
                    <div class="column title">
                       {this.state.title}
                    </div>
                    <div class="column">
                        <div class="is-flex gap-1rem is-justify-content-flex-end">
                            <ion-icon class={ this.state.love ? `md hydrated icon-large red` : `md hydrated icon-large`} name={ this.state.love ? `heart` : `heart-outline`} 
                                onClick={() => this.handleLove() } size="large"></ion-icon>
                            <div class="mr-5">
                                <div class="is-flex absolute">
                                    { !this.state.share ? 
                                        <div class="is-flex">
                                            <ion-icon onClick={() => this.handleShare()} size="large" name="share-social-outline"></ion-icon>
                                        </div>
                                    : 
                                        <div class="is-flex is-flex-direction-column">
                                            <ion-icon onClick={() => this.handleShare()} size="large" name="close-circle-sharp"></ion-icon>
                                            <ion-icon name="logo-facebook" size="large"></ion-icon>
                                            <ion-icon name="logo-instagram" size="large"></ion-icon>
                                            <ion-icon name="logo-twitter" size="large"></ion-icon>
                                        </div>
                                    }
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="columns">
                        <div class="column has-text-justified">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo pellentesque dolor, 
                            pretium gravida dolor tincidunt id. Proin efficitur ac nibh non finibus. 
                            Mauris at massa vel odio mattis condimentum. Morbi scelerisque porta risus sed condimentum. 
                            Pellentesque nulla magna, venenatis a felis sit amet, faucibus dignissim justo. 
                            Praesent id molestie mi. Suspendisse elementum scelerisque mattis. Proin tincidunt nunc condimentum, 
                            placerat nibh vel, interdum ipsum. Donec ultrices ex ac erat ornare, et suscipit mauris finibus. 
                            Aenean volutpat ac ex nec tincidunt. <br/>
                            Maecenas convallis lacus id ante sodales vehicula. Pellentesque habitant morbi tristique senectus et netus
                            et malesuada fames ac turpis egestas. Aliquam at tristique tortor, id rhoncus magna. Duis faucibus feugiat nulla vitae elementum.
                            Pellentesque nec ante ac erat elementum faucibus. Aenean suscipit hendrerit erat, non euismod diam sollicitudin at.
                            Vivamus bibendum ex sit amet arcu vehicula posuere. Proin malesuada, tortor sit amet vestibulum fermentum, 
                            tellus nunc tincidunt metus, eu molestie turpis felis ac orci. Donec eleifend vel diam vitae tincidunt. 
                            Nullam sit amet lacinia justo. Nullam hendrerit malesuada odio. Mauris sollicitudin luctus purus, 
                            sit amet varius sapien posuere non. Duis dapibus molestie dui, eu efficitur turpis vulputate ac. <br/>
                            Sed libero lectus, pretium sit amet quam nec, porttitor viverra est. Donec vulputate arcu vel est ullamcorper varius.
                            Sed sed libero vel ante interdum consequat sit amet vel mauris. Curabitur laoreet tortor dolor,
                            id pretium purus aliquam a. Nam blandit tempus erat id fringilla. Donec aliquet id nibh sit amet rhoncus
                            . Fusce maximus est dolor, id maximus leo pellentesque non. Morbi vitae nunc sed enim scelerisque ultricies s
                            ed ut nisl. Etiam scelerisque sapien ante, eget porttitor sem tincidunt et. Vivamus nec eros nisl. Interdum et 
                            malesuada fames ac ante ipsum primis in faucibus. Curabitur laoreet, neque id aliquet vulputate, lacus metus 
                            tincidunt orci, non consectetur metus mi quis est. Etiam ullamcorper nunc risus, ac pellentesque diam scelerisque
                            vel. Quisque dolor elit, posuere non lorem sed, fringilla placerat neque. Vivamus ultricies nunc sit amet 
                            viverra fermentum. <br/>
                            Praesent fermentum mi id commodo varius. Nulla facilisi. Aenean volutpat, 
                            arcu tincidunt aliquam gravida, nunc nulla pharetra massa, auctor volutpat nunc ipsum vitae justo.
                            Nunc lobortis sollicitudin volutpat. Quisque et augue et mauris viverra aliquet. Aliquam erat volutpat. 
                            Sed vehicula pretium egestas. Quisque enim nulla, scelerisque quis aliquet et, dignissim sit amet tortor. 
                            Phasellus iaculis dolor non mauris tempus luctus. Donec vestibulum purus nec vestibulum laoreet. 
                            Pellentesque et tristique diam, ac semper ipsum. Nunc condimentum felis scelerisque purus viverra malesuada. 
                            Donec euismod imperdiet accumsan. Donec ac arcu nisi. Maecenas venenatis ut nisi aliquet convallis. 
                            Sed eleifend vulputate lacus, sed luctus quam vestibulum id.
                        </div>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: () => dispatch({ type: 'CHANGE_PAGE_DETAIL_POST' }),
    }
}
export default connect('', mapDispatchToProps)(DetailPost);