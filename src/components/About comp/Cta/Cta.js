import './Cta.css'
import about from '../../../assets/img/about.jpg'
const Cta = () => {
   return (


    <section id="about" className="about">
    <div className="container" data-aos="fade-up">
    <div className="row">
          <div className="col-lg-4">
            <img src={about} className="img-fluid " alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>  Front-End Developer</h3>
           
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 5 june 1999</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.moaaz.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> 0936862796</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> Damascus, syria</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 25</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Master</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> mohazalbari02@gmail.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
            Constantly trying to achieve your goals means your ability to keep up with the challenges that accompany it to reach the desired success, no matter how many obstacles and difficulties there are, and thus you gain experience and maturity in life.
            </p>
          </div>
        </div>
        </div>
        </section>
      
    



   )

}

export default Cta