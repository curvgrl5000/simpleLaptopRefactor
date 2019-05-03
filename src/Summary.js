import React, { Component } from 'react';
import SummaryListing from './Listing.js'
import SummaryTotal from './Total.js'

class Summary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map( key => 
      <SummaryListing
        key={key}
        id={key}
        selected={this.props.selected[key]} 
        cost={this.props.selected[key].cost } />
    )	

    return (
        <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
            {summary}
  		    <SummaryTotal selected = {this.props.selected} />
        </section>
  	);
  }
}

export default Summary;  
