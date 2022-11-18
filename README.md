# API SPEC

-   **User**

    -   **Login User**
        Method : POST
        Endpoint : `/api/user/auth/login`
        Body :

        ```JSON
        {
            "email" : "string",
            "password" : "string",
        }
        ```

        Response :

        ```json
        {
        	"status": "number",
        	"message": "string",
        	"token": "string"
        }
        ```

    -   **Register User**

        Method : POST
        Endpoint : `/api/user/auth/register`
        Body :

        ```json
        {
        	"email": "string",
        	"password": "string",
        	"contact": "string",
        	"confirmPassword": "string"
        }
        ```

        Response :

        ```json
        {
        	"status": "number",
        	"message": "string",
        	"data": {
        		"_id": "ObjectId, unique",
        		"email": "string",
        		"password": "string",
        		"contact": "string"
        	}
        }
        ```

    -   **Logout User**

        Method : GET
        Endpoint : `/api/user/auth/logout`
        Header :

        ```json
        {
        	"authorization": "Bearer {{TOKEN_JWT}}"
        }
        ```

        Response :

        ```json
        {
        	"status": "number",
        	"message": "string"
        }
        ```

    -   **Informasi Lowongan Pekerjaan**

        -   **Read All Loker**

            Method: GET
            Endpoint : `/api/user/loker`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": [
            		{
            			"_id": "ObjectId, unique",
            			"name": "string",
            			"desc": "string",
            			"contact": "string",
            			"image": "string",
            			"createdAt": "date",
            			"updatedAt": "date"
            		}
            	]
            }
            ```

        -   **Read Detail Loker**

            Method: GET
            Endpoint : `/api/user/loker/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

    -   **Informasi Beasiswa Pendidikan**

        -   **Read All Beasiswa**
            Method: GET
            Endpoint : `/api/user/beasiswa`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": [
            		{
            			"_id": "ObjectId, unique",
            			"name": "string",
            			"desc": "string",
            			"contact": "string",
            			"kuota": "integer",
            			"image": "string",
            			"createdAt": "date",
            			"updatedAt": "date"
            		}
            	]
            }
            ```

        -   **Read Detail Beasiswa**

            Method: GET
            Endpoint : `/api/user/beasiswa/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"kuota": "integer",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

    -   **Pelaporan Masalah**

        -   **Create Laporan**
            Method: POST
            Endpoint : `/api/user/lapor`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"_id": "ObjectId, unique",
            	"title": "string",
            	"desc": "string",
            	"status": "int",
            	"user": {
            		"name": "String",
            		"contact": "String"
            	}
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"title": "string",
            		"desc": "string",
            		"status": "int",
            		"user": {
            			"name": "String",
            			"contact": "String"
            		}
            	}
            }
            ```

        -   **Update Laporan**

            Method: PUT
            Endpoint : `/api/user/lapor/:_id`

            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"_id": "ObjectId, unique",
            	"title": "string",
            	"desc": "string",
            	"status": "int",
            	"user": {
            		"name": "String",
            		"contact": "String"
            	}
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"title": "string",
            		"desc": "string",
            		"status": "int",
            		"user": {
            			"name": "String",
            			"contact": "String"
            		}
            	}
            }
            ```

        -   **Read All Laporan**

            Method: GET
            Endpoint : `/api/user/lapor`

            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response :

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": [
            		{
            			"_id": "ObjectId, unique",
            			"title": "string",
            			"desc": "string",
            			"status": "int",
            			"user": {
            				"name": "String",
            				"contact": "String"
            			}
            		}
            	]
            }
            ```

        -   **Read Detail Laporan**

            Method: GET
            Endpoint : `/api/user/lapor/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response :

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"title": "string",
            		"desc": "string",
            		"status": "int",
            		"user": {
            			"name": "String",
            			"contact": "String"
            		}
            	}
            }
            ```

-   **Admin**

    -   **Login Admin**
        Method : POST
        Endpoint : `/api/admin/auth/login`

        Body :

        ```json
        {
        	"email": "string",
        	"password": "string"
        }
        ```

        Response :

        ```json
        {
        	"status": "number",
        	"message": "string",
        	"token": "string"
        }
        ```

    -   **Logout User**

        Method : GET
        Endpoint : `/api/user/auth/logout`
        Header :

        ```json
        {
        	"authorization": "Bearer {{TOKEN_JWT}}"
        }
        ```

        Response :

        ```json
        {
        	"status": "number",
        	"message": "string"
        }
        ```

    -   **Informasi Lowongan Pekerjaan**

        -   **Create Loker**

            Method : POST
            Endpoint : `/api/admin/loker`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"_id": "ObjectId, unique",
            	"name": "string",
            	"desc": "string",
            	"contact": "string",
            	"image": "string"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Update Loker**

            Method : PUT
            Endpoint : `/api/admin/loker/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"name": "string",
            	"desc": "string",
            	"contact": "string",
            	"image": "string"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Read All Loker**

            Method: GET
            Endpoint : `/api/admin/loker`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": [
            		{
            			"_id": "ObjectId, unique",
            			"name": "string",
            			"desc": "string",
            			"contact": "string",
            			"image": "string",
            			"createdAt": "date",
            			"updatedAt": "date"
            		}
            	]
            }
            ```

        -   **Read Detail Loker**

            Method: GET
            Endpoint : `/api/admin/loker/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Delete Loker**

            Method : DELETE
            Endpoint : `/api/admin/loker/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string"
            }
            ```

    -   **Informasi Beasiswa Pendidikan**

        -   **Create Beasiswa**

            Method : POST
            Endpoint : `/api/admin/beasiswa`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"_id": "ObjectId, unique",
            	"name": "string",
            	"desc": "string",
            	"contact": "string",
            	"kuota": "integer",
            	"image": "string"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"kuota": "integer",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Update Beasiswa**

            Method : PUT
            Endpoint : `/api/admin/beasiswa/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Body :

            ```json
            {
            	"name": "string",
            	"desc": "string",
            	"contact": "string",
            	"kuota": "integer",
            	"image": "string"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"kuota": "integer",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Read All Beasiswa**

            Method: GET
            Endpoint : `/api/admin/beasiswa`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": [
            		{
            			"_id": "ObjectId, unique",
            			"name": "string",
            			"desc": "string",
            			"contact": "string",
            			"kuota": "integer",
            			"image": "string",
            			"createdAt": "date",
            			"updatedAt": "date"
            		}
            	]
            }
            ```

        -   **Read Detail Beasiswa**

            Method: GET
            Endpoint : `/api/admin/beasiswa/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"name": "string",
            		"desc": "string",
            		"contact": "string",
            		"kuota": "integer",
            		"image": "string",
            		"createdAt": "date",
            		"updatedAt": "date"
            	}
            }
            ```

        -   **Delete Beasiswa**

            Method : DELETE
            Endpoint : `/api/admin/beasiswa/:_id`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response:

            ```json
            {
            	"status": "number",
            	"message": "string"
            }
            ```

    -   **Pelaporan Masalah**

        -   **Read All Laporan**

            Method: GET
            Endpoint : `/api/admin/lapor`
            Header :

            ```json
            {
            	"authorization": "Bearer {{TOKEN_JWT}}"
            }
            ```

            Response :

            ```json
            {
                "status" : "number",
                "message" : "string",
                "data" : [{
                    "_id" : "ObjectId, unique",
                    "title" : "string",
                    "desc" : "string",
                    "status" : "int",
                    "user" : {
                    "name" : "String",
                    "contact" : "String",
                    }
                }]
                    "title" : "string",
                    "desc" : "string",
                    "status" : "int",
                    "user" : {
                    "name" : "String",
                    "contact" : "String",
                    }
            }
            ```

        -   **Read Detail Laporan**

            Method: GET
            Endpoint : `/api/admin/lapor/:_id`
            Response :

            ```json
            {
            	"status": "number",
            	"message": "string",
            	"data": {
            		"_id": "ObjectId, unique",
            		"title": "string",
            		"desc": "string",
            		"status": "int",
            		"user": {
            			"name": "String",
            			"contact": "String"
            		}
            	}
            }
            ```
