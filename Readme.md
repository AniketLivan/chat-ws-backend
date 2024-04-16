# A basic implimentation for a WS server to send message to all connected;
# Procedures to Replicate
# 1. First have multiple clients connected to ws://localhost:3000 via postman or any other client
# 2. Use localhost:3000/send-message to all connected clients to see lists for participants you can check the clients array.
# 3. Swagger docs is present across localhost:3000/docs route
# 4. Plug and play
# 5. we can add limitations to reject how many connections may exist with ws at 1 point.
# 6. A socket implimentations is deployed over https://chatting-qqol.onrender.com/ code availabe on github repo