import React, { Component } from 'react'
import './HomeSection.css'

class HomeSection extends Component {
  render() {
    return (
      <section className="alter-reverse h-[50vh] flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <h2 className="w-full flex items-center justify-center text-5xl mt-5 mb-5">
            {this.props.title}
          </h2>
          <p className="p-4 text-3">{this.props.aboutText}</p>
        </div>
        <div className="bg-slate-400 border divide-y divide-slate-400 sm:divide-x"></div>
        <div className="w-full sm:w-1/2">
          <img
            className="w-full flex justify-center overflow-hidden  h-full"
            src={this.props.logo}
          />
        </div>
      </section>
    )
  }
}

export default HomeSection
