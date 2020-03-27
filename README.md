# electroventory_fe
Electroventory Front End



## Installation
Clone the repository
```console
git clone https://github.com/electroventory/electroventory_fe.git
```

Install the dependencies
```console
yarn install
```

## Running it locally
This will start up the server on port 3000
```console
yarn start
```

## Running it from Docker
Build the image
```console
sudo docker build -t electroventory_fe .
```

Run the container based on the image already created.
```console
sudo docker run --name electro_fe_container -p 3000:3000 -it electroventory_fe
```