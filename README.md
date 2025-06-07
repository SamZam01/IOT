# IoT Data Visualization API

Este proyecto implementa una API REST que consume datos de un dispositivo IoT y permite visualizar información de humedad y presión atmosférica mediante gráficos en tiempo real.

## Objetivos

* Consumir datos desde el endpoint público de un dispositivo IoT.
* Exponer una API propia con métodos GET y POST.
* Visualizar los datos usando una interfaz web dinámica.

---

## Tecnologías utilizadas

* Node.js + Express (API)
* Axios (consumo de API externa)
* Chart.js (visualización de datos)
* HTML + JavaScript (frontend)
* Git (control de versiones)

---

## Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/SamZam01/IOT.git
   cd IOT
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   node app.js
   ```

4. Abre el archivo `visualizacion.html` en tu navegador.

---

## Estructura de la API

### GET `/api/data`

* **Descripción:** Consulta el endpoint público externo y devuelve los últimos dos datos.
* **Respuesta esperada:**

  ```json
  [
    {
      "humidity": "47.8",
      "pressure": "1007.3"
    },
    {
      "humidity": "48.1",
      "pressure": "1008.2"
    }
  ]
  ```

---

### POST `/api/visualize`

* **Descripción:** Recibe datos desde el cliente y los reenvía para su visualización.
* **Cuerpo del request:**

  ```json
  [
    {
      "humidity": "48.1",
      "pressure": "1008.2"
    }
  ]
  ```

---

## Visualización

Se utiliza un archivo HTML con `Chart.js` para graficar la humedad y la presión cada 5 segundos.

* Muestra los últimos datos recibidos.
* Gráficos de líneas dinámicos.
* Scroll automático del historial.

---

## Capturas (añadir manualmente)

* Ejemplo de respuesta del GET.
* Captura de POST exitoso.
* Pantalla de visualización de datos.

---

## Estructura del proyecto

```
/project-root
│
├── controllers/
│   └── dataController.js
│
├── services/
│   └── externalAPIService.js
│
├── front/
│   └── visualizacion.html
│
├── app.js
├── package.json
└── README.md
```

---

## Autor

* Nombre: \[Samuel ZAMUDIO]
* Contacto: \[samuelzamudio7@gmail.com]
