export default function ApiDoc() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          MuchiAPI Documentación
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Autenticación
          </h2>
          <p className="mb-4 text-gray-600">
            Esta sección cubre las rutas de autenticación de usuarios. Los
            usuarios pueden registrarse, iniciar y cerrar sesión en sus cuentas.
            Al iniciar sesión exitosamente, ellos pueden gestionar sus tareas.
          </p>

          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">POST /api/users/login</h3>
            <p className="text-gray-600">
              Inicia sesión como usuario registrado utilizando sus credenciales
              (usuario y contraseña). Devuelve un token necesario para la
              autenticación. rutas
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo del cuerpo de la petición.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "username": "nombreUsuario",\n  "password_hash": "password1234"\n}'
              }
            </pre>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "message": "Login exitoso",\n  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTZiNWZmMzQ..."\n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">POST /api/users/register</h3>
            <p className="text-gray-600">
              Registra un nuevo usuario con un nombre y contraseña. Esto crea
              una cuenta que se puede utilizar para administrar tareas después
              de iniciar sesión.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo del cuerpo de la petición.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "username": "JhoochiDev",\n  "password_hash": "password1234"\n}'
              }
            </pre>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n "message": "Usuario creado correctamente", \n "data": { \n   "id": "3e256ca0-f0fb-4284-9a4a-45cff3c7da74", \n   "username": "JhoochiDev", \n   "created_at": "2024-08-22T01:57:16.000Z" \n  } \n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">POST /api/users/logout</h3>
            <p className="text-gray-600">
              Cierra la sesión del usuario autenticado, invalidando su token de
              sesión.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {'{\n "message": "Sesión cerrada"  \n}'}
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Gestion de tareas
          </h2>
          <p className="mb-4 text-gray-600">
            Una vez autenticados, los usuarios pueden administrar sus tareas
            utilizando lo siguiente rutas. Las tareas se pueden crear,
            actualizar, recuperar o eliminar.
          </p>

          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">GET /api/tasks</h3>
            <p className="text-gray-600">
              Recupera todas las tareas creadas por el usuario autenticado.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{ \n  "data":\n  [\n    {\n       "id": 14,\n       "user_id": "3e256ca0-f0fb-4284-9a4a-45cff3c7da74",\n       "title": "Ir al cine",\n       "description": "Ver la película El Último Susurro a las 7:00 PM en el cine local. No olvidar comprar las entradas con anticipación.",\n       "status": "pentiende",\n       "created_at": "2024-08-22T02:14:07.000Z",\n       "updated_at": "2024-08-22T02:14:07.000Z"\n    },\n    { \n       "id": 15,\n       "title": "Semana de examenes",\n       "description": "Esta semana entro a examenes, necesito estudiar los temas de (Algebra, Aritmética y Trigonometría).",\n       "status": "completado",\n       "created_at": "2024-08-22T02:19:44.000Z",\n       "updated_at": "2024-08-22T02:19:44.000Z"\n    }\n  ]\n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">GET /api/tasks/:id</h3>
            <p className="text-gray-600">
              Obtiene una tarea específica por su ID. Útil para ver los
              detalles. de una sola tarea.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "id": 15,\n  "user_id": "3e256ca0-f0fb-4284-9a4a-45cff3c7da74",\n  "title": "Examen final de matemática",\n  "description": "La semana pasada hice mi última prueba, me fue muy bien, pude aprovar el curso.",\n  "status": "completado","created_at": "2024-08-22T02:19:44.000Z",\n  "updated_at": "2024-08-22T02:19:44.000Z"\n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">POST /api/tasks</h3>
            <p className="text-gray-600">
              Crea una nueva tarea con un título y una descripción. La tarea
              será asociado con el usuario autenticado.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo del cuerpo de la petición.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "title": "Semana de examenes",\n  "description": "Esta semana entro a examenes, necesito estudiar los temas de (Algebra, Aritmética y Trigonometría).",\n  "status": "En proceso"\n}'
              }
            </pre>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "message": "Tarea creada correctamente",\n  "data": {\n    "id": 15,\n    "user_id": "3e256ca0-f0fb-4284-9a4a-45cff3c7da74",\n    "title": "Semana de examenes",\n    "description": "Esta semana entro a examenes, necesito estudiar los temas de (Algebra, Aritmética y Trigonometría).",\n    "status": "En proceso",\n    "created_at": "2024-08-22T02:14:07.000Z",\n    "updated_at": "2024-08-22T02:14:07.000Z"\n  }\n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">PATCH /api/tasks/:id</h3>
            <p className="text-gray-600">
              Actualiza una tarea existente con un nuevo título o descripción.
              la tarea El ID debe especificarse en la URL.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {
                '{\n  "title": "Examen final de matemática",\n  "description": "La semana pasada hice mi última prueba, me fue muy bien, pude aprovar el curso.",\n  "status": "completado"\n}'
              }
            </pre>
          </div>

          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <h3 className="text-xl font-semibold">DELETE /api/tasks/:id</h3>
            <p className="text-gray-600">
              Elimina una tarea existente especificada por su ID. Una vez
              eliminado, la tarea no se puede recuperar.
            </p>
            <p className="text-sm italic text-gray-500">
              * Autenticación requerida.
            </p>
            <p className="mt-2 font-mono bg-gray-50 p-2 text-sm rounded">
              Ejemplo de la respuesta de la API.
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md text-sm overflow-auto">
              {'{\n  "message": "Tarea eliminada correctamente"\n}'}
            </pre>
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-10">
          <p>Api de gestión de tareas - © 2024</p>
        </footer>
      </div>
    </div>
  );
}
