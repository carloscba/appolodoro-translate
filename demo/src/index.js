import React, {Component} from 'react'
import {render} from 'react-dom'

import Translate from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <Translate locale="en">
        <h2 ref="es">Hola Mundo</h2>
        <h2 ref="en">Hello World</h2>
      </Translate>      

      <Translate locale="en">
        <p ref="es">Español</p>
        <p ref="en">English</p>
      </Translate>

      <Translate locale="en">
        <div ref="es">
          <p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div ref="en">
          <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Translate>


    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))