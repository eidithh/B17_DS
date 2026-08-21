const axios = require("axios");
const { expect } = require("chai");

const baseURL = "https://belajar-bareng.onrender.com";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzg3MzI4MTg0LCJleHAiOjE3ODczMzE3ODR9.RpZayY8Xa8qBG_A9imeaeMioWctb0JU0AL1q3liR73Q";

describe("API Automation - Belajar Bareng", function () {

    this.timeout(10000);

    // ========================================
    // 1. GET - LIST USER
    // ========================================
    it("GET - List User", async function () {

        const response = await axios.get(`${baseURL}/api/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Assert 1 - Status Code
        expect(response.status).to.equal(200);

        // Assert 2 - Response Body
        expect(response.data).to.not.be.empty;

    });


    // ========================================
    // 2. POST - ADD USER POSITIVE CASE
    // ========================================
    it("POST - Add User Positive Case", async function () {

        const requestBody = {
            username: "Sample",
            age: 30
        };

        const response = await axios.post(
            `${baseURL}/api/add-user`,
            requestBody,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Assert 1 - Status Code
        expect(response.status).to.equal(201);

        // Assert 2 - Response Body
        expect(response.data).to.not.be.empty;

    });


    // ========================================
    // 3. POST - ADD USER NEGATIVE CASE
    // ========================================
    it("POST - Add User Negative Case", async function () {

        const requestBody = {
            age: 30
        };

        try {

            await axios.post(
                `${baseURL}/api/add-user`,
                requestBody,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            // Test harus gagal jika API menerima data invalid
            expect.fail("API seharusnya menolak request tanpa username");

        } catch (error) {

            // Jangan tangkap AssertionError dari expect.fail()
            if (!error.response) {
                throw error;
            }

            // Assert 1 - Status Code
            expect(error.response.status).to.equal(400);

            // Assert 2 - Response Body
            expect(error.response.data).to.not.be.empty;

        }

    });

});