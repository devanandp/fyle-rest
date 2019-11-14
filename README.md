# fyle-rest

CURL COMMANDS
API 1 : POST API to generate JWT Tokens

Curl for JWT token generation: curl --header "Content-Type: application/json"  --request POST  https://fyle-rest-interview.herokuapp.com/tokengen --data "{\"username\":\"admin\",\"password\":\"password\"}"

Sample Output :
{"success":true,"message":"Authentication successful!","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU3MTEyNjcyOCwiZXhwIjoxNTcxNTU4NzI4fQ.x_Tn7LLZ6JV5V6NDGQiwG4VL9mjJqhyz50a2pBYNIi0"}
Note : Default value for username and password is set as Username: admin and Password: password. If any other value is passed in those fields, then the output will be :
	{"success":false,"message":"Incorrect username or password"}
Also in the following commands if you want to use the new token generated, replace the new tokens in the place mentioned.

API 2 : GET API to fetch a bank details, given branch IFSC code

1. Without Offset and limit : 

curl -X GET 'https://fyle-rest-interview.herokuapp.com/banks?ifsc=ABHY0065001' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU3MTYzMjY4NywiZXhwIjoxNTcyMDY0Njg3fQ.jEZymeohO52MlhEoYKQgEKWs2XmvzM3661xz151Dm2g'

Sample Output :

[{"name":"ABHYUDAYA COOPERATIVE BANK LIMITED","id":"60","branches":[{"ifsc":"ABHY0065001","bank_id":"60","branch":"RTGS-HO","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"}]}]
Note : Default offset and limit are defined as 0 and 10




2. With Offset and limit : 

curl -X GET 'https://fyle-rest-interview.herokuapp.com/banks?ifsc=ABHY0065001&offset=0&limit=9' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU3MTYzMjY4NywiZXhwIjoxNTcyMDY0Njg3fQ.jEZymeohO52MlhEoYKQgEKWs2XmvzM3661xz151Dm2g’

Sample Output :

[{"name":"ABHYUDAYA COOPERATIVE BANK LIMITED","id":"60","branches":[{"ifsc":"ABHY0065001","bank_id":"60","branch":"RTGS-HO","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"}]}]











API 3 : GET API to fetch a branch details, given bank name and city

1. Without Offset and limit:
curl -X GET 'https://fyle-rest-interview.herokuapp.com/banks?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED&city=MUMBAI' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU3MTYzMjY4NywiZXhwIjoxNTcyMDY0Njg3fQ.jEZymeohO52MlhEoYKQgEKWs2XmvzM3661xz151Dm2g'

Sample Output:
[{"name":"ABHYUDAYA COOPERATIVE BANK LIMITED","id":"60","branches":[{"ifsc":"ABHY0065001","bank_id":"60","branch":"RTGS-HO","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065002","bank_id":"60","branch":"ABHYUDAYA NAGAR","address":"ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065003","bank_id":"60","branch":"BAIL BAZAR","address":"KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065004","bank_id":"60","branch":"BHANDUP","address":"CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065005","bank_id":"60","branch":"DARUKHANA","address":"POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065006","bank_id":"60","branch":"FORT","address":"ABHYUDAYA BANK BLDG., 251, PERIN NARIMAN STREET, FORT, MUMBAI-400001","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065007","bank_id":"60","branch":"GHATKOPAR","address":"UNIT NO 2 & 3, SILVER HARMONY BLDG,NEW MANIKLAL ESTATE, GHATKOPAR (WEST), MUMBAI-400086","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065008","bank_id":"60","branch":"KANJUR","address":"BHANDARI CO-OP. HSG. SOCIETY, KANJUR VILLAGE, KANJUR (EAST), MUMBAI-400078","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065009","bank_id":"60","branch":"NEHRU NAGAR","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065010","bank_id":"60","branch":"PAREL","address":"SHRAMA SAFALYA, 63 G.D.AMBEKAR MARG, PAREL VILLAGE, MUMBAI-400012","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"}]}]
Note : Default offset and limit are defined as 0 and 10
 
2. With Offset and limit : 
curl -X GET 'https://fyle-rest-interview.herokuapp.com/banks?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED&city=MUMBAI&offset=0&limit=5' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU3MTYzMjY4NywiZXhwIjoxNTcyMDY0Njg3fQ.jEZymeohO52MlhEoYKQgEKWs2XmvzM3661xz151Dm2g'

Sample Output:
[{"name":"ABHYUDAYA COOPERATIVE BANK LIMITED","id":"60","branches":[{"ifsc":"ABHY0065001","bank_id":"60","branch":"RTGS-HO","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065002","bank_id":"60","branch":"ABHYUDAYA NAGAR","address":"ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065003","bank_id":"60","branch":"BAIL BAZAR","address":"KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065004","bank_id":"60","branch":"BHANDUP","address":"CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065005","bank_id":"60","branch":"DARUKHANA","address":"POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"}]}]


Key points to be noted :
•	Postman can also be used to fetch the details using API
•	First set of tokens are generated today during deployment (10/15/2019) and will be valid for 5 days


