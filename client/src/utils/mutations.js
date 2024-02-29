import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signin(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signin(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const CREATE_CHRISTMAS_ORDER = gql`
  mutation createChristmasOrder(
    $firstName: String!
    $lastName: String!
    $email: String!
    
    $numberOfBoxes: Int!
    $specialMessage: String
    
  ) {
    createChristmasOrder(
      firstName: $firstName
      lastName: $lastName
      email: $email
  
      numberOfBoxes: $numberOfBoxes
      specialMessage: $specialMessage
    ) {
      _id
      firstName
      lastName
      email
      
      numberOfBoxes
      specialMessage
      createdAt
    }
  }
`;

export const CREATE_VALENTINES_ORDER = gql`
  mutation createValentinesOrder(
    $firstName: String!
    $lastName: String!
    $email: String!
    
    $numberOfBoxes: Int!
    $specialMessage: String
    
  ) {
    createChristmasOrder(
      firstName: $firstName
      lastName: $lastName
      email: $email
  
      numberOfBoxes: $numberOfBoxes
      specialMessage: $specialMessage
    ) {
      _id
      firstName
      lastName
      email
      
      numberOfBoxes
      specialMessage
      createdAt
    }
  }
`;