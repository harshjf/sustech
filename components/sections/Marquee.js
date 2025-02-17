
const Marquee = () => {
    return (
        <>
        <div className="marquee-section">
          <div className="marquee">
            <div className="marquee-group">
              <div className="text">Low carbon energy</div>
              <div className="text">Hydrogen on demand</div>
              <div className="text">Methanol</div>
              <div className="text">Sustainability</div>
              <div className="text">Green future</div>
              <div className="text">Off-grid power</div>
              <div className="text">Green steel</div>
            </div>
                      
            <div aria-hidden="true" className="marquee-group">
            <div className="text">Low carbon energy</div>
              <div className="text">Hydrogen on demand</div>
              <div className="text">Methanol</div>
              <div className="text">Sustainability</div>
              <div className="text">Green future</div>
              <div className="text">Off-grid power</div>
              <div className="text">Green steel</div>
            </div>
          </div>
        </div>
        </>
    );
};
export default Marquee
