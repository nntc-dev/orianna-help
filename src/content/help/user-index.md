---
title: Usuarios
module: Seguridad
screen: usuarios
version: 1.0
updated: 2026-09-22
---

# Usuarios

Esta pantalla permite administrar los **usuarios** que tienen acceso al sistema, consultar su información, asignarles un rol y establecer el alcance de los permisos relacionados con la información que pueden consultar.

## ¿Para qué sirve?

La pantalla de **Usuarios** permite llevar el control de las cuentas de acceso al sistema.

Desde esta pantalla es posible:

* Consultar los usuarios registrados.
* Identificar el rol asignado a cada usuario.
* Crear nuevos usuarios.
* Modificar la información de un usuario.
* Activar o desactivar el acceso de un usuario.
* Restablecer la contraseña de un usuario.
* Definir el alcance de acceso por razón social, ubicación, departamento y periodo de pago.
* Indicar si el usuario cuenta con **Modificación maestra**.
* Exportar la información de los usuarios a Excel.

## ¿Cómo se utiliza?

Al ingresar a la pantalla se muestra una lista de los usuarios registrados.

La información disponible es:

* **Usuario:** nombre utilizado para iniciar sesión.
* **Correo electrónico:** correo asociado al usuario.
* **Nombre para mostrar:** nombre que se muestra dentro del sistema.
* **Activo:** indica si el usuario tiene acceso al sistema.
* **2FA:** indica si el usuario tiene habilitada la autenticación de dos factores.
* **Rol de usuario:** rol asignado al usuario.

Para localizar un usuario, se pueden utilizar los campos de consulta de **Roles** y **Usuarios**.

## Acciones disponibles

### Agregar usuario

Para crear un nuevo usuario:

1. Selecciona el botón **Agregar** (+).
2. Captura el **Usuario**.
3. Captura el **Correo electrónico**.
4. Captura el **Nombre para mostrar**.
5. Selecciona el **Rol de usuario**.
6. Selecciona el **Empleado**, cuando corresponda.
7. Configura los permisos de acceso.
8. Selecciona **Guardar**.

En la sección **Permisos** se pueden establecer las siguientes opciones:

* **Todas las razones sociales:** permite indicar que el usuario tenga acceso a todas las razones sociales.
* **Todas los departamentos:** permite indicar que el usuario tenga acceso a todos los departamentos.
* **Todas las ubicaciones:** permite indicar que el usuario tenga acceso a todas las ubicaciones.
* **Todas los periodos de pago:** permite indicar que el usuario tenga acceso a todos los periodos de pago.
* **Modificación maestra:** permite indicar que el usuario cuenta con este tipo de acceso.

Al crear un usuario, el sistema valida que el **Usuario**, el **Correo electrónico** y, cuando se haya seleccionado, el **Empleado**, no estén registrados previamente en otro usuario.

### Editar usuario

Para modificar un usuario:

1. Localiza el usuario que deseas modificar.
2. Selecciona el botón **Editar**.
3. Modifica la información correspondiente.
4. Revisa la configuración de **Permisos**.
5. Selecciona **Guardar**.

La información que puede modificarse incluye:

* **Usuario**
* **Correo electrónico**
* **Nombre para mostrar**
* **Rol de usuario**
* **Empleado**
* **Activo**
* Opciones de **Permisos**

El sistema valida que el nombre de usuario, correo electrónico y empleado no estén relacionados con otro usuario cuando se realicen cambios que puedan generar duplicados.

### Activar o desactivar usuario

Para cambiar el acceso de un usuario:

1. Localiza el usuario.
2. Selecciona el botón de estado correspondiente.
3. Revisa el mensaje de confirmación.
4. Selecciona **Activar** o **Desactivar**, según corresponda.

Cuando un usuario se encuentra **desactivado**, deja de tener acceso al sistema.

### Restablecer contraseña

Para restablecer la contraseña de un usuario:

1. Localiza el usuario.
2. Selecciona el botón **Restablecer contraseña**.
3. Selecciona una de las opciones disponibles:
   * **Enviar un correo electrónico**
   * **Crear un vínculo**
4. Selecciona **Aceptar**.

#### Enviar un correo electrónico

Cuando se selecciona esta opción, el usuario recibe un correo electrónico con las indicaciones para restablecer su contraseña.

Esta opción requiere que exista una configuración de servidor de correo disponible.

#### Crear un vínculo

Cuando se selecciona esta opción, el sistema genera un vínculo para restablecer la contraseña.

El vínculo:

* Es de un solo uso.
* Tiene una duración de **15 minutos**.
* Debe copiarse y compartirse directamente con el usuario.
* No podrá volver a consultarse después de cerrar la ventana.

### Exportar usuarios

Para obtener la información de los usuarios en Excel:

1. Selecciona la opción **Excel** de la tabla.
2. El sistema genera el archivo con la información disponible de los usuarios.

## Consideraciones

El acceso a las acciones de agregar, modificar y administrar usuarios depende de los permisos asignados al usuario.

Un usuario debe tener un **Rol de usuario** asignado.

Las opciones de acceso por **Razón social**, **Ubicación**, **Departamento** y **Periodo de pago** permiten definir el alcance de la información disponible para cada usuario.

Cuando no existe una configuración de servidor de correo disponible, el sistema muestra una advertencia y la opción de restablecimiento mediante correo electrónico no está disponible.

---
Versión 1.0 · Última actualización: Septiembre 2026