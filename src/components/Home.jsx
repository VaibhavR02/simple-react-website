import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> Vaibhav</h1>
          <p>Solution to all your problems..</p>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />
        <div>
          <h1>About Us</h1>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            magnam? Ullam quos aliquid optio, possimus perspiciatis quod ducimus
            dolor cupiditate quia harum ea sunt deleniti ex dolorum placeat
            magnam. Amet rem voluptates quasi officia ipsum! Maiores nesciunt
            nihil alias rem officiis cumque odio, architecto perferendis
            aspernatur deserunt mollitia tempore, temporibus aliquam aperiam
            eaque ipsa nobis voluptas et aut asperiores, distinctio repudiandae
            doloremque! Exercitationem, alias atque voluptas sed cupiditate eos,
            in ut similique earum temporibus suscipit recusandae et ad
            aspernatur magni cumque cum. Vitae at corporis dolorem sint, ducimus
            optio sed ad maiores, totam libero quia voluptates vel officiis
            necessitatibus dicta!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: '1s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
