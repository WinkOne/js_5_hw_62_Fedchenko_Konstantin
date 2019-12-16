import React, {Fragment} from 'react';
import './MainPageComponent.css'
import Button from "../UI/Button/Button";
import {NavLink} from "react-router-dom";


const MainPageComponent = (props) => {
    return (
        <Fragment>
            <div className='imgBlock'>
                <img src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg" alt=""/>
            </div>
            <div className="container">
                <div className='titleBlock'>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='container'>
                <h2 className='workBlockTitle'>Lorem ipsum dolor sit amet.</h2>
                <p className='workBlockText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, expedita,
                    ut.</p>
                <div className='row'>
                    <div className='workBox col-5'>
                        <div className='workBox__boxImg'>
                            <img src="" alt=""/>
                        </div>
                        <div className='workBox__boxTitle'>
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum.</p>
                        </div>
                    </div>

                    <div className='workBox col-5'>
                        <div className='workBox__boxImg'>
                            <img src="" alt=""/>
                        </div>
                        <div className='workBox__boxTitle'>
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum.</p>
                        </div>
                    </div>

                    <div className='workBox col-5'>
                        <div className='workBox__boxImg'>
                            <img src="" alt=""/>
                        </div>
                        <div className='workBox__boxTitle'>
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum.</p>
                        </div>
                    </div>

                    <div className='workBox col-5'>
                        <div className='workBox__boxImg'>
                            <img src="" alt=""/>
                        </div>
                        <div className='workBox__boxTitle'>
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatum.</p>
                        </div>
                    </div>
                </div>
                <div className='AboutUsBlock'>
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aspernatur at dignissimos
                        dolore doloremque dolores earum eligendi, eos expedita explicabo fugit, illum itaque labore
                        maxime modi mollitia nemo nihil obcaecati perferendis quisquam sapiente sint sit tempore tenetur
                        vitae voluptas. Delectus distinctio doloremque nostrum perspiciatis placeat, ut? Accusamus animi
                        aperiam blanditiis consequuntur corporis dolorem dolores earum eos esse eveniet id inventore
                        ipsam iure laboriosam magnam mollitia nobis odio, omnis placeat quis quo ratione repellendus
                        temporibus velit voluptate voluptates voluptatum. Autem debitis eos excepturi, expedita
                        explicabo facilis, laudantium natus nihil, nostrum numquam officia quae qui repellat! A
                        asperiores aspernatur, doloremque ea explicabo itaque modi nesciunt, officia provident quaerat
                        rem vitae voluptas. Autem consequuntur cumque distinctio explicabo fugit iste odio possimus quo
                        repudiandae temporibus! Dolorem doloribus eum maiores nemo quisquam tempora voluptates.
                        Accusamus accusantium adipisci aliquid amet, architecto at commodi debitis deserunt dignissimos
                        doloremque ea, enim expedita fugiat fugit harum impedit iusto labore libero magni nam natus
                        nihil nisi nostrum odio odit officiis perspiciatis provident quo repellat repellendus rerum
                        sapiente tempora temporibus ullam velit veniam voluptate. Commodi corporis culpa delectus
                        deserunt doloremque, eum iusto, nemo nulla qui rerum sapiente totam? Ab adipisci aliquam
                        architecto aspernatur consequuntur deleniti, deserunt dolore incidunt iure iusto maiores nemo
                        neque nostrum possimus quaerat quam quas quis reiciendis saepe totam ut vel, veritatis voluptas.
                        Dolore dolores laboriosam veniam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus excepturi harum,
                        ipsum nisi odit officiis unde? Id, temporibus, voluptatibus? Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusantium aperiam, corporis dicta esse est nemo possimus
                        reprehenderit veniam veritatis. Accusantium alias, architecto autem consectetur debitis deleniti
                        dicta dolorem enim fugiat, hic illo impedit inventore ipsam labore libero molestias nesciunt
                        nisi omnis quas, repellendus tempore unde velit vero voluptates voluptatum? Adipisci consequatur
                        consequuntur deserunt officiis soluta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae cumque cupiditate
                        eligendi error harum ipsa iusto, magni molestias optio quisquam ratione temporibus? Aliquam aut
                        eaque, eos est ipsam labore laborum quibusdam quisquam saepe tempore! Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Accusamus aliquam aperiam aut deserunt ducimus, illo neque
                        numquam repudiandae ullam voluptatum. Accusamus accusantium aliquid aperiam beatae dignissimos
                        dolor dolorum ducimus error facilis fugit inventore ipsa itaque iusto, labore laborum libero
                        minima modi nobis nostrum officiis perferendis provident quaerat repudiandae temporibus velit
                        voluptate, voluptatum. Ab accusamus autem, corporis deleniti dolorum eos impedit minus nulla,
                        tempore, unde voluptate!</p>

                    {<Button
                        nextPages={props.nextPageAboutUsHandler}
                        class={'btn btn-secondary ' + props.colorDanger2}><NavLink className='nav-link' to={'/AboutUs'}>About Us</NavLink></Button>}
                </div>
            </div>
        </Fragment>
    );
};

export default MainPageComponent;