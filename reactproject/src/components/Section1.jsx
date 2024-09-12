// import React from 'react'

const Section1 = () => {
  return (
 <div>
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>  
</div>

  )
}

export default Section1