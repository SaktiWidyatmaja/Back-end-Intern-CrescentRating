# Contact List CRUD API

This is a CRUD (Create, Read, Update, Delete) API for managing a contact list. It allows you to perform operations such as creating a new contact, retrieving contacts, updating contact details, and deleting contacts.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

To get started with the project, follow the instructions below:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Set up the environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:
     ```
     DB_URL=<your-mongodb-connection-url>
     PORT=<port-number>
     ```
4. Start the server: `npm start`

## API Endpoints

### GET /contact-list

Retrieves all contacts in the contact list.

**Response**
- Status Code: 200 (OK)
- Response Body: JSON array containing all contacts

### GET /contact-list/:id

Retrieves a specific contact by its ID.

**Parameters**
- `id`: The ID of the contact

**Response**
- Status Code: 200 (OK)
- Response Body: JSON object representing the contact

### POST /contact-list

Creates a new contact in the contact list.

**Request Body**
- `firstName` (required): First name of the contact
- `lastName` (required): Last name of the contact
- `numberPhone` (required): Phone number of the contact
- `address` (required): Address of the contact

**Response**
- Status Code: 201 (Created)
- Response Body: JSON object representing the created contact

### PATCH /contact-list/:id

Updates a specific contact by its ID.

**Parameters**
- `id`: The ID of the contact

**Request Body**
- Any of the contact properties that need to be updated

**Response**
- Status Code: 200 (OK)
- Response Body: JSON object representing the updated contact

### DELETE /contact-list/:id

Deletes a specific contact by its ID.

**Parameters**
- `id`: The ID of the contact

**Response**
- Status Code: 200 (OK)
- Response Body: JSON object with a message indicating the contact has been deleted

## Error Handling

If there are any errors during the API operations, the API will respond with an appropriate error status code and a JSON object containing an error message.