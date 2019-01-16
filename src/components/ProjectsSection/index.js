import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'
import inplayerLogo from '../../assets/images/experience/inplayer-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Creator/Maintainer of:">
        <div className="row">
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer JS SDK"
            link="https://github.com/inplayer-org/inplayer.js"
            timeperiod="2018 - present"
            subtitle="InPlayer's JS API client wrapper."
          />
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer React UI Components"
            link="https://github.com/inplayer-org/inplayer-ui"
            timeperiod="2018 - present"
            subtitle="Modern React UI library. Code less, do more."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
