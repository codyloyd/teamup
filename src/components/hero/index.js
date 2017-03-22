import React from 'react'

const Hero = ({title = '', subtitle = ''}) => (
  <section className="hero is-pattern is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">
          {title}
        </h1>
        <h2 className="subtitle is-3">
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
)

export default Hero
