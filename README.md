# Realtime Messenger

## Overview

This is a webapp I created myself to learn more about websockets and how to connect two different clients to each other. It is a basic text messaging app where you can send messages.

<p align="center">
  <img src="text-messanger-preview.png" />
</p>

## Features

- **Simplistic Frontend Design**: Easy to use with a simple chatlog and the ability to send messages
- **Realtime Messaging**: Utilizes websockets to send and receive messages in realtime

## Tech Stack
### Frontend
1. React
2. CSS
3. HTML
4. JavaScript
5. Tailwind

### Backend
1. Javascript
2. WS

## Requirements

You can run the setup.sh script to get the webapp quickly running. Note that the backend runs on port 8080 and the two frontend instances run on port 3000 and 3001 respectively.

```bash
bash setup.sh
```

As this runs in the background, you can use the shutdown.sh script to shutdown the proceses on these ports

```bash
bash shutdown.sh
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
