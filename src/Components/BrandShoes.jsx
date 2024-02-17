import React from 'react'; // Import React from 'react' if not imported already

const BrandShoes = () => {
  return (
    <>
      <main className="mainBody container">
        <div className="brandcontent">
          <h1 data-text=" Great shoes take you to great places"> Great shoes take you to great places </h1>
          <p>Your feet deserve the best and we're here to help you with our shoes.</p>
          <div className="brandButton">
            <button>SHOP NOW</button>
            <button className='secondButton'>Category</button>
          </div>

          <div className="Shopping">
            <p>Also Available On</p>
            <div>
              <div className="BrandIcon">
                <img src='/img/amazon.png' alt="amazon-logo"/>
                <img src='/img/flipkart.png' alt="flipkart-logo"/>
              </div>
            </div>
          </div>
        </div>
     
       
        
      </main>
    </>
  );
};

export default BrandShoes;
