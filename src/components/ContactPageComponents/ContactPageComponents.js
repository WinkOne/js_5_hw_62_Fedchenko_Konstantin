import React, {Fragment} from 'react';
import './ContactPageComponents.css'

const ContactPageComponents = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='title'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='form-check'>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2"
                                       placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip"/>
                                </div>
                            </div>
                            <div className="form-group">

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                    <hr/>
                </div>
                <div><h4>Lorem ipsum dolor sit amet, consectetur.</h4></div>
                <div className='cards row'>
                    <div className="card">
                        <img src="https://thumbs.filmix.co/posters/orig/7h-vikingy-serial-2019_61376_0.jpg"
                             className="card-img-top" alt=""/>
                        <div className='card-body'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="http://a2.online-lostfilm.ru/uploads/posts/2019-01/1548585147_5ru834fjwyjpg.jpg"
                             className="card-img-top" alt=""/>
                        <div className='card-body'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2019/07/vikingi-poster-01-756x1024-e1562611904690-467x697.jpg"
                             className="card-img-top" alt=""/>
                        <div className='card-body'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ContactPageComponents;