import React, { Component } from 'react';
//import './Summary.css';

class SummaryListing extends Component {

  render() {
  	return (

    	<div className="summary__option" key={this.props.id}>
      	<div className="summary__option__label">{this.props.id}</div>
      	<div className="summary__option__value">{this.props.selected.name}</div>
      	<div className="summary__option__cost">
        	{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.cost) }
      	</div>
  		</div>	
  	);
  }
}

export default SummaryListing;  