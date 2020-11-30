import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './CSS/Contact.css';

export default function Contact(){
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');

    function validateForm() {
        //set validation for name, username, phone
        return name.length > 0 && userName.length > 0 && phone.length >0;
    }
    
}