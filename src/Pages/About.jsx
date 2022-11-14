import React from 'react'
import merbabu from '../Components/img/merbabu.jpeg'
import './Css/About.css'

function About() {
  return (
    <div>
      <div className="container">
        <div className="content">
            <div className="about">
                <h1>About Me</h1>
                <div className="img">
                    <p> <img src={merbabu} alt="" /> Hey Guys Kenalin Nama Gue Ricky Jonathan <br/> asal Gue Dari Provinsi Lampung Tepat nya sih kota Bandar Lampung.
                    gua kuliah di <a href="https://www.uksw.edu">Universitas Kristen Satya Wacana</a> fakultas teknologi Informasi. Jurusan Teknik Informatika. sekarang gua lagi suka berkecimpung di dunia web development terutama di bagian front-end tapi gak nutup kemungkinan sih gua bakal ngambil full stack juga. kan semakin banyak pengetahuan kita semakin banyak cuan kita ye ga ??
                    <br/>
                    <br/>
                    hobby gue adalah main musik, ngegame , trus naik gunung(biar kayak fiersa bersari)
                    <br/>cita-cita gua kaya.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About