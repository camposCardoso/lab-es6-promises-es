// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          // Después de agregar el último paso, mostrar el mensaje de que el puré de patatas está listo
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          // Desocultar la imagen del puré de patatas
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1); // Retornamos la promesa para el siguiente paso
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2); // Retornamos la promesa para el siguiente paso
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3); // Retornamos la promesa para el siguiente paso
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4); // Retornamos la promesa para el siguiente paso
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5); // Retornamos la promesa para el siguiente paso
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6); // Retornamos la promesa para el siguiente paso
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    // Después de agregar el último paso, mostrar el mensaje "Steak is ready!"
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    // Desocultar la imagen de la estaca
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch( (error) => console.log(error)); // Manejo de errores en caso de que algo falle


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (error) {
    console.log(error); 
  }
}

// Llamamos a la función para que se ejecute
makeBroccoli();



// Bonus 2 - Promise all
function makeBrusselsSprouts() {
  // Crear un array de promesas para cada paso de la receta de Brussels Sprouts
  const steps = [];
  
  // Crear una promesa para cada paso (como se hace en obtainInstruction)
  for (let i = 0; i < 7; i++) {
    steps.push(obtainInstruction('brusselsSprouts', i));
  }

  // Usar Promise.all para ejecutar todas las promesas de los pasos en paralelo
  Promise.all(steps)
    .then((allSteps) => {
      // Recorrer los pasos completados y agregarlos al HTML
      allSteps.forEach(step => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
      });

      // Después de completar todos los pasos, mostramos la imagen
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

      // Mostrar mensaje de que está listo
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    })
    .catch((error) => console.log(error)); // Capturar cualquier error
}

// Llamamos a la función para ejecutar el proceso
makeBrusselsSprouts();;