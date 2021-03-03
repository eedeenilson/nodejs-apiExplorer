define({ "api": [
  {
    "type": "get",
    "url": "/user",
    "title": "Todos los usuarios.",
    "name": "GetAllUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre completo del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña encriptada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Fecha en que fue registrado el usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Identificador del usuario que ha creado el nuevo usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Fecha de la ultima actualización del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Identificador del usuario que ha realizado la ultima modificación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\n     \"id\": 7,\n     \"name\": \"John Doe\",\n     \"username\": \"doe777\",\n     \"password\": \"$2b$15$0FIdTSCNFu427p6kYP0n4UXmYtep4a57if1TE5ssqxY7Ulm\",\n     \"email\": \"doe777@doe.com\",\n     \"createdAt\": \"2020-09-26T21:00:12.000Z\",\n     \"createdBy\": 1,\n     \"updatedAt\": \"2020-09-26T21:39:50.000Z\",\n     \"updatedBy\": \"2020-09-26T21:39:50.000Z\"\n   },\n   {\n     \"id\": 7,\n     \"name\": \"John Doe\",\n     \"username\": \"doe777\",\n     \"password\": \"$2b$15$0FIdTSCNFu427p6kYP0n4UXmYtep4a57if1TE5ssqxY7Ulm\",\n     \"email\": \"doe777@doe.com\",\n     \"createdAt\": \"2020-09-26T21:00:12.000Z\",\n     \"createdBy\": 1,\n     \"updatedAt\": \"2020-09-26T21:39:50.000Z\",\n     \"updatedBy\": \"2020-09-26T21:39:50.000Z\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>No se pudieron obtener los registros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"InternalError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Información de usuario.",
    "name": "GetOneUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre completo del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña encriptada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Fecha en que fue registrado el usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Identificador del usuario que ha creado el nuevo usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Fecha de la ultima actualización del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Identificador del usuario que ha realizado la ultima modificación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\n     \"id\": 7,\n     \"name\": \"John Doe\",\n     \"username\": \"doe777\",\n     \"password\": \"$2b$15$0FIdTSCNFu427p6kYP0n4UXmYtep4a57if1TE5ssqxY7Ulm\",\n     \"email\": \"doe777@doe.com\",\n     \"createdAt\": \"2020-09-26T21:00:12.000Z\",\n     \"createdBy\": 1,\n     \"updatedAt\": \"2020-09-26T21:39:50.000Z\",\n     \"updatedBy\": \"2020-09-26T21:39:50.000Z\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>El usuario no fue encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"InternalError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Crear nuevo usuario.",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre completo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Identificador del usuario que ha creado el nuevo usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"name\": \"John Doe\",\n     \"username\": \"doe777\",\n     \"password\": \"contraseniasegura\",\n     \"email\": \"doe777@doe.com\",\n     \"createdBy\": 1\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>El usuario no fue creado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"InternalError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Edita usuario.",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre completo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Rol del usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "urlPhoto",
            "description": "<p>URL donde se almacena la foto del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Identificador del usuario que ha realizado la ultima modificación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\n     \"name\": \"John Doe\",\n     \"email\": \"doe777@socialinnovatech.com\",\n     \"urlPhoto\": url,\n     \"role\": 1,\n     \"updatedBy\": 1\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>El usuario no fue creado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"InternalError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Verificar credenciales.",
    "name": "VerifyUserCredentials",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña encriptada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"success\": true,\n     \"message\": \"Authentication successful!\",\n     \"user\": [],\n     \"token\": \"0.xfqPWID-Mgl3Yr8VFRadNAR6IlS4n-UDs1fHrk7S0Tk\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>El usuario no fue encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"InternalError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  }
] });
