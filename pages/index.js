import Head from 'next/head';
import {
  ChakraProvider,
  Flex,
  Button,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');
  const [hp, setHp] = useState('');

  const handleMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleHp = (event) => {
    setHp(event.target.value);
  };

  const isWhatsAppEnabled = msg.length > 0 && hp.length === 8;

  // https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/?lang=en
  const handleWhatsApp = () => {
    const url = `https://wa.me/65${hp}?text=${msg}`;
    window.open(url, '_blank'); //to open new page
  };

  return (
    <ChakraProvider>
      <Flex w="100%" height="100vh" justifyContent="center" align="center">
        <Stack spacing={4}>
          <Heading>WhatsApp URL Demo</Heading>
          <InputGroup>
            <InputLeftAddon children="+65" />
            <Input
              type="tel"
              placeholder="phone number"
              value={hp}
              onChange={handleHp}
            />
          </InputGroup>

          <Textarea
            value={msg}
            onChange={handleMsg}
            placeholder="type some text here. Doesn't work well with emojis fyi."
            size="sm"
          />

          <Button
            colorScheme="teal"
            size="md"
            disabled={!isWhatsAppEnabled}
            onClick={handleWhatsApp}
          >
            Send me a WhatsApp message
          </Button>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
