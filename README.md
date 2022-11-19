# Pawder
### Hack Reactor MVP

![pawder-demo](https://github.com/Tribalash/Pawder/blob/master/assets/pawderDemo.gif)


## Table of Contents

1. [Description](#description)
2. [Technical Overview](#technical-overview)
3. [Usage](#usage)
4. [Requirements](#requirements)
5. [Development](#development)
6. [Production](#production)
7. [Testing](#testing)

## Description

There are thousands of pets in shelters that need a loving home. The aim of Pawder is to quickly allow users to browse near by pets that are in need of adoption. These pets are saved to a favorites list where you can find out other information about the pet, which shelter it is at, and view the pet on an affiliates detailed page. 

This currently represnts version 1.0, version 2.0 is in construction and will compleatly rework the app to include many more features than this proof of concept.

## Technical Overview

Full-stack app using React, Express, MongoDB and Node.js. Version two will be built leveraging Google's Firebase product to help supplement the backend.

## Usage

In order to run the project locally please read [Requirements](#requirements) section for instructions setting up a local .env and for installing dependencies. 

## Requirements

Node.js - version 16.0+

### Configuring .env

To run locally the project needs a configured .env. In the projects root you will find a file titled config.env. Add your specific information here

### Installing Dependencies
Project has a package.json for both the front and backend so you will need to navigate to each and run
> 1. Run ```npm install``` to install all required dependencies

## Development

Setting up the development environment:
> 1. Ensure dependencies are installed.
> 2. Navigate to backend, to run both server-dev and build-dev with watch flags, run ```npm run start-dev```
> 3. Navigate to localhost port 8000, http://localhost:8000

## Production

Creating production build:
