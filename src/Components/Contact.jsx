import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
 import {HiOutlineMail} from "react-icons/hi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react'

import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box id="contact" textAlign={"center"} pt="130px" mt={"10"} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,gap:"5px"}}>
    <Heading>Contact</Heading>
    <h4>Submit the form below to get in touch with me!!</h4>
    <FormControl as="form" action="https://getform.io/f/93499645-a07a-4eff-b445-558f862088f6" method="POST" style={{width:"40%",textAlign:"center"}}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input type='text' id="name" name="name" placeholder='Enter Your Name' />
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input type='email' id="email" name="email" placeholder='Enter Your Email'/>
      <FormLabel htmlFor="number">Mobile Number</FormLabel>
      <Input type='number' id="number" name="number"  placeholder='Enter Your Mobile Number' />
      <FormLabel htmlFor="message">Message</FormLabel>
      <Textarea id="message" name="message"  placeholder='Enter Your Message'/>
      <FormHelperText>We'll never share your details.</FormHelperText>
      <Button type="submit" style={{backgroundColor:"skyblue",color:"black",marginTop:"10px"}}>Submit</Button>
    </FormControl>
    
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", width:"50%", gap:"2%",marginTop:"10px" }}>
          <a 
          href="mailto:manjuyadav0514001@gmail.com " >
             <>
            <HiOutlineMail size={60}/>
             </>
          </a>
          <a 
          href='https://www.linkedin.com/in/manju-yadav-16812723b/'
         
          >
             <>
            <FaLinkedin size={50}/>
             </>
          </a>
      
          <a 
          href='https://github.com/manju145'
          >
             <>
            <FaGithub size={50}/>
             </>
          </a>
       

      
    
    </div>
  </Box>
  
  )
}

export default Contact
