import './Skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Skills</h2>
            <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>
          </div>
  
          <div className="row skills-content">
  
            <div className="col-lg-6">
            
            <div class="progress">
              <span className='skill'>html<i className='val'>70%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
              </div>

              <div className="progress">
              <span className='skill'>css<i className='val'>75%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
              </div>

              <div className="progress">
              <span className='skill'>java script<i className='val'>80%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>

            </div>
  
            <div className="col-lg-6">
  
            <div className="progress">
              <span className='skill'>c++<i className='val'>60%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
              </div>

              <div className="progress">
              <span className='skill'>Dart<i className='val'>10%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '10%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">10%</div>
              </div>
  
              <div className="progress">
              <span className='skill'>php<i className='val'>10%</i></span>
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '10%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">10%</div>
              </div>
  
            
  
            </div>
  
          </div>
  
        </div>
      </section>

    )
}

export default Skills