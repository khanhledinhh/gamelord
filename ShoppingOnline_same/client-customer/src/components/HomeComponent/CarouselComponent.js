import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100' height={600}
        src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/404387607_1548086619269473_8363105735894377256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iISyDLQrthMAX8ULGvY&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfB2nohaZHRCiwRwGPI3kJnCv9DVGLWoPRa7Ju6-XnffWA&oe=65618746' alt='First slide'/>



      </Carousel.Item>
      <Carousel.Item interval={500}> 
        <img className='d-block w-100' height={600} 
        src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/405228869_1550394135705388_3045981980638986145_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P00j5J_DoVIAX-CGcl6&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAmvqMeH_f0TJyuYgCz8nGVwiNpnQziOETryWPnYrBECg&oe=6566C3F2' alt='Second slide'/>
 
        
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' height={600}
        src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/405260664_1550394125705389_1585740242629924756_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R6Alzt373PYAX8Lm_XN&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAsZZAI5o41mWfOVKkqVqw_V4u-OOjurJQ1Znq18J3ZvQ&oe=6566F25B' alt='First slide'/>

      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;