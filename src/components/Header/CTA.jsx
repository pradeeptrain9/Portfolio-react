import React from 'react'
import Resume from '../../assests/Final_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
          <a href={Resume} download className='btn'>Download Resume</a>
          <a href="#Contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA
