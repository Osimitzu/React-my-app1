const AboutMe = () => {
  
    const me = {
      name: "Osiris Contreras",
      age: 24,
      movie: "Jojo Rabbit",
      music: "Indie Folk"
    }
  
    return (
      <div className='cardAboutMe'>
          <h2>About me</h2>
          <li> <b>Nombre: </b> {me.name} </li>
          <li> <b>Edad: </b> {me.age} </li>
          <li> <b>Pelicula favorita: </b> {me.movie} </li>
          <li> <b>Musica favorita: </b> {me.music} </li>
      </div>
      
    );
  }
  
export default AboutMe;
