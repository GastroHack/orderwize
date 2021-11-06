<!-- @format -->

# orderwize

prediction tool for hospitality businesses

## getting started

have docker https://docs.docker.com/get-docker/ and docker-compose https://docs.docker.com/compose/install/ installed

make sure you have a .env file that you copied from `.env.sample`

then run `docker-compose up` and navigate to http://0.0.0.0:5000

## how to dev?

point your shell to the client `src/client` folder and run `yarn start to start the react development server` and visit http://0.0.0.0:3000

when you want to see your changes served by python run `yarn build` and visit http://0.0.0.0:5000
