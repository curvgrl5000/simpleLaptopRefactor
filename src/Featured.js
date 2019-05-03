import React, { Component } from 'react';
import ListItem from './ListItem.js'


class Featured extends Component {

  render() {
    const features = Object.keys(this.props.features).map(key => {
      
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
          <ListItem 
            key={index}
            id={key}
            item={item}
            featureClass={featureClass}
            handleUpdate={(key, item) => this.props.handleUpdate(key, item)} /> // end of ListItem Component
        )
      }) // end of const options

      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
        </div>
      )

    }); // end of const features


    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          { features }
      </section>
    ) // end of return
  }
}

export default Featured;



