document.addEventListener("DOMContentLoaded", function () {
    const startRecognitionButton = document.getElementById("startRecognition");
    const resultOutput = document.getElementById("orden");
    const focoElement = document.getElementById("focoRecamaraUno");
    const focooElement = document.getElementById("focoRecamaraDos");
    const salaElement = document.getElementById("sala");
    const jardinunoElement = document.getElementById("juno");
    const jardindosElement = document.getElementById("jdos");
    const jardintresElement = document.getElementById("jtres");
    const jardincuatroElement = document.getElementById("jcuatro");
    const jardincincoElement = document.getElementById("jcinco");
    const ventiladorElement = document.getElementById("ventilador");
    const camaraunoElement = document.getElementById("camUno");
    const camaradosElement = document.getElementById("camDos");
    const camaratresElement = document.getElementById("camTres");
    const corunoElement = document.getElementById("corUno");
    const cordosElement = document.getElementById("corDos");
    const cortresElement = document.getElementById("corTres");
    const alarmaElement = document.getElementById("alarma");
    

  
    let textC = ''; //Variable que guardará el comando detectado
    let lastProcessedCommand = ''; // Variable para almacenar el último comando procesado
  
    const leerDatos = () => {
        const apiUrl = "https://662ee83443b6a7dce30dfb95.mockapi.io/comando";
  
        fetch(apiUrl, {
            method: 'GET', // Método HTTP GET para LEER los datos
            headers: {
                'Content-Type': 'application/json' // Especificar el tipo de contenido JSON
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0){
                const ultimo = data[data.length - 1];
                console.log('Ultimo Registro en MockAPI', ultimo);
                
                // Mostrar el resultado en la página
                resultOutput.textContent = "La orden detectada es: " + ultimo.comando;
                  textC = ultimo.comando.toLowerCase();
  
                // Verificar si el nuevo comando es diferente al último comando procesado
                if (ultimo.comando !== lastProcessedCommand) {
                    // Actualizar el último comando procesado
                    lastProcessedCommand = ultimo.comando;
  
                    // Encendido y Apagado del Foco de la recámara.
                    if (ultimo.comando.includes("enciende la recámara")) {
                        document.getElementById('focoRecamaraUno').src = 'FP.png';
                        document.getElementById('focoRecamaraDos').src = 'FP.png';
                        console.log("Recámara Encendida.");
                    } else if (ultimo.comando.includes("apaga la recámara")) {
                        document.getElementById('focoRecamaraUno').src = 'FA.png';
                        document.getElementById('focoRecamaraDos').src = 'FA.png';
                        console.log("Recámara Apagada.");
                    }


                    // Encendido y Apagado de la lampara de la sala.
                    if (ultimo.comando.includes("enciende la sala")) {
                        document.getElementById('sala').src = 'LP.png';
                        console.log("Sala Encendida.");
                    } else if (ultimo.comando.includes("apaga la sala")) {
                        document.getElementById('sala').src = 'LA.png';
                        console.log("Sala Apagada.");
                    } 


                    // Encendido y Apagado de los focos del jardín.
                    if (ultimo.comando.includes("enciende el jardín")) {
                        document.getElementById('juno').src = 'JP.png';
                        document.getElementById('jdos').src = 'JP.png';
                        document.getElementById('jtres').src = 'JP.png';
                        document.getElementById('jcuatro').src = 'JP.png';
                        document.getElementById('jcinco').src = 'JP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga el jardín")) {
                        document.getElementById('juno').src = 'JA.png';
                        document.getElementById('jdos').src = 'JA.png';
                        document.getElementById('jtres').src = 'JA.png';
                        document.getElementById('jcuatro').src = 'JA.png';
                        document.getElementById('jcinco').src = 'JA.png';
                        console.log("Jardín Apagado.");
                    }

                    // Encendido y Apagado del ventilador.
                    if (ultimo.comando.includes("enciende el ventilador")) {
                        document.getElementById('ventilador').src = 'VP.gif';
                        console.log("Ventilador Encendido.");
                    } else if (ultimo.comando.includes("apaga el ventilador")) {
                        document.getElementById('ventilador').src = 'VA.gif';
                        console.log("Ventilador Apagado.");
                    }

                    // Encendido y Apagado de las cámaras.
                    if (ultimo.comando.includes("enciende las cámaras")) {
                        document.getElementById('camUno').src = 'CP.png';
                        document.getElementById('camDos').src = 'CP.png';
                        document.getElementById('camTres').src = 'CP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga las cámaras")) {
                        document.getElementById('camUno').src = 'CA.png';
                        document.getElementById('camDos').src = 'CA.png';
                        document.getElementById('camTres').src = 'CA.png';
                        console.log("Jardín Apagado.");
                    }

                    // Encendido y Apagado de la cámara 1..
                    if (ultimo.comando.includes("enciende la cámara uno")) {
                        document.getElementById('camUno').src = 'CP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga la cámara uno")) {
                        document.getElementById('camUno').src = 'CA.png';
                        console.log("Jardín Apagado.");
                    }
                    
                    // Encendido y Apagado de la cámara 2..
                    if (ultimo.comando.includes("enciende la cámara dos")) {
                        document.getElementById('camDos').src = 'CP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga la cámara dos")) {
                        document.getElementById('camDos').src = 'CA.png';
                        console.log("Jardín Apagado.");
                    }

                    // Encendido y Apagado de la cámara 3..
                    if (ultimo.comando.includes("enciende la cámara tres")) {
                        document.getElementById('camTres').src = 'CP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga la cámara tres")) {
                        document.getElementById('camTres').src = 'CA.png';
                        console.log("Jardín Apagado.");
                    }

                    if (ultimo.comando.includes("enciende la cámara 3")) {
                        document.getElementById('camTres').src = 'CP.png';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("apaga la cámara 3")) {
                        document.getElementById('camTres').src = 'CA.png';
                        console.log("Jardín Apagado.");
                    }

                    // Abrir y cerrar las cortinas
                    if (ultimo.comando.includes("abrir las cortinas")) {
                        document.getElementById('corUno').src = 'CC.gif';
                        document.getElementById('corDos').src = 'CC.gif';
                        document.getElementById('corTres').src = 'CC.gif';
                        console.log("Jardín Encendido.");
                    } else if (ultimo.comando.includes("cierra las cortinas")) {
                        document.getElementById('corUno').src = 'CA.gif';
                        document.getElementById('corDos').src = 'CA.gif';
                        document.getElementById('corTres').src = 'CA.gif';
                        console.log("Jardín Apagado.");
                    }

                    // Sonido
                    if (ultimo.comando.includes("activa la alarma")) {
                        document.getElementById('alarma').src = 'SA.png';
                        document.getElementById('sonidoUno').play(); 
                        console.log("Audio");
                    } else if (ultimo.comando.includes("desactivar la alarma")) {
                        document.getElementById('alarma').src = 'SD.png';
                        document.getElementById('sonidoDos').play(); 
                        console.log("Alarma desactivada.");
                    }
                    

                }
            }
        })
        .catch(error => console.error('Error al obtener registros del MockAPI:', error));
    };
  
    setInterval(leerDatos, 2000);
  });
  