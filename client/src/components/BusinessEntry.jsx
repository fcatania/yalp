import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class BusinessEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let imgArr = [];
    for (let i = 0; i < this.props.business.rating; i++) {
      imgArr.push(
        (<img className="ratingLogo" key={i} src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>)
      )
    }
    if (!imgArr.length) {
      imgArr.push(<span style={{fontSize: '14px'}} key='noRating'>No Rating...</span>)
    }
    return (
        <div className="businessEntry">
          <div className="rating">{imgArr}</div>
          <Link style={{textDecoration: 'none'}} to={`/business/${this.props.business.id}`}><h5 className="title">{this.props.business.name}</h5></Link><br/>
          <div className="address">
            <span>{this.props.business.formatted_address}</span>
          </div>
          {/* <div className="favorite">{this.props.favorite ? 'Favorite' : 'Not Favorite'}</div> */}
        </div>
    )
  }
}

export default BusinessEntry;
