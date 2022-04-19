Example requests can be found in `requests.http`

**API Endpoints**

* **URL**

  /api/user/:userId/tasks/:password

* **Method:**
  
  `GET`, `POST`
  
*  **URL Params**

   **Required:**
    
    `userId=[integer]`  
    `password=[string]`

* **Data Params**

  `POST`:  
    `name=[string]`  
    `description=[string]`

---

* **URL**

  /api/user/:userId/tasks-complete/:password

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
    
    `userId=[integer]`  
    `password=[string]`

---

* **URL**

  /api/user/:userId/tasks-incomplete/:password

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
    
    `userId=[integer]`  
    `password=[string]`

---

* **URL**

  /api/user/:userId/tasks/:taskId/:password

* **Method:**
  
  `PUT`, `DELETE`
  
*  **URL Params**

   **Required:**
    
    `userId=[integer]`  
    `taskId=[integer]`  
    `password=[string]`