import faker from "faker";

import Message from "../models/Message";
import User from "../models/User";

const MESSAGES_TOTAL = 10;

export default async () => {
  try {
    await Message.deleteMany();
    await User.deleteMany();

    await Array.from({ length: MESSAGES_TOTAL }).map(async () => {
      return await Message.create({ text: faker.lorem.paragraphs(1) });
    });
  } catch (error) {
    throw error;
  }
};
