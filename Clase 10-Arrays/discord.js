let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]

  let nuevosEstudiantes = [ 
      {
        nombre: 'Juan',
        promedio: 5,        
        curso: 'iOS'
      },
      {
        nombre: 'Miguel',
        promedio: 2,
        curso: 'Android'
      }
  ]

  estudiantes.push(nuevosEstudiantes.pop());
  estudiantes.push(nuevosEstudiantes.pop());

  console.log(estudiantes);