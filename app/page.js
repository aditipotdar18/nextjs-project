'use client';
import { Container } from "@mui/material";
import Users from "../components/Users";
import UserForm from "../components/UserForm"
export default function Home() {
  return (
    <Container maxWidth="sm">
      <UserForm/>
      <Users />
    </Container>
  );
}
