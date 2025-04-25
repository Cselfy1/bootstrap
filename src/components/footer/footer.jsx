import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <div>
        <Fragment>
        <div className='data-bs-theme-dark'>
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3 fixed-bottom text-white" style={{backgroundColor: 'rgb(46, 46, 46)'}}>
                    © 2025 Copyright
                    <a className="text-white" href="https://github.com/Cselfy1" target='_blank'> Volodymyr (@Cselfy1)</a>
                </div>
            </footer>
        </div>
        </Fragment>
    </div>
  )
}

export default Footer