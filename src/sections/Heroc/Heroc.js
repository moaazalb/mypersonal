import './Heroc.css'
import Title from '../../components/Contact comp/Title/Title'
import Map from '../../components/Contact comp/Map/Map'
import Info from '../../components/Contact comp/Info/Info'
 const Heroc = () => {
    return (
        <main id="main">
          <div className="container" data-aos="fade-up">
            <Title/>
            <Map/>
            <Info/>


          </div>
       </main>

    )
 }

 export default Heroc