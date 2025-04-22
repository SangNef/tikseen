const chats = [
  {
    id: 1,
    name: '123123',
    email: '123@gmail.com',
    chatAt: '2025-04-15T12:00:00Z',
    isRead: true,
    lat: 10.762622,
    lon: 106.660172,
    device: {
      ip: '192.168.1.10',
      os: 'Windows',
      version: '11',
      browser: 'Chrome 123.0',
    },
    messages: [
      { sendBy: 'cskh', text: 'Hello, how are you?', timestamp: '2025-04-15T11:50:00Z', status: 'seen' },
      { sendBy: 'user', text: "I'm great, how can I assist you today?", timestamp: '2025-04-15T11:55:00Z' },
      { sendBy: 'cskh', text: 'I need help with my account.', timestamp: '2025-04-15T12:00:00Z', status: 'seen' },
    ],
  },
  {
    id: 2,
    name: '456456',
    email: '456@gmail.com',
    chatAt: '2025-04-14T12:00:00Z',
    isRead: false,
    lat: 21.027763,
    lon: 105.83416,
    device: {
      ip: '192.168.1.25',
      os: 'iOS',
      version: '17',
      browser: 'Safari 17.2',
    },
    messages: [
      { sendBy: 'cskh', text: 'Are you coming to the party?', timestamp: '2025-04-14T11:45:00Z', status: 'seen' },
      { sendBy: 'user', text: 'What time is it?', timestamp: '2025-04-14T11:50:00Z' },
      { sendBy: 'cskh', text: 'It starts at 7 PM.', timestamp: '2025-04-14T11:55:00Z', status: 'sent' },
    ],
  },
  {
    id: 3,
    name: '789789',
    email: '789@gmail.com',
    chatAt: '2025-04-13T12:00:00Z',
    isRead: false,
    lat: 16.047079,
    lon: 108.20623,
    device: {
      ip: '10.0.0.15',
      os: 'Android',
      version: '14',
      browser: 'Chrome Mobile 123.0',
    },
    messages: [
      { sendBy: 'cskh', text: "Don't forget to bring the snacks!", timestamp: '2025-04-13T11:30:00Z', status: 'seen' },
      { sendBy: 'user', text: 'Sure! Any preferences?', timestamp: '2025-04-13T11:45:00Z' },
      { sendBy: 'cskh', text: 'Chips and dip would be great.', timestamp: '2025-04-13T12:00:00Z', status: 'seen' },
    ],
  },
  {
    id: 4,
    name: '101010 LAST CHAT',
    email: '10@gmail.com',
    chatAt: '2025-04-12T12:00:00Z',
    isRead: true,
    lat: 22.396428,
    lon: 114.109497,
    device: {
      ip: '172.16.0.5',
      os: 'macOS',
      version: 'Sonoma',
      browser: 'Safari 17.0',
    },
    messages: [
      { sendBy: 'user', text: "Let's meet at 5 PM.", timestamp: '2025-04-12T11:30:00Z' },
      { sendBy: 'cskh', text: 'Got it, see you then!', timestamp: '2025-04-12T11:45:00Z', status: 'seen' },
    ],
  },
];

export default chats;
