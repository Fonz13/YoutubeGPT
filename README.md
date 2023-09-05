# YoutubeGPT 📺🤖

Ever wanted to chat with Youtube videos? Well, the future is here! 🚀
Just feed the programme with a Youtube URL, and it will generate a transcript of the video. Then, you can chat with the video.

# Instructions
You can either run YoutubeGPT on your own machine, or you can use docker-compose to run it in a container.
## Your Own Machine

### API
1. Go to `api` folder
2. Hope you have everything installed?
3. Run `uvicorn api:app --reload `

### Client
1. Go to `client` folder
2. Run: 
```bash
npm install
npm audit fix
npm start
```

## Docker Compose 🐳

To run the project with docker compose:

1. Have docker and docker-compose installed
2. Run `docker-compose up --d` in the root directory of the project. Now the servers are up and running:
* API: http://localhost:8000
* Client: http://localhost:3000
* How are they communicating? 🤔
3. When done, run `docker-compose down` to stop the containers

# TODO
- [ ] I am currently using the fattest node image to run the client. It is very large, and could probably be changed to an alpine image to reduce the size.
- [ ] Set up nginx to serve the client and the api on the same port. This will make it easier to deploy the project.
- [ ] When developing on *bare metal*, the `--reload` flag was set. Now, changes won't be immidiate. We should investigate how to fix that. Convinience is key. 🔑

# Resources
https://medium.com/@rushikeshnaik779/routers-in-fastapi-tutorial-2-adf3e505fdca
https://fastapi.tiangolo.com/advanced/
