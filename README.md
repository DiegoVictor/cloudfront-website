# CloudFront Website
[![serverless](https://img.shields.io/badge/serverless-2.72.2-FD5750?style=flat-square&logo=serverless)](https://www.serverless.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://raw.githubusercontent.com/DiegoVictor/cloudfront-website/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Chooses a random response from a pre defined list and show it on the screen, but the main goal of this project is to host the website on AWS CloudFront.

![Demo](https://raw.githubusercontent.com/DiegoVictor/cloudfront-website/main/screenshots/demo.gif)

## Table of Contents
* [Requirements](#requirements)
* [Deploy](#deploy)

# Requirements
* Node.js ^16.3.2
* Serveless Framework 2.72.2
* AWS Account
  * [CloudFront](https://aws.amazon.com/pt/cloudfront/)
* [Serverless Components](https://github.com/serverless/components)

> Serverless framework 3 is not working properly with components this is why you should use the lastest version 2

# Deploy
To deploy it:
```
$ sls deploy
```
![Deploy](https://raw.githubusercontent.com/DiegoVictor/cloudfront-website/main/screenshots/deploy.gif)
